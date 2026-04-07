import { navigateTo, appState } from '../main.js';
import { generateRandomQuestion, renderMath, adjustMathFontSize } from '../data/questions.js';

const playState = {
    deck: [],
    index: 0,
    score: 0,
    totalAttempted: 0,
    duration: 120,
    remainingTime: 120,
    startTime: 0,
	thisIsRandom: true
};

export function initTimeAttack(appContainer) {
    // 1. Affiche l'écran des paramètres
    renderSettings(appContainer);
}

// --- VUE 1 : PARAMÈTRES ---
function renderSettings(appContainer) {
    appContainer.innerHTML = `
        <section class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">Time Attack</h2>
            
            <div class="mb-10 max-w-md mx-auto">
                <div class="flex justify-between mb-2">
                    <label for="time-slider" class="font-bold text-gray-700 dark:text-gray-300">Temps imparti</label>
                    
                    <span id="time-display" class="font-bold text-blue-600 dark:text-blue-400 text-xl">02:00</span>
                </div>
                
                <input id="time-slider" type="range" min="30" max="600" step="15" value="120" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                    <span>30s</span>
                    <span>600s</span>
                </div>
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
                    <i class="fas fa-play mr-2"></i>COMMENCER
                </button>
            </div>
        </section>
    `;

    // Événements
    appContainer.querySelector('#time-slider').addEventListener('input', (e) => {
        appContainer.querySelector('#time-display').textContent = formatTime(e.target.value); //e.target.value + " s";
        playState.duration = parseInt(e.target.value);
    });

    appContainer.querySelector('#back-btn').addEventListener('click', () => navigateTo('order'));
    appContainer.querySelector('#start-btn').addEventListener('click', () => {
        // 1. Sauvegarder les paramètres dans playState AVANT d'effacer le DOM
        playState.thisIsRandom = appContainer.querySelector('input[name="order"]:checked').value === 'rand';
        
        // 2. Lancer le compte à rebours
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
    // Préparer deck
    playState.deck = [...appState.selectedQuestions];
    if (playState.thisIsRandom) {
        playState.deck.sort(() => Math.random() - 0.5);
    }
    
    playState.index = 0;
    playState.score = 0;
    playState.totalAttempted = 0;
    playState.remainingTime = playState.duration;
    playState.startTime = Date.now();

    appContainer.innerHTML = `
        <div class="flex flex-col items-center max-w-3xl mx-auto">
            <div class="mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-8 py-3 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center space-x-3">
                <i class="fas fa-hourglass-half text-3xl text-blue-500"></i>
                <span id="digital-timer" class="text-4xl md:text-5xl font-mono font-bold text-gray-800 dark:text-white tracking-wider transition-colors duration-300">${formatTime(playState.remainingTime)}</span>
            </div>
            <div class="w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 min-h-[400px] flex flex-col relative overflow-hidden">
                <div id="penalty" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-black text-red-500 opacity-0 pointer-events-none z-50"> -10s </div>
				<div class="text-sm font-semibold text-blue-500 dark:text-blue-400 mb-2 uppercase tracking-wide text-center" id="game-category-badge">Catégorie</div>
                <div id="game-question" class="my-auto py-4 text-xl md:text-2xl text-center text-gray-800 dark:text-gray-100 my-auto py-4""></div>
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
    
    // Lancer timer
    appState.activeTimer = setInterval(() => {
        playState.remainingTime--;
        const timerEl = appContainer.querySelector('#digital-timer');
        timerEl.textContent = formatTime(playState.remainingTime);
		
		// Alerte rouge quand il reste 10 secondes ou moins
            if (playState.remainingTime <= 10) {
                timerEl.classList.remove('text-gray-800', 'dark:text-white');
                timerEl.classList.add('text-red-500', 'dark:text-red-400', 'animate-pulse');
            } else {
                timerEl.classList.remove('text-red-500', 'dark:text-red-400', 'animate-pulse');
                timerEl.classList.add('text-gray-800', 'dark:text-white');
            }
		
        if (playState.remainingTime <= 0) endGame();
    }, 1000);

    loadGameQuestion(appContainer);
}

function loadGameQuestion(appContainer) {
    if (playState.index >= playState.deck.length) playState.index = 0; // Loop
    
    const card = playState.deck[playState.index];
    const data = generateRandomQuestion(card.category, card.indQ);
	
	// Mise à jour UI
    document.getElementById('game-category-badge').textContent = card.category;
    
    appContainer.querySelector('#game-question').innerHTML = (typeof data.question === 'string') ? data.question : data.question.html;
    if (data.question.render) setTimeout(() => data.question.render('jxgbox-q'), 50);
    
    const optCont = appContainer.querySelector('#game-options');
    optCont.innerHTML = '';
	
	// File d'attente render graphiques
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

                
				btn.onclick = () => {optCont.querySelectorAll('button').forEach(b => b.disabled = true); handleAnswer(opt.isCorrect, btn, appContainer);};
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
    //appContainer.querySelectorAll('button').forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add('quiz-correct');
        playState.score++;
        setTimeout(() => { playState.index++; loadGameQuestion(appContainer); }, 400);
    } else {
        btn.classList.add('quiz-wrong');
        playState.remainingTime -= 10;
        const p = appContainer.querySelector('#penalty');
        p.classList.add('animate-penalty');
        setTimeout(() => p.classList.remove('animate-penalty'), 1500);
        setTimeout(() => { playState.index++; loadGameQuestion(appContainer); }, 800);
    }
}

// --- VUE 4 : SCORE ---
function endGame() {
    clearInterval(appState.activeTimer);
    appState.activeTimer = null;
    const elapsed = Math.round((Date.now() - playState.startTime) / 1000);
    
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Score Final</h3>
            <div class="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-5xl font-bold text-white shadow-lg mb-6">
                ${playState.score}/${playState.totalAttempted}
            </div>
            <div class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-8">en ${formatTime(elapsed)}</div>
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

    appContainer.querySelector('#retry').addEventListener('click', () => startGame(appContainer));
    appContainer.querySelector('#settings').addEventListener('click', () => initTimeAttack(appContainer));
    appContainer.querySelector('#home').addEventListener('click', () => navigateTo('home'));
}

// Helper
function formatTime(s) {
    return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;
}