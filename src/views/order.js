// src/views/orderView.js
import { navigateTo, appState } from '../main.js';

export function initOrder(appContainer) {
    appContainer.innerHTML = `
        <section class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative z-10">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">Aperçu des questions</h2>
                <button id="edit-selection" class="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 px-4 py-2 rounded-full text-sm">
                    <i class="fas fa-edit mr-2"></i>Modifier
                </button>
            </div>
            
            <div id="selected-questions" class="space-y-3 max-h-[50vh] overflow-y-auto pr-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-[200px]"></div>
            
            <!-- Zone dynamique -->
            <div id="action-container" class="mt-8 flex justify-center"></div>
        </section>
    `;

    renderQuestionsList(appContainer);
    renderActionArea(appContainer); // Affiche les boutons selon le mode
    setupBaseEventListeners(appContainer);
}

function renderQuestionsList(appContainer) {
    const container = appContainer.querySelector('#selected-questions');
    container.innerHTML = ''; // Nettoyer le conteneur avant d'ajouter les éléments
    
    // Générer les éléments de la liste
    appState.selectedQuestions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-move';
        div.dataset.index = index; // On garde en mémoire l'index original
        div.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">${index + 1}</div>
            <div class="flex-grow">
                <span class="text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-300 py-1 px-2 rounded-full">${q.category}</span>
                <div class="text-gray-800 dark:text-gray-200 mt-1 text-sm">${q.text}</div>
            </div>
            <button class="ml-3 text-gray-400 hover:text-red-500 transition-colors p-2 delete-btn" title="Supprimer cette question">
                <i class="fas fa-trash-can"></i>
            </button>
        `;
		
		
		// --- LOGIQUE DE SUPPRESSION ---
        const btnDelete = div.querySelector('.delete-btn');
        btnDelete.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche de déclencher le drag & drop
            
            // 1. Supprimer de la donnée (javascript)
            appState.selectedQuestions.splice(index, 1);
            
            // 2. Rafraîchir l'affichage
            renderQuestionsList(appContainer);
            
            // 3. Vérifier s'il reste des questions
            checkEmptyList(appContainer);
        });
		
		
        container.appendChild(div);
    });

    // Initialisation de Sortable (nécessite la bibliothèque chargée dans index.html)
    new Sortable(container, {
        animation: 150,
        onEnd: () => {
            const newOrder = [];
            // Recréer le tableau dans le nouvel ordre visuel
            Array.from(container.children).forEach((el, newIndex) => {
                // Mise à jour du numéro visuel (la bulle bleue)
                el.querySelector('.w-8').textContent = newIndex + 1;
                // On récupère la donnée correspondante à l'index original
                newOrder.push(appState.selectedQuestions[parseInt(el.dataset.index)]);
            });
            // Mise à jour de l'état global
            appState.selectedQuestions = newOrder;
            // Mise à jour des data-index pour le prochain tri
            Array.from(container.children).forEach((el, i) => el.dataset.index = i);
        }
    });
}


// Vérification si la liste est vide --> désactivation des boutons
function checkEmptyList(appContainer) {
    const actionBtns = appContainer.querySelectorAll('.action'); 
    
    const isEmpty = appState.selectedQuestions.length === 0;
    
    actionBtns.forEach(btn => btn.disabled = isEmpty);

    if (isEmpty) {
        const container = appContainer.querySelector('#selected-questions');
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full py-10 text-gray-400">
                <i class="fas fa-folder-open text-4xl mb-2"></i>
                <p>Aucune question sélectionnée.</p>
            </div>
        `;
    }
}

// --- LOGIQUE DE RENDU DYNAMIQUE ---
function renderActionArea(appContainer) {
    const container = appContainer.querySelector('#action-container');
    
    // Switch sur le mode choisi
    switch (appState.currentMode) {                 // classe action sur boutons pour sélection 
	    case 'chrono':
            container.innerHTML = `
                <button id="action-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 disabled:opacity-50 action">   
                    <i class="fas fa-cogs mr-2"></i>Paramétrer la partie
                </button>
            `;
            break;
	
        case 'timeattack':
            container.innerHTML = `
                <button id="action-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 disabled:opacity-50 action">   
                    <i class="fas fa-cogs mr-2"></i>Paramétrer la partie
                </button>
            `;
            break;
			
		case 'survivor':
            container.innerHTML = `
                <button id="action-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 disabled:opacity-50 action">   
                    <i class="fas fa-cogs mr-2"></i>Paramétrer la partie
                </button>
            `;
            break;
            
        case 'playground':
            container.innerHTML = `
                <div class="flex flex-col items-center gap-4">
                    
					<div class="mt-2 flex flex-col items-center">
						<span class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Choisir le mode</span>
						<div class="flex gap-6 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
							<label class="flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md hover:bg-white dark:hover:bg-gray-600 transition">
								<input type="radio" name="sub-mode" value="flashcard" class="form-radio text-blue-600 w-5 h-5"checked>
								<span class="text-gray-800 dark:text-gray-200 font-medium">Flashcard</span>
							</label>
							<label class="flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-md bg-white dark:bg-gray-600 shadow-sm transition">
								<input type="radio" name="sub-mode" value="quiz" class="form-radio text-purple-600 w-5 h-5" >
								<span class="text-gray-800 dark:text-gray-200 font-medium">QCM Interactif</span>
							</label>
						</div>
					</div>

					<div class="mt-2 flex flex-col sm:flex-row justify-center gap-4">
						<button id="start-ordered" class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 max-w-xs disabled:opacity-50 action">
							<i class="fas fa-list-ol mr-2"></i>Lancer dans l'ordre
						</button>
						<button id="start-random" class="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 max-w-xs disabled:opacity-50 action">
							<i class="fas fa-random mr-2"></i>Lancer aléatoire
						</button>
					</div>
                </div>
            `;
            break;


        default:
            container.innerHTML = '<p class="text-red-500">Mode non reconnu</p>';
    }
    
    setupModeEventListeners(appContainer);
}

// --- GESTION DES ÉVÉNEMENTS ---
function setupBaseEventListeners(appContainer) {
    appContainer.querySelector('#edit-selection').addEventListener('click', () => navigateTo('selection'));
}

function setupModeEventListeners(appContainer) {
    // On lie les événements aux boutons qui viennent d'être injectés
    switch (appState.currentMode) {
		case 'chrono':
            appContainer.querySelector('#action-btn').addEventListener('click', () => navigateTo('chrono'));
            break;
			
        case 'timeattack':
            appContainer.querySelector('#action-btn').addEventListener('click', () => navigateTo('timeattack'));
            break;
			
		case 'survivor':
            appContainer.querySelector('#action-btn').addEventListener('click', () => navigateTo('survivor'));
            break;
            
        case 'playground':
            appContainer.querySelector('#start-ordered').addEventListener('click', () => launchPlayground(false));
            appContainer.querySelector('#start-random').addEventListener('click', () => launchPlayground(true));
            break;
    }
}

function launchPlayground(isRandom) {
    appState.isRandom = isRandom;
    appState.subMode = document.querySelector('input[name="sub-mode"]:checked').value;
    navigateTo('playground');
}

