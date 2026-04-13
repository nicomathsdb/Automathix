import { navigateTo, appState } from '../main.js';
import { generateRandomQuestion, renderMath, adjustMathFontSize } from '../data/questions.js';

const playState = {
    deck: [],
    index: 0,
    score: 0,
    errors: 0,
    initialLives: 3,
    lives: 3,
	timePerQuestion: 30,
    remainingQuestionTime: 30,
    totalAttempted: 0,
    startTime: 0,
    thisIsRandom: true
};

export function initSurvivor(appContainer, data = null) {
    if (data) {
        playState.initialLives = data.parameters?.initialLives ?? 3;
		playState.timePerQuestion = data.parameters?.timeLimitPerQuestionSeconds ?? 30;
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
            <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">Mode Survivor</h2>
            
			<!-- Choix des Vies -->
            <div class="mb-10 max-w-md mx-auto text-center">
                <label class="font-bold text-gray-700 dark:text-gray-300 block mb-4">Nombre de vies</label>
                
                <div id="hearts-container" class="flex justify-center gap-2 mb-4 text-3xl">
                    <!-- Les cœurs seront générés ici -->
                </div>

                <input id="lives-slider" type="range" min="1" max="5" step="1" value="3" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 vie</span>
                    <span>5 vies</span>
                </div>
            </div>
			
			<!-- Choix du Temps par question -->
            <div class="mb-10 max-w-md mx-auto">
                <div class="flex justify-between mb-2">
                    <label class="font-bold text-gray-700 dark:text-gray-300">Temps par question</label>
                    <span id="time-display" class="font-bold text-red-600 dark:text-red-400 text-xl">${playState.timePerQuestion}s</span>
                </div>
                <input id="time-slider" type="range" min="10" max="60" step="5" value="${playState.timePerQuestion}" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
            </div>

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
                    <i class="fas fa-play mr-2"></i>SURVIVRE
                </button>
            </div>
        </section>
    `;

    const livesSlider = appContainer.querySelector('#lives-slider');
    const heartsCont = appContainer.querySelector('#hearts-container');
	const timeSlider = appContainer.querySelector('#time-slider');
    const timeDisplay = appContainer.querySelector('#time-display');

    const updateHearts = (val) => {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= val) html += '<i class="fas fa-heart text-red-500"></i>';
            else html += '<i class="far fa-heart text-gray-300 dark:text-gray-600"></i>';
        }
        heartsCont.innerHTML = html;
        playState.initialLives = parseInt(val);
    };

    updateHearts(livesSlider.value);
    livesSlider.addEventListener('input', (e) => updateHearts(e.target.value));
	
	timeSlider.addEventListener('input', (e) => {
        playState.timePerQuestion = parseInt(e.target.value);
        timeDisplay.textContent = e.target.value + "s";
    });

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
            <div id="countdown-num" class="text-9xl font-black text-red-600 animate-pulse">3</div>
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
    playState.lives = playState.initialLives;
    playState.startTime = Date.now();

    appContainer.innerHTML = `
        <div class="flex flex-col items-center max-w-3xl mx-auto">
			<div class="w-full flex flex-col md:flex-row gap-2 mb-2">
				<!-- Vies -->
				<div id="lives-display" class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center space-x-2">
					<!-- Cœurs affichés dynamiquement -->
				</div>
				
				<!-- Chrono Question -->
                <div class="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center space-x-3">
                    <i class="fas fa-hourglass-half text-red-500 text-2xl"></i>
                    <span id="q-timer" class="text-3xl font-mono font-bold text-gray-800 dark:text-white">--</span>
                </div>
            </div>
			
            <div class="w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 min-h-[400px] flex flex-col relative overflow-hidden">
                <!-- ANIMATION VIE PERDUE -->
				<div id="penalty" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-black text-red-600 opacity-0 pointer-events-none z-50 flex items-center gap-3">
					-1 <i class="fas fa-heart"></i>
				</div>
                <div class="text-sm font-semibold text-blue-500 dark:text-blue-400 mb-2 uppercase tracking-wide text-center" id="game-category-badge">Catégorie</div>
                <div id="game-question" class="my-auto text-xl md:text-2xl text-center text-gray-800 dark:text-gray-100 my-auto pt-4"></div>
                <div id="game-options" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"></div>
            </div>
            <div class="mt-8">
                <button id="quit-game" class="bg-gray-300 hover:bg-red-500 text-gray-700 hover:text-white dark:bg-gray-700 dark:hover:bg-red-600 dark:text-gray-300 font-bold py-2 px-6 rounded-full shadow transition duration-300 flex items-center group">
                    <i class="fas fa-circle-xmark mr-2 text-gray-500 group-hover:text-white transition-colors"></i>Abandonner
                </button>
            </div>
        </div>
    `;

    renderLives(appContainer);
    appContainer.querySelector('#quit-game').addEventListener('click', endGame);
    loadGameQuestion(appContainer);
}

function renderLives(appContainer) {
    const container = appContainer.querySelector('#lives-display');
    let html = '';
    for (let i = 1; i <= playState.initialLives; i++) {
        if (i <= playState.lives) html += '<i class="fas fa-heart text-3xl text-red-500 transition-transform duration-300 scale-110"></i>';
        else html += '<i class="far fa-heart text-3xl text-gray-300 dark:text-gray-600"></i>';
    }
    container.innerHTML = html;
}

function triggerLifeLossAnimation(appContainer) {
    // 1. Déclencher l'élément flottant "-1 ❤️"
    const p = appContainer.querySelector('#penalty');
    p.classList.remove('animate-penalty'); 
    void p.offsetWidth; // Force le redémarrage de l'animation CSS
    p.classList.add('animate-penalty');
    
    // 2. Mise à jour immédiate des cœurs dans la barre de statut
    renderLives(appContainer);

    // On retire la classe d'animation après 1.5s pour pouvoir la relancer plus tard
    setTimeout(() => {
        p.classList.remove('animate-penalty');
    }, 1500);
}

function startQuestionTimer(appContainer) {
    if (appState.activeTimer) clearInterval(appState.activeTimer);
    
    playState.remainingQuestionTime = playState.timePerQuestion;
    const timerEl = appContainer.querySelector('#q-timer');
    timerEl.textContent = playState.remainingQuestionTime + "s";
    timerEl.classList.remove('text-red-500', 'animate-pulse');

    appState.activeTimer = setInterval(() => {
        playState.remainingQuestionTime--;
        timerEl.textContent = playState.remainingQuestionTime + "s";

        if (playState.remainingQuestionTime <= 5) {
            timerEl.classList.add('text-red-500', 'animate-pulse');
        }

        if (playState.remainingQuestionTime <= 0) {
            clearInterval(appState.activeTimer);
            handleTimeOut(appContainer);
        }
    }, 1000);
}

function handleTimeOut(appContainer) {
    // Désactiver les boutons
    appContainer.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);
    
    // Perte de vie
    playState.errors++;
    playState.lives--;
    playState.totalAttempted++;
	
	triggerLifeLossAnimation(appContainer);

    if (playState.lives <= 0) {
        setTimeout(endGame, 800);
    } else {
        setTimeout(() => {
            playState.index++;
            loadGameQuestion(appContainer);
        }, 800);
    }
}

function loadGameQuestion(appContainer) {
    // Si on arrive au bout du deck, on boucle (et on mélange si nécessaire)
    if (playState.index >= playState.deck.length) {
        playState.index = 0;
        if (playState.thisIsRandom) {
            playState.deck.sort(() => Math.random() - 0.5);
        }
    }
    
    const card = playState.deck[playState.index];
    const data = generateRandomQuestion(card.category, card.indQ);
    
    document.getElementById('game-category-badge').textContent = card.category;
    appContainer.querySelector('#game-question').innerHTML = (typeof data.question === 'string') ? data.question : data.question.html;
    if (data.question.render) setTimeout(() => data.question.render('jxgbox-q'), 50);
    
    const optCont = appContainer.querySelector('#game-options');
    optCont.innerHTML = '';
    const renderQueue = [];
    
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "quiz-option-btn rounded-lg border-2 border-red-50 dark:border-red-900/30 bg-gray-50 dark:bg-gray-700/50 text-center font-medium text-gray-700 dark:text-gray-200 select-none overflow-hidden relative flex items-center justify-center min-h-[40px] md:min-h-[80px]";
        
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
		startQuestionTimer(appContainer); // Lancer le chrono une fois rendu
    }, 50);
}

function handleAnswer(isCorrect, btn, appContainer) {
    playState.totalAttempted++;

    if (isCorrect) {
        btn.classList.add('quiz-correct');
        playState.score++;
        setTimeout(() => { 
            playState.index++; 
            loadGameQuestion(appContainer); 
        }, 400);
    } else {
        playState.errors++;
        playState.lives--;
        btn.classList.add('quiz-wrong');
        
        triggerLifeLossAnimation(appContainer);

        if (playState.lives <= 0) {
            setTimeout(endGame, 800);
        } else {
            setTimeout(() => { 
                playState.index++; 
                loadGameQuestion(appContainer); 
            }, 800);
        }
    }
}

// --- VUE 4 : SCORE ---
function endGame() {
    const elapsed = Math.round((Date.now() - playState.startTime) / 1000);
    const appContainer = document.getElementById('app');
    
    appContainer.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center max-w-2xl mx-auto relative">
            <button id="btn-share-json" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-2" title="Télécharger le rapport JSON">
                <i class="fas fa-share-nodes text-xl"></i>
            </button>
            
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Fin de la survie</h3>
            
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mb-8">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                        ${playState.score}
                    </div>
                    <span class="mt-2 text-sm font-semibold text-green-600 dark:text-green-400 uppercase">Juste</span>
                </div>

                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                        ${playState.initialLives - playState.lives}/${playState.initialLives}
                    </div>
                    <span class="mt-2 text-sm font-semibold text-red-600 dark:text-red-400 uppercase">Vies perdues</span>
                </div>
            </div>
            
            <div class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-8 border-t dark:border-gray-700 pt-6">
                Précision : <strong>${playState.totalAttempted > 0 ? Math.round((playState.score / playState.totalAttempted) * 100) : 0}%</strong><br>
                <span class="text-sm text-gray-500">Total questions tentées : ${playState.totalAttempted}</span>
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
            game: "Survivor",
            questions: playState.deck.map(q => ({
                id: q.id,
                category: q.category,
                text: q.text
            })),
            parameters: {
                initialLives: playState.initialLives,
				timeLimitPerQuestionSeconds: playState.timePerQuestion,
                isRandom: playState.thisIsRandom
            },
            results: {
                correctAnswers: playState.score,
                livesLost: playState.initialLives - playState.lives,
                totalQuestionsAttempted: playState.totalAttempted,
                precision: playState.totalAttempted > 0 ? Math.round((playState.score / playState.totalAttempted) * 100) : 0,
                timeElapsedSeconds: elapsed
            },
            timestamp: new Date().toISOString()
        };

        const dataStr = JSON.stringify(reportData, null, 4);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `automathix-survivor-${new Date().getTime()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });

    appContainer.querySelector('#retry').addEventListener('click', () => startGame(appContainer));
    appContainer.querySelector('#settings').addEventListener('click', () => initSurvivor(appContainer));
    appContainer.querySelector('#home').addEventListener('click', () => navigateTo('home'));
}

function formatTime(s) {
    return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;
}