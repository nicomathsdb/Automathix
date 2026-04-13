import { appState, navigateTo } from '../main.js';
import { categories } from '../data/questions.js';

export function initReport(appContainer, data) {
    if (!data) { navigateTo('home'); return; }

    const date = data.timestamp ? new Date(data.timestamp).toLocaleString('fr-FR') : "Date inconnue";
    
    appContainer.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div class="flex justify-between items-start pb-4">
                <div>
                    <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Voici mon résultat</h2>
                    <p class="text-gray-500 text-sm">Réalisé le ${date}</p>
                </div>
                <button id="btn-report-close" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times text-2xl"></i></button>
            </div>
			
			<div class="flex justify-center border-b dark:border-gray-700 pb-4 mb-6">
                <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Feras-tu mieux ?</h2>
            </div>

            <!-- GRILLE DE STATS DYNAMIQUE -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <!-- Boîte Mode (Toujours présente) -->
                <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center border border-blue-100 dark:border-blue-800">
                    <div class="text-xs uppercase text-blue-500 font-bold mb-1">Jeu</div>
                    <div class="text-lg font-bold dark:text-white">${data.game || "Inconnu"}</div>
                </div>

                <!-- Boîte Score (Toujours présente) -->
                <div class="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center border border-green-100 dark:border-green-800">
                    <div class="text-xs uppercase text-green-500 font-bold mb-1">Score</div>
                    <div class="text-lg font-bold dark:text-white">
                        ${data.results?.correctAnswers ?? 0} / ${data.results?.totalQuestionsAttempted ?? data.questions?.length ?? 0}
                    </div>
                </div>

                <!-- Boîte Temps (CONDITIONNELLE) -->
                ${data.results?.timeElapsedFormatted ? `
                <div class="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg text-center border border-purple-100 dark:border-purple-800">
                    <div class="text-xs uppercase text-purple-500 font-bold mb-1">Temps mis</div>
                    <div class="text-lg font-bold dark:text-white">${data.results.timeElapsedFormatted}</div>
                </div>
                ` : ''}
            </div>

            <!-- SECTION PARAMÈTRES (DYNAMIQUE) -->
            ${data.parameters ? `
            <div class="mb-8 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                <h4 class="text-sm font-bold text-gray-400 uppercase mb-2">Réglages de la partie</h4>
                <div class="flex flex-wrap gap-4 text-sm">
                    ${Object.entries(data.parameters).map(([key, value]) => `
                        <div class="bg-white dark:bg-gray-800 px-3 py-1 rounded shadow-sm border dark:border-gray-600">
                            <span class="text-gray-500">${formatParamName(key)} :</span>
                            <span class="font-bold dark:text-gray-200">${formatParamValue(value)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            <!-- Liste des questions (Commune à tous les jeux) -->
            <h3 class="font-bold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
                <i class="fas fa-list-check mr-2 text-blue-500"></i>Questions de la série
            </h3>
            
            <div class="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                ${data.questions?.map((q) => `
                    <div class="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-blue-400">
                        <div class="text-xs text-blue-500 font-bold">${q.category}</div>
                        <div class="text-gray-800 dark:text-gray-200 text-sm">${q.text}</div>
                    </div>
                `).join('') || '<p>Aucune donnée de question.</p>'}
            </div>

            <!-- BOUTONS D'ACTION -->
            <div class="flex flex-col sm:flex-row justify-center gap-4 border-t dark:border-gray-700 pt-8">
                <button id="btn-back-home" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-full font-bold hover:bg-gray-300 transition">
                    Retour à l'accueil
                </button>
                <button id="btn-replay" class="bg-green-600 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center">
                    <i class="fas fa-play mr-2"></i>Relever le défi !
                </button>
            </div>
        </div>
    `;

    // Événements
    appContainer.querySelector('#btn-report-close').addEventListener('click', () => navigateTo('home'));
    appContainer.querySelector('#btn-back-home').addEventListener('click', () => navigateTo('home'));
	
	// LOGIQUE DE RELANCE DU JEU
    appContainer.querySelector('#btn-replay').addEventListener('click', () => {
        try {
            // 1. Reconstruire les questions
            // On utilise les IDs (catIndex-qIndex) pour retrouver les vraies questions dans la banque
            appState.selectedQuestions = data.questions.map(qJson => {
                const [catIdx, qIdx] = qJson.id.split('-').map(Number);
                const category = categories[catIdx];
                return {
                    id: qJson.id,
                    text: category.questions[qIdx],
                    category: category.name,
                    indQ: qIdx
                };
            });

            // 2. Restaurer les paramètres
            appState.isRandom = data.parameters?.isRandom ?? false;

            
            // 3. Identifier et lancer le mode
            const gameMode = data.game?.toLowerCase();
            
            if (gameMode.includes("attack")) {
                appState.currentMode = 'timeattack';
                navigateTo('timeattack', data); 
            } else if (gameMode.includes("chrono")) {
                appState.currentMode = 'chrono';
                navigateTo('chrono', data); 
            } else if (gameMode.includes("survivor")) {
                appState.currentMode = 'survivor';
                navigateTo('survivor', data); 
            } else {
                appState.currentMode = 'playground';
                appState.subMode = 'quiz'; // Par défaut
                navigateTo('order'); // On passe par order pour confirmer le choix Flashcard/Quiz
            }

        } catch (err) {
            console.error(err);
            alert("Erreur lors de la reconstruction de la partie. Les questions ont peut-être changé dans cette version d'Automathix.");
        }
    });
}

// Petits helpers pour rendre les paramètres jolis
function formatParamName(key) {
    const dict = {
        timeLimitSeconds: "Limite de temps",
        isRandom: "Ordre",
        difficulty: "Difficulté",
		initialLives: "Vies",
		timeLimitPerQuestionSeconds: "Temps par question"
    };
    return dict[key] || key;
}

function formatParamValue(val) {
    if (val === true) return "Aléatoire";
    if (val === false) return "Fixe";
    if (typeof val === 'number' && val >= 10) return val + " s";
    return val;
}