// src/main.js

// Importation des vues (Assurez-vous que ces fichiers existent dans src/views/)
import { initHome } from './views/home.js';
import { initSelection } from './views/selection.js';
import { initOrder } from './views/order.js';
import { initPlayground } from './views/playground.js';
import { initTimeAttack } from './views/timeattack.js';

// État global partagé par toute l'application
export const appState = {
    currentMode: null,     // mode de jeu
    subMode: null,         // 'flashcard' ou 'quiz' (pour le mode playground)
    isRandom: false,
    selectedQuestions: [] // Stocke les questions choisies
};

// Fonction centrale de navigation
export function navigateTo(viewName) {
    const appContainer = document.getElementById('app');
    

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
        function setupHelpModal() {
            const modal = document.getElementById('help-modal');
            const openBtn = document.getElementById('help-toggle');
            const closeBtn = document.getElementById('close-help-btn');
            const closeBtnBottom = document.getElementById('close-help-btn-bottom');
            const backdrop = document.getElementById('help-modal-backdrop');

            const toggleModal = (show) => {
                if (show) {
                    modal.classList.remove('hidden');
                    // Petit effet d'entrée
                    modal.querySelector('.transform').classList.add('scale-100', 'opacity-100');
                    modal.querySelector('.transform').classList.remove('scale-95', 'opacity-0');
                } else {
                    modal.classList.add('hidden');
                }
            };

            openBtn.addEventListener('click', () => toggleModal(true));
            closeBtn.addEventListener('click', () => toggleModal(false));
            closeBtnBottom.addEventListener('click', () => toggleModal(false));
            
            // Fermer en cliquant en dehors
            backdrop.addEventListener('click', () => alert('yo'));
            
            // Fermer avec la touche Echap
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                    toggleModal(false);
                }
            });
        }


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