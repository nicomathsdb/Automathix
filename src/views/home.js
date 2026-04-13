import { navigateTo, appState, openModal } from '../main.js';

export function initHome(appContainer) {
    appContainer.innerHTML = `
        <!-- Menu de sélection des modes -->
        <div class="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            
            <!-- Mode Playground -->
			<div class="relative group">
				<button id="btn-playground" class="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border-2 border-purple-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition duration-300 group">
					<div class="text-purple-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
						<i class="fas fa-book-open"></i>
					</div>
					<h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Playground</h2>
					<p class="text-gray-500 dark:text-gray-400">Mode Entraînement : Flashcards et QCM sans limite de temps pour bien réviser.</p>
				</button>
				<!-- Bouton d'aide spécifique -->
                <button id="help-playground" class="absolute top-1 right-2 text-gray-300 hover:text-purple-500 transition-colors p-2">
                    <i class="fas fa-circle-info text-xl"></i>
                </button>
			</div>
			
			<!-- Mode Chrono -->
			<div class="relative group">
				<button id="btn-chrono" class="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border-2 border-blue-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition duration-300 group">
					<div class="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
						<i class="fas fa-stopwatch"></i>
					</div>
					<h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Chrono</h2>
					<p class="text-gray-500 dark:text-gray-400">Répondez le plus rapidement posssible à toutes les questions.</p>
				</button>
				<!-- Bouton d'aide spécifique -->
                <button id="help-chrono" class="absolute top-1 right-2 text-gray-300 hover:text-blue-500 transition-colors p-2">
                    <i class="fas fa-circle-info text-xl"></i>
                </button>
			</div>

            <!-- Mode Time Attack -->
			<div class="relative group">
				<button id="btn-timeattack" class="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border-2 border-blue-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition duration-300 group">
					<div class="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
						<i class="fas fa-hourglass-half"></i>
					</div>
					<h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Time Attack</h2>
					<p class="text-gray-500 dark:text-gray-400">Répondez au maximum de questions avant la fin du temps imparti.</p>
				</button>
				<!-- Bouton d'aide spécifique -->
                <button id="help-timeattack" class="absolute top-1 right-2 text-gray-300 hover:text-blue-500 transition-colors p-2">
                    <i class="fas fa-circle-info text-xl"></i>
                </button>
			</div>
			
			<!-- Mode Survivor -->
			<div class="relative group">
				<button id="btn-survivor" class="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border-2 border-red-100 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition duration-300 group">
					<div class="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
						<i class="fas fa-heart"></i>
					</div>
					<h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Survivor</h2>
					<p class="text-gray-500 dark:text-gray-400">Répondez au maximum de questions avant la fin de vos vies.</p>
				</button>
				<!-- Bouton d'aide spécifique -->
                <button id="help-survivor" class="absolute top-1 right-2 text-gray-300 hover:text-red-500 transition-colors p-2">
                    <i class="fas fa-circle-info text-xl"></i>
                </button>
			</div>
        </div>
		
		<!-- BOUTON OUVRIR UN RAPPORT -->
        <div class="mt-12 flex justify-center">
            <input type="file" id="file-input" accept=".json" class="hidden">
            <button id="btn-open-report" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full hover:bg-gray-300 transition flex items-center shadow-sm">
                <i class="fas fa-folder-open mr-2"></i>Ouvrir un résultat
            </button>
        </div>
    `;

    // Gestion des clics pour la navigation
    document.getElementById('btn-playground').addEventListener('click', () => {
        appState.currentMode = 'playground';
        navigateTo('selection'); 
    });
	
	document.getElementById('btn-chrono').addEventListener('click', () => {
        appState.currentMode = 'chrono';
        navigateTo('selection'); 
    });

    document.getElementById('btn-timeattack').addEventListener('click', () => {
        appState.currentMode = 'timeattack';
		navigateTo('selection'); 
    });
	
	document.getElementById('btn-survivor').addEventListener('click', () => {
        appState.currentMode = 'survivor';
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
	
	document.getElementById('help-chrono').addEventListener('click', (e) => {
        e.stopPropagation();
        openModal('<i class="fas fa-info-circle mr-2"></i>Chrono', `
            <p>Le mode <strong>Chrono</strong> teste votre capacité à répondre à toutes les questions choisies le plus rapidement possible.</p>
			<div>
                <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Paramétrer la partie</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Choisissez de lancer la série <strong>dans l'ordre</strong> défini ou de manière <strong>aléatoire</strong>.</li>
                </ul>
            </div>
			
			<div>
                <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Commencer la partie</h4>
                <ul class="list-disc pl-5 space-y-2">
					<li>Répondez aux questions pendant que le chronomètre défile.</li>
					<li><strong>Attention :</strong> Chaque mauvaise réponse vous oblige à répondre à une question similaire, ralentissant ainsi votre progression.</li>
					<li>Le score final est calculé sur le nombre total de questions de la liste et des questions recommencées.</li>
            </ul>
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
	
	document.getElementById('help-survivor').addEventListener('click', (e) => {
        e.stopPropagation();
        openModal('<i class="fas fa-info-circle mr-2"></i>Survivor', `
            <p>Le mode <strong>Survivor</strong> teste votre capacité à répondre aux questions sans faire d'erreurs.</p>
			<div>
                <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Paramétrer la partie</h4>
                <ul class="list-disc pl-5 space-y-1">
				    <li>Choisissez le <strong>nombre de vies</strong> (entre 1 et 5).</li>
					<li>Choisissez le <strong>temps maximum par question</strong> (entre 10 s et 60 s).</li>
                    <li>Choisissez de lancer la série <strong>dans l'ordre</strong> défini ou de manière <strong>aléatoire</strong>.</li>
                </ul>
            </div>
			
			<div>
                <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Commencer la partie</h4>
                <ul class="list-disc pl-5 space-y-2">
					<li>Répondez au maximum de questions avant de ne plus avoir de vies. Si vous répondez à toutes les questions de la sélection, la série de questions recommence dans l'ordre ou dans un ordre aléatoire suivant le paramétrage jusqu'à ce que le nombre de vies arrive à 0.</li>
					<li><strong>Attention :</strong> Une mauvaise réponse ou une absence de réponse à la fin du compte à rebours vous fait perdre une vie.</li>
					<li>Le score final est calculé sur le nombre total de questions tentées.</li>
            </ul>
            </div>
            
        `);
    });
	
	// Logique pour ouvrir le fichier
    const fileInput = document.getElementById('file-input');
    const openBtn = document.getElementById('btn-open-report');

    openBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                // On navigue vers la vue "report" en passant les données
                navigateTo('report', data);
            } catch (err) {
                alert("Erreur : Le fichier n'est pas un rapport Automathix valide.");
            }
        };
        reader.readAsText(file);
    });
}