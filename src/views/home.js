import { navigateTo, appState, openModal } from '../main.js';

export function initHome(appContainer) {
    appContainer.innerHTML = `
        <!-- Menu de sélection des modes -->
        <div class="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            
            <!-- Mode Playground -->
			<div class="relative group">
				<button id="btn-playground" class="w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-blue-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition duration-300 group">
					<div class="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
						<i class="fas fa-book-open"></i>
					</div>
					<h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Playground</h2>
					<p class="text-gray-500 dark:text-gray-400">Mode Entraînement : Flashcards et QCM sans limite de temps pour bien réviser.</p>
				</button>
				<!-- Bouton d'aide spécifique -->
                <button id="help-playground" class="absolute top-4 right-4 text-gray-300 hover:text-blue-500 transition-colors p-2">
                    <i class="fas fa-circle-info text-xl"></i>
                </button>
			</div>

            <!-- Mode Time Attack -->
			<div class="relative group">
				<button id="btn-timeattack" class="w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-purple-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition duration-300 group">
					<div class="text-purple-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
						<i class="fas fa-hourglass-half"></i>
					</div>
					<h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Time Attack</h2>
					<p class="text-gray-500 dark:text-gray-400">Répondez au maximum de questions avant la fin du temps imparti.</p>
				</button>
				<!-- Bouton d'aide spécifique -->
                <button id="help-timeattack" class="absolute top-4 right-4 text-gray-300 hover:text-purple-500 transition-colors p-2">
                    <i class="fas fa-circle-info text-xl"></i>
                </button>
			</div>
        </div>
    `;

    // Gestion des clics pour la navigation
    document.getElementById('btn-playground').addEventListener('click', () => {
        appState.currentMode = 'playground';
        navigateTo('selection'); 
    });

    document.getElementById('btn-timeattack').addEventListener('click', () => {
        appState.currentMode = 'timeattack';
		navigateTo('selection'); 
    });
	
	// --- EVENEMENTS D'AIDE (Avec stopPropagation pour ne pas lancer le jeu) ---
    document.getElementById('help-playground').addEventListener('click', (e) => {
        e.stopPropagation();
        openModal('<i class="fas fa-info-circle mr-2"></i>Playground', `
            <p>Le mode <strong>Playground</strong> est idéal pour l'apprentissage à son rythme.</p>
			<p>Aucune limite de temps. Vous pouvez revenir en arrière pour revoir vos réponses.</p>
			<div>
                <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Deux façons de s'entraîner</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Flashcard :</strong> Réfléchissez, cliquez pour retourner la carte et voir la solution. Idéal pour apprendre.</li>
                    <li><strong>QCM Interactif :</strong> Sélectionnez la bonne réponse parmi 4 propositions. Idéal pour se tester.</li>
                </ul>
            </div>

            <div>
                <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Lancement</h4>
                <p>Choisissez de lancer la série <strong>dans l'ordre</strong> défini ou de manière <strong>aléatoire</strong>.</p>
            </div>
        `);
    });

    document.getElementById('help-timeattack').addEventListener('click', (e) => {
        e.stopPropagation();
        openModal('<i class="fas fa-info-circle mr-2"></i>Time Attack', `
            <p>Le mode <strong>Time Attack</strong> teste votre capacité à répondre à un maximum de questions dans un temps imparti.</p>
			<div>
                <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Paramétrer la partie</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Choisissez le <strong>temps imparti</strong> (entre 30 s et 10 min).</li>
                    <li>Choisissez de lancer la série <strong>dans l'ordre</strong> défini ou de manière <strong>aléatoire</strong>.</li>
                </ul>
            </div>
			
			<div>
                <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Commencer la partie</h4>
                <ul class="list-disc pl-5 space-y-2">
					<li>Répondez au plus grand nombre de questions avant la fin du compte à rebours. Si vous répondez à toutes les questions de la sélection, la série de questions recommence dans l'ordre ou dans un ordre aléatoire suivant le paramétrage jusqu'à ce que le compte à rebours arrive à 0.</li>
					<li><strong>Attention :</strong> Chaque mauvaise réponse retire <strong>10 secondes</strong> à votre temps restant !</li>
					<li>Le score final est calculé sur le nombre total de questions tentées.</li>
            </ul>
            </div>
            
        `);
    });
}