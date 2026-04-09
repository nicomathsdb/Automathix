// src/main.js

// Importation des vues (Assurez-vous que ces fichiers existent dans src/views/)
import { initHome } from './views/home.js';
import { initSelection } from './views/selection.js';
import { initOrder } from './views/order.js';
import { initPlayground } from './views/playground.js';
import { initTimeAttack } from './views/timeattack.js';
import { adjustMathFontSize } from './data/questions.js';

// État global partagé par toute l'application
export const appState = {
    currentMode: null,     // mode de jeu
    subMode: null,         // 'flashcard' ou 'quiz' (pour le mode playground)
    isRandom: false,
    selectedQuestions: [], // Stocke les questions choisies
	activeTimer: null   // pour les jeux nécessitant un chrono
};

// Fonction centrale de navigation
export function navigateTo(viewName) {
    const appContainer = document.getElementById('app');
    
	// effacer un chrono en cours
    if (appState.activeTimer) {
        clearInterval(appState.activeTimer);
        appState.activeTimer = null;
    }

    appContainer.innerHTML = ''


    switch(viewName) {
        case 'home': 
            initHome(appContainer); 
            break;
        case 'selection': 
            initSelection(appContainer); 
            break;
        case 'order': 
            initOrder(appContainer); 
            break; 
        case 'playground': 
            initPlayground(appContainer); 
            break;
        case 'timeattack': 
            initTimeAttack(appContainer); 
            break;
        default:
            console.error("Vue non trouvée : " + viewName);
            initHome(appContainer);
    }
}

function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    const isDarkMode = localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const applyTheme = (isDark) => {
        document.documentElement.classList.toggle('dark', isDark);
        lightIcon.classList.toggle('hidden', !isDark);
        darkIcon.classList.toggle('hidden', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    applyTheme(isDarkMode);

    themeToggleBtn?.addEventListener('click', () => {
        applyTheme(!document.documentElement.classList.contains('dark'));
    });
}



// Gestion de la modale d'aide
export function openModal(title, htmlContent) { 
    const modal = document.getElementById('help-modal');
    const titleEl = document.getElementById('help-modal-title');
    const bodyEl = document.getElementById('help-modal-body');

    titleEl.innerHTML = title;
    bodyEl.innerHTML = htmlContent;
    modal.classList.remove('hidden');
}


function setupHelpModal() {
    const modal = document.getElementById('help-modal');
    const closeBtn = document.getElementById('close-help-btn');
	const closeBtnBottom = document.getElementById('close-help-btn-bottom');
    const backdrop = document.getElementById('help-modal-backdrop');
    const mainHelpToggle = document.getElementById('help-toggle');

    const close = () => modal.classList.add('hidden');

    closeBtn.addEventListener('click', close);
	closeBtnBottom.addEventListener('click', close);
    backdrop.addEventListener('click', close);

    // Le bouton d'aide du header affiche l'aide générale
    mainHelpToggle.addEventListener('click', () => {
        openModal('<i class="fas fa-info-circle mr-2"></i>Comment utiliser Automathix ?', `
            <div>
                            <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">1. Mode de jeu</h4>
                            <p>Choisissez votre mode de jeu dans le menu.</p>
                        </div>
                        
                        <div>
                            <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">2. Sélection</h4>
                            <p>Choisissez les thèmes et les questions que vous souhaitez travailler en cochant les cases, puis cliquez sur <strong>Valider la sélection</strong>.</p>
                        </div>

                        <div>
                            <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">3. Organisation</h4>
                            <p>Sur l'écran suivant, vous pouvez modifier l'ordre des questions par "glisser-déposer".</p>
                        </div>						
						<div>
                            <h4 class="font-bold text-blue-600 dark:text-blue-400 mb-1">4. Lancement</h4>
                            <p>Lancez la partie ou configurez le jeu, <strong>jouez !</strong></p>
                        </div>
						<p><i class="fas fa-lightbulb text-blue-600 mr-2"></i>Cliquez sur le titre pour revenir au menu depuis n'importe quelle page.</p>
        `);
    });
}



// titre cliquable pour retour menu
function setupGlobalNavigation() {
    const title = document.getElementById('main-title');
    if (title) {
        title.addEventListener('click', () => {
            // Optionnel : ajouter une confirmation si un jeu est en cours
            // if (appState.currentMode && !confirm("Quitter la partie en cours ?")) return;
            
            navigateTo('home');
        });
    }
}


// Point d'entrée de l'application
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation globale
    setupThemeToggle();
	setupHelpModal();
    setupGlobalNavigation();
    // Lancer la page d'accueil
    navigateTo('home');
});

// On crée une fonction réutilisable pour le redimensionnement
function handleResize() {
    clearTimeout(window.resizeTimer);
    // On passe à 300ms pour laisser le temps au téléphone de tourner physiquement
    window.resizeTimer = setTimeout(() => {
        // On ajuste les textes et les maths
        adjustMathFontSize();

        
    }, 300);
}

window.addEventListener("resize", handleResize);
window.addEventListener('orientationchange', handleResize);