import { navigateTo, appState } from '../main.js';
import { generateRandomQuestion, renderMath, adjustMathFontSize } from '../data/questions.js';

const playState = {
    deck: [],
    index: 0,
	maxReachedIndex: 0,
    score: 0,
    answers: {},
    isFlipped: false
};

export function initPlayground(appContainer) {
    playState.deck = [...appState.selectedQuestions];
    if (appState.isRandom) {
        playState.deck.sort(() => Math.random() - 0.5);
    }
	
	//on efface les données des questions si déjà générées
	for (let i=0; i<playState.deck.length; i++) {
		const c = playState.deck[i];
		if (c.generatedData) c.generatedData = null;
	}
    playState.index = 0;
	playState.maxReachedIndex = 0;
    playState.score = 0;
    playState.answers = {};
    playState.isFlipped = false;

    renderUI(appContainer);
}

function renderUI(appContainer) {
    appContainer.innerHTML = `
	    <section class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
			<div class="flex flex-col items-center">
				<div id="progress-text" class="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">1/10</div>
            
				<!-- Structure Flashcard -->
				<div class="flashcard flip-card max-w-lg min-h-[400px] mb-8 cursor-pointer" id="main-flashcard">
					<div class="flip-card-inner" id="flip-inner">
						<div class="flip-card-front bg-blue-50 dark:bg-blue-900/40 flex flex-col justify-center items-center p-4 rounded-xl shadow-md border-2 border-blue-200 dark:border-blue-700">
						    <div class="text-lg text-blue-800 dark:text-blue-200 mb-4 font-semibold">Question</div>
							<div id="question-content" class="text-gray-800 dark:text-gray-100 text-xl text-center"></div>
							
						</div>
						<div class="flip-card-back bg-green-50 dark:bg-green-900/40 flex flex-col justify-center items-center p-4 rounded-xl shadow-md border-2 border-green-200 dark:border-green-700">
							<div class="text-lg text-green-800 dark:text-green-200 mb-4 font-semibold">Réponse</div>
							<div id="answer-content" class="text-gray-800 dark:text-gray-100 text-xl text-center"></div>
							
						</div>
					</div>
				</div>

				<!-- Boutons de contrôle -->
				<div id="nav-buttons" class="flex flex-wrap justify-center gap-3 mb-6">
				    <button id="prev-btn" class="bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 px-5 py-2 rounded-full disabled:opacity-50 disabled:cursor-default disabled:bg-gray-200 dark:disabled:bg-gray-700">
                        <i class="fas fa-arrow-left mr-2"></i>Précédent
                    </button>
					<!-- Boutons spécifiques Flashcard injectés dynamiquement -->
					<button id="next-btn" class="bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 px-5 py-2 rounded-full disabled:opacity-50 disabled:cursor-default disabled:bg-gray-200 dark:disabled:bg-gray-700">
                        <i class="fas fa-arrow-right mr-2"></i>Suivant
                    </button>					
				</div>

				<div class="flex flex-wrap justify-center gap-3 mt-4">
                    <button id="restart-btn" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition">
                        <i class="fas fa-redo mr-2"></i>Recommencer
                    </button>
                    <button id="quit-btn" class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition">
                        <i class="fas fa-sign-out-alt mr-2"></i>Quitter
                    </button>
                </div>
			</div>
	    </section>
    `;

    setupEventListeners(appContainer);
    loadQuestion(appContainer);
}

function loadQuestion(appContainer) {
    const card = playState.deck[playState.index];
    const qCont = appContainer.querySelector('#question-content');
    const aCont = appContainer.querySelector('#answer-content');
    const inner = appContainer.querySelector('#flip-inner');
	
	
	
    // Réinitialise état
    playState.isFlipped = false;
    inner.parentElement.classList.remove('flipped');
    appContainer.querySelector('#progress-text').textContent = `${playState.index + 1}/${playState.deck.length}`;
	// Activer/Désactiver les boutons de navigation
    appContainer.querySelector('#prev-btn').disabled = playState.index === 0;
    appContainer.querySelector('#next-btn').disabled = playState.index >= playState.maxReachedIndex;
	
	if (appState.subMode === 'flashcard') {
		appContainer.querySelectorAll('.btn-val').forEach(el => {
              el.classList.toggle('hidden',!playState.isFlipped);
			  el.disabled = playState.index < playState.maxReachedIndex;
        });		
    }
	
	// Mettre à jour l'index maximum atteint si nécessaire
					if (playState.index > playState.maxReachedIndex) {
						playState.maxReachedIndex = playState.index;
					}
	
	// Vérifier si la question/réponse a déjà été générée pour cette carte
			if (!card.generatedData) {
				// Si non, on la génère et on la stocke dans l'objet de la carte
				const questionData = generateRandomQuestion(card.category, card.indQ);
				// On stocke tout l'objet généré, pas seulement les chaînes de caractères
				card.generatedData = questionData;
			}
	
    const data = card.generatedData; 

    // Rendu
    qCont.innerHTML = (typeof data.question === 'string') ? data.question : data.question.html;
    if (appState.subMode === 'quiz') {
        renderQuizOptions(appContainer, data.options);
    } else {
        aCont.innerHTML = (typeof data.answer === 'string') ? data.answer : data.answer.html;
    }

    
    if(data.question.render){
		data.question.render('jxgbox-q');
		document.getElementById('jxgbox-q').addEventListener('click', (event) => {
                                    // On empêche le clic de "remonter" jusqu'à la carte.
                                    event.stopPropagation();
                                });
	}
    if(appState.subMode === 'flashcard' && data.answer && data.answer.render){    // seulement en mode flashcard
		document.getElementById('jxgbox-a').style.width = '300px';
		data.answer.render('jxgbox-a');
		
		document.getElementById('jxgbox-a').addEventListener('click', (event) => {
                                    // On empêche le clic de "remonter" jusqu'à la carte.
                                    event.stopPropagation();
                                });
		//document.getElementById('jxgbox-a').style.width = '100%';
		const largeur = Math.min(appContainer.clientWidth*1/2,300);						
	    document.getElementById('jxgbox-a').style.width = largeur+'px';
	}
	
	
	
	renderMath(appContainer);
	
    setTimeout(() => {
		adjustMathFontSize();
		
	}, 100);
	

}

function renderQuizOptions(appContainer, options) {
    const qCont = appContainer.querySelector('#question-content');
    const optDiv = document.createElement('div');
    optDiv.className = "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6";
	
	// On récupère la réponse précédemment stockée pour cette question (si elle existe)
    const previousAnswer = playState.answers[playState.index];
	
	// File d'attente pour les rendus graphiques
    const renderQueue = [];
    
    options.forEach((opt,i) => {
		// On utilise un <button> pour l'interactivité
        const btn = document.createElement('button');

					
        // Classes de base pour le bouton
        let baseClasses = "quiz-option-btn p-3 border-2 rounded-lg bg-white dark:bg-gray-700";
		
		if (opt.isGraph) {
                        // Cas GRAPHIQUE
                        const uniqueId = `jxgbox-opt-${i}`;
                        // On augmente la hauteur pour les graphiques (h-40)
                        btn.className = baseClasses + " p-1 h-40";
                        // Conteneur interne pour JSXGraph
                        btn.innerHTML = `<div id="${uniqueId}" class="w-full h-full pointer-events-none relative"></div>`;
                        
                        // On ajoute la fonction de rendu à la file d'attente
                        if (typeof opt.render === 'function') {
                            renderQueue.push(() => opt.render(uniqueId));
                        }
                    } else {
                        // Cas TEXTE (Classique)
                        btn.className = baseClasses + " math-option-container p-2 h-16 sm:h-20 flex items-center justify-center";
                        btn.innerHTML = `<span class="math-content inline-block whitespace-nowrap">${opt.text}</span>`;
                    }
		
        //btn.innerHTML = opt.text;
		
		// --- LOGIQUE DE RESTAURATION ---
        if (previousAnswer !== undefined) {
            btn.disabled = true; // On ne peut plus cliquer
            
            if (opt.isCorrect) {
                // On affiche toujours la bonne réponse en vert
                btn.classList.add('quiz-correct');
            } else if (i === previousAnswer.selectedIdx) {
                // Si l'utilisateur avait choisi cette option et qu'elle est fausse -> rouge
                btn.classList.add('quiz-wrong');
            }

            // Si on a déjà répondu, on s'assure que le bouton "Suivant" est visible
            appContainer.querySelector('#next-btn').disabled = false;
        } else {
		
		
        btn.onclick = () => {
			// 1. Désactiver tous les boutons
			const allBtns = optDiv.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);
			
			// 2. Feedback Visuel
            btn.classList.add(opt.isCorrect ? 'quiz-correct' : 'quiz-wrong');
            if (opt.isCorrect) playState.score++;
			else {
                const correctBtnIdx = options.findIndex(o => o.isCorrect);
                optDiv.querySelectorAll('button')[correctBtnIdx].classList.add('quiz-correct');
			};
			
            // 3. Stocker l'index du bouton cliqué et le résultat
            playState.answers[playState.index] = {
                selectedIdx: i,
                isCorrect: opt.isCorrect
            };
			
			// 4. Activation du bouton Suivant
            appContainer.querySelector('#next-btn').disabled = false;
        };
		};
        optDiv.appendChild(btn);
    });
    qCont.appendChild(optDiv);
	
	// Exécution des rendus graphiques une fois les éléments dans le DOM
                // setTimeout pour s'assurer que le layout est fait
                setTimeout(() => {
                    renderQueue.forEach(renderFn => renderFn());
					renderMath(appContainer);
                }, 50);
}

function setupEventListeners(appContainer) {
    const flashcard = appContainer.querySelector('#main-flashcard');
    const nextBtn = appContainer.querySelector('#next-btn');
    const prevBtn = appContainer.querySelector('#prev-btn');

    // Flip logique
    flashcard.addEventListener('click', () => {
        if (appState.subMode === 'quiz') return;
        playState.isFlipped = !playState.isFlipped;
        flashcard.classList.toggle('flipped');
		appContainer.querySelectorAll('.btn-val').forEach(el => {
              el.classList.toggle('hidden');
        });		
    });
	
	function next() {
		if (playState.index < playState.deck.length - 1) {
            playState.index++;
            loadQuestion(appContainer);
        } else {
            showSummary(appContainer);
        }
	}

    // Navigation
    nextBtn.addEventListener('click', () => { 
         next();     
    });

    prevBtn.addEventListener('click', () => {
        if (playState.index > 0) {
            playState.index--;
            loadQuestion(appContainer);
        }
    });

    // Boutons bas de page
    appContainer.querySelector('#restart-btn').addEventListener('click', () => initPlayground(appContainer));
    appContainer.querySelector('#quit-btn').addEventListener('click', () => navigateTo('home'));

    // Injection boutons Flashcard (si mode flashcard)
    if (appState.subMode === 'flashcard') {
        const btnKnown = document.createElement('button');
        btnKnown.className = "btn-val bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full disabled:opacity-50 disabled:cursor-default hidden";   //classe btn-val pour sélection ; hidden par défaut
        btnKnown.innerHTML = '<i class="fas fa-check mr-2"></i>Je connais';
        btnKnown.onclick = () => { playState.answers[playState.index] = {isCorrect: true}; playState.score++ ; next(); };
        
        const btnUnknown = document.createElement('button');
        btnUnknown.className = "btn-val bg-red-500 hover:bg-red-600  text-white px-5 py-2 rounded-full disabled:opacity-50 disabled:cursor-default hidden";
        btnUnknown.innerHTML = '<i class="fas fa-xmark mr-2"></i>Je ne connais pas';
        btnUnknown.onclick = () => { playState.answers[playState.index] = {isCorrect: false}; next();	}
        
        prevBtn.after(btnKnown);
        btnKnown.after(btnUnknown);
		
		const qContainer = appContainer.querySelector('#question-content');
        const aContainer = appContainer.querySelector('#answer-content');
		const flipInstrucFront = document.createElement('div');
		flipInstrucFront.className = "text-blue-400 dark:text-blue-500 mt-6";
		flipInstrucFront.innerHTML = 'Cliquez pour voir la réponse';
		qContainer.after(flipInstrucFront);
		
		const flipInstrucBack = document.createElement('div');
		flipInstrucBack.className = "text-green-400 dark:text-green-500 mt-6";
		flipInstrucBack.innerHTML = 'Cliquez pour voir la question';
		aContainer.after(flipInstrucBack);
    }
}

function showSummary(appContainer) {
	// Mettre à jour l'affichage du score
            let scoreMessage = '';
            if (playState.score / playState.deck.length >= 0.9) scoreMessage = '🎉 Excellent !';
            else if (playState.score / playState.deck.length >= 0.7) scoreMessage = '👍 Très bon travail !';
            else if (playState.score / playState.deck.length >= 0.5) scoreMessage = '💪 Continuez vos efforts !';
            else scoreMessage = '🤔 Ne baissez pas les bras, révisez et recommencez !';
			
    appContainer.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 text-center max-w-2xl mx-auto">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Score Final</h2>
            <div class="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-5xl font-bold text-white shadow-lg mb-6">
                ${playState.score}/${playState.deck.length}
            </div>
			<div class="text-lg text-gray-700 dark:text-gray-300 mb-6">
				<div class="text-2xl font-bold mb-2">Score: ${Math.round(playState.score / playState.deck.length * 100)}%</div>
				<div class="text-lg font-medium mt-2">${scoreMessage}</div>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
				<button id="review-mistakes" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-default disabled:bg-gray-500">
                        <i class="far fa-eye mr-2"></i>Voir les erreurs
				</button>
				<button id="restart-btn" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition">
					<i class="fas fa-redo mr-2"></i>Recommencer
				</button>
				<button id="quit-btn" class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition">
					<i class="fas fa-sign-out-alt mr-2"></i>Accueil
				</button>
			</div>
        </div>
    `;
	
	// Activer/Désactiver le bouton erreurs
   appContainer.querySelector('#review-mistakes').disabled = playState.score === playState.deck.length;
	
	
    appContainer.querySelector('#restart-btn').addEventListener('click', () => initPlayground(appContainer));
    appContainer.querySelector('#quit-btn').addEventListener('click', () => navigateTo('home'));
	
	appContainer.querySelector('#review-mistakes').addEventListener('click', () => { 
                // Filtrer les cartes marquées comme non connues
                const mistakes = playState.deck.filter((_, index) => !playState.answers[index].isCorrect);
                
                // Recréer un deck uniquement avec les erreurs
                if (mistakes.length > 0) {
                    playState.deck = mistakes;
                    playState.index = 0;
					playState.maxReachedIndex = 0;
					playState.score = 0;
                    playState.answers = {};
					playState.isFlipped = false;
                    renderUI(appContainer);
                }
            });
}