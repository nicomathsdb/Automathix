// src/views/selection.js
import { categories } from '../data/questions.js';
import { navigateTo, appState } from '../main.js';

export function initSelection(appContainer) {
    appContainer.innerHTML = `
        <section class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative z-10">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">Sélection des automatismes</h2>
                <button id="select-all-btn" class="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    <i class="fas fa-check-square mr-2"></i>Tout sélectionner
                </button>
            </div>
            
            <div id="categories-container" class="space-y-4 max-h-[60vh] overflow-y-auto pr-2"></div>
            
            <div class="mt-8 flex justify-center">
                <button id="validate-selection" class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                    <i class="fas fa-check-circle mr-2"></i>Valider la sélection
                </button>
            </div>
        </section>
    `;

    setupCategories(appContainer);
    setupEventListeners(appContainer);
}

function setupCategories(appContainer) {
    const container = appContainer.querySelector('#categories-container');
    
    categories.forEach((category, catIndex) => {
        // État de repliage (gardé dans appState si besoin, ou créé ici)
        const isExpanded = false; 
        
        const categoryEl = document.createElement('div');
        categoryEl.classList.add('bg-blue-50', 'dark:bg-gray-700/50', 'rounded-lg', 'overflow-hidden');
        
        const header = document.createElement('div');
        header.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'cursor-pointer', 'bg-blue-100', 'dark:bg-gray-700');
        
        header.innerHTML = `
            <h3 class="font-bold text-blue-800 dark:text-blue-200">${category.name}</h3>
            <div>
                <button class="select-category-btn bg-blue-200 text-blue-700 hover:bg-blue-300 dark:bg-blue-800 dark:text-blue-300 dark:hover:bg-blue-700 px-3 py-1 mr-1 rounded text-xs">
                    <i class="fas fa-check-circle mr-1"></i>Tout sélectionner
                </button>
                <span class="toggle-icon text-blue-700 dark:text-blue-300">
                    <i class="fas fa-chevron-${isExpanded ? 'up' : 'down'}"></i>
                </span>
            </div>
        `;
        
        const questionsContainer = document.createElement('div');
        questionsContainer.classList.add('space-y-2', 'p-4');
        questionsContainer.style.display = isExpanded ? 'block' : 'none';
        
        category.questions.forEach((question, index) => {
            const questionId = `${catIndex}-${index}`;
			
			let isChecked = '';
			if (appState.selectedQuestions.length > 0){
				// Si la question est déjà dans la liste, on met par défaut à checked
				const allreadyCheck = appState.selectedQuestions.find((q) => q.category === category.name && q.indQ === index);
				if (allreadyCheck)isChecked = 'checked';
			}
            
            const questionEl = document.createElement('div');
            questionEl.classList.add('flex', 'items-center');
            questionEl.innerHTML = `
                <input type="checkbox" id="${questionId}" class="form-checkbox h-5 w-5 text-blue-600 rounded flex-shrink-0 cursor-pointer" ${isChecked} />
                <label for="${questionId}" class="ml-3 text-gray-700 dark:text-gray-300 cursor-pointer select-none">${question}</label>
            `;
            questionsContainer.appendChild(questionEl);
        });
        
        categoryEl.appendChild(header);
        categoryEl.appendChild(questionsContainer);
        container.appendChild(categoryEl);
        
        // Clic dépliage
        header.addEventListener('click', (e) => {
            if (!e.target.closest('.select-category-btn')) {
                const icon = header.querySelector('.toggle-icon i');
                const shouldExpand = questionsContainer.style.display === 'none';
                questionsContainer.style.display = shouldExpand ? 'block' : 'none';
                icon.classList = shouldExpand ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
            }
        });
        
        // Clic Tout sélectionner catégorie
        header.querySelector('.select-category-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const checkboxes = questionsContainer.querySelectorAll('input[type="checkbox"]');
            const areAllChecked = Array.from(checkboxes).every(cb => cb.checked);
            checkboxes.forEach(cb => cb.checked = !areAllChecked);
        });
    });
}

function setupEventListeners(appContainer) {
    // Select All Global
    appContainer.querySelector('#select-all-btn').addEventListener('click', () => {
        const checkboxes = appContainer.querySelectorAll('input[type="checkbox"]');
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        checkboxes.forEach(cb => cb.checked = !allChecked);
    });

    // Validation
    appContainer.querySelector('#validate-selection').addEventListener('click', () => {
        appState.selectedQuestions = [];
        
        appContainer.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            const [catIndex, qIndex] = checkbox.id.split('-');
            const category = categories[parseInt(catIndex)];
            appState.selectedQuestions.push({
                id: checkbox.id,
                text: category.questions[parseInt(qIndex)],
                category: category.name,
                indQ: parseInt(qIndex)
            });
        });
        
        if (appState.selectedQuestions.length === 0) {
            alert('Veuillez sélectionner au moins une question.');
            return;
        }
        
        // Navigation vers étape suivante
        navigateTo('order');
    });
}