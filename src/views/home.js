import { navigateTo, appState } from '../main.js';

export function initHome(appContainer) {
    appContainer.innerHTML = `
        <!-- Menu de sélection des modes -->
        <div class="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            
            <!-- Mode Playground -->
            <button id="btn-playground" class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-blue-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition duration-300 group">
                <div class="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-book-open"></i>
                </div>
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Playground</h2>
                <p class="text-gray-500 dark:text-gray-400">Mode Entraînement : Flashcards et QCM sans limite de temps pour bien réviser.</p>
            </button>

            <!-- Mode Time Attack -->
            <button id="btn-timeattack" class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-purple-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition duration-300 group">
                <div class="text-purple-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                    <i class="fas fa-hourglass-half"></i>
                </div>
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Time Attack</h2>
                <p class="text-gray-500 dark:text-gray-400">Répondez au maximum de questions avant la fin du temps imparti.</p>
            </button>
        </div>
    `;

    // Gestion des clics pour la navigation
    document.getElementById('btn-playground').addEventListener('click', () => {
        appState.currentMode = 'playground';
		appState.selectedQuestions = [];
        navigateTo('selection'); 
    });

    document.getElementById('btn-timeattack').addEventListener('click', () => {
        appState.currentMode = 'timeattack';
		appState.selectedQuestions = [];
		navigateTo('selection'); 
    });
}