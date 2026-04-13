import { navigateTo, appState } from '../main.js';
import { generateRandomQuestion, renderMath, adjustMathFontSize } from '../data/questions.js';

const playState = {
    deck: [],
    index: 0,
    score: 0,
    errors: 0,
    totalAttempted: 0,
    elapsedTime: 0,
    startTime: 0,
    thisIsRandom: true
};

export function initChrono(appContainer, data = null) {
    if (data) {
        playState.thisIsRandom = data.parameters?.isRandom ?? true;
        startCountdown(appContainer);
    } else {
        renderSettings(appContainer);
    }
}

// --- VUE 1 : PARAMÈTRES ---
function renderSettings(appContainer) {
    appContainer.innerHTML = `
        <section class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">Mode Chrono</h2>
            
            <p class="text-center text-gray-600 dark:text-gray-400 mb-8">
                Répondez à toutes les questions sélectionnées le plus vite possible. 
                En cas d'erreur, la question est régénérée !
            </p>

            <div class="mb-10 flex flex-col items-center">
                <span class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Ordre des questions</span>
                <div class="flex gap-6 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <label class="flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                        <input type="radio" name="order" value="seq" class="form-radio text-blue-600 w-5 h-5">
                        <span class="text-gray-800 dark:text-gray-200 font-medium">Dans l'ordre</span>
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                        <input type="radio" name="order" value="rand" class="form-radio text-purple-600 w-5 h-5" checked>
                        <span class="text-gray-800 dark:text-gray-200 font-medium">Aléatoire</span>
                    </label>
                </div>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
                <button id="back-btn" class="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 font-bold py-3 px-4 rounded-lg transition">
                    <i class="fas fa-arrow-left mr-2"></i>Retour
                </button>
				<button id="start-btn" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition">
                    <i class="fas fa-play mr-2"></i>COMMENCER
                </button>
            </div>
        </section>
    `;

    appContainer.querySelector('#back-btn').addEventListener('click', () => navigateTo('order'));
    appContainer.querySelector('#start-btn').addEventListener('click', () => {
        playState.thisIsRandom = appContainer.querySelector('input[name="order"]:checked').value === 'rand';
        startCountdown(appContainer);
    });
}

// --- VUE 2 : COMPTE À REBOURS ---
function startCountdown(appContainer) {
    appContainer.innerHTML = `
        <div class="flex items-center justify-center h-[60vh]">
            <div id="countdown-num" class="text-9xl font-black text-blue-600 animate-pulse">3</div>
        </div>
    `;
    
    let count = 3;
    const num = appContainer.querySelector('#countdown-num');
    const interval = setInterval(() => {
        count--;
        if (count > 0) num.textContent = count;
        else if (count === 0) num.textContent = "GO !";
        else {
            clearInterval(interval);
            startGame(appContainer);
        }
    }, 1000);
}

// --- VUE 3 : JEU ---
function startGame(appContainer) {
    playState.deck = [...appState.selectedQuestions];
    if (playState.thisIsRandom) {
        playState.deck.sort(() => Math.random() - 0.5);
    }
    
    playState.index = 0;
    playState.score = 0;
    playState.errors = 0;
    playState.totalAttempted = 0;
    playState.elapsedTime = 0;
    playState.startTime = Date.now();

    appContainer.innerHTML = `
        <div class="flex flex-col items-center max-w-3xl mx-auto">
            <div class="w-full flex justify-between items-center mb-4 px-4">
                <div class="text-gray-500 font-bold">Progression: <span id="progress-text">1</span> / ${playState.deck.length}</div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow px-6 py-2 border-2 border-blue-500 flex items-center space-x-3">
                    <i class="fas fa-stopwatch text-2xl text-blue-500"></i>
                    <span id="digital-timer" class="text-3xl font-mono font-bold text-gray-800 dark:text-white">00:00</span>
                </div>
            </div>

            <div class="w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 min-h-[400px] flex flex-col relative overflow-hidden">
                <div id="penalty-flash" class="absolute inset-0 bg-red-500/10 opacity-0 pointer-events-none transition-opacity duration-300"></div>
                <div class="text-sm font-semibold text-blue-500 dark:text-blue-400 mb-2 uppercase tracking-wide text-center" id="game-category-badge">Catégorie</div>
                <div id="game-question" class="my-auto text-xl md:text-2xl text-center text-gray-800 dark:text-gray-100 pt-4"></div>
                <div id="game-options" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"></div>
            </div>

            <div class="mt-8">
                <button id="quit-game" class="bg-gray-300 hover:bg-red-500 text-gray-700 hover:text-white dark:bg-gray-700 dark:hover:bg-red-600 dark:text-gray-300 font-bold py-2 px-6 rounded-full shadow transition duration-300 flex items-center group">
                    <i class="fas fa-circle-xmark mr-2 text-gray-500 group-hover:text-white transition-colors"></i>Abandonner
                </button>
            </div>
        </div>
    `;

    appContainer.querySelector('#quit-game').addEventListener('click', endGame);
    
    appState.activeTimer = setInterval(() => {
        playState.elapsedTime = Math.floor((Date.now() - playState.startTime) / 1000);
        appContainer.querySelector('#digital-timer').textContent = formatTime(playState.elapsedTime);
    }, 1000);

    loadGameQuestion(appContainer);
}

function loadGameQuestion(appContainer) {
    const card = playState.deck[playState.index];
    const data = generateRandomQuestion(card.category, card.indQ);
    
    document.getElementById('game-category-badge').textContent = card.category;
    document.getElementById('progress-text').textContent = (playState.index + 1);
    
    appContainer.querySelector('#game-question').innerHTML = (typeof data.question === 'string') ? data.question : data.question.html;
    if (data.question.render) setTimeout(() => data.question.render('jxgbox-q'), 50);
    
    const optCont = appContainer.querySelector('#game-options');
    optCont.innerHTML = '';
    
    const renderQueue = [];
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "quiz-option-btn rounded-lg border-2 border-blue-100 dark:border-blue-800 bg-gray-50 dark:bg-gray-700/50 text-center font-medium text-gray-700 dark:text-gray-200 select-none overflow-hidden relative flex items-center justify-center min-h-[80px]";
        
        if (opt.isGraph) {
            const uid = `opt-g-${idx}`;
            btn.className += " h-40 p-1";
            btn.innerHTML = `<div id="${uid}" class="w-full h-full pointer-events-none"></div>`;
            if (typeof opt.render === 'function') renderQueue.push(() => opt.render(uid));
        } else {
            btn.className += " math-option-container p-4";
            btn.innerHTML = `<span class="math-content">${opt.text}</span>`;
        }

        btn.onclick = () => {
            optCont.querySelectorAll('button').forEach(b => b.disabled = true);
            handleAnswer(opt.isCorrect, btn, appContainer);
        };
        optCont.appendChild(btn);
    });

    renderMath(appContainer);
    setTimeout(() => {
        renderQueue.forEach(f => f());
        renderMath(appContainer);
        adjustMathFontSize();
    }, 50);
}

function handleAnswer(isCorrect, btn, appContainer) {
    playState.totalAttempted++;

    if (isCorrect) {
        btn.classList.add('quiz-correct');
        playState.score++;
        playState.index++;
        
        setTimeout(() => {
            if (playState.index >= playState.deck.length) {
                endGame();
            } else {
                loadGameQuestion(appContainer);
            }
        }, 400);
    } else {
        playState.errors++;
        btn.classList.add('quiz-wrong');
        
        // Flash rouge
        const flash = appContainer.querySelector('#penalty-flash');
        flash.style.opacity = '1';
        setTimeout(() => flash.style.opacity = '0', 300);

        // On recharge la MÊME question (index ne change pas) mais avec de nouvelles données
        setTimeout(() => {
            loadGameQuestion(appContainer);
        }, 800);
    }
}

// --- VUE 4 : SCORE ---
function endGame() {
    clearInterval(appState.activeTimer);
    appState.activeTimer = null;
    const finalTime = playState.elapsedTime;
    
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center max-w-2xl mx-auto relative">
            <button id="btn-share-json" class="absolute top-4 right-4 text-gray-400 hover:text-blue-500 transition-colors p-2" title="Télécharger le rapport JSON">
                <i class="fas fa-share-nodes text-xl"></i>
            </button>
			
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Chrono Terminé !</h3>
            
            <div class="flex flex-col items-center mb-8">
                <div class="text-6xl font-black text-blue-600 dark:text-blue-400 mb-2">
                    ${formatTime(finalTime)}
                </div>
                <span class="text-sm font-semibold text-gray-500 uppercase">Temps total</span>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-8 border-t dark:border-gray-700 pt-6">
                <div class="text-center">
                    <div class="text-2xl font-bold text-green-500">${playState.score} / ${playState.deck.length}</div>
                    <div class="text-xs text-gray-500 uppercase">Réussies</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-red-500">${playState.errors}</div>
                    <div class="text-xs text-gray-500 uppercase">Erreurs</div>
                </div>
            </div>
            
            <div class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-8">
                Précision : <span class="${getPrecisionClass(playState.score, playState.totalAttempted)}">${playState.totalAttempted > 0 ? Math.round((playState.score / playState.totalAttempted) * 100) : 0}%</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <button id="retry" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition">
                    <i class="fas fa-redo mr-2"></i>Recommencer
                </button>
                <button id="settings" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition">
                    <i class="fas fa-sliders-h mr-2"></i>Paramétrer
                </button>
                <button id="home" class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition">
                    <i class="fas fa-home mr-2"></i>Accueil
                </button>
            </div>
        </div>
    `;
	
    appContainer.querySelector('#btn-share-json').addEventListener('click', () => {
        const reportData = {
            game: "Chrono",
            questions: playState.deck.map(q => ({
                id: q.id,
                category: q.category,
                text: q.text
            })),
            parameters: {
                isRandom: playState.thisIsRandom
            },
            results: {
                correctAnswers: playState.score,
                wrongAnswers: playState.errors,
                totalQuestionsInSet: playState.deck.length,
                totalAttempts: playState.totalAttempted,
                timeElapsedSeconds: finalTime,
                timeElapsedFormatted: formatTime(finalTime)
            },
            timestamp: new Date().toISOString()
        };

        const dataStr = JSON.stringify(reportData, null, 4);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `automathix-chrono-${new Date().getTime()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });

    appContainer.querySelector('#retry').addEventListener('click', () => startGame(appContainer));
    appContainer.querySelector('#settings').addEventListener('click', () => initChrono(appContainer));
    appContainer.querySelector('#home').addEventListener('click', () => navigateTo('home'));
}

function formatTime(s) {
    return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;
}

function getPrecisionClass(score, total) {
    const pc = (score / total) * 100;
    if (pc >= 80) return "text-green-500";
    if (pc >= 50) return "text-yellow-500";
    return "text-red-500";
}