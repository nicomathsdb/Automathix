// Questions par catégorie
        export const categories = [
            {
                name: "Calcul numérique",
                questions: [
                    "Comparer deux nombres directement ou par calcul de leur différence ou, s'ils sont strictement positifs, de leur quotient.",
                    "Effectuer des conversions de longueurs, aires, volumes, masses, contenances.",
                    "Effectuer des conversions de durées.",
                    "Effectuer des conversions de vitesses.",
                    "Savoir calculer des produits en lien avec les tables.",
                    "Entretenir l’écriture décimale des fractions simples.",
                    "Prendre une fraction simple d’un nombre.",
                    "Effectuer des comparaisons entre des fractions simples.",
                    "Somme et différence de fractions simples.",
					"Somme et différence nombre entier et fraction simple.",
					"Produit ou quotient de fractions simples.",
					"Produit ou quotient nombre entier et fraction simple.",
					"Fractions et priorités de calcul",
                    "Connaître les carrés des entiers de 1 à 12, les racines carrées des carrés parfaits.",                  
                    "Puissances de 10 positives et négatives.",
                    "Notation scientifique.",
                    "Effectuer des opérations sur les puissances.",
                    "Passer d’une écriture d’un nombre à une autre (décimale, fractionnaire, pourcentage, scientifique).",
                    "Estimer un ordre de grandeur.",
                    "S’assurer de la vraisemblance, de la cohérence d’un résultat."
                ]
            },
            {
                name: "Calcul algébrique",
                questions: [
					"Traduire en une expression algébrique",
                    "Prendre l’opposé d’une expression.",
                    "Connaître les calculs de base",
                    "Réduire une expression algébrique simple.",
                    "Développer une expression algébrique simple.",
					"Développer avec les identités remarquables.",
					"Factoriser une expression algébrique simple comme ax + bx ou ax² + bx.",
					"Factoriser avec les identités remarquables.",
					"Résoudre une équation du type : ax + b = c",
                    "Résoudre une équation du type : ax + b = cx + d.",
                    "Résoudre une équation du type : x² = a.",
                    "Résoudre une équation produit nul.",
                    "Résoudre une équation du type : a/x = b.",
                    "Résoudre une inéquation du premier degré.",
					"Déterminer le signe d’une expression du premier degré.",
					"Déterminer le signe d’une expression factorisée du second degré.",
                    "Isoler une variable dans une égalité ou une inégalité qui en comporte plusieurs.",
                    "Effectuer une application numérique d’une formule."
                ]
            },
            {
                name: "Proportionnalité et pourcentages",
                questions: [
                    "Mobiliser une procédure adaptée (propriété de linéarité pour la multiplication ou l’addition, retour à l’unité) pour résoudre un problème lié à la proportionnalité.",
                    "Calculer, exprimer une proportion sous différentes formes (décimale, fractionnaire, pourcentage).",
                    "Prendre un pourcentage simple d’un nombre.",
                    "Utiliser une proportion pour calculer une partie connaissant le tout, ou le tout connaissant une partie.",
                    "Calculer la proportion d’une proportion."                   
                ]
            },
            {
                name: "Évolutions et variations",
                questions: [
                    "Lier taux d'évolution et coefficient multiplicateur.",
                    "Appliquer un taux d’évolution pour calculer une valeur finale ou initiale.",
                    "Calculer un taux d’évolution, l’exprimer en pourcentage.",
                    "Calculer le taux d’évolution équivalent à plusieurs évolutions successives.",
                    "Calculer un taux d’évolution réciproque."
                ]
            },
            {
                name: "Fonctions et représentations",
                questions: [
					"Calculer une image, Reconnaître un antécédent.",
                    "Déterminer graphiquement des images et des antécédents.",
                    "Exploiter une équation de courbe (appartenance d’un point, calcul de coordonnées).",
                    "Reconnaître l’expression d’une fonction linéaire, d’une fonction affine, savoir que leur représentation graphique est une droite.",
                    "Résoudre graphiquement une équation du type : f(x) = k",
                    "Résoudre graphiquement une équation du type : f(x) = g(x)",
                    "Résoudre graphiquement une inéquation du type : f(x) < k, etc..",
                    "Résoudre graphiquement une inéquation du type : f(x) < g(x), etc..",
                    "Déterminer graphiquement le signe d’une fonction.",
                    "Déterminer graphiquement le tableau de variations d'une fonction.",
                    "Tracer une droite donnée par son équation réduite.",
                    "Tracer une droite donnée par un point et son coefficient directeur.",
                    "Lire graphiquement l’équation réduite d’une droite.",
                    "Déterminer le coefficient directeur d’une droite à partir des coordonnées de deux de ses points."
                ]
            },
            {
                name: "Statistiques",
                questions: [                   
					"Lire un graphique, un histogramme, un diagramme en barres ou circulaire, un diagramme en boîte ou toute autre représentation (repérer l’origine du repère, les unités de graduations ou les échelles, etc.).",
					"Passer du graphique aux données et vice-versa.",
					"Calculer la moyenne d'un petit nombre de valeurs.",
                    "Calculer une moyenne pondérée dans le cas d’une série discrète.",
                    "Déterminer une médiane dans le cas d’une série sous forme de données brutes.",
					"Déterminer les quartiles dans le cas d’une série sous forme de données brutes.",
                    "Résoudre des problèmes faisant intervenir les différents indicateurs statistiques.",
                    "Calculer des effectifs cumulés croissants.",
                    "Donner les quartiles et la médiane d’une série donnée sous forme de tableau d’effectifs ou de diagramme en barres.",
                    "Construire des boîtes à moustaches.",
					"Comparer des distributions à l’aide de boites à moustaches."
                ]
            },
            {
                name: "Probabilités",
                questions: [
				    "Savoir qu’une probabilité est un nombre entre 0 et 1.",                    
                    "Calculer la probabilité d’un événement comme somme des probabilités des issues qui le composent.",
                    "Utiliser la relation P(A) = Card(A) / Card(Ω) dans le cas de l’équiprobabilité.",                   
                    "Définir : événement contraire, réunion, intersection, ensemble vide.",
                    "Calculer des probabilités d’événements faisant intervenir « ou », « et ».",
					"Savoir calculer la probabilité de l’événement contraire.",
                    "Pour des expériences aléatoires à deux épreuves indépendantes, représenter ou utiliser des arbres de dénombrement ou des tableaux.",
                    "Calculer des probabilités conditionnelles lorsque les événements sont présentés sous forme de tableau croisé d’effectifs ou d’arbres pondérés.",
                    "Distinguer P(A ∩ B), P<sub>A</sub>(B), P<sub>B</sub>(A)."
                ]
            }
        ];

        // Générateurs de questions aléatoires par catégorie		
		const questionGenerators = {
            "Calcul numérique": {
                    "Comparer deux nombres":  () => {
						const type = randInt(1, 2);

						if (type === 1) {
							// Type 1 : Comparaison de fraction, décimal, pourcentage
							const d1 = getRandomItem([4, 5, 8, 10]);
							const n1 = randInt(1, d1 - 1);
							const valA = n1 / d1;
							
							// Variation aléatoire pour B et C
							const variationB = (randInt(1, 3) / 100) * getRandomItem([-1, 1]);
							const valB = valA + variationB;
							
							let variationC;
							do { // S'assurer que la variation de C est différente
								variationC = (randInt(1, 3) / 100) * getRandomItem([-1, 1]);
							} while (variationC === variationB);
							const valC = valA + variationC;

							// On définit les types de nombres
							const numberDefinitions = [
								{ value: valA, text: `\\dfrac{${n1}}{${d1}}` },
								{ value: valB, text: `\\dfrac{${affNum(valB*100)}}{100}` },
								{ value: valC, text: affNum(valC) }
							];

							// On mélange les définitions
							const numbersForQuestion = [...numberDefinitions].sort(() => Math.random() - 0.5);
							
							const letters = ['A', 'B', 'C'];
							for (let i=0;i<numbersForQuestion.length;i++) numbersForQuestion[i].name = letters[i];
							
							// On trie par valeur pour la réponse
							const sorted = [...numbersForQuestion].sort((a, b) => a.value - b.value);
							const sortedNames = sorted.map(n => n.name).join(' < ');
							
							// --- AJOUT OPTIONS QCM ---
							const correctText = sortedNames;
                            // Distracteurs : Inversion totale, ou inversion partielle
                            const dist1 = [...sorted].reverse().map(n => n.name).join(' < ');
                            const dist2 = [sorted[0], sorted[2], sorted[1]].map(n => n.name).join(' < '); // Erreur sur les 2 derniers
                            const dist3 = [sorted[1], sorted[0], sorted[2]].map(n => n.name).join(' < '); // Erreur sur les 2 premiers
                            
                            let options = [
                                { text: `$${correctText}$`, isCorrect: true },
                                { text: `$${dist1}$`, isCorrect: false },
                                { text: `$${dist2}$`, isCorrect: false },
                                { text: `$${dist3}$`, isCorrect: false }
                            ];
                            options.sort(() => Math.random() - 0.5);
                            // -------------------------

							const questionText = numbersForQuestion.map(n => `${n.name} = ${n.text}`).join(' \\quad ');

							return {
								question: `<p>Voici trois nombres : <br/>$${questionText}$<br/> Quel est le classement par ordre croissant ?</p>`,
								answer: `<p>Le classement est : $${sortedNames}$.</p>`,
                                options: options
							};

						} else {
							// Type 2 : Comparaison de puissances et décimaux
							const pA = randInt(4, 6);
							const pB = randInt(4, 6);
							let nC;
							do { nC = getRandomItem([2, 4, 5]); } while (pA===5 && nC===4);
							const pD = 3;

							const numbers = [
								{ value: Math.pow(1/pA, 2), text: `\\left(\\dfrac{1}{${pA}}\\right)^2`},
								{ value: Math.pow(1/2, pB), text: `\\left(\\dfrac{1}{2}\\right)^{${pB}}`},
								{ value: nC / 100, text: affNum(nC/100) },
								{ value: Math.pow(1/3, pD), text: `\\left(\\dfrac{1}{3}\\right)^{${pD}}`},
							];
							
							// On mélange les nombres
							const shuffled = [...numbers].sort(() => Math.random() - 0.5);
							
							const letters = ['A', 'B', 'C', 'D'];
							for (let i=0;i<shuffled.length;i++) shuffled[i].name = letters[i];

							// On trouve le plus grand pour la réponse
							const largest = numbers.reduce((max, n) => n.value > max.value ? n : max, numbers[0]);
							
							// --- AJOUT OPTIONS QCM ---
                            // Les options sont simplement les lettres A, B, C, D
                            const options = letters.map(l => ({
                                text: l,
                                isCorrect: l === largest.name
                            }));
                            // -------------------------

							const questionText = shuffled.map(n => `${n.name} = ${n.text}`).join('\\,;');

							return {
								question: `<p>Voici quatre nombres : <br/>$${questionText}$<br/>Quel est le plus grand ?</p>`,
								answer: `<p>Le plus grand est $${largest.name}$.</p>`,
                                options: options
							};
						}
					},
                    "Effectuer des conversions (longueurs, aires, volumes, masses, contenances).": () => {
						const types = {
							"longueur": [["km", 1000], ["m", 100], ["cm", 10]],
							"masse": [["kg", 1000], ["g", 1000], ["mg", 1]],
							"aire": [["km²", 1000000], ["m²", 10000], ["cm²", 100]],
							"volume": [["m³", 1000], ["dm³", 1000], ["cm³", 1]],
							"contenance": [["L", 10], ["dL", 10], ["cL", 10]]
						};
						const typeName = getRandomItem(Object.keys(types));
						const units = types[typeName];
						
						const fromIndex = randInt(0, units.length - 2);
						const toIndex = fromIndex + 1;

						const [fromUnit, factor] = units[fromIndex];
						const [toUnit] = units[toIndex];
						
						const value = randInt(2, 50) / 10;
						const result = value * factor;

						// Décider aléatoirement du sens de la conversion
						if (Math.random() < 0.5) {
							// Conversion simple (ex: m -> cm)
                            // --- OPTIONS QCM ---
                            let opts = [
                                { text: `$${affNum(result)}$`, isCorrect: true },
                                { text: `$${affNum(result/10)}$`, isCorrect: false },
                                { text: `$${affNum(result*10)}$`, isCorrect: false },
                                { text: `$${affNum(value/factor)}$`, isCorrect: false } // Opération inverse
                            ];
                            opts.sort(() => Math.random() - 0.5);
                            // -------------------
							return {
								question: `Convertir $${affNum(value)}$ ${fromUnit} en ${toUnit}.`,
								answer: `<p>$${affNum(value)}$ ${fromUnit} = $${affNum(result)}$ ${toUnit}</p>`,
                                options: opts
							};
						} else {
							// Conversion inverse (ex: cm -> m)
                            // --- OPTIONS QCM ---
                            let opts = [
                                { text: `$${affNum(value)}$`, isCorrect: true },
                                { text: `$${affNum(value/10)}$`, isCorrect: false },
                                { text: `$${affNum(value*10)}$`, isCorrect: false },
                                { text: `$${affNum(result*factor)}$`, isCorrect: false } // Opération inverse
                            ];
                            opts.sort(() => Math.random() - 0.5);
                            // -------------------
							return {
								question: `Convertir $${affNum(result)}$ ${toUnit} en ${fromUnit}.`,
								answer: `<p>$${affNum(result)}$ ${toUnit} = $${affNum(value)}$ ${fromUnit}</p>`,
                                options: opts
							};
						}
					},
					"Effectuer des conversions de durées.": () => {
					    let question, answer, options = [];
						if (Math.random() < 0.5) {
							const type = randInt(1, 3);
							if (type === 1) { // h -> min
								const h = randInt(2, 9);
								question = `Convertir ${h} heures en minutes.`;
								answer = `<p>$${h} \\times 60 = ${h * 60}$ minutes.</p>`;
                                options = [
                                    { text: `$${h * 60}$`, isCorrect: true },
                                    { text: `$${h * 100}$`, isCorrect: false },
                                    { text: `$${h * 30}$`, isCorrect: false },
                                    { text: `$${h * 60 + 30}$`, isCorrect: false }
                                ];
							} else if (type === 2) { // min -> s
								const min = randInt(2, 9);
								question = `Convertir ${min} minutes en secondes.`;
								answer = `<p>$${min} \\times 60 = ${min * 60}$ secondes.</p>`;
                                options = [
                                    { text: `$${min * 60}$`, isCorrect: true },
                                    { text: `$${min * 100}$`, isCorrect: false },
                                    { text: `$${min * 10}$`, isCorrect: false },
                                    { text: `$${min + 60}$`, isCorrect: false }
                                ];
                            } else {    // h -> s
								const h = randInt(2, 6);
								question = `Convertir ${h} heures en secondes.`;
								answer = `<p>$${h} \\times 3600 = ${h * 3600}$ secondes.</p>`;
                                options = [
                                    { text: `$${h * 3600}$`, isCorrect: true },
                                    { text: `$${h * 60}$`, isCorrect: false },
                                    { text: `$${h * 1000}$`, isCorrect: false },
                                    { text: `$${h * 360}$`, isCorrect: false }
                                ];
							}
						} else { // h et min -> min
							const h = randInt(1, 5);
							const m = 5*randInt(1,11);   // multiple de 5
							const minutes = h*60+m;
							if (Math.random() < 0.5) {
								question = `Convertir ${h}h${m} en minutes.`;
								answer = `${minutes} minutes`;
                                options = [
                                    { text: `$${minutes}$`, isCorrect: true },
                                    { text: `$${h * 100 + m}$`, isCorrect: false },
                                    { text: `$${h * 60 + m + 10}$`, isCorrect: false },
                                    { text: `$${(h+1)*60 + m}$`, isCorrect: false }
                                ];
							} else {
								question = `Convertir ${minutes} minutes en heures et minutes.`;
								answer = `${h}h${m}`;
                                options = [
                                    { text: `${h}h${m}`, isCorrect: true },
                                    { text: `${Math.floor(minutes/100)}h${minutes%100}`, isCorrect: false },
                                    { text: `${h}h${m+10}`, isCorrect: false },
                                    { text: `${h-1}h${m+60}`, isCorrect: false }
                                ];
							}
						}
                        options.sort(() => Math.random() - 0.5);
						return { question, answer, options };
					},
					"Effectuer des conversions de vitesses.": () => {
						if (Math.random() < 0.5) { // km/h -> m/s
							const kmh = getRandomItem([36, 72, 108, 144]);
							const ms = kmh / 3.6;
                            
                            let opts = [
                                { text: `$${ms}$ m/s`, isCorrect: true },
                                { text: `$${kmh * 3.6}$ m/s`, isCorrect: false },
                                { text: `$${kmh / 10}$ m/s`, isCorrect: false },
                                { text: `$${Math.round(kmh / 2)}$ m/s`, isCorrect: false }
                            ];
                            opts.sort(() => Math.random() - 0.5);
                            
							return {
								question: `Convertir une vitesse de ${kmh} km/h en m/s.`,
								answer: `<p>$${ms}$ m/s</p>`,
                                options: opts
							};
						} else { // m/s -> km/h
							const ms = getRandomItem([10, 15, 20, 25, 30]);
							const kmh = ms * 3.6;
                            
                            let opts = [
                                { text: `$${kmh}$ km/h`, isCorrect: true },
                                { text: `$${Math.round(ms / 3.6 * 10) / 10}$ km/h`, isCorrect: false },
                                { text: `$${ms * 10}$ km/h`, isCorrect: false },
                                { text: `$${ms * 4}$ km/h`, isCorrect: false }
                            ];
                            opts.sort(() => Math.random() - 0.5);
                            
							return {
								question: `Convertir une vitesse de ${ms} m/s en km/h.`,
								answer: `<p>$${kmh}$ km/h</p>`,
                                options: opts
							};
						}
					},
                    "produits en lien avec les tables": () => {
					    const n1 = randInt(-3,3);
						let n2;
						do { n2 = randInt(-3,3); } while (n1 === 0 && n2 === 0);
                        const a = randInt(2, 10) * Math.pow(10,n1);
                        const b = randInt(2, 10) * Math.pow(10,n2);
                        
                        const res = a * b;
                        let opts = [
                            { text: `$${affNum(res)}$`, isCorrect: true },
                            { text: `$${affNum(res*10)}$`, isCorrect: false },
                            { text: `$${affNum(res/10)}$`, isCorrect: false },
                            { text: `$${affNum(res*100)}$`, isCorrect: false }
                        ];
                        opts.sort(() => Math.random() - 0.5);

                        return {
                            question: `Calculer : $${affNum(a)} \\times ${affNum(b)}$`,
                            answer: `<p>$${affNum(res)}$</p>`,
                            options: opts
                        };
                    },
                    "écriture décimale des fractions": () => {
                        if (Math.random() < 0.5) {
							const fractions = [];
							for (let i=1;i<=5;i++) fractions.push({q: `\\dfrac{${i}}{2}`, a: i/2});
							for (let i=1;i<=7;i+=2) fractions.push({q: `\\dfrac{${i}}{4}`, a: i/4});
							for (let i=1;i<=5;i++) fractions.push({q: `\\dfrac{${i}}{5}`, a: i/5});
							for (let i=1;i<=3;i++) fractions.push({q: `\\dfrac{1}{${Math.pow(10,i)}}`, a: 1/Math.pow(10,i)});
							const num = randInt(2,9);
							for (let i=1;i<=2;i++) fractions.push({q: `\\dfrac{${num}}{1}`, a: num});    //double chance
							const choice = getRandomItem(fractions);
                            
                            const val = choice.a;
                            let opts = [
                                { text: `$${affNum(val)}$`, isCorrect: true },
                                { text: `$${affNum(val*10)}$`, isCorrect: false },
                                { text: `$${affNum(val+0.1)}$`, isCorrect: false },
                                { text: `$${affNum(Math.floor(val))}$`, isCorrect: false }
                            ];
                                                        
                            opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                            while(opts.length < 4) opts.push({text: `$${affNum(val+randInt(1,9))}$`, isCorrect: false});
                            opts.sort(() => Math.random() - 0.5);

							return {
								question: `Donner l'écriture décimale de $${choice.q}$.`,
								answer: `<p>$${affNum(choice.a)}$</p>`,
                                options: opts
							};
						} else {
							const terms = [];
							let sum = 0;

							// 1. Ajouter un terme entier (dans 50% des cas)
							if (Math.random() < 0.5) {
								const integerPart = randInt(1, 99);
								terms.push(integerPart.toString());
								sum += integerPart;
							}

							// 2. Ajouter un terme décimal (dans 50% des cas)
							if (Math.random() < 0.5) {
								const decimalPartValue = randInt(1, 9) / 10;
								terms.push(affNum(decimalPartValue));
								sum += decimalPartValue;
							}

							// 3. Ajouter une ou deux fractions décimales
							const numFractions = sum === 0 ? 2 : randInt(1, 2);    // obligatoirement 2 si pas d'entier ni de décimal
							const usedDenominators = [];
							for (let i = 0; i < numFractions; i++) {
								let denominator;
								// S'assurer qu'on n'a pas deux fois la même fraction
								do {
									denominator = Math.pow(10,randInt(1, 4)); // 10, 100, 1000 ou 10000
								} while (usedDenominators.includes(denominator));
								
								usedDenominators.push(denominator);
								const numerator = randInt(1, 9);
								terms.push(`\\dfrac{${numerator}}{${denominator}}`);
								sum += numerator / denominator;
							}

							// 4. Mélanger les termes pour la question
							const shuffledTerms = [...terms].sort(() => Math.random() - 0.5);
							const questionText = shuffledTerms.join(' + ');
                            
                            // Distracteurs : erreur de rang
                            let opts = [
                                { text: `$${affNum(sum)}$`, isCorrect: true },
                                { text: `$${affNum(sum * 10)}$`, isCorrect: false },
                                { text: `$${affNum(sum / 10)}$`, isCorrect: false },
                                { text: `$${affNum(sum + 0.09)}$`, isCorrect: false } // valeur random proche
                            ];
                            opts.sort(() => Math.random() - 0.5);

							return {
								question: `<p>On considère $A = ${questionText}$.<br>Quelle est l'écriture décimale de A ?</p>`,
								answer: `<p>$A = ${affNum(sum)}$</p>`,
                                options: opts
							};
						}
                    },
                    "Prendre une fraction": () => {
                        const d = randInt(2, 9), n = randInt(1, d-1), val = randInt(2, 10) * d;
                        const res = (n / d) * val;
                        
                        let opts = [
                            { text: `$${res}$`, isCorrect: true },
                            { text: `$${(d/n)*val}$`, isCorrect: false },
                            { text: `$${n*val}$`, isCorrect: false },
                            { text: `$${val/d}$`, isCorrect: false }
                        ];
                        // Nettoyage affichage (virer virgules inutiles si entier)
                        opts.forEach(o => { 
                            const v = parseFloat(o.text.replace('$',''));
                            if(Number.isInteger(v)) o.text = `$${v}$`;
                            else o.text = `$${affNum(v)}$`;
                        });
                        opts.sort(() => Math.random() - 0.5);

                        return {
                            question: `Calculer $\\dfrac{${n}}{${d}}$ de ${val}.`,
                            answer: `<p>$${res}$</p>`,
                            options: opts
                        };
                    },
                    "comparaisons entre des fractions": () => {
					    const type = randInt(1,3);
						let n1, d1, n2, d2;

                        // 1. GÉNÉRATION DES NOMBRES SELON LE CAS
						if (type === 1) {   // CAS 1 : Même dénominateur
							d1 = randInt(2,25); 
                            d2 = d1;
							n1 = randInt(1,25);
                            // On évite l'égalité pour le QCM
							do { n2 = randInt(1,25); } while (n1 === n2);

						} else if (type === 2) {   // CAS 2 : Même numérateur
							n1 = randInt(1,25); 
                            n2 = n1;
							d1 = randInt(2,25);
                            // On évite l'égalité
							do { d2 = randInt(2,25); } while (d1 === d2);

						} else {   // CAS 3 : Comparaison par rapport à 1
							d1 = randInt(2,21); 
							d2 = randInt(2,21,[d1]); // Dénominateurs différents
							
							if (Math.random() < 0.5) {   
                                // n1/d1 < 1 et n2/d2 > 1
								n1 = randInt(Math.max(d1-5,1), d1-1);
								n2 = randInt(d2+1, d2+5);
							} else {   
                                // n1/d1 > 1 et n2/d2 < 1
								n1 = randInt(d1+1, d1+5);
								n2 = randInt(Math.max(d2-5,1), d2-1);
							}
						}

                        // 2. CALCUL DU RÉSULTAT
                        const val1 = n1 / d1;
                        const val2 = n2 / d2;
                        const symbol = val1 > val2 ? '>' : '<';
                        
                        // Chaînes LaTeX pour l'affichage
                        const frac1 = `\\dfrac{${n1}}{${d1}}`;
                        const frac2 = `\\dfrac{${n2}}{${d2}}`;

                        // 3. CRÉATION DES OPTIONS AVEC FRACTIONS COMPLÈTES
                        let options = [
                            { text: `$${frac1} < ${frac2}$`, isCorrect: symbol === '<' },
                            { text: `$${frac1} > ${frac2}$`, isCorrect: symbol === '>' },
                            { text: `$${frac1} = ${frac2}$`, isCorrect: false },
                            { text: `On ne peut pas savoir`, isCorrect: false }
                        ];
                        
                        options.sort(() => Math.random() - 0.5);

                        // 4. RETOUR DE LA QUESTION
						return { 
                            question: `Comparer $${frac1}$ et $${frac2}$.`, 
                            answer: `<p>$${frac1} ${symbol} ${frac2}$</p>`,
                            options: options
                        };
                    },
                    "Somme et différence de fractions": () => {
                        let n1 = randInt(1, 9), n2 = randInt(1, 9);
                        const op = Math.random() < 0.5 ? '+' : '-';
						let d1 ,d2, res_n, res_d;
						const choix = Math.random();
						if (choix <0.2) {   // même dénominateur
							d1 = randInt(2, 9);
							d2 = d1;
							res_n = op === '+' ? n1+n2 : n1-n2;
                            res_d = d1;
						} else if (choix < 0.5) {  // dénominateurs multiples
							d1 = randInt(2, 9);
							const k = randInt(2,9);
							d2 = k * d1;
							res_n = op === '+' ? n1*k+n2 : n1*k-n2;
                            res_d = d2;
							if (Math.random() < 0.5) {
								[n1,n2] = [n2,n1];
								[d1,d2] = [d2,d1];
								if (op === '-') res_n = -1*res_n;
							}
						} else {  // dénominateurs quelconques
						    d1 = randInt(2,9);
							do {
								d2 = randInt(2,9);
							} while (d1%d2 === 0 || d2%d1 === 0);							
							res_d = lcm(d1,d2);
							res_n = op === '+' ? n1*(res_d/d1) + n2*(res_d/d2) : n1*(res_d/d1) - n2*(res_d/d2);
						}
                        
                        const simp = simpFrac(res_n, res_d);
                        
                        // Distracteurs : Somme des numérateurs / Somme des dénominateurs
                        const badN = op === '+' ? n1+n2 : n1-n2;
                        const badD = op === '+' ? d1+d2 : Math.abs(d1-d2) || 1;
                        
                        let opts = [
                            { text: `$${fracSign(simp.n, simp.d)}$`, isCorrect: true },
                            { text: `$${fracSign(badN, badD)}$`, isCorrect: false },
                            { text: `$${fracSign(badN, Math.max(d1,d2))}$`, isCorrect: false },
                            { text: `$${fracSign(res_n, 1)}$`, isCorrect: false }
                        ];
                        // Filtre doublons
                        opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                        while(opts.length < 4) opts.push({text: `$${randInt(1,9)}/${randInt(2,9)}$`, isCorrect: false});
                        opts.sort(() => Math.random() - 0.5);

                        return {
                            question: `Calculer $\\dfrac{${n1}}{${d1}} ${op} \\dfrac{${n2}}{${d2}}$.`,
                            answer: `<p>$${fracSign(res_n,res_d)}$ ${res_n !== 0 && gcd(res_n, res_d) !==1 ? 'ou encore $'+ affFracSimp(res_n,res_d).replace("=","") + '$' : ''}</p>`,
                            options: opts
                        };
                    },
                    "Somme et différence nombre entier et fraction": () => {
                        const d1 = randInt(2, 9), integer = randInt(1, 10);
						let n1;
						do {
							n1 = randInt(1,9);
						} while (gcd(n1,d1) !== 1);
                        const op = Math.random() < 0.5 ? '+' : '-';
                        let res_n = op === '+' ? integer * d1 + n1 : integer * d1 - n1;
						const res_d = d1;
						let question;
                        
                        let dist1; // (entier + num) / den
                        
						if (Math.random() < 0.5) {
							question = `Calculer $${integer} ${op} \\dfrac{${n1}}{${d1}}$.`;
                            dist1 = op === '+' ? integer + n1 : integer - n1;
						} else {
							question = `Calculer $\\dfrac{${n1}}{${d1}} ${op} ${integer}$.`;
							if (op === '-') res_n = -1 * res_n;
                            dist1 = op === '+' ? n1 + integer : n1 - integer;
						}
                        
                        const simp = simpFrac(res_n, res_d);
                        let opts = [
                            { text: `$${fracSign(simp.n, simp.d)}$`, isCorrect: true },
                            { text: `$${fracSign(dist1, d1)}$`, isCorrect: false },
                            { text: `$${fracSign(integer, d1)}$`, isCorrect: false },
                            { text: `$${fracSign(res_n, 1)}$`, isCorrect: false }
                        ];
                        opts.sort(() => Math.random() - 0.5);

                        return {
                            question: question,
                            answer: `<p>$${fracSign(res_n,res_d)}$ ${res_n !== 0 && gcd(res_n, res_d) !==1 ? 'ou encore $'+ affFracSimp(res_n,res_d).replace("=","") + '$' : ''}</p>`,
                            options: opts
                        };
                    },
                    "Produit ou quotient de fractions": () => {
                        const d1 = randInt(2, 9), n1 = randInt(2, 9, [d1]), d2 = randInt(2, 9), n2 = randInt(2, 9, [d2]);
                        const op = Math.random() < 0.5 ? '\\times' : '\\div';
                        const res_n = op === '\\times' ? n1*n2 : n1*d2;
                        const res_d = op === '\\times' ? d1*d2 : d1*n2;
                        
                        const simp = simpFrac(res_n, res_d);
                        // Distracteurs : Inversion de l'opérateur ou résultat non simplifié ou inverse
                        const invN = op === '\\times' ? n1*d2 : n1*n2;
                        const invD = op === '\\times' ? d1*n2 : d1*d2;
                        const invSimp = simpFrac(invN, invD);
                        
                        let opts = [
                            { text: `$${fracSign(simp.n, simp.d)}$`, isCorrect: true },
                            { text: `$${fracSign(invSimp.n, invSimp.d)}$`, isCorrect: false },
                            { text: `$${fracSign(res_d, res_n)}$`, isCorrect: false }, // Inverse du résultat
                            { text: `$${fracSign(n1+n2, d1+d2)}$`, isCorrect: false } // Addition naïve
                        ];
                        opts.sort(() => Math.random() - 0.5);

                        return {
                            question: `Calculer $\\dfrac{${n1}}{${d1}} ${op} \\dfrac{${n2}}{${d2}}$.`,
                            answer: `<p>$${fracSign(res_n,res_d)}$ ${res_n !== 0 && gcd(res_n, res_d) !==1 ? 'ou encore $'+ affFracSimp(res_n,res_d).replace("=","") + '$' : ''}</p>`,
                            options: opts
                        };
                    },
                    "Produit ou quotient nombre entier et fraction": () => {
					    const d1 = randInt(2, 9), integer = randInt(2, 10);
						let n1;
						do {
							n1 = randInt(1,9);
						} while (gcd(n1,d1) !== 1);
                        const op = Math.random() < 0.5 ? '\\times' : '\\div';
                        let res_n = op === '\\times' ? integer * n1 : integer * d1;
						let res_d = op === '\\times' ? d1 : n1;
						let question;
						if (Math.random() < 0.5) {
							question = `Calculer $${integer} ${op} \\dfrac{${n1}}{${d1}}$.`;
						} else {
							question = `Calculer $\\dfrac{${n1}}{${d1}} ${op} ${integer}$.`;
							if (op === '\\div') [res_n,res_d] = [res_d,res_n];
						}
                        
                        const simp = simpFrac(res_n, res_d);
                        // Distracteurs
                        const d1_res = simpFrac(res_d, res_n); // Inverse
                        const d2_res = simpFrac(integer + n1, d1); // Addition
                        
                        let opts = [
                            { text: `$${fracSign(simp.n, simp.d)}$`, isCorrect: true },
                            { text: `$${fracSign(d1_res.n, d1_res.d)}$`, isCorrect: false },
                            { text: `$${fracSign(d2_res.n, d2_res.d)}$`, isCorrect: false },
                            { text: `$${integer}$`, isCorrect: false }
                        ];
                        opts.sort(() => Math.random() - 0.5);
                        
                        return {
                            question: question,
                            answer: `<p>$${fracSign(res_n,res_d)}$ ${res_n !== 0 && gcd(res_n, res_d) !==1 ? 'ou encore $'+ affFracSimp(res_n,res_d).replace("=","") + '$' : ''}</p>`,
                            options: opts
                        };
                    },
					"Fractions et priorités": () => {
						const type = randInt(1, 2);
						let question, answer, options = [];

						if (type === 1) {
							// Type 1 : a/b - c/d * e/f
							const prov = randInt(2,9)
							const [a, b] = [1, prov];
							const [c, d] = [1, prov];
							let e, f;
							do {
								e = randInt(1, 9);
								f = randInt(2, 9);
							} while (e%f === 0);   //  e/f n'est pas entier

							question = `\\dfrac{${a}}{${b}} - \\dfrac{${c}}{${d}} \\times \\dfrac{${e}}{${f}}`;

							// Calcul
							// 1. Priorité à la multiplication
							const temp_n = c * e;
							const temp_d = d * f;
							// 2. Soustraction
							const final_n = a * temp_d - temp_n * b;
							const final_d = b * temp_d;
							// 3. Simplification
							const simp = simpFrac(final_n, final_d);
							
							answer = fracSign(simp.n,simp.d);
                            
                            // Erreur : soustraction d'abord
                            const w_n = a*d - b*c; const w_d = b*d; // (a/b - c/d)
                            const wrongN = w_n * e; const wrongD = w_d * f;
                            const wrongSimp = simpFrac(wrongN, wrongD);
                            
                            options = [
                                { text: `$${answer}$`, isCorrect: true },
                                { text: `$${fracSign(wrongSimp.n, wrongSimp.d)}$`, isCorrect: false },
                                { text: `$${fracSign(simp.d, simp.n)}$`, isCorrect: false },
                                { text: `$0$`, isCorrect: false }
                            ];
                            
						} else {
							// Type 2 : a / (b - c/d)
							const a = randInt(1, 5);
							const b = randInt(1, 3);
							let c, d;
							do {
								c = randInt(1, 5);
								d = randInt(2, 5);
							} while (b - c / d === 0); // Éviter la division par zéro

							question = `\\dfrac{${a}}{${b} - \\dfrac{${c}}{${d}}}`;

							// Calcul
							// 1. Priorité au dénominateur
							const denom_n = b * d - c;
							const denom_d = d;
							// 2. Division a / (denom_n / denom_d)
							const final_n = a * denom_d;
							const final_d = denom_n;
							// 3. Simplification
							const simp = simpFrac(final_n, final_d);
							
							answer = fracSign(simp.n,simp.d);	

                            // Erreur : division par b puis soustraction
                            // a/b - c/d
                            const w2_n = a*d - c*b; const w2_d = b*d;
                            const w2 = simpFrac(w2_n, w2_d);
                            
                            options = [
                                { text: `$${answer}$`, isCorrect: true },
                                { text: `$${fracSign(w2.n, w2.d)}$`, isCorrect: false },
                                { text: `$${fracSign(simp.d, simp.n)}$`, isCorrect: false },
                                { text: `$${a}$`, isCorrect: false }
                            ];
						}
                        
                        options = options.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                        options.sort(() => Math.random() - 0.5);
						
						return {
							question: `Donner le résultat sous forme irréductible de $$ A = ${question} $$`,
							answer: `$A = ${answer}$`,
                            options: options
						};
                    },
                    "carrés des entiers": () => {
                        const n = randInt(1, 12);
                        if (Math.random() < 0.5) {
                            const ans = n*n;
                            let opts = [
                                { text: `$${ans}$`, isCorrect: true },
                                { text: n === 2 ? `$${n}$` :`$${n*2}$`, isCorrect: false },
                                { text: `$${(n+1)*(n+1)}$`, isCorrect: false },
                                { text: `$${(n-1)*(n-1)}$`, isCorrect: false }
                            ];
                            opts.sort(() => Math.random() - 0.5);
                            return {
                                question: `Calculer $${n}^2$.`,
                                answer: `<p>$${ans}$</p>`,
                                options: opts
                            } 
                        } else {
                            const sq = n*n;
                             let opts = [
                                { text: `$${n}$`, isCorrect: true },
                                { text: `$${sq/2}$`, isCorrect: false },
                                { text: `$${sq*2}$`, isCorrect: false },
                                { text: `$${n*n}$`, isCorrect: false }
                            ];
                            opts.sort(() => Math.random() - 0.5);
                            return {
                                question: `Calculer $\\sqrt{${sq}}$.`,
                                answer: `<p>$${n}$</p>`,
                                options: opts
                            };
                        }
                    },
                    "Puissances de 10 positives et négatives": () => {
                        const exp = randInt(1, 6) * getRandomItem([-1,1]);
                        const val = Math.pow(10,exp);
                        
                        let opts = [
                            { text: `$${affNum(val, 6)}$`, isCorrect: true },
                            { text: `$${affNum(Math.pow(10, -exp), 6)}$`, isCorrect: false },
                            { text: `$${affNum(exp*10)}$`, isCorrect: false },
                            { text: `$${affNum(Math.pow(10, exp > 0 ? exp+1 : exp-1), 6)}$`, isCorrect: false }
                        ];
                        opts.sort(() => Math.random() - 0.5);
                        
                        return {
                            question: `Écrire $10^{${exp}}$ en écriture décimale.`,
                            answer: `<p>$${affNum(val)}$</p>`,
                            options: opts
                        };
                    },
                    "Notation scientifique": () => {
					    const choix = Math.random();
					    if (choix < 1/3) {
							const exp = randInt(1, 6) * getRandomItem([-1,1]);
							const mantissa = randInt(101, 999) / 100;
							const num = mantissa * Math.pow(10,exp);
                            
                            let opts = [
                                { text: `$${affNum(mantissa)} \\times 10^{${exp}}$`, isCorrect: true },
                                { text: `$${affNum(mantissa*10)} \\times 10^{${exp-1}}$`, isCorrect: false }, // Mauvaise mantisse
                                { text: `$${affNum(mantissa)} \\times 10^{${-exp}}$`, isCorrect: false }, // Mauvais signe
                                { text: `$${affNum(mantissa/10)} \\times 10^{${exp+1}}$`, isCorrect: false }
                            ];
                            opts.sort(() => Math.random() - 0.5);
                            
							return {
								question: `Écrire $${affNum(num, 9)}$ en notation scientifique.`,
								answer: `<p>$${affNum(mantissa)} \\times 10^{${exp}}$</p>`,
                                options: opts
							};
						} else if (choix < 2/3) {
							const exp = randInt(1, 6) * getRandomItem([-1,1]);
							const mantissa = randInt(101, 999) / 100;
							const num = mantissa * Math.pow(10,exp);
                            
                            let opts = [
                                { text: `$${affNum(num, 9)}$`, isCorrect: true },
                                { text: `$${affNum(num*10, 9)}$`, isCorrect: false },
                                { text: `$${affNum(num/10, 9)}$`, isCorrect: false },
                                { text: `$${affNum(mantissa * Math.pow(10,-exp), 9)}$`, isCorrect: false }
                            ];
                            opts.sort(() => Math.random() - 0.5);

							return {
								question: `Donner l'écriture décimale de $${affNum(mantissa)} \\times 10^{${exp}}$.`,
								answer: `<p>$${affNum(num, 9)}$</p>`,
                                options: opts
							};
						} else {
							const mantissa = randInt(1001, 9999) / 1000;
							const exp = randInt(1,3) * getRandomItem([-1,1]);
							const p = randInt(21,35) * getRandomItem([-1,1]);
							const num = mantissa * Math.pow(10,exp);
                            
                            const finalExp = exp + p;
                             let opts = [
                                { text: `$${affNum(mantissa)} \\times 10^{${finalExp}}$`, isCorrect: true },
                                { text: `$${affNum(mantissa)} \\times 10^{${p}}$`, isCorrect: false },
                                { text: `$${affNum(mantissa*10)} \\times 10^{${finalExp-1}}$`, isCorrect: false },
                                { text: `$${affNum(mantissa)} \\times 10^{${finalExp+1}}$`, isCorrect: false }
                            ];
                            opts.sort(() => Math.random() - 0.5);

							return {
								question: `Écrire $${affNum(num)} \\times 10^{${p}}$ en notation scientifique.`,
								answer: `<p>$${affNum(mantissa)} \\times 10^{${exp+p}}$</p>`,
                                options: opts
							};
						}
                    },
                    "opérations sur les puissances": () => {
                        const x = getRandomItem([2, 3, 5, 7]), a = randInt(2, 9) * getRandomItem([-1,1]), b = randInt(2, 9) * getRandomItem([-1,1]);
						const op = Math.random();
                        let qText, ansVal;
                        let d1, d2, d3;

						if (op < 1/4) { // (x^a)^b
							qText = `\\left(${x}^{${a}}\\right)^{${b}}`;
                            ansVal = a * b;
                            d1 = a+b; d2 = a-b; d3 = Math.abs(a*b)+1;
						} else if (op < 2/4) { // x^a * x^b
							qText = `${x}^{${a}} \\times ${x}^{${b}}`;
                            ansVal = a + b;
                            d1 = a*b; d2 = a-b; d3 = a+b+1;
						} else if (op < 3/4) { // x^a / x^b
							qText = `\\dfrac{${x}^{${a}}}{${x}^{${b}}}`;
                            ansVal = a - b;
                            d1 = a+b; d2 = a*b; d3 = b-a;
						} else {
                            // Cas complexe
							const base1 = getRandomItem([2, 3]);
							const base2 = 5;
							const exp1 = randInt(2, 5);
							const exp2 = randInt(2, 5);
							const exp3 = randInt(2, 4); 

							const type = randInt(1, 2);
							let answerStr;
                            // Pour ce cas complexe, générer des QCM pertinents est dur sans changer la logique d'affichage string
                            // On va tricher légèrement en générant des strings de réponse fausse
                            
							if (type === 1) {
								const num_base = base1 * base2; 
								qText = `\\dfrac{(${num_base}^{${exp1}})^{${exp3}}}{${base1}^{${exp2}}}`;
								const final_exp_base1 = exp1 * exp3 - exp2;
								const final_exp_base2 = exp1 * exp3;
								answerStr = `${base1}^{${final_exp_base1}} \\times ${base2}^{${final_exp_base2}}`;
                                
                                let opts = [
                                    { text: `$${answerStr}$`, isCorrect: true },
                                    { text: `$${base1}^{${exp1*exp3}} \\times ${base2}^{${exp1*exp3}}$`, isCorrect: false },
                                    { text: `$${base1}^{${exp1*exp3+exp2}} \\times ${base2}^{${exp1*exp3}}$`, isCorrect: false },
                                    { text: `$${base1}^{${exp1}} \\times ${base2}^{${exp2}}$`, isCorrect: false }
                                ];
                                opts.sort(() => Math.random() - 0.5);
                                return {
                                    question: `<p>Simplifier l'expression  $$${qText}$$</p>`,
                                    answer: `<p>$${answerStr}$</p>`,
                                    options: opts
                                };

							} else {
								const prod_base = base1 * base2;
								qText = `(${base1}^{${exp1}})^{${exp3}} \\times ${prod_base}^{${exp2}}`;
								const final_exp_base1 = exp1 * exp3 + exp2;
								const final_exp_base2 = exp2;
								answerStr = `${base1}^{${final_exp_base1}} \\times ${base2}^{${final_exp_base2}}`;
                                
                                let opts = [
                                    { text: `$${answerStr}$`, isCorrect: true },
                                    { text: `$${base1}^{${exp1*exp3}} \\times ${base2}^{${exp2}}$`, isCorrect: false },
                                    { text: `$${base1}^{${exp1*exp3-exp2}} \\times ${base2}^{${exp2}}$`, isCorrect: false },
                                    { text: `$${base1}^{${exp1}} \\times ${base2}^{${exp2}}$`, isCorrect: false }
                                ];
                                opts.sort(() => Math.random() - 0.5);
                                return {
                                    question: `<p>Simplifier l'expression  $$${qText}$$</p>`,
                                    answer: `<p>$${answerStr}$</p>`,
                                    options: opts
                                };
							}
						}
                        
                        // Cas standards 1, 2, 3
                        let opts = [
                            { text: `$${x}^{${ansVal}}$`, isCorrect: true },
                            { text: `$${x}^{${d1}}$`, isCorrect: false },
                            { text: `$${x}^{${d2}}$`, isCorrect: false },
                            { text: `$${x}^{${d3}}$`, isCorrect: false }
                        ];
                        // remove duplicates
                        opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                        opts.sort(() => Math.random() - 0.5);

                        return {
                            question: `Simplifier l'expression $${qText}$.`,
                            answer: `<p>$${x}^{${ansVal}}$</p>`,
                            options: opts
                        };
                    },
                    "écriture d’un nombre": () => {
                        // 1. Générer un nombre de base simple
						const integerPart = randInt(1, 3); // On force au moins 1 pour que "entier + fraction" ait du sens
						const decimalPart = getRandomItem([0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8]);
						const baseValue = integerPart + decimalPart;

						// 2. Définir un objet contenant toutes les formes possibles du nombre
						let allForms = {
							'décimale': { 
								text: `$${affNum(baseValue)}$`
							},
							'en pourcentage': { 
								text: `$${affNum(baseValue * 100)}\\,$%`
							},
							'fractionnaire irréductible': { 
								text: (() => {
									const n = baseValue * 100;
									const d = 100;
									const common = gcd(n, d);
									return `$\\dfrac{${n / common}}{${d / common}}$`;
								})()
							},
							'fractionnaire sur 100': {
								text: `$\\dfrac{${affNum(baseValue * 100)}}{100}$`
							},
                            'sous forme d\'un entier plus une fraction': {
								 text: (() => {
									const n = decimalPart * 100;
									const d = 100;
									const common = gcd(n, d);
									return `$${integerPart} + \\dfrac{${n / common}}{${d / common}}$`;
								})()
							}
						};
						
						// 3. Choisir aléatoirement la forme de départ et d'arrivée
						const formNames = Object.keys(allForms);
						const startIndex = randInt(0, formNames.length - 1);
						const startFormName = formNames[startIndex];
						
						let targetIndex;
						do {
							targetIndex = randInt(0, formNames.length - 1);
						} while (targetIndex === startIndex);
						const targetFormName = formNames[targetIndex];

						const startNumberText = allForms[startFormName].text;
						const answerText = allForms[targetFormName].text;
                        
                        // --- GÉNÉRATION DES OPTIONS QCM ---
                        let opts = [{ text: answerText, isCorrect: true }];
                        
                        if (targetFormName === 'sous forme d\'un entier plus une fraction') {
                            // CAS SPÉCIFIQUE : On veut que TOUS les distracteurs soient de la forme "Entier + Fraction"
                            
                            // Helper pour créer une fraction latex
                            const getFrac = (dec) => {
                                const n = Math.round(dec * 100);
                                const d = 100;
                                const g = gcd(n, d);
                                return `\\dfrac{${n/g}}{${d/g}}`;
                            };

                            // Distracteur 1 : Mauvais entier (+1)
                            opts.push({ 
                                text: `$${integerPart + 1} + ${getFrac(decimalPart).replace('\\dfrac', '\\dfrac')}$`, 
                                isCorrect: false 
                            });

                            // Distracteur 2 : Mauvaise fraction (Complément ou autre fraction commune)
                            // Ex: si c'est 0.25 (1/4), on propose 0.75 (3/4). Si c'est 0.2 (1/5), on propose 0.4 (2/5).
                            let wrongDec = parseFloat((1 - decimalPart).toFixed(2));
                            if (wrongDec === decimalPart || wrongDec <= 0) wrongDec = 0.5; // Fallback
                            
                            opts.push({ 
                                text: `$${integerPart} + ${getFrac(wrongDec)}$`, 
                                isCorrect: false 
                            });

                            // Distracteur 3 : Une autre fraction aléatoire de la liste
                            const decList = [0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8];
                            let randomDec;
                            do { randomDec = getRandomItem(decList); } while (randomDec === decimalPart || randomDec === wrongDec);
                            
                             opts.push({ 
                                text: `$${integerPart} + ${getFrac(randomDec)}$`, 
                                isCorrect: false 
                            });

                        } else {
                            // CAS GÉNÉRAL (Décimal, Pourcentage, Fraction simple)
                            // On génère des valeurs fausses mathématiquement
                            const wrongVal1 = baseValue * 10;
                            const wrongVal2 = baseValue / 10;
                            const wrongVal3 = baseValue + 1; // Erreur d'unité
                            
                            // On formate ces valeurs fausses selon le format demandé
                            const formatValue = (val, type) => {
                                if (type === 'décimale') return `$${affNum(val)}$`;
                                if (type === 'en pourcentage') return `$${affNum(val * 100)}\\,$%`;
                                if (type.includes('fraction')) {
                                    // Pour fractions irréductibles ou sur 100
                                    let n = val * 100; 
                                    let d = 100;
                                    if (!Number.isInteger(n)) { n*=10; d*=10; } // Gestion des décimales
                                    if (type === 'fractionnaire sur 100') {
                                         return `$\\dfrac{${affNum(n/(d/100))}}{100}$`;
                                    }
                                    const g = gcd(Math.round(n), d);
                                    return `$\\dfrac{${Math.round(n/g)}}{${d/g}}$`;
                                }
                                return `$${affNum(val)}$`;
                            };
                            
                            opts.push({ text: formatValue(wrongVal1, targetFormName), isCorrect: false });
                            opts.push({ text: formatValue(wrongVal2, targetFormName), isCorrect: false });
                            opts.push({ text: formatValue(wrongVal3, targetFormName), isCorrect: false });
                        }
                        
                        opts.sort(() => Math.random() - 0.5);
						
						return {
							question: `<p>Donner <span class="font-bold">l'écriture ${targetFormName}</span> du nombre ${startNumberText}.</p>`,
							answer: `<p>${answerText}</p>`,
                            options: opts
						};
                    },
                    "ordre de grandeur": () => {
						const opType = Math.random();
						let question, answer, n1, n2, r1, r2, result;
                        let dist1, dist2, dist3;

						if (opType < 0.3) { // Addition / Soustraction
							const op = Math.random() < 0.5 ? '+' : '-';
							const a = randInt(3, 99);
							n1 = a * 1000 + randInt(30,245) * getRandomItem([-1,1]);
							n2 = randInt(2, a) * 1000 + randInt(30,245) * getRandomItem([-1,1]); // n2 est plus petit ou égal à n1
							r1 = Math.round(n1 / 1000) * 1000;
							r2 = Math.round(n2 / 1000) * 1000;
							
							result = (op === '+') ? r1 + r2 : r1 - r2;
							question = `${n1} ${op} ${n2}`;
							answer = `<p>$${r1} ${op} ${r2} = ${result}$</p>`;
                            
                            dist1 = result * 10; dist2 = result / 10; dist3 = result + 1000;

						} else if (opType < 0.6) { // Multiplication
							const caseType = randInt(1, 2);
							if (caseType === 1) { // type 58 x 19
								n1 = randInt(2, 9) * 10 + randInt(1,2) * getRandomItem([-1,1]), n2 = randInt(2, 9) * 10 + randInt(1,2) * getRandomItem([-1,1]);
								r1 = Math.round(n1/10)*10, r2 = Math.round(n2/10)*10;
							} else  { // type 62 x 105
								n1 = randInt(2, 9) * 10 + randInt(1,2) * getRandomItem([-1,1]); n2 = randInt(2, 9) * 100 + randInt(3,24) * getRandomItem([-1,1]);
								r1 = Math.round(n1/10)*10; r2 = Math.round(n2/100)*100;
								if (Math.random() < 0.5) {
									[n1,n2] = [n2,n1]; [r1,r2] = [r2,r1];
								}
							} 
							result = r1 * r2;
							question = `${n1} \\times ${n2}`;
							answer = `<p>$${r1} \\times ${r2} = ${result}$</p>`;
                            dist1 = result * 10; dist2 = result / 10; dist3 = r1 + r2;

						} else if (opType < 0.9) { // Division / Multiplication simple 
							const op = Math.random() < 0.5 ? '\\times' : '\\div';
							if (op === '\\times') { // type 985 x 2
								n1 = randInt(2, 9) * 1000 + randInt(30,245) * getRandomItem([-1,1]); n2 = randInt(2,9);
								r1 = Math.round(n1/1000)*1000; r2 = n2;
								if (Math.random() < 0.5) {
									[n1,n2] = [n2,n1]; [r1,r2] = [r2,r1];
								}
								result = r1 * r2;
								
								answer = `<p>$${r1} \\times ${r2} = ${result}$</p>`;
                                dist1 = result * 10; dist2 = result / 10; dist3 = result * 2;
							} else { // type 6378 : 3
								n2 = randInt(2,9);
								r1 = randInt(2,9) * n2 * 100
								n1 = r1 + randInt(5, 50*n2-5) * getRandomItem([-1,1]);
								result = r1 / n2;
								
								answer = `<p>On cherche un multiple de ${n2} proche de $${n1}: ${r1} \\div ${n2} = ${affNum(result)}$.</p>`;
                                dist1 = result * 10; dist2 = result / 10; dist3 = result * n2;
							}
							question = `${n1} ${op} ${n2}`;
						} else {  // 10^n + ou - 10^(-n)
							const op = Math.random() < 0.5 ? '+' : '-';
							const p = randInt(21,39);
							question = `10^{${p}} ${op} 10^{${-p}}`;
							answer = `$10^{${-p}}\\approx 0$ donc $$10^{${p}} ${op} 10^{${-p}}\\approx 10^{${p}}$$`;
                            result = `10^{${p}}`;
                            dist1 = `10^{${p*2}}`; dist2 = `0`; dist3 = `10^{${-p}}`;
						}
                        
                        let opts = [
                            { text: `$${result}$`, isCorrect: true },
                            { text: `$${dist1}$`, isCorrect: false },
                            { text: `$${dist2}$`, isCorrect: false },
                            { text: `$${dist3}$`, isCorrect: false }
                        ];
                        opts.sort(() => Math.random() - 0.5);

						return {
							question: `<p>Donner un ordre de grandeur du calcul : $$${question}$$</p>`,
							answer: answer,
                            options: opts
						};
                    },
                    "vraisemblance": () => {
                        const opType = randInt(1, 2);
						let op, n1, n2, r1, r2, result, correctResult;

						// ÉTAPE 1 : Générer le calcul correct 
						if (opType === 1) { // Addition / Soustraction
							op = Math.random() < 0.5 ? '+' : '-';
							const a = randInt(3, 99);
							n1 = a * 1000 + randInt(30,245) * getRandomItem([-1,1]);
							n2 = randInt(2, a-1) * 1000 + randInt(30,245) * getRandomItem([-1,1]); 
							r1 = Math.round(n1 / 1000) * 1000;
							r2 = Math.round(n2 / 1000) * 1000;
							
							result = (op === '+') ? r1 + r2 : r1 - r2;
							correctResult = (op === '+') ? n1 + n2 : n1 - n2;
						} else { // Multiplication
							op = '\\times';
							const multType = randInt(1, 2);
							if (multType === 1) { // type 58 x 19
								n1 = randInt(2, 9) * 10 + randInt(1,2) * getRandomItem([-1,1]), n2 = randInt(2, 9) * 10 + randInt(1,2) * getRandomItem([-1,1]);
								r1 = Math.round(n1/10)*10, r2 = Math.round(n2/10)*10;
							} else  { // type 62 x 105
								n1 = randInt(2, 9) * 10 + randInt(1,2) * getRandomItem([-1,1]); n2 = randInt(2, 9) * 100 + randInt(3,24) * getRandomItem([-1,1]);
								r1 = Math.round(n1/10)*10; r2 = Math.round(n2/100)*100;
								if (Math.random() < 0.5) {
									[n1,n2] = [n2,n1]; [r1,r2] = [r2,r1];
								}
							} 
							result = r1 * r2;
							correctResult = n1 * n2;
						}
						
						const correctLastDigit = correctResult % 10;

						// --- ÉTAPE 2 : Choisir un type d'erreur ou la bonne réponse ---
						const caseType = randInt(1, 3);
						let displayedResult, answer, isPlausible;

						if (caseType === 1) { // Erreur d'ordre de grandeur
							const orderOfMagnitude = Math.pow(10, Math.floor(Math.log10(correctResult)));
							// On crée un résultat qui a un ordre de grandeur 10x trop grand ou 10x trop petit
							displayedResult = Math.random() < 0.5 ? 
								correctResult * 10  : 
								Math.round(correctResult / 100) * 10 ;
							displayedResult = displayedResult + correctLastDigit;						

							answer = `<p><span class="font-bold">Non, le résultat n'est pas vraisemblable.</span><br>Un ordre de grandeur est $${r1} ${op} ${r2} = ${result}$. Le résultat proposé ($${affNum(displayedResult)}$) est beaucoup trop ${displayedResult > result ? 'grand' : 'petit'}.</p>`;
                            isPlausible = false;
						
						} else if (caseType === 2) { // Erreur sur le dernier chiffre							
							let wrongLastDigit;
							do {
								wrongLastDigit = randInt(1, 9);
							} while (wrongLastDigit === correctLastDigit);
							
							// On construit un résultat faux mais avec le bon ordre de grandeur
							displayedResult = Math.floor(correctResult / 10) * 10 + wrongLastDigit;
							
							answer = `<p><span class="font-bold">Non, le résultat n'est pas vraisemblable.</span><br>Le dernier chiffre de $${n1} ${op} ${n2}$ devrait être $${correctLastDigit}$, mais le résultat proposé se termine par $${wrongLastDigit}$.</p>`;
                            isPlausible = false;

						} else { // Résultat vraisemblable
							displayedResult = correctResult;
							answer = `<p><span class="font-bold">Oui, le résultat est vraisemblable.</span><br>L'ordre de grandeur ($${r1} ${op} ${r2} = ${result}$) et le dernier chiffre sont cohérents.</p>`;
                            isPlausible = true;
						}

						const question = `${affNum(n1)} ${op} ${affNum(n2)} = ${affNum(displayedResult)}`;
                        
                        let opts = [
                            { text: `Oui`, isCorrect: isPlausible },
                            { text: `Non`, isCorrect: !isPlausible },
                            { text: `On ne peut pas savoir`, isCorrect: false }
                        ];

						return {
							question: `<p>Le résultat du calcul suivant vous paraît-il vraisemblable ?<br>$${question}$</p>`,
							answer: answer,
                            options: opts
						};
                    }
            },
			"Calcul algébrique": {
				"Traduire en une expression algébrique": () => {
				    // Focntion pour affichage de parenthèse
					const parenExpr = (expr) => {
					   return expr.includes('+') || expr.includes('-') ? `\\left(${expr}\\right)` : expr;
					}
				
                    // Vocabulaire de base
                    const ops1 = [
                        { text: "le double de", expr: (v) => v.startsWith('2') || v.startsWith('3') || v.includes('dfrac') ? `2\\times ${v}` : `2${parenExpr(v)}` },
                        { text: "le triple de", expr: (v) => v.startsWith('2') || v.startsWith('3') || v.includes('dfrac') ? `3\\times ${v}` : `3${parenExpr(v)}` },
                        { text: "la moitié de", expr: (v) => `\\dfrac{${v}}{2}` },
                        { text: "le carré de", expr: (v) => v.length < 2 ? `${v}^2` : `\\left(${v}\\right)^2` },
                        { text: "le cube de", expr: (v) => v.length < 2 ? `${v}^3` : `\\left(${v}\\right)^3` },
                        { text: "l'opposé de", expr: (v) => `-${parenExpr(v)}` },
                        { text: "l'inverse de", expr: (v) => `\\dfrac{1}{${v}}` }
                    ];
                    
                    // Vocabulaire d'opération binaire
                    const ops2 = [
                        { text: "La somme de {A} et de {B}", expr: (A, B) => `${A} + ${parenExpr(B)}` },
                        { text: "La différence entre {A} et {B}", expr: (A, B) => `${A} - ${parenExpr(B)}` },
                        { text: "Le produit de {A} et de {B}", expr: (A, B) => `${parenExpr(A)} \\times ${parenExpr(B)}` },
                        { text: "Le quotient de {A} par {B}", expr: (A, B) => `\\dfrac{\\,${A}\\,}{${B}}` },
                    ];

                    let question, answer, correctExpr;
                    let dist1, dist2, dist3;
                    const variable = 'x'; 
                    
                    if (Math.random() < 0.4) {
                        // Structure simple : "L'inverse du double de x"
                        const opA = getRandomItem(ops1);
                        const opB = getRandomItem(ops1.filter(op => op.text !== opA.text));

                        question = `${opA.text} ${opB.text} $${variable}$ est égal à ?`;
                        correctExpr = opA.expr(opB.expr(variable));
                        answer = `$${correctExpr}$`;

                        // Distracteurs : Inversion de l'ordre des opérations ou oubli d'une opération
                        dist1 = opB.expr(opA.expr(variable)); // Ordre inverse
                        dist2 = opA.expr(variable); // Oubli de la 2eme
                        dist3 = opB.expr(variable); // Oubli de la 1ere

                    } else {
                        // Structure complexe : "On additionne A avec B"
                        const op_binaire = getRandomItem(ops2);
						const opA = getRandomItem(ops1);
                        const opB = getRandomItem(ops1.filter(op => op.text !== opA.text));
                        
						const termA_text = `${opA.text} $${variable}$`;
                        const termA_expr = opA.expr(variable);
						const termB_text = `${opB.text} $${variable}$`;
                        const termB_expr = opB.expr(variable);

                        question = `${op_binaire.text.replace('{A}', termA_text).replace('{B}', termB_text)}. Le résultat est égal à ?`;
                        correctExpr = op_binaire.expr(termA_expr, termB_expr);
                        answer = `$${correctExpr}$`;

                        // Distracteurs
                        // 1. Confusion somme/produit ou diff/quotient
                        if(op_binaire.text.includes('somme')) dist1 = `${parenExpr(termA_expr)} \\times ${parenExpr(termB_expr)}`;
                        else if(op_binaire.text.includes('produit')) dist1 = `${termA_expr} + ${parenExpr(termB_expr)}`;
                        else if(op_binaire.text.includes('différence')) dist1 = `\\dfrac{${termA_expr}}{${termB_expr}}`;
                        else dist1 = `${termA_expr} - ${parenExpr(termB_expr)}`;
                        
                        // 2. Erreur sur les termes internes (échange)
                        dist2 = op_binaire.expr(termB_expr, termA_expr);
                        
                        // 3. Simple concaténation ou erreur générique
                        dist3 = `${termA_expr}${termB_expr}`; 
                    }
                    
                    let opts = [
                        { text: `$${correctExpr}$`, isCorrect: true },
                        { text: `$${dist1}$`, isCorrect: false },
                        { text: `$${dist2}$`, isCorrect: false },
                        { text: `$${dist3}$`, isCorrect: false }
                    ];
                    // Nettoyage doublons
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>${question.replaceAll('de le','du')}</p>`,
                        answer: `<p>${answer}</p>`,
                        options: opts
                    };
                },
                "Prendre l’opposé d’une expression.": () => {
                    const a = randInt(2, 9) * getRandomItem([-1, 1]);
                    const b = randInt(1, 9) * getRandomItem([-1, 1]);
                    const expr = linearExpr(a, b);
                    const opposite = linearExpr(-a, -b);
                    
                    // Distracteurs :
                    const d1 = linearExpr(-a, b); // Change que le 1er signe
                    const d2 = linearExpr(a, -b); // Change que le 2eme signe
                    const d3 = `\\dfrac{1}{${expr}}`; // Inverse au lieu d'opposé

                    let opts = [
                        { text: `$${opposite}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `Quel est l'opposé de l'expression $${expr}$ ?`,
                        answer: `<p>$-\\left(${expr} \\right) = ${opposite}$</p>`,
                        options: opts
                    };
                },
                "Connaître les calculs de base": () => {
                    const type = randInt(1, 12);
                    let q, a_expr;
                    let d1, d2, d3;

                    switch (type) {
                        case 1: q = getRandomItem(['1 \\times x', 'x \\times 1']); a_expr = 'x'; 
                                d1='1'; d2='0'; d3='1x'; break;
                        case 2: q = 'x + x'; a_expr = '2x'; 
                                d1='x^2'; d2='x'; d3='0'; break;
                        case 3: q = 'x \\times x'; a_expr = 'x^2'; 
                                d1='2x'; d2='x'; d3='2x^2'; break;
                        case 4:
                            const c1 = randInt(2, 9), c2 = randInt(3, 9);
                            q = `${c1}x + ${c2}x`; a_expr = `${c1 + c2}x`;
                            d1 = `${c1*c2}x`; d2 = `${c1+c2}x^2`; d3 = `${c1}x^2`; break;
                        case 5:
                            const k1 = randInt(2, 9), k2 = randInt(3, 9);
                            q = `${k1}x \\times ${k2}x`; a_expr = `${k1 * k2}x^2`;
                            d1 = `${k1*k2}x`; d2 = `${k1+k2}x^2`; d3 = `${k1+k2}x`; break;
						case 6: q = getRandomItem(['-1 \\times x', 'x \\times (-1)']); a_expr = '-x'; 
                                d1='x'; d2='-1'; d3='1-x'; break;
						case 7: q = getRandomItem(['0x', '\\dfrac{0}{x}']); a_expr = '0'; 
                                d1='x'; d2='1'; d3='\-x'; break;
						case 8:
							const a = randInt(2,9);
							q = `\\dfrac{1}{${a}}x`; a_expr = `\\dfrac{x}{${a}}`; 
                            d1=`\\dfrac{1}{${a}x}`; d2=`${a}x`; d3=`\\dfrac{1}{x^${a}}`; break;
						case 9: q = '\\dfrac{\\,1\\,}{\\dfrac{1}{x}}'; a_expr = 'x'; 
                                d1='\\dfrac{1}{x}'; d2='-x'; d3='1'; break;
						case 10: q = '\\dfrac{\\,1\\,}{\\dfrac{a}{b}}'; a_expr = '\\dfrac{b}{a}'; 
                                 d1='\\dfrac{a}{b}'; d2='ab'; d3='-\\dfrac{a}{b}'; break;
						case 11: q = getRandomItem(['a \\times \\dfrac{b}{c}', '\\dfrac{a}{c} \\times b']); a_expr = '\\dfrac{ab}{c}'; 
                                 d1='\\dfrac{a}{bc}'; d2='\\dfrac{b}{ac}'; d3= q==='a \\times \\dfrac{b}{c}' ? '\\dfrac{ab}{ac}' : '\\dfrac{ab}{cb}' ; break;
						case 12: q = '\\dfrac{\\,\\dfrac{a}{b}\\,}{\\dfrac{c}{d}}'; a_expr = '\\dfrac{ad}{bc}'; 
                                 d1='\\dfrac{ac}{bd}'; d2='\\dfrac{bc}{ad}'; d3='\\dfrac{ab}{cd}'; break;
                    }
                    
                    let opts = [
                        { text: `$${a_expr}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Simplifier : $${q}$`, answer: `<p>$${a_expr}$</p>`, options: opts };
                },
                "Réduire une expression algébrique simple.": () => {
                    const a = randInt(2, 9) * getRandomItem([-1, 1]), b = randInt(-10, 10);
                    const c = randInt(2, 9) * getRandomItem([-1, 1]), d = randInt(-10, 10);
                    const expr = `${linearExpr(a, b)} ${c > 0 ? '+' : ''} ${linearExpr(c, d)}`;
                    const reduced = linearExpr(a + c, b + d);
                    
                    // Distracteurs
                    const d1 = linearExpr(a - c, b - d); // Soustraction au lieu d'addition
                    const d2 = linearExpr(a + c, b - d); // Erreur signe constante
                    const d3 = b+d === 0 ? linearExpr(a+c !==0 ? a + c : a-c , 0).replace('x','') : linearExpr(a+b+c+d , 0) ; 

                    let opts = [
                        { text: `$${reduced}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false } 
                    ];
					// Nettoyage doublons
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Réduire : $${expr}$`, answer: `<p>$${reduced}$</p>`, options: opts };
                },
                "Développer une expression algébrique simple.": () => {
				    const devType = randInt(1,2);
                    const a = randInt(1, 9) * getRandomItem([-1, 1]);
                    const b = randInt(1, 9) * getRandomItem([-1, 1]);
					let expr, developed;
                    let d1, d2, d3;

					if (devType === 1) {    // distributivité simple
					    const k = randInt(2, 9) * getRandomItem([-1, 1]);
						if (Math.random()<0.5) {
							expr = `${k}(${linearExpr(a, b)})`;
							developed = linearExpr(k * a, k * b);
                            d1 = linearExpr(k * a, b); // Oubli distrib 2eme terme
                            d2 = linearExpr(k + a, k + b); // Addition au lieu de mult
                            d3 = linearExpr(k * a, -k * b); // Erreur signe
						} else {   
							expr = `${linearExpr(k,0)}(${linearExpr(a, b)})`;
							developed = `${linearExpr(k * a, k * b).replace('x','x^2')}x`; // kx(ax+b) = ka x^2 + kb x
                            d1 = `${linearExpr(k * a, k * b).replace('x','x^2')}`; // Oubli x sur 2eme
                            d2 = `${linearExpr(k * a, b).replace('x','x^2')}x`; // Oubli distrib
                            d3 = linearExpr(k * a, k * b); // Oubli carré
						};
					} else {   // distributivité double
						const c = randInt(1, 9) * getRandomItem([-1, 1]);
						const d = randInt(1, 9) * getRandomItem([-1, 1]);
						expr =  `(${linearExpr(a,b)})(${linearExpr(c, d)})`;
						// (ax+b)(cx+d) = ac x^2 + (ad+bc)x + bd
                        const x2 = a*c;
                        const x1 = a*d + b*c;
                        const x0 = b*d;
                        
                        developed = `${linearExpr(x2, x1).replace('x','x^2')}${x1 !== 0 ? 'x' : ''} ${x0 >= 0 ? '+' : '' } ${x0}`;
                        
                        // Distracteurs
                        const d_x1_sign = a*d - b*c;
                        d1 = `${linearExpr(x2, d_x1_sign).replace('x','x^2')}x ${x0 >= 0 ? '+' : '' } ${x0}`; // Erreur signe milieu
                        d2 = `${linearExpr(x2, x0).replace('x','x^2')}`; // ac x^2 + bd (oubli termes croisés)
                        d3 = `${linearExpr(a+c, b+d)}`; // Addition des termes
					}

                    let opts = [
                        { text: `$${developed}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Développer : $${expr}$`, answer: `<p>$${developed}$</p>`, options: opts };
                },
                "Développer avec les identités remarquables.": () => {
                    const a = randInt(2, 9), b = randInt(2, 9);
                    let q, a_expr;
                    let d1, d2, d3;

                    switch (randInt(1, 3)) {
                        case 1: 
                            q = `(${a}x + ${b})^2`; 
                            a_expr = `${a*a}x^2 + ${2*a*b}x + ${b*b}`; 
                            d1 = `${a*a}x^2 + ${b*b}`; // Oubli 2ab
                            d2 = getRandomItem([`${a*a}x^2 + ${a*b}x + ${b*b}`,`${a}x^2 + ${2*a*b}x + ${b*b}`]); // Oubli coeff 2 ou Oubli carré de a
                            d3 = `${a*a}x^2 - ${2*a*b}x + ${b*b}`; // Erreur signe
                            break;
                        case 2: 
                            q = `(${a}x - ${b})^2`; 
                            a_expr = `${a*a}x^2 - ${2*a*b}x + ${b*b}`;
                            d1 = `${a*a}x^2 - ${b*b}`; // Oubli 2ab
                            d2 = `${a*a}x^2 + ${2*a*b}x + ${b*b}`; // Erreur signe
                            d3 = getRandomItem([`${a*a}x^2 - ${a*b}x + ${b*b}`,`${a}x^2 - ${2*a*b}x + ${b*b}`]); // Oubli coeff 2 ou Oubli carré de a
                            break;
                        case 3: 
                            q = Math.random() < 0.5 ? `(${a}x - ${b})(${a}x + ${b})` : `(${a}x + ${b})(${a}x - ${b})`; 
                            a_expr = `${a*a}x^2 - ${b*b}`;
                            d1 = `${a*a}x^2 + ${b*b}`; // + au lieu de -
                            d2 = `${a*a}x^2 - ${2*a*b}x  + ${b*b}`; // Confusion formule
                            d3 = `${a}x^2 - ${b*b}`; // Oubli carré de a
                            break;
                    }
                    
                    let opts = [
                        { text: `$${a_expr}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Développer : $${q}$`, answer: `<p>$${a_expr}$</p>`, options: opts };
                },
                "Factoriser une expression algébrique simple comme ax + bx ou ax² + bx.": () => {
                    const k = randInt(2, 9);
                    const c = randInt(2, 9) * getRandomItem([-1, 1]);
                    let q, a_expr;
                    let d1, d2, d3;

                    if (Math.random() < 0.5) { // kx^2 + ckx
                        q = `${k}x^2 ${c*k > 0 ? '+' : '-'} ${Math.abs(c*k)}x`;
                        a_expr = `${k}x(x ${c > 0 ? '+' : '-'} ${Math.abs(c)})`;
                        d1 = `${k}(x^2 ${c > 0 ? '+' : '-'} ${Math.abs(c)}x)`; // Facto incomplète
                        d2 = `${k}x(x ${c > 0 ? '-' : '+'} ${Math.abs(c)})`; // Erreur signe
                        d3 = `x(${k}x ${c*k > 0 ? '+' : '-'} ${Math.abs(c*k)})`; // Facto incomplète
                    } else { // kx + ck
                        q = `${k}x ${c*k > 0 ? '+' : '-'} ${Math.abs(c*k)}`;
                        a_expr = `${k}(x ${c > 0 ? '+' : '-'} ${Math.abs(c)})`;
                        d1 = `${k}(x ${c > 0 ? '-' : '+'} ${Math.abs(c)})`; // Erreur signe
                        d2 = `${k}(x ${c > 0 ? '+' : '-'} ${Math.abs(c*k)})`; // Erreur facto
                        d3 = `${Math.abs(c)}(${k}x ${c > 0 ? '+' : '-'} ${k})`; // Mauvais facteur
                    }

                    let opts = [
                        { text: `$${a_expr}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Factoriser au maximum : $${q}$`, answer: `<p>$${a_expr}$</p>`, options: opts };
                },
                "Factoriser avec les identités remarquables.": () => {
                    const a = randInt(2, 9), b = randInt(2, 9);
                    let q, a_expr, d1, d2, d3;

                    switch (randInt(1, 3)) {
                        case 1: // a^2 + 2ab + b^2 -> (a+b)^2
                            q = `${a*a}x^2 + ${2*a*b}x + ${b*b}`; 
                            a_expr = `(${a}x + ${b})^2`;
                            d1 = `(${a}x - ${b})^2`;
                            d2 = `(${a*a}x + ${b})^2`;
                            d3 = `(${a}x + ${b})(${a}x - ${b})`;
                            break;
                        case 2: // a^2 - 2ab + b^2 -> (a-b)^2
                            q = `${a*a}x^2 - ${2*a*b}x + ${b*b}`; 
                            a_expr = `(${a}x - ${b})^2`;
                            d1 = `(${a}x + ${b})^2`;
                            d2 = `(${a}x - ${b})(${a}x + ${b})`;
                            d3 = `(${a*a}x - ${b})^2`;
                            break;
                        case 3: // a^2 - b^2 -> (a-b)(a+b)
                            q = `${a*a}x^2 - ${b*b}`; 
                            a_expr = `(${a}x - ${b})(${a}x + ${b})`;
                            d1 = `(${a}x - ${b})^2`;
                            d2 = `(${a}x + ${b})^2`;
                            d3 = `(${a*a}x - ${b})(${a*a}x + ${b})`;
                            break;
                    }
                    
                    let opts = [
                        { text: `$${a_expr}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Factoriser : $${q}$`, answer: `<p>$${a_expr}$</p>`, options: opts };
                },
				"Résoudre une équation du type : ax + b = c": () => {
                    const a = randInt(2, 9) * getRandomItem([-1,1]), b = randInt(1, 9) * getRandomItem([-1,1]), sol1 = randInt(-9, 9);
                    const term = `${linearExpr(a,b)}`;
					const c = a * sol1 + b;
                    
                    // Distracteurs
                    // ax = c - b => x = (c-b)/a
                    const d1 = fracSign((c + b) / gcd(c+b,a), a / gcd(c+b,a)); // Erreur signe b : c+b
                    const d2 = c === b ? -a : (c - b) * a; // Mult au lieu div
                    const d3 = sol1 === 1 || sol1 === -1 ? -sol1 : c === b ?  a : fracSign(a/ gcd(c-b,a), (c - b)/ gcd(c-b,a)); // Inverse
                    
                    let opts = [
                        { text: `$x = ${sol1}$`, isCorrect: true },
                        { text: `$x = ${d1}$`, isCorrect: false },
                        { text: `$x = ${d2}$`, isCorrect: false },
                        { text: `$x = ${d3}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Résoudre : $${term} = ${c}$`, answer: `<p>$x = ${sol1}$</p>`, options: opts };
                },
                "Résoudre une équation du type : ax + b = cx + d.": () => {
                    const sol = randInt(-9, 9);
                    let a, b, c, d;
                    do { a = randInt(2, 9) * getRandomItem([-1,1]); c = randInt(1, 9) * getRandomItem([-1,1]); } while (a === c || Math.abs(a-c) > 10);
					do {
						b = randInt(-10, 10);
						d = (a - c) * sol + b 
					} while (b===0 && d===0);
                    const eq = `${linearExpr(a,b)} = ${linearExpr(c,d)}`;
                    
					// Distracteurs
                    // ax - cx = d - b => x = (d-b)/(a-c)
                    
                    // Erreur signe: (d+b)/(a+c)
                    const wrong1 = a+c === 0 ? -(b+d) : fracSign((d + b) / gcd(d+b,a+c), (a+c) / gcd(d+b,a+c));
                    // mult au lieu de div
                    const wrong2 = d === b ? c - a : (d-b)*(a-c);
                    // Inverse
                    const wrong3 = sol === 1 || sol === -1 ? -sol : d === b ? a - c : fracSign((a - c) / gcd(a-c,d-b), (d - b) / gcd(a-c,d-b));

                    let opts = [
                        { text: `$x = ${sol}$`, isCorrect: true },
                        { text: `$x = ${wrong1}$`, isCorrect: false },
                        { text: `$x = ${wrong2}$`, isCorrect: false },
                        { text: `$x = ${wrong3}$`, isCorrect: false }
                    ];

                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Résoudre : $${eq}$`, answer: `<p>$x = ${sol}$</p>`, options: opts };
                },
                "Résoudre une équation du type : x² = a.": () => {
                    let a, ans, opts;
                    const type = randInt(1,4);
                    switch(type) {
                        case 1: // Carré parfait
                            const k = randInt(1, 12); a = k * k; 
                            ans = `$x = -${k}$ ou $x = ${k}$`;
                            opts = [
                                { text: `$S = \\{ -${k} \\,; ${k} \\}$`, isCorrect: true },
                                { text: `$S = \\{ ${k} \\}$`, isCorrect: false }, // Oubli négatif
                                { text: `$S = \\{ ${k === 2 ? a*a :  affNum(k*k/2)} \\}$`, isCorrect: false },   // Divise par 2
                                { text: `Pas de solution`, isCorrect: false }
                            ];
                            break;
						case 2: // 
                            const kk = randInt(2, 99, [1,4,9,16,25,36,49,64,81]); a = kk ; 
                            ans = `$x = -\\sqrt{${kk}}$ ou $x = \\sqrt{${kk}}$`;
                            opts = [
                                { text: `$S = \\{ -\\sqrt{${kk}} \\,; \\sqrt{${kk}} \\}$`, isCorrect: true },
                                { text: `$S = \\{ \\sqrt{${kk}} \\}$`, isCorrect: false },
                                { text: `$S = \\{ ${affNum(kk/2)} \\}$`, isCorrect: false },
                                { text: `Pas de solution`, isCorrect: false }
                            ];
                            break;
                        case 3: // Négatif
                            const k1 = randInt(1, 12); a = -1*k1*k1; 
                            ans = "Pas de solution.";
                            opts = [
                                { text: `Pas de solution`, isCorrect: true },
                                { text: `$S = \\{ -${k1} \\,; ${k1} \\}$`, isCorrect: false },
                                { text: `$S = \\{ ${-k1} \\}$`, isCorrect: false },
                                { text: `$S = \\{ ${ k1 === 2 ? -a*a : affNum(a/2)} \\}$`, isCorrect: false }
                            ];
                            break;
                        case 4: // Nul
                            a = 0; ans = "$x=0$";
                            opts = [
                                { text: `$S = \\{ 0 \\}$`, isCorrect: true },
                                { text: `Pas de solution`, isCorrect: false },
                                { text: `$S = \\{ -1 \\,; 1 \\}$`, isCorrect: false },
                                { text: `$S = \\mathbb{R}$`, isCorrect: false }
                            ];
                            break;
                    }
                    opts.sort(() => Math.random() - 0.5);
                    return { question: `Résoudre : $x^2 = ${a}$`, answer: `<p>${ans}</p>`, options: opts };
                },
                "Résoudre une équation produit.": () => {
                    const a = randInt(1, 9) * getRandomItem([-1,1]), c = randInt(1, 9) * getRandomItem([-1,1]), sol1 = randInt(-9, 9);
                    let sol2;
                    do { sol2 = randInt(-9, 9); } while (sol1 === sol2);
                    const term1 = `(${linearExpr(a,-sol1*a)})`;
                    const term2 = `(${linearExpr(c,-sol2*c)})`;
                    
                    let opts = [
                        { text: `$S = \\{ ${Math.min(sol1,sol2)} \\,; ${Math.max(sol1,sol2)} \\}$`, isCorrect: true },
                        { text: `$S = \\{ ${Math.min(-sol1,-sol2)} \\,; ${Math.max(-sol1,-sol2)} \\}$`, isCorrect: false }, // Erreur signe
                        { text: `$S = \\{ 0 \\}$`, isCorrect: false }, 
                        { text: `$S = \\{ ${Math.min(0,sol1+sol2)} \\,; ${Math.max(0,sol1+sol2)} \\}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Résoudre : $${term1}${term2} = 0$`, answer: `<p>$x = ${sol1}$ ou $x = ${sol2}$</p>`, options: opts };
                },
                "Résoudre une équation du type : a/x = b.": () => {
                    const sol = randInt(1, 10) * getRandomItem([-1, 1]);
                    const b = randInt(1, 10) * getRandomItem([-1, 1]);
                    const a = sol * b;
                    
                    // a/x = b => x = a/b
                    const d1 = b/a; // Inverse
                    const d2 = a*b; // Produit
                    const d3 = -sol; // Signe

                    let opts = [
                        { text: `$x = ${sol}$`, isCorrect: true },
                        { text: `$x = ${affNum(d1)}$`, isCorrect: false },
                        { text: `$x = ${d2}$`, isCorrect: false },
                        { text: `$x = ${d3}$`, isCorrect: false }
                    ];
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Résoudre : $\\dfrac{${a}}{x} = ${b}$`, answer: `<p>$x = ${sol}$</p>`, options: opts };
                },
                "Résoudre une inéquation du premier degré.": () => {
                    const a = randInt(1, 9) * getRandomItem([-1, 1]);
                    const threshold = randInt(-9, 9);
                    const b = randInt(-9, 9);
                    const c = a * threshold + b;
                    const symbol = getRandomItem(['>', '<', '\\geqslant', '\\leqslant']);
                    const q = `${linearExpr(a,b)} ${symbol} ${c}`;
                    
                    // Logique résolution
                    let finalSymbol = symbol;
                    if (a < 0) {
                        if (symbol === '>') finalSymbol = '<';
                        else if (symbol === '<') finalSymbol = '>';
                        else if (symbol === '\\geqslant') finalSymbol = '\\leqslant';
                        else finalSymbol = '\\geqslant';
                    }
                    
                    // Distracteurs : ne pas changer signe, changer signe à tort, mauvais nombre
                    const wrongSymbol = finalSymbol === '<' ? '>' : (finalSymbol === '>' ? '<' : (finalSymbol === '\\geqslant' ? '\\leqslant' : '\\geqslant'));
                    const badnumber = threshold === 0 ? -a : -threshold ;
										
                    let opts = [
                        { text: `$x ${finalSymbol} ${threshold}$`, isCorrect: true },
                        { text: `$x ${wrongSymbol} ${threshold}$`, isCorrect: false }, // Erreur sens
                        { text: `$x ${finalSymbol} ${badnumber}$`, isCorrect: false }, // Erreur signe valeur
                        { text: `$x ${wrongSymbol} ${badnumber}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Résoudre : $${q}$`, answer: `<p>$x ${finalSymbol} ${threshold}$</p>`, options: opts };
                },
                "Déterminer le signe d’une expression du premier degré.": () => {
                    const a = randInt(1, 9) * getRandomItem([-1, 1]);
                    const root = randInt(-9, 9);
                    const b = -a * root;
                    const expr = linearExpr(a, b);
                    
                    // Fonction utilitaire pour générer un tableau "propre" pour les options (sans $$ pour mieux contrôler la taille)
                    const getTable = (r, coefA) => {
                         // On retire les $$ pour l'option QCM afin que le CSS gère la taille
                         return createSignTable([r], coefA, 1).replace('f(x)', expr).replaceAll('$$', ''); 
                    };

					if (Math.random() < 0.5) {
                        // Cas 1 : Dresser le tableau
                        const correctTable = getTable(root, a);
                        
                        // Distracteurs
                        const d1 = getTable(root, -a); // Erreur de signe (sens inverse)
                        
                        // Erreur de racine (opposé ou valeur proche)
                        let wrongRoot = -root;
                        if (wrongRoot === root) wrongRoot = root + 1;
                        const d2 = getTable(wrongRoot, a); // Bonne direction, mauvaise racine
                        
                        const d3 = getTable(wrongRoot, -a); // Tout faux

                        let opts = [
                            { text: `$${correctTable}$`, isCorrect: true },
                            { text: `$${d1}$`, isCorrect: false },
                            { text: `$${d2}$`, isCorrect: false },
                            { text: `$${d3}$`, isCorrect: false }
                        ];
                        opts.sort(() => Math.random() - 0.5);
                        
						return { 
                            question: `Quel est le signe de l'expression $${expr}$ en fonction de $x$ ?`, 
                            answer: `<p>${createSignTable([root], a, deg = 1).replace('f(x)', expr)}</p>`,
                            options: opts
                        };
					} else {
                        // Question "Peut-on avoir... ?"
						const rep = getRandomItem(['Oui','Non']);
						let expr_q, justif;
						if (rep === 'Oui') {
							expr_q = linearExpr(a, b);
							justif = `c'est le bon signe du coefficient de $x$ et $${root}$ est la solution de $${linearExpr(a, b)}=0$` 
						} else {
						    const fakes = [linearExpr(-a, -b), linearExpr(a, b !== 0 ? -b : randInt(1, 9) * getRandomItem([-1, 1]) )];
							const i = randInt(0,1);
							expr_q = fakes[i];
							justif = i === 0 ? 'pas le bon signe du coefficient de $x$' : `$${root}$ n'est pas la solution de $${expr_q}=0$`;
						};
                        
                        let opts = [
                            { text: `Oui`, isCorrect: rep === 'Oui' },
                            { text: `Non`, isCorrect: rep === 'Non' },
                            { text: `On ne peut pas savoir`, isCorrect: false }
                        ];

						return { 
							question: `On donne ${createSignTable([root], a, deg = 1)} Peut-on avoir $ f(x) = ${expr_q} $ ?`,
							answer: `<p>${rep} car ${justif}.</p>`,
                            options: opts
						};
					}
                },
                "Déterminer le signe d’une expression factorisée du second degré.": () => {
                    const a = randInt(1, 9) * getRandomItem([-1,1]), c = randInt(1, 9) * getRandomItem([-1,1]), sol1 = randInt(-9, 9);
                    let sol2;
                    do { sol2 = randInt(-9, 9); } while (sol1 === sol2);
                    const term1 = `(${linearExpr(a,-sol1*a)})`;
                    const term2 = `(${linearExpr(c,-sol2*c)})`;
                    
                    const leadCoeff = a * c;
                    
                    // Fonction locale pour obtenir le tableau sans les $$ (pour que le CSS gère la taille)
                    const getTable = (roots, coeff) => {
                        return createSignTable(roots, coeff).replaceAll('$$', '');
                    };

                    // Option Correcte
                    const correctTable = getTable([sol1, sol2], leadCoeff);

                    // Distracteur 1 : Signes inversés (erreur de signe sur a*c)
                    const d1 = getTable([sol1, sol2], -leadCoeff);
                    
                    // Distracteur 2 : Racines opposées (erreur classique : x-3=0 => x=-3)
                    const d2 = getTable([-sol1, -sol2], leadCoeff);
                    
                    // Distracteur 3 : Racines opposées ET signes inversés
                    const d3 = getTable([-sol1, -sol2], -leadCoeff);

                    let opts = [
                        { text: `$${correctTable}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { 
                        question: `Quel est le signe de $$ f(x) = ${term1}${term2} $$`, 
                        answer: `<p>${createSignTable([sol1,sol2], leadCoeff)}</p>`,
                        options: opts
                    };
                },
                "Isoler une variable dans une égalité ou une inégalité qui en comporte plusieurs.": () => {
				    const variables = (str) => {
					    const excludes = ['dfrac','times','sqrt','pi'];
						const includes = ['R_1','R_2','\\omega'];
						let s = str;
						for (const element of excludes) s = s.replaceAll(element,'');
						let vars = []
						for (const el of includes) {
							if (s.includes(el)) vars.push(el);
							s = s.replaceAll(el,'');
						}
						const regex = /[a-zA-Z]/g;
						if (s.match(regex)) vars.push(...new Set(s.match(regex)));
						return vars;
					}
					
                    // Formules: [Formula, Target1, Target2, ...]
                    // On structure pour avoir les fausses réponses facilement
					const formules=[
						{ base: "d=vt", targets: [
                            { q: "v", a: "v=\\dfrac{d}{t}", d: ["v=dt", "v=\\dfrac{t}{d}", "v=d-t"] },
                            { q: "t", a: "t=\\dfrac{d}{v}", d: ["t=dv", "t=\\dfrac{v}{d}", "t=d-v"] }
                        ]},
						{ base: "p=\\dfrac{a}{n}", targets: [
                            { q: "a", a: "a=pn", d: ["a=\\dfrac{p}{n}", "a=\\dfrac{n}{p}", "a=p+n"] },
                            { q: "n", a: "n=\\dfrac{a}{p}", d: ["n=ap", "n=\\dfrac{p}{a}", "n=a-p"] }
                        ]},
						{ base: "P=UI^2", targets: [
                            { q: "U", a: "U=\\dfrac{P}{I^2}", d: ["U=PI^2", "U=\\dfrac{I^2}{P}", "U=\\sqrt{\\dfrac{P}{I}}"] },
                            { q: "I", a: "I=\\sqrt{\\dfrac{P}{U}}", d: ["I=\\dfrac{P}{U}", "I=\\dfrac{P^2}{U}", "I=\\sqrt{PU}"] }
                        ]},
						{ base: "A=\\dfrac{Bh}{2}", targets: [
                            { q: "B", a: "B=\\dfrac{2A}{h}", d: ["B=\\dfrac{A}{2h}", "B=2Ah", "B=\\dfrac{Ah}{2}"] },
                            { q: "h", a: "h=\\dfrac{2A}{B}", d: ["h=\\dfrac{A}{2B}", "h=2AB", "h=\\dfrac{AB}{2}"] }
                        ]}
					];
                    // On simplifie la sélection pour s'assurer d'avoir les données
					const scenario = getRandomItem(formules);
					const item = getRandomItem(scenario.targets);
					
                    const form_var = scenario.base.split('=');   
					
                    let opts = [
                        { text: `$${item.a}$`, isCorrect: true },
                        { text: `$${item.d[0]}$`, isCorrect: false },
                        { text: `$${item.d[1]}$`, isCorrect: false },
                        { text: `$${item.d[2]}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { 
						question: `On donne $${form_var[0]}$ en fonction de $${variables(form_var[1]).join(',\\,')}$ :
                                      $$ ${scenario.base} $$
                                   Exprimer $${item.q}$ en fonction des autres variables.`,									  
						answer: `<p>$${item.a}$</p>`,
                        options: opts
					};
                },
                "Effectuer une application numérique d’une formule.": () => {
					const appNum = (vars, nbs) => {
						let s = `${vars[0]}=${nbs[0]}`
						for (let i=1;i<vars.length;i++) s += `\\,; ${vars[i]}=${nbs[i]}`
						return s;
					}
					
					let q = {};
                    let res, d1, d2, d3;
                    
					switch (randInt(1,5)) {
                        case 1: // ax+b
							q.num = [randInt(-9, 9)];
							const a1 = randInt(2, 9) * getRandomItem([-1, 1]);
							const b1 = randInt(1, 10) * getRandomItem([-1, 1]);
							q.var = ['x']
							q.expr = linearExpr(a1,b1);
                            res = a1*q.num[0]+b1;
							q.val = res;
                            d1 = a1*q.num[0]-b1; d2 = a1+q.num[0]+b1; d3 = res === 0 ? -a1*q.num[0]+b1 : -res;
							break;
                        case 2: // ax^2+b
							q.num = [randInt(-5, 5)];
							const a2 = randInt(2, 5) * getRandomItem([-1, 1]);
							const b2 = randInt(-9, 9);
							q.var = ['x'];
							q.expr = `${linearExpr(a2, b2).replace('x','x^2')}`;
                            res = a2*q.num[0]*q.num[0]+b2;
							q.val = res;
                            d1 = (a2*q.num[0])**2 + b2; // (ax)^2 + b
                            d2 = a2*q.num[0]**2 - b2; // ax^2 - b
                            d3 = -a2*q.num[0]*q.num[0]+b2;  // -ax^2+b
							break;
						case 3: // 2(L+l)
							q.num = [randInt(1, 20),randInt(1, 20)];
							q.var = ['L','l']
							q.expr = '2(L+l)';
                            res = 2*(q.num[0]+q.num[1]);
							q.val = res;
                            d1 = 2*q.num[0]+q.num[1]; // Oubli parenthèse
                            d2 = 2+q.num[0]+q.num[1]; // ajoute 2
                            d3 = q.num[0]+q.num[1]; // Oubli mult par 2
							break;
						case 4: // pi r^2 h 
							q.num = [randInt(1,5),randInt(1,5)];
							q.var = ['r','h']
							q.expr = '\\pi r^2 h';
                            const calc = q.num[0]*q.num[0]*q.num[1];
							q.val = `${calc}\\pi`;
                            res = q.val;
                            d1 = `${q.num[0]*2*q.num[1]}\\pi`; // 2r
                            d2 = `${q.num[0]*q.num[1]}\\pi`; // r*h
                            d3 = `${q.num[0]*q.num[0]*q.num[1]*3}`; // pi = 3
							break;
						case 5: // v^2/R
							q.num = [randInt(2,6),randInt(2,9)];
							q.var = ['v','R']
							q.expr = '\\dfrac{v^2}{R}';
                            const numV = q.num[0]*q.num[0];
                            const denR = q.num[1];
							q.val = gcd(numV,denR) !== 1 ? affFracSimp(numV,denR).replace('=','') : `\\dfrac{${numV}}{${denR}}`;
                            res = q.val;
                            d1 = q.num[0] === 2 ? `${q.num[0]*denR}` : gcd(q.num[0]*2,denR) !== 1 ? affFracSimp(q.num[0]*2,denR).replace('=','') : `\\dfrac{${q.num[0]*2}}{${denR}}`; // 2v
                            d2 = gcd(q.num[0],denR) !== 1 ? affFracSimp(q.num[0],denR).replace('=','') : `\\dfrac{${q.num[0]}}{${denR}}`; // v
                            d3 = `${q.num[0]*q.num[0]*denR}`; // v^2*R
							break;
                    }

                    let opts = [
                        { text: `$${res}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    // Clean
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    // Remplissage avec des valeurs aléatoires uniques
                    while(opts.length < 4) {
                        // Génère un candidat (ici un entier entre -20 et 20, ou une autre plage selon vos besoins)
                        const val = randInt(-20, 20); 
                        const newText = `$${val}$`;

                        // Vérifie si cette valeur existe déjà dans le tableau opts
                        const alreadyExists = opts.some(o => o.text === newText);

                        // Si elle n'existe pas, on l'ajoute comme fausse réponse
                        if (!alreadyExists) {
                            opts.push({text: newText, isCorrect: false});
                        }
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `Calculer la valeur de $${q.expr}$ pour $${appNum(q.var,q.num)}$.`, answer: `<p>$${q.val}$</p>`, options: opts };
                }
            },
			"Proportionnalité et pourcentages": {
                "Mobiliser une procédure adaptée pour résoudre un problème lié à la proportionnalité.": () => {
				    let question, answer, opts = [];
				    if (Math.random() < 0.5) {
						const type = randInt(1, 2);
						if (type === 1) {
                            // CAS : Quatrième proportionnelle (Prix)
							let n1, p1, n2, p2;
							
							do {
								n1 = getRandomItem([4, 6, 8, 10, 12]);
								p1 = getRandomItem([3, 6, 9, 12, 15, 18]);
								n2 = getRandomItem([3, 5, 10, 15, 20]);
								if (n1 === n2) { n2 = n1 + 2; }
								p2 = (p1 * n2) / n1;
							} while ( n1 === p1 || n2%n1 === 0 || (p2*100 - Math.floor(p2*100) > 0.01) );

							const item = getRandomItem(['stylos', 'croissants', 'cahiers', 'pommes', 'oranges']);
							question = `<p>${n1} ${item} coûtent en tout ${p1} euros. Quel est le prix de ${n2} ${item} ?</p>`;
							answer = `<p>Le prix de ${n2} ${item} est de $${affNum(p2)}$ euros.</p>`;
                            
                            // Distracteurs
                            const d1 = p1 * Math.abs(n2 - n1); // confusion prix unitaire
                            const d2 = (p1 * n1) / n2; // Inversion produit en croix
                            const d3 = randInt(1, 2) === 1 ? p2 * 10 : p2 / 10; // Erreur virgule
                            
                            opts = [
                                { text: `$${affNum(p2)}$ €`, isCorrect: true },
                                { text: `$${affNum(d1)}$ €`, isCorrect: false },
                                { text: `$${affNum(d2)}$ €`, isCorrect: false },
                                { text: `$${affNum(d3)}$ €`, isCorrect: false }
                            ];

						} else {
                            // CAS : Vitesse
							const distance_km = randInt(1,5);
							let time_min = getRandomItem([4, 5, 6, 10, 12, 15, 20, 30]);

							question = `<p>Un objet parcourt ${distance_km} km en ${time_min} minutes. Quelle est sa vitesse moyenne en km/h ?</p>`;
							
							const speed_kmh = distance_km * 60 / time_min;
							answer = `<p>Sa vitesse moyenne est ${affNum(speed_kmh)} km/h.</p>`;
                            
                            // Distracteurs
                            const d1 = distance_km / time_min; // Oubli conversion minutes -> heures (km/min)
                            const d2 = 1 / speed_kmh; // Inversion
                            const d3 = randInt(1, 2) === 1 ? speed_kmh / 10 : speed_kmh * 10; // Erreur ordre grandeur
                            
                             opts = [
                                { text: `$${affNum(speed_kmh)}$ km/h`, isCorrect: true },
                                { text: `$${affNum(d1)}$ km/h`, isCorrect: false },
                                { text: `$${affNum(d2)}$ km/h`, isCorrect: false },
                                { text: `$${affNum(d3)}$ km/h`, isCorrect: false }
                            ];
						}	
					} else {
						const type = randInt(1, 2);

						if (type === 1) {
							// CAS 1 : Masse et volume (huile, etc.)
							const masse_ref_g = getRandomItem([800, 850, 900, 920]); 
							const volume_cible_ml = getRandomItem([250, 500, 750, 1500]);
							const item = getRandomItem(['huile', 'sirop']);

							question = `<p>La masse d’un litre ${item === 'huile' ? "d’" : "de "}${item} est égale à $${masse_ref_g}$ grammes. Quelle est la masse de $${volume_cible_ml}$ millilitres en kilogrammes ?</p>`;

							const masse_cible_g = (masse_ref_g / 1000) * volume_cible_ml;
							const masse_cible_kg = masse_cible_g / 1000;

							answer = `<p>La masse de $${volume_cible_ml}$ millilitres est de $${affNum(masse_cible_kg)}$ kg.</p>`;
                            
                            // Distracteurs
                            const d1 = masse_cible_g; // Oubli conversion kg
                            const d2 = 1 / masse_cible_kg; // Mauvaise division
                            const d3 = randInt(1, 2) === 1 ? masse_cible_kg * 10 : masse_cible_kg / 10; 
                            
                            opts = [
                                { text: `$${affNum(masse_cible_kg)}$ kg`, isCorrect: true },
                                { text: `$${affNum(d1)}$ kg`, isCorrect: false },
                                { text: `$${affNum(d2)}$ kg`, isCorrect: false },
                                { text: `$${affNum(d3)}$ kg`, isCorrect: false }
                            ];

						} else {
							// CAS 2 : Épaisseur de pile
							const epaisseur_base_micro_mm = getRandomItem([70, 80, 90, 120]); 
							const nb_feuilles = getRandomItem([500, 1000, 2000, 4000]);
							const item = getRandomItem(['feuille de papier', 'feuille d\'aluminium']);

							question = `<p>L’épaisseur d’une ${item} est de $${epaisseur_base_micro_mm} \\times 10^{-3}$ mm. Quelle est l’épaisseur d’une pile de $${nb_feuilles}$ feuilles en cm ?</p>`;

							const epaisseur_totale_mm = (epaisseur_base_micro_mm / 1000) * nb_feuilles;
							const epaisseur_totale_cm = epaisseur_totale_mm / 10;
							
							answer = `<p>L’épaisseur d’une pile est de $${affNum(epaisseur_totale_cm)}$ cm.</p>`;
                            
                            // Distracteurs
                            const d1 = epaisseur_totale_mm; // Oubli mm -> cm
                            const d2 = epaisseur_totale_cm * 100; // Erreur puissance
                            const d3 = epaisseur_totale_cm / 10;
                            
                             opts = [
                                { text: `$${affNum(epaisseur_totale_cm)}$ cm`, isCorrect: true },
                                { text: `$${affNum(d1)}$ cm`, isCorrect: false },
                                { text: `$${affNum(d2)}$ cm`, isCorrect: false },
                                { text: `$${affNum(d3)}$ cm`, isCorrect: false }
                            ];
						}
					};
                    
                    // Nettoyage et tri
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    opts.sort(() => Math.random() - 0.5);
                    
					return { question, answer, options: opts };
                },
                "Calculer, exprimer une proportion sous différentes formes (décimale, fractionnaire, pourcentage).": () => {
				    if (Math.random() < 0.5) {
						const k = randInt(1,19);
						const p = k*5;
						const part = k*randInt(2,9);
						const whole = 100 * part / p;
						const g = gcd(part, whole);
						const type = randInt(1,3);
						let q, ans, opts = [];

						switch(type) {
							case 1: // -> %
								q = `Exprimer la proportion de $${part}$ pour $${whole}$ en pourcentage.`;
								ans = `$${p}\\,\\%$`;
                                opts = [
                                    { text: `$${p}\\,\\%$`, isCorrect: true },
                                    { text: `$${100-p}\\,\\%$`, isCorrect: false }, // Complément
                                    { text: `$${affNum(part)}\\,\\%$`, isCorrect: false }, // Confusion partie
                                    { text: `$${affNum(whole/part)}\\,\\%$`, isCorrect: false }
                                ];
								break;
							case 2: // -> fraction
								q = `Exprimer la proportion de $${part}$ pour $${whole}$ sous forme de fraction irréductible.`;
								ans = `$\\dfrac{${part/g}}{${whole/g}}$`;
                                // Distracteurs : fraction inversée, non simplifiée (pas possible ici car on demande irréductible, donc on met des fausses valeurs)
                                opts = [
                                    { text: `$\\dfrac{${part/g}}{${whole/g}}$`, isCorrect: true },
                                    { text: `$\\dfrac{${whole/g}}{${part/g}}$`, isCorrect: false },
                                    { text: `$\\dfrac{${(part/g)+1}}{${whole/g}}$`, isCorrect: false },
                                    { text: `$\\dfrac{${part/g}}{${(whole/g)+1}}$`, isCorrect: false }
                                ];
								break;
							case 3: // -> decimal
								q = `Exprimer la proportion de $${part}$ pour $${whole}$ sous forme décimale.`;
								ans = `$${affNum(part/whole)}$`;
                                opts = [
                                    { text: `$${affNum(part/whole)}$`, isCorrect: true },
                                    { text: `$${affNum(whole/part)}$`, isCorrect: false },
                                    { text: `$${affNum(1 - part/whole)}$`, isCorrect: false },
                                    { text: `$${affNum(part*whole/100)}$`, isCorrect: false }
                                ];
								break;
						}
                        opts.sort(() => Math.random() - 0.5);
						return { question: q, answer: `<p>${ans}</p>`, options: opts };
                        
					} else {
                        // COMPARER LES CANDIDATS
						const fractions = [
							{ text: "le quart", value: 0.25 },
							{ text: "le tiers", value: 1/3 },
							{ text: "le cinquième", value: 0.20 },
							{ text: "les deux cinquièmes", value: 0.40 },
							{ text: "les trois quarts", value: 0.75 },
							{ text: "la moitié", value: 0.5 }
						];
						const percentages = [
							{ text: "20%", value: 0.20 },
							{ text: "25%", value: 0.25 },
							{ text: "30%", value: 0.30 },
							{ text: "40%", value: 0.40 }
						];

						let cands;
						let totalProportion;
						
						do {
							const shuffledFractions = [...fractions].sort(() => Math.random() - 0.5);
							const shuffledPercentages = [...percentages].sort(() => Math.random() - 0.5);
							const cand1_def = shuffledFractions[0];
							const cand2_def = shuffledPercentages[0];
							const cand3_def = Math.random() < 0.5 ? shuffledFractions[1] : shuffledPercentages[1];
							
							let definitions = [cand1_def, cand2_def, cand3_def];
							const values = new Set(definitions.map(d => d.value));
							if (values.size < 3) {
								totalProportion = 2; continue;
							}
							const shuffledDefinitions = [...definitions].sort(() => Math.random() - 0.5);
							cands = [
								{ name: 'A', ...shuffledDefinitions[0] },
								{ name: 'B', ...shuffledDefinitions[1] },
								{ name: 'C', ...shuffledDefinitions[2] }
							];
							totalProportion = cands.reduce((sum, cand) => sum + cand.value, 0);

						} while (totalProportion >= 1);

						const valD = 1 - totalProportion;
						cands.push({ name: 'D', text: "le reste", value: valD });
						
						const askForMost = Math.random() < 0.5;
						const targetCand = cands.reduce((acc, cand) => {
							return askForMost ? (cand.value > acc.value ? cand : acc) : (cand.value < acc.value ? cand : acc);
						});

						const questionText = `Lors d’une élection, ${cands[0].text} des électeurs a voté pour ${cands[0].name}, ${cands[1].text} a voté pour ${cands[1].name}, ${cands[2].text} a voté pour ${cands[2].name}, et le reste a voté pour ${cands[3].name}.`;
						const question = `<p>${questionText} Quel est le candidat ayant recueilli le <span class="font-bold">${askForMost ? 'plus' : 'moins'}</span> de votes ?</p>`;

						const answerExplanation = cands.map(cand => {
							return `${cand.name} : ${cand.text} ${cand.text.includes('%') ? '' : '$\\approx '+(cand.value * 100).toFixed(1).replace('.',',')+'$%'}`;
						}).join(' ; ');
						const answer = `<p>${answerExplanation}.<br>Le candidat ayant le ${askForMost ? 'plus' : 'moins'} de votes est donc <span class="font-bold">${targetCand.name}</span>.</p>`;

                        // Options QCM : Les 4 candidats
                        const opts = cands.map(c => ({
                            text: c.name,
                            isCorrect: c.name === targetCand.name
                        }));

						return { question, answer, options: opts };
					}
                },
				"Prendre un pourcentage simple d’un nombre.": () => {
                    const p = getRandomItem([10, 20, 25, 50, 75]);
                    let n;
                    if (p === 10 || p === 20 || p === 50) n = randInt(2, 20) * 10;
                    else if (p === 25 || p === 75) n = randInt(2, 10) * 4;
                    
                    const result = n * (p/100);
                    
                    // Distracteurs
                    const d1 = n * p; // Oubli /100
                    const d2 = n + p; // Addition
                    const d3 = n / (p/100); // Division (calcul de l'origine)
                    
                    let opts = [
                        { text: `$${result}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${affNum(d3)}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    if (Math.random() < 0.5) {
                        return {
                            question: `Calculer $${p}\\%$ de $${n}$.`,
                            answer: `<p>$${result}$</p>`,
                            options: opts
                        };
                    } else {
                        // Compléter ... 
                        // Ici la réponse attendue est n.
                        // On doit refaire les distracteurs pour n
                        let optsN = [
                            { text: `$${n}$`, isCorrect: true },
                            { text: `$${result*p/100}$`, isCorrect: false },
                            { text: `$${n*10}$`, isCorrect: false },
                            { text: `$${affNum(result/p)}$`, isCorrect: false }
                        ];
                        optsN.sort(() => Math.random() - 0.5);
                        
                        return {
                            question: ` Compléter $${p}\\%$ de $\\ldots = ${result}$`,
                            answer: `<p>$${n}$</p>`,
                            options: optsN
                        };
                    }
                },
                "Utiliser une proportion pour calculer une partie connaissant le tout, ou le tout connaissant une partie.": () => {
				    // Base de données de contextes
                    const contexts = [
                        {
                            part: "élèves absents",
                            whole: "élèves dans le collège",
                            ask_part: (p, w) => `Dans un collège de ${w} élèves, ${p}% sont absents aujourd'hui. Combien d'élèves sont absents ?`,
                            ask_whole: (p, pt) => `Aujourd'hui, ${pt} élèves sont absents, ce qui représente ${p}% du total des élèves du collège. Combien y a-t-il d'élèves en tout ?`
                        },
                        {
                            part: "kilomètres déjà parcourus",
                            whole: "km au total pour le trajet",
                            ask_part: (p, w) => `Un cycliste doit parcourir un trajet de ${w} km. Il a déjà fait ${p}% du chemin. Combien de kilomètres a-t-il parcourus ?`,
                            ask_whole: (p, pt) => `Un cycliste a déjà parcouru ${pt} km, ce qui représente ${p}% de son trajet. Quelle est la distance totale du trajet ?`
                        },
                        {
                            part: "€ de réduction",
                            whole: "€ le prix initial de l'article",
                            ask_part: (p, w) => `Un article coûtant ${w}€ est soldé à ${p}%. Quel est le montant de la réduction en euros ?`,
                            ask_whole: (p, pt) => `Lors des soldes, un article bénéficie d'une réduction de ${pt}€, ce qui correspond à ${p}% de son prix initial. Quel était le prix de départ ?`
                        },
                        {
                            part: "voitures électriques vendues",
                            whole: "voitures vendues au total",
                            ask_part: (p, w) => `Un concessionnaire a vendu ${w} voitures ce mois-ci. ${p}% d'entre elles étaient électriques. Combien de voitures électriques a-t-il vendues ?`,
                            ask_whole: (p, pt) => `Ce mois-ci, un concessionnaire a vendu ${pt} voitures électriques, ce qui représente ${p}% de ses ventes totales. Combien de voitures a-t-il vendues en tout ?`
                        }
                    ];

                    const context = getRandomItem(contexts);
                    const p = getRandomItem([10, 20, 25, 40, 50, 75]);
                    let whole, part;
                    do {
                        whole = getRandomItem([80, 120, 150, 200, 250, 300, 400]);
                        part = whole * (p / 100);
                    } while (part !== Math.floor(part));

                    let question, answer, valCorrect, valDistractors;
                    if (Math.random() < 0.5) {
                        // CAS 1 : Cherche PART
                        question = context.ask_part(p, whole);
                        answer = `<p>$\\dfrac{${p}}{100} \\times ${whole} = ${part}$ ${context.part}.</p>`;
                        valCorrect = part;
                        valDistractors = [
                            whole / (p/100), // Division
                            whole + p,
                            whole - p
                        ];
                    } else {
                        // CAS 2 : Cherche WHOLE
                        question = context.ask_whole(p, part);
                        answer = `<p>$\\dfrac{${part} \\times 100}{${p}} = ${whole}$ ${context.whole}.</p>`;
                        valCorrect = whole;
                        valDistractors = [
                            part * (p/100), // Multiplication directe
                            part + p,
                            part * 10
                        ];
                    }
                    
                    let opts = [{ text: `$${valCorrect}$`, isCorrect: true }];
                    valDistractors.forEach(d => opts.push({ text: `$${affNum(d)}$`, isCorrect: false }));
                    // Clean
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) opts.push({text: `$${randInt(10,500)}$`, isCorrect: false});
                    opts.sort(() => Math.random() - 0.5);

                    return { question: `<p>${question}</p>`, answer, options: opts };
                },
                "Calculer la proportion d’une proportion.": () => {
                    const type = randInt(1, 2);
                    let question, answer, opts = [];

                    if (type === 1) {
                        // CAS 1 (Désactivé dans code original) --> type jusqu'à 2 au lieu de 3                       
                        
                        // CAS 2 : Proportion d'élèves
                        const proportions = [
                            { text: "le quart", val: 0.25, n:1, d:4 },
                            { text: "le cinquième", val: 0.20, n:1, d:5 },
                            { text: "la moitié", val: 0.50, n:1, d:2 },
                            { text: "les deux cinquièmes", val: 0.40, n:2, d:5 },
							{ text: "les trois quarts", val: 0.75, n:3, d:4 }
                        ];

                        let p1, p2;
                        do {
                           p1 = getRandomItem(proportions);
                           p2 = getRandomItem(proportions);
                        } while (p1.text === p2.text);

                        const askForPercent = Math.random() < 0.5;
                        const q_end = askForPercent ? "en pourcentage" : "sous forme de fraction irréductible";
                        const item1 = getRandomItem(["d'élèves", " de participants", " de membres d'un club"]);
                        const item2 = getRandomItem(["internes", "sportifs", "musiciens"]);
                        const item3 = getRandomItem(["filles", "garçons", "débutants"]);

                        question = `<p>Dans un groupe ${item1}, ${p1.text} sont ${item2}. Parmi ces ${item2}, ${p2.text} sont des ${item3}. La proportion des ${item3} qui sont ${item2} par rapport à l'ensemble du groupe est égale à ? (Donner le résultat ${q_end}).</p>`;
                        
                        const final_val = p1.val * p2.val;
                        
                        if (askForPercent) {
                            const resPct = final_val * 100;
                            answer = `<p>${affNum(resPct)}%</p>`;
                            opts = [
                                { text: `$${affNum(resPct)}\\,\\%$`, isCorrect: true },
                                { text: `$${affNum(p1.val*100 + p2.val*100)}\\,\\%$`, isCorrect: false }, // Somme
                                { text: `$${affNum(Math.abs(p1.val - p2.val)*100)}\\,\\%$`, isCorrect: false }, // Diff
                                { text: `$${affNum(resPct/100)}\\,\\%$`, isCorrect: false }
                            ];
                        } else {
                            const final_n = p1.n * p2.n;
                            const final_d = p1.d * p2.d;
                            const g = gcd(final_n, final_d);
                            const resFrac = `\\dfrac{${final_n/g}}{${final_d/g}}`;
                            answer = `<p>$${resFrac}$</p>`;
                            
                            // Distracteurs fractions
                            const sumN = p1.n*p2.d + p2.n*p1.d; const sumD = p1.d*p2.d; // Somme
                            const sumFrac = simpFrac(sumN, sumD);
                            const divN = p1.n*p2.d; const divD = p1.d*p2.n; // Division
                            const divFrac = simpFrac(divN, divD);
                            
                            opts = [
                                { text: `$${resFrac}$`, isCorrect: true },
                                { text: `$${fracSign(sumFrac.n, sumFrac.d)}$`, isCorrect: false },
                                { text: `$${fracSign(divFrac.n, divFrac.d)}$`, isCorrect: false },
                                { text: `$\\dfrac{1}{${p1.d+p2.d}}$`, isCorrect: false }
                            ];
                        }

                    } else {
                        // CAS 3 : Pourcentages de temps
                        const p1 = getRandomItem([10, 20, 25, 40, 50, 60]);
                        const p2 = getRandomItem([10, 20, 25, 40, 50, 60, 75, 80]);
                        const item1 = getRandomItem(["sa journée", "son après-midi", "sa matinée"]);
                        const items2 = ["faire ses devoirs", "la lecture", "son temps de jeu"];
						const items3 = ["aux mathématiques", "à lire une BD", "à jouer sur console"];
						const item_i = randInt(0,items2.length-1);

                        question = `<p>Quelqu'un consacre ${p1}% de ${item1} à ${items2[item_i]}. ${p2}% du temps consacré à ${items2[item_i]} est alloué ${items3[item_i]}. Quel pourcentage de ${item1} représente le temps alloué ${items3[item_i]} ?</p>`;
                        
                        const final_p = (p1 / 100) * (p2 / 100) * 100;
                        
                        answer = `<p>On calcule ${p2}% de ${p1}%  $= ${affNum(final_p)}$%.</p>`;
                        
                        opts = [
                            { text: `$${affNum(final_p)}\\,\\%$`, isCorrect: true },
                            { text: `$${p1+p2}\\,\\%$`, isCorrect: false }, // Somme
                            { text: `$${Math.abs(p1-p2)}\\,\\%$`, isCorrect: false }, // Différence
                            { text: `$${affNum(final_p/100)}\\,\\%$`, isCorrect: false }
                        ];
                    }
                    
                    opts.sort(() => Math.random() - 0.5);
                    return { question, answer, options: opts };
                }
            },
			"Évolutions et variations": {
                "Lier taux d'évolution et coefficient multiplicateur.": () => {
                    // 1. Définir les paramètres aléatoires
                    const p = randInt(1, 99); 
                    const isIncrease = Math.random() < 0.5; 
                    const fromAdditive = Math.random() < 0.5; 

                    // 2. Calculer le coefficient multiplicateur (CM)
                    let cm, evolutionType;
                    if (isIncrease) {
                        cm = 1 + p / 100;
                        evolutionType = "augmentation";
                    } else {
                        cm = 1 - p / 100;
                        evolutionType = "diminution";
                    }

                    let question, answer, opts = [];
                    
                    if (fromAdditive) {
                        // Cas : Additif -> Multiplicatif
                        question = `<p>Pour appliquer une ${evolutionType} de $${p}\\%$, par quel coefficient multiplicateur faut-il multiplier ?</p>`;
                        answer = `<p>Il faut multiplier par $${affNum(cm)}$.</p>`;
                        
                        // Distracteurs
                        const d1 = p / 100; // Le taux brut (ex: 0.2 pour 20%)
                        const d2 = isIncrease ? 1 - p/100 : 1 + p/100; // Erreur de signe
                        const d3 = cm * 100; // Erreur d'échelle (ex: 120 au lieu de 1.2)
                        
                        opts = [
                            { text: `$${affNum(cm)}$`, isCorrect: true },
                            { text: `$${affNum(d1)}$`, isCorrect: false },
                            { text: `$${affNum(d2)}$`, isCorrect: false },
                            { text: `$${affNum(d3)}$`, isCorrect: false }
                        ];

                    } else {
                        // Cas : Multiplicatif -> Additif
                        question = `<p>Multiplier une valeur par $${affNum(cm)}$ correspond à quelle évolution en pourcentage ?</p>`;
                        answer = `<p>Cela correspond à une ${evolutionType} de $${p}\\%$.</p>`;
                        
                        const oppType = isIncrease ? "diminution" : "augmentation";
                        
                        // Distracteurs
                        const d1 = `${oppType} de $${p}\\%$`; // Bon taux, mauvais sens
                        const d2 = `${evolutionType} de $${affNum(cm * 100)}\\%$`; // Lecture directe (ex: x1.2 -> +120%)
                        const d3 = `${oppType} de $${affNum(cm * 100)}\\%$`; // faux
                        
                        opts = [
                            { text: `${evolutionType} de $${p}\\%$`, isCorrect: true },
                            { text: d1, isCorrect: false },
                            { text: d2, isCorrect: false },
                            { text: d3, isCorrect: false }
                        ];
                    }

                    opts.sort(() => Math.random() - 0.5);
                    return { question, answer, options: opts };
                },
                "Appliquer un taux d’évolution pour calculer une valeur finale ou initiale.": () => {
                    const contexts = [
                        { item: 'prix', unit: '€' },
                        { item: 'poids', unit: 'kg' },
                        { item: 'score', unit: 'points' },
                        { item: 'nombre de participants', unit: '' },
                        { item: 'volume', unit: 'L' }
                    ];
                    const context = getRandomItem(contexts);
                    const item = context.item;
                    const unit = context.unit;

                    const p = getRandomItem([10, 20, 25, 50]);
                    const initialValue = 4 * 5 * randInt(4,25,[5]); 
                    
                    const isIncrease = Math.random() < 0.5;
                    const findInitialValue = Math.random() < 0.5;

                    const cm = isIncrease ? 1 + p / 100 : 1 - p / 100;
                    const finalValue = initialValue * cm;
                    
                    let question, answer, opts = [];
                    const valP = initialValue * (p/100); // Valeur du pourcentage

                    if (findInitialValue) {
                        // CAS : Trouver la Valeur Initiale (Division par CM)
                        const evolutionText = isIncrease ? `une augmentation de $${p}\\%$` : `une baisse de $${p}\\%$`;
                        question = `<p>Après ${evolutionText}, un ${item} est de ${affNum(finalValue)} ${unit}. Quel était le ${item} initial ?</p>`;
                        answer = `<p>Le ${item} initial était de $\\dfrac{${affNum(finalValue)}}{${affNum(cm)}} = ${initialValue}$ ${unit}.</p>`;
                        
                        // Distracteurs
                        const d1 = finalValue * cm; // Multiplication au lieu de division
                        const d2 = finalValue * (isIncrease ? (1 - p/100) : (1 + p/100)); // évolution -p/100 (Faux!)
                        const d3 = finalValue / (isIncrease ? (1 - p/100) : (1 + p/100)); // Division par mauvais CM
                        
                        opts = [
                            { text: `$${affNum(initialValue)}$ ${unit}`, isCorrect: true },
                            { text: `$${affNum(d1)}$ ${unit}`, isCorrect: false },
                            { text: `$${affNum(d2)}$ ${unit}`, isCorrect: false },
                            { text: `$${affNum(d3)}$ ${unit}`, isCorrect: false }
                        ];

                    } else {
                        // CAS : Trouver la Valeur Finale (Multiplication par CM)
                        const evolutionText = isIncrease ? `augmente de $${p}\\%$` : `baisse de $${p}\\%$`;
                        question = `<p>Un ${item} de ${initialValue} ${unit} ${evolutionText}. Quel est le nouveau ${item} ?</p>`;
                        answer = `<p>Le nouvel ${item} est de $${initialValue} \\times ${affNum(cm)} = ${affNum(finalValue)}$ ${unit}.</p>`;
                        
                        // Distracteurs
                        const d1 = initialValue / cm; // Division au lieu de multiplication
                        const d2 = isIncrease ? initialValue - valP : initialValue + valP; // Erreur de sens
                        const d3 = initialValue + (isIncrease ? p : -p); // Addition simple du nombre p (ex: 100€ + 20% -> 120€ vs 100+20=120, attention aux cas pièges)
                        // Pour éviter que d3 soit égal à la bonne réponse (cas 100 + 20% = 120 et 100 + 20 = 120), on force une différence
                        // const d4 = initialValue * (isIncrease ? (1 + p/10) : (1 - p/10)); // Erreur puissance 10 sur p

                        opts = [
                            { text: `$${affNum(finalValue)}$ ${unit}`, isCorrect: true },
                            { text: `$${affNum(d1)}$ ${unit}`, isCorrect: false },
                            { text: `$${affNum(d2)}$ ${unit}`, isCorrect: false },
                            { text: `$${affNum(d3)}$ ${unit}`, isCorrect: false }
                        ];
                    }

                    opts.sort(() => Math.random() - 0.5);
                    return { question, answer, options: opts };
                },
                "Calculer un taux d’évolution en pourcentage.": () => {
                    const contexts = [
                        { item: 'prix', unit: '€' },
                        { item: 'poids', unit: 'kg' },
                        { item: 'score', unit: 'points' },
                        { item: 'nombre de participants', unit: '' },
                        { item: 'volume', unit: 'L' }
                    ];
                    const context = getRandomItem(contexts);
                    const item = context.item;
                    const unit = context.unit;

                    const p = getRandomItem([10, 20, 25, 40, 50]) * getRandomItem([-1,1]);
                    const initialValue = 4 * 5 * randInt(4,25,[5]); 
                    const finalValue = initialValue * (1 + p / 100);

                    const evolutionType = p > 0 ? "d'augmentation" : "de diminution";
                    
                    const question = `<p>Un ${item} passe de ${initialValue} ${unit} à ${affNum(finalValue)} ${unit}. Quel est son taux d'évolution en pourcentage ?</p>`;
                    const answer = `<p>$t = \\dfrac{${affNum(finalValue)} - ${initialValue}}{${initialValue}} = ${affNum(p/100)}$<br>Cela correspond à un taux ${evolutionType} de $${Math.abs(p)}\\%$.</p>`;

                    // Distracteurs
                    const d1 = (initialValue - finalValue) / finalValue * 100; // Erreur de base (divisé par V_f)
                    const d2 = Math.abs(finalValue - initialValue); // Variation absolue
                    const d3 = Math.abs(p) === 50 ? p > 0 ? 200 : 100 : (finalValue / initialValue) * 100; // CM en pourcentage (ex: 120%)

                    let opts = [
                        { text: `${evolutionType.replace('de ','').replace('d\'','')} de $${Math.abs(p)}\\%$`, isCorrect: true },
                        { text: `${p>0 ? 'diminution' : 'augmentation'} de $${affNum(Math.round(Math.abs(d1)*10)/10)}\\%$`, isCorrect: false },
                        { text: `${evolutionType.replace('de ','').replace('d\'','')} de $${affNum(d2)}\\%$`, isCorrect: false },
                        { text: `${evolutionType.replace('de ','').replace('d\'','')} de $${affNum(d3)}\\%$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return { question, answer, options: opts };
                },
                "taux d'évolution global.": () => {
				    const item = getRandomItem(['prix', 'poids', 'score', 'nombre de participants', 'volume']);
                    let question, answer, opts = [];

					if (Math.random() < 0.75) {
                        // Cas calcul exact
						const p1 = getRandomItem([10, 20, 30, 40, 50]) * getRandomItem([-1,1]);
						const p2 = getRandomItem([10, 20, 30, 40, 50]) * getRandomItem([-1,1]);
						const cm1 = 1 + p1 / 100;
						const cm2 = 1 + p2 / 100;
						const evo1 = p1 >= 0 ? "hausse" : "baisse";
						const evo2 = p2 >= 0 ? "hausse" : "baisse";
						const cmGlobal = cm1 * cm2;
						const pGlobal = (cmGlobal - 1) * 100;
						const evolutionType = pGlobal >= 0 ? "hausse" : "baisse";
                        
                        // Distracteurs
                        const d1 = p1 + p2; // Somme des taux (ERREUR CLASSIQUE)
                        const d2 = (p1 + p2) / 2; // Moyenne
						const d3 = cmGlobal*100  // oubli -1
                        
                        question = `Un ${item} subit une ${evo1} de $${Math.abs(p1)}\\,\\%$ puis une ${evo2} de $${Math.abs(p2)}\\,\\%$. Quel est le taux d'évolution global ?`;
                        answer = `<p>Une ${evolutionType} globale de $${affNum(Math.abs(pGlobal))}\\,\\%$.</p>`;
                        
                        opts = [
                            { text: `${pGlobal>=0?'Hausse':'Baisse'} de $${affNum(Math.abs(pGlobal))}\\%$`, isCorrect: true },
                            { text: `${d1>=0?'Hausse':'Baisse'} de $${affNum(Math.abs(d1))}\\%$`, isCorrect: false },
                            { text: `${d2>=0?'Hausse':'Baisse'} de $${affNum(Math.abs(d2))}\\%$`, isCorrect: false },
                            { text: `${d3>=0?'Hausse':'Baisse'} de $${affNum(Math.abs(d3))}\\%$`, isCorrect: false }
                        ];

					} else {
                        // Cas Hausse p% puis Baisse p%
						const p = randInt(1,19)*5;
						const evos = ['hausse','baisse'];
						const i = randInt(0,1);
                        
						question = `Un ${item} subit une ${evos[i]} de $${p}\\,\\%$ puis une ${evos[1-i]} de $${p}\\,\\%$. Le nouveau ${item} est-il égal, plus petit ou plus grand que l'ancien ?`;
						answer = `<p>Il est plus petit.</p>`;
                        
                        opts = [
                            { text: `Plus petit`, isCorrect: true },
                            { text: `Plus grand`, isCorrect: false },
                            { text: `Égal`, isCorrect: false },
                            { text: `On ne peut pas savoir`, isCorrect: false }
                        ];
					}
                    
                    opts.sort(() => Math.random() - 0.5);
                    return { question, answer, options: opts };
                },
                "taux d’évolution réciproque.": () => {
				    const item = getRandomItem(['prix', 'poids', 'score', 'nombre de participants', 'volume']);
                    const p = getRandomItem([-20, 25, -50, 100, -75]);
					const evolutionType = p >= 0 ? "augmente" : "diminue";
					const evoRecType = p >= 0 ? "diminuer" : "augmenter";
                    const cm = 1 + p / 100;
                    const cmReciprocal = 1 / cm;
                    const pReciprocal = (cmReciprocal - 1) * 100;
                                                     
                    let opts = [
                        { text: `$${affNum(Math.abs(pReciprocal))}\\,\\%$`, isCorrect: true },
                        { text: `$${affNum(Math.abs(p))}\\,\\%$`, isCorrect: false },   //Le même (erreur classique)
                        { text: `$${Math.abs(p) === 50 ? 150 : affNum(100 - Math.abs(p))}\\,\\%$`, isCorrect: false },  // complément à 100
                        { text: `$${Math.abs(p) === 100 ? p > 0 ? 200 : 150 : affNum(cmReciprocal*100)}\\,\\%$`, isCorrect: false }   // oubli -1
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `Un ${item} ${evolutionType} de $${Math.abs(p)}\\,\\%$. De quel pourcentage doit-il ${evoRecType} pour revenir à sa valeur initiale ?`,
                        answer: `<p>Il doit ${evoRecType} de $${affNum(Math.abs(pReciprocal))}\\,\\%$.</p>`,
                        options: opts
                    };
                }
            },
			"Fonctions et représentations": {
			    "Calculer une image, Reconnaître un antécédent": () => {
                    // 1. Définir une liste de familles de fonctions aléatoires
                    const functionFamilies = [
                        // Famille 1: Polynôme du second degré
                        () => {
                            const a = randInt(-3, 3, [0]);
                            const b = randInt(-5, 5);
                            const c = randInt(-5, 5);
                            let expr = (a === 1 ? '' : (a === -1 ? '-' : a)) + 'x^2';
                            if (b !== 0) expr += (b > 0 ? ' + ' : ' - ') + Math.abs(b) + 'x';
                            if (c !== 0) expr += (c > 0 ? ' + ' : ' - ') + Math.abs(c);
                            return {
                                f: (n,d) => simpFrac(a*n**2+b*n*d+c*d**2,d**2),
                                expr: expr,
                                domain: (x) => true // Valide pour tout x
                            };
                        },
                        // Famille 2: Fonction affine
                        () => {
                            const a = randInt(-5, 5, [0]);
                            const b = randInt(-10, 10);
                            let expr = (a === 1 ? '' : (a === -1 ? '-' : a)) + 'x';
                            if (b !== 0) expr += (b > 0 ? ' + ' : ' - ') + Math.abs(b);
                            return {
                                f: (n,d) => simpFrac(a*n+b*d,d),
                                expr: expr,
                                domain: (x) => true
                            };
                        },
                        // Famille 3: Fonction inverse décalée
                        () => {
                            const a = randInt(1, 10, [0]);
                            const b = randInt(-3, 3);
                            let expr = `\\dfrac{${a}}{x}`;
                            if (b !== 0) expr += (b > 0 ? ' + ' : ' - ') + Math.abs(b);
                            return {
                                f: (n,d) => simpFrac(a*d+b*n,n),
                                expr: expr,
                                domain: (x) => x !== 0 // x ne peut pas être 0
                            };
                        },
                        // Famille 4: Fonction racine carrée
                        () => {
                            const a = randInt(1, 5);
                            const b = randInt(-5, 5);
                            let expr = `${a === 1 ? '' : a}\\sqrt{x}`;
                            if (b !== 0) expr += (b > 0 ? ' + ' : ' - ') + Math.abs(b);
                            return {
                                f: (n,d) => simpFrac(a*Math.sqrt(n)+b*Math.sqrt(d),Math.sqrt(d)),
                                expr: expr,
                                domain: (x) => x >= 0 // x doit être positif ou nul
                            };
                        },
                        // Famille 5: Polynôme du troisième degré simple
                        () => {
                            const a = randInt(-2, 2, [0]);
                            const c = randInt(-5, 5, [0]);
                            let expr = (a === 1 ? '' : (a === -1 ? '-' : a)) + 'x^3';
                            if (c !== 0) expr += (c > 0 ? ' + ' : ' - ') + Math.abs(c);
                            return {
                                f: (n,d) => simpFrac(a*n**3+c*d**3,d**3),
                                expr: expr,
                                domain: (x) => true
                            };
                        }
                    ];

                    // 2. Choisir une famille de fonction et la générer
                    const chosenFamily = getRandomItem(functionFamilies);
                    const { f, expr, domain } = chosenFamily();
                    
                    const intro = `On considère la fonction $f$ définie par $f(x) = ${expr}$.`;
					
					let x_val;
					// On choisit une valeur de x valide pour le domaine de la fonction
					do {
						x_val = randInt(domain === ((x) => x >= 0) ? 0 : -5, 5);
					} while (!domain(x_val));
					
					// Pour la racine carrée, on choisit des carrés parfaits
					if (expr.includes('\\sqrt')) {
						x_val = getRandomItem([0, 1, 4, 9, 16]);
					}
					const y_correct = f(x_val,1);
                    
                    // 3. Choisir le type de question					
					let question, answer, opts = [];

                    if (Math.random() < 0.5) {
                        // CAS 1 : Calculer une image 
                        question = `<p>${intro}<br>L’image de $${x_val}$ par la fonction $f$ est égale à ?</p>`;
                        answer = `<p>$f(${x_val}) = ${fracSign(y_correct.n,y_correct.d)}$</p>`;
                        
                        // Distracteurs
                        const d1 = fracSign(-y_correct.n, y_correct.d); // Erreur de signe
                        const d2 = fracSign(y_correct.d, y_correct.n); // Inverse
                        const d3 = `${x_val}`; // L'antécédent
                        
                        opts = [
                            { text: `$${fracSign(y_correct.n,y_correct.d)}$`, isCorrect: true },
                            { text: `$${d1}$`, isCorrect: false },
                            { text: `$${d2}$`, isCorrect: false },
                            { text: `$${d3}$`, isCorrect: false }
                        ];
						
						opts.sort(() => Math.random() - 0.5);

                    } else {
                        // CAS 2 : Reconnaître un antécédent
                        const is_antecedent = Math.random() < 0.5;
                        const y_test = is_antecedent ? y_correct : {n: y_correct.n + getRandomItem([-1,1]) , d: y_correct.d};
                        
                        question = `<p>${intro}<br>Le nombre $${x_val}$ est-il un antécédent de $${fracSign(y_test.n,y_test.d)}$ par $f$ ?</p>`;
                        answer = `<p>On calcule $f(${x_val}) = ${fracSign(y_correct.n,y_correct.d)}$.<br>Comme $f(${x_val}) ${is_antecedent ? '=' : '\\neq'} ${fracSign(y_test.n,y_test.d)}$, la réponse est ${is_antecedent ? 'Oui' : 'Non'}.</p>`;                        
                        
                        opts = [
                            { text: `Oui`, isCorrect: is_antecedent },
                            { text: `Non`, isCorrect: !is_antecedent },
                            { text: `On ne peut pas savoir`, isCorrect: false }
                        ];
                    }                

					return { question, answer, options: opts };
                },
                "Déterminer graphiquement des images et des antécédents.": () => {
                    const [xmin, xmax] = [-5, 5]; const [ymin, ymax] = [-5, 5];
                    const h = randInt(xmin + 2, xmax - 2); const k = randInt(ymin + 2, ymax - 2);
                    const a = getRandomItem([1, -1]);
                    let questionText, answerText, opts = [];

                    if (Math.random() < 0.5) {
                        // Chercher image
                        let x_val, y_val;
                        do { x_val = randInt(xmin + 1, xmax - 1); y_val = a * Math.pow(x_val - h, 2) + k; } while (y_val < ymin || y_val > ymax);
                        questionText = `Déterminer graphiquement l'image de $${x_val}$.`;
                        answerText = `L'image est $y = ${y_val}$.`;
						
						let x1, x2, x3;
						if ((x_val-k)/a > 0){ 
						   x1 = Math.round((h - Math.sqrt((x_val-k)/a))*10)/10;
						   x2 = Math.round((h + Math.sqrt((x_val-k)/a))*10)/10;
						} else {
						   if ((x_val-k)/a === 0){
						      x1 = h;
							  do {x2 = randInt(ymin + 1, ymax - 1)} while (x2 === x1 || x2 === y_val);
						   } else {
						      do {x1 = randInt(ymin + 1, ymax - 1)} while (x1 === y_val);
							  x2 = x1; //pour forcer le "pas d'image"						   
						   }
						}
						do {x3 = randInt(ymin + 1, ymax - 1)} while (x3 === x1 || x3 === x2 || x3 === y_val);
                        
                        opts = [
                            { text: `$${y_val}$`, isCorrect: true },
                            { text: `$${affNum(x1)}$`, isCorrect: false },
                            { text: `$${affNum(x2)}$`, isCorrect: false },
                            { text: `$${affNum(x3)}$`, isCorrect: false }
                        ];
						
						// Clean
                        opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                        while(opts.length < 4) opts.push({text: `pas d'image`, isCorrect: false});

                    } else {
                        // Chercher antécédent
                        const caseType = randInt(1, 10);
                        if (caseType <= 2) { 
                            // Pas d'antécédent
                            const y_val = a > 0 ? randInt(ymin, k - 1) : randInt(k + 1, ymax); 
							const bad_img = a*(y_val - h)*(y_val-h)+k;
							let x1, x2;
							x1 = randInt(xmin + 1, xmax - 1)
							do {x2 = randInt(ymin + 1, ymax - 1)} while (x2 === x1);
                            questionText = `Déterminer le ou les antécédents de $${y_val}$.`; 
                            answerText = `Il n'y a pas d'antécédent.`;
                            opts = [
                                { text: `Aucun antécédent`, isCorrect: true },
                                { text: `$${x1}$ et $${x2}$`, isCorrect: false },
                                { text: `$${-x1}$ et $${-x2}$`, isCorrect: false },
                                { text: `$${bad_img}$`, isCorrect: false }
                            ];
                        } else if (caseType <= 4) { 
                            // 1 antécédent (sommet)
                            const y_val = k; 
							const bad_img = a*(y_val - h)*(y_val-h)+k;
							let x1, x2;
							x1 = randInt(xmin + 1, xmax - 1)
							do {x2 = randInt(ymin + 1, ymax - 1)} while (x2 === x1 || x2 === bad_img);
                            questionText = `Déterminer le ou les antécédents de $${y_val}$.`; 
                            answerText = `L'unique antécédent est $x = ${h}$.`; 
                            opts = [
                                { text: `$${h}$`, isCorrect: true },
                                { text: `$${h === bad_img ? x2 : bad_img}$`, isCorrect: false },
                                { text: `Aucun antécédent`, isCorrect: false },
                                { text: `$${x1}$ et $${x2}$`, isCorrect: false }
                            ];
                        } else { 
                            // 2 antécédents
                            let y_val, x1, x2, dx; 
                            do { dx = randInt(1, 3); y_val = a * (dx**2) + k; x1 = h - dx; x2 = h + dx; } while (y_val < ymin || y_val > ymax || x1 > xmax || x2 < xmin); 
							const bad_img = a*(y_val - h)*(y_val-h)+k;
                            questionText = `Déterminer le ou les antécédents de $${y_val}$.`; 
                            answerText = `Les antécédents sont $x_1 = ${x1}$ et $x_2 = ${x2}$.`; 
                            opts = [
                                { text: `$${x1}$ et $${x2}$`, isCorrect: true },
                                { text: `$${bad_img}$`, isCorrect: false },
                                { text: `$${x1 === bad_img ? x2 : x2 === bad_img ? x1 : getRandomItem([x1, x2])}$`, isCorrect: false },
                                { text: `Aucun antécédent`, isCorrect: false }
                            ];
                        }
                    }
                    
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: { html: `<p>${questionText}</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [xmin, ymax, xmax, ymin]);
                                const f = (x) => a * (x-h)**2 + k;
                                board.create('functiongraph', [f], { strokeColor: theme.curveColor, strokeWidth: 2.5 });
                                return board;
                            }
                        },
                        answer: `<p>${answerText}</p>`,
                        options: opts
                    };
                },
                "Exploiter une équation de courbe (appartenance d’un point, calcul de coordonnées).": () => {
                    const type = randInt(1, 3);
                    let expr, f, bad_f;
					let x_val = randInt(2, 5);

                    if (type === 1) { // Droite
                        const a = randInt(2, 4); const b = randInt(-5, 5);
                        expr = `y = ${a}x ${b > 0 ? '+' : b === 0 ? '' : '-'} ${b === 0 ? '' : Math.abs(b)}`;
                        f = (x) => a * x + b;
						bad_f = b === 0 ? (x) => - a * x  : (x) => a * x - b;
                    } else if (type === 2) { // Parabole
                        const b = randInt(-5, 5);
                        expr = `y = x^2 ${b > 0 ? '+' : b === 0 ? '' : '-'} ${b === 0 ? '' : Math.abs(b)}`;
                        f = (x) => x * x + b;
						bad_f = (x) => -1 * x * x + b;
                    } else { // Hyperbole
                        const fact = randInt(2, 4);
                        const a = randInt(2, 5) * x_val; 
                        expr = `y = \\dfrac{${a}}{x}`;
                        f = (x) => a / x;
						bad_f = (x) => -a / x;
                    }
					
                    let opts = [];
                    if (Math.random() < 0.5) {
                        // CAS 1 : Calcul de coordonnées 
						const y_val = f(x_val);
						const bad_y = bad_f(x_val);
						let v1, v2;
						do {v1 = randInt(-10, 10)} while (v1 === y_val || v1 === bad_y);
						do {v2 = randInt(-10, 10)} while (v2 === v1 || v2 === y_val || v2 === bad_y);
                        opts = [
                            { text: `$${y_val}$`, isCorrect: true },
                            { text: `$${bad_y}$`, isCorrect: false },
                            { text: `$${v1}$`, isCorrect: false },
                            { text: `$${v2}$`, isCorrect: false }
                        ];
                        opts.sort(() => Math.random() - 0.5);
                        
                        return {
                            question: `<p>Calculer l'ordonnée du point d'abscisse $${x_val}$ sur la courbe d'équation :</p><p class="text-center font-bold my-4">$${expr}$</p>`,
                            answer: `<p>$y = ${y_val}$</p>`,
                            options: opts
                        };
                    } else {
                        // CAS 2 : Appartenance d'un point
                        const y_val_correct = f(x_val);
                        const is_on_curve = Math.random() < 0.5;
                        const y_test = is_on_curve ? y_val_correct : y_val_correct + randInt(1, 3) * getRandomItem([-1, 1]);
                        
                        const answer_text = is_on_curve 
                            ? `Oui, car $f(${x_val}) = ${y_test}$.` 
                            : `Non, car $f(${x_val}) = ${y_val_correct} \\neq ${y_test}$.`;
                        
                        opts = [
                            { text: `Oui`, isCorrect: is_on_curve },
                            { text: `Non`, isCorrect: !is_on_curve },
                            { text: `On ne peut pas savoir`, isCorrect: false }
                        ];

                        return {
                            question: `<p>Le point A$(${x_val}; ${y_test})$ appartient-il à la courbe d'équation $${expr}$ ?</p>`,
                            answer: `<p>${answer_text}</p>`,
                            options: opts
                        };
                    }
                },
                "Reconnaître l’expression d’une fonction linéaire, d’une fonction affine, savoir que leur représentation graphique est une droite.": () => {
				    const a = randInt(2,5); const b = randInt(1,5);
                    const types = [
                        { expr: `${a}x`, name: 'est affine et linéaire', repg: "est une droite qui passe par l'origine" },
                        { expr: `${a}x + ${b}`, name: 'est affine mais pas linéaire', repg: "est une droite qui ne passe pas par l'origine" },
                        { expr: `${a}x^2 + ${b}`, name: "n'est pas affine (et donc pas linéaire)", repg: "n'est pas une droite" },
                        { expr: `\\dfrac{${a}}{x}+ ${b}`, name: "n'est pas affine (et donc pas linéaire)", repg: "n'est pas une droite" },
						{ expr: `\\dfrac{x}{${a}}+ ${b}`, name: 'est affine mais pas linéaire', repg: "est une droite qui ne passe pas par l'origine" },
						{ expr: `${a*a}x^2 - (${linearExpr(Math.abs(a),b)})^2`, name: 'est affine mais pas linéaire', repg: "est une droite qui ne passe pas par l'origine" }, // Simplification ax^2 - (ax+b)^2 -> degré 1
						{ expr: `${a*a}x^2 - (${linearExpr(Math.abs(a+getRandomItem([-1,1])),b)})^2`, name: "n'est pas affine (et donc pas linéaire)", repg: "n'est pas une droite" }						
                    ];
                    const choice = getRandomItem(types);
                    let opts = [];

					if (Math.random() < 0.5) {
                        const q = `La fonction $f$ d'expression $f(x) = ${choice.expr}$ est-elle une fonction affine ? linéaire ?`;
                        
                        if (choice.name.includes("affine et linéaire")) {
                             opts = [ {text: "Affine et linéaire", isCorrect: true}, {text: "Affine mais pas linéaire", isCorrect: false}, {text: "Ni affine ni linéaire", isCorrect: false} ];
                        } else if (choice.name.includes("affine mais pas linéaire")) {
                             opts = [ {text: "Affine et linéaire", isCorrect: false}, {text: "Affine mais pas linéaire", isCorrect: true}, {text: "Ni affine ni linéaire", isCorrect: false} ];
                        } else {
                             opts = [ {text: "Affine et linéaire", isCorrect: false}, {text: "Affine mais pas linéaire", isCorrect: false}, {text: "Ni affine ni linéaire", isCorrect: true} ];
                        }
                        
                        opts.sort(() => Math.random() - 0.5);
						opts.push({text: "On ne peut pas savoir", isCorrect: false});

						return { question: q, answer: `<p>La fonction $f$ ${choice.name}.</p>`, options: opts };
					} else {
                        const q = `La représentation graphique de la fonction $f$ d'expression $f(x) = ${choice.expr}$ est-elle une droite ? qui passe par l'origine ?`;
                         
                         if (choice.repg.includes("pas une droite")) {
                             opts = [ {text: "Ce n'est pas une droite", isCorrect: true}, {text: "Droite passant par l'origine", isCorrect: false}, {text: "Droite ne passant pas par l'origine", isCorrect: false} ];
                         } else if (choice.repg.includes("passe par l'origine")) {
                             opts = [ {text: "Ce n'est pas une droite", isCorrect: false}, {text: "Droite passant par l'origine", isCorrect: true}, {text: "Droite ne passant pas par l'origine", isCorrect: false} ];
                         } else {
                             opts = [ {text: "Ce n'est pas une droite", isCorrect: false}, {text: "Droite passant par l'origine", isCorrect: false}, {text: "Droite ne passant pas par l'origine", isCorrect: true} ];
                         }
                         
                         opts.sort(() => Math.random() - 0.5);
						 opts.push({text: "On ne peut pas savoir", isCorrect: false});
                         
						return { question: q, answer: `<p>La représentation graphique de $f$ ${choice.repg}.</p>`, options: opts };
					};
                },
                "Résoudre graphiquement une équation du type : f(x) = k":  () => {
                    const [xmin, xmax] = [-5, 5]; const [ymin, ymax] = [-5, 5];
                    const h = randInt(xmin + 2, xmax - 2); const k = randInt(ymin + 2, ymax - 2);
                    const a = getRandomItem([1, -1]);
                    let questionText, answerText, opts = [];

                    const caseType = randInt(1, 10);
                    if (caseType <= 2) {
                        // Pas de solution
						const y_val = a > 0 ? randInt(ymin, k - 1) : randInt(k + 1, ymax); 
						const bad_img = a*(y_val - h)*(y_val-h)+k;
						let x1, x2;
						x1 = randInt(xmin + 1, xmax - 1)
						do {x2 = randInt(ymin + 1, ymax - 1)} while (x2 === x1);
						questionText = `Résoudre graphiquement l'équation $f(x)=${y_val}$.`;  
						answerText = `Il n'y a pas de solution.`; 
                        opts = [{text: `$S = \\emptyset$`, isCorrect: true}, {text: `$S = \\{${bad_img}\\}$`, isCorrect: false}, {text: `$S = \\{${x1}\\,;${x2}\\}$`, isCorrect: false}, {text: `$S = \\{${-x1}\\,;${-x2}\\}$`, isCorrect: false}];

					} else if (caseType <= 4) { 
                        // 1 solution
						const y_val = k; 
						const bad_img = a*(y_val - h)*(y_val-h)+k;
						let x1, x2;
						x1 = randInt(xmin + 1, xmax - 1)
						do {x2 = randInt(ymin + 1, ymax - 1)} while (x2 === x1 || x2 === bad_img);
						questionText = `Résoudre graphiquement l'équation $f(x)=${y_val}$.`; 
						answerText = `L'unique solution est $x = ${h}$.`; 
                        opts = [{text: `$S = \\{${h}\\}$`, isCorrect: true}, {text: `$S = \\emptyset$`, isCorrect: false}, {text: `$S = \\{${h === bad_img ? x2 : bad_img}\\}$`, isCorrect: false}, {text: `$S = \\{${x1}\\,;${x2}\\}$`, isCorrect: false}];

					} else { 
                        // 2 solutions
						let y_val, x1, x2, dx; 
						do { 
							dx = randInt(1, 3); y_val = a * (dx**2) + k; x1 = h - dx; x2 = h + dx; 
						} while (y_val < ymin || y_val > ymax || x1 > xmax || x2 < xmin);
                        const bad_img = a*(y_val - h)*(y_val-h)+k;						
						questionText = `Résoudre graphiquement l'équation $f(x)=${y_val}$.`;  
						answerText = `Les solutions sont $x_1 = ${x1}$ et $x_2 = ${x2}$.`; 
                        opts = [{text: `$S = \\{${x1}; ${x2}\\}$`, isCorrect: true}, {text: `$S = \\{${bad_img}\\}$`, isCorrect: false}, {text: `$S = \\{${x1 === bad_img ? x2 : x2 === bad_img ? x1 : getRandomItem([x1, x2])}\\}$`, isCorrect: false}, {text: `$S = \\emptyset$`, isCorrect: false}];
					}
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: { html: `<p>${questionText}</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [xmin, ymax, xmax, ymin]);
                                const f = (x) => a * (x-h)**2 + k;
                                board.create('functiongraph', [f], { strokeColor: theme.curveColor, strokeWidth: 2.5 });
                                return board;
                            }
                        },
                        answer: `<p>${answerText}</p>`,
                        options: opts
                    };
                },
                "Résoudre graphiquement une équation du type : f(x) = g(x)": function() {
                    const [xmin, xmax] = [-5, 5]; const [ymin, ymax] = [-5, 5];
                    let x1, x2, m, p, a, f, g, vertex_x, vertex_y;
                    do {
                        x1 = randInt(xmin + 1, 0); x2 = randInt(1, xmax - 1);
                        m = randInt(-2, 2); p = randInt(-2, 2);
                        a = getRandomItem([1, -1]);
                        g = (x) => m * x + p;
                        f = (x) => a * (x - x1) * (x - x2) + g(x);
                        vertex_x = (x1 + x2) / 2;
                        vertex_y = f(vertex_x);
                    } while (vertex_y < ymin || vertex_y > ymax);
                    
                    // Distracteurs : Inversion x/y, ou seulement 1 solution, ou ensemble vide
                    const y1 = g(x1); const y2 = g(x2);
                    
                    let opts = [
                        { text: `$S = \\{${x1}; ${x2}\\}$`, isCorrect: true },
                        { text: y1 !== y2 ? `$S = \\{${y1}; ${y2}\\}$` : y1 !== x1 ? `$S = \\{${y1}\\}$` : `$S = \\{${x2}\\}$` , isCorrect: false }, // Les ordonnées
                        { text: `$S = \\{${x1}\\}$`, isCorrect: false },
                        { text: `$S = \\emptyset$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: { html: `<p>Résoudre graphiquement l'équation $f(x) = g(x)$.</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [xmin, ymax, xmax, ymin]);

                                board.create('functiongraph', [f], { name: 'C_f', withLabel:true, label:{strokeColor:theme.curveColor, fontSize: 16, cssClass: 'font-bold'}, strokeColor:theme.curveColor, strokeWidth: 2.5});
                                board.create('functiongraph', [g], { name: 'C_g', withLabel:true, label:{strokeColor:theme.lineColor2, fontSize: 16, cssClass: 'font-bold'}, strokeColor:theme.lineColor2, strokeWidth: 2.5});
                                return board;
                            }
                        }, answer: `<p>Les solutions sont les abscisses des points d'intersection : $S = \\{${x1}; ${x2}\\}$</p>`,
                        options: opts
                    };
                },
                "Résoudre graphiquement une inéquation du type : f(x) < k, etc..": function() {
                    const [xmin, xmax] = [-5, 5]; const [ymin, ymax] = [-5, 5];
                    const h = randInt(xmin + 2, xmax - 2); const k = randInt(ymin + 2, ymax - 2);
                    const a = getRandomItem([1, -1]);
                    const inequality = getRandomItem(['<', '\\leqslant', '>', '\\geqslant']);
                    let y_val, x1, x2, dx;
                    do { dx = randInt(1, 3); y_val = a * (dx**2) + k; x1 = h + dx; x2 = h - dx; } while (y_val < ymin || y_val > ymax);
                    
                    const correctInt = formatInterval(inequality, a, x1, x2);
                    
                    // Distracteur : intervalle opposé (ex: entre racines vs extérieur)
                    const oppIneq = inequality.includes('<') ? '>' : '<';
                    const wrongInt1 = formatInterval(oppIneq, a, x1, x2);
                    
                    // Distracteur : erreur bornes (x1..x2 vs 0..val)
                    const wrongInt2 = `S = [${Math.min(x1,x2)}\\,; +\\infty[`; 
                    const wrongInt3 = `S = ]-\\infty\\,; ${Math.max(x1,x2)}]`;

                    let opts = [];
                     //   { text: `$${correctInt}$`, isCorrect: true },
                     //   { text: `$${wrongInt1}$`, isCorrect: false },
                     //   { text: `$${wrongInt2}$`, isCorrect: false },
                      //  { text: `$${wrongInt3}$`, isCorrect: false }
                    //];
                    
					for (const ineq of ['<', '\\leqslant', '>', '\\geqslant']) opts.push({ text: `$${formatInterval(ineq, a, x1, x2)}$`, isCorrect: ineq === inequality });
					
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: { html: `<p>Résoudre graphiquement l'inéquation $f(x) ${inequality} ${y_val}$.</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [xmin, ymax, xmax, ymin]);
                                const f = (x) => a * (x-h)**2 + k;
                                board.create('functiongraph', [f], {strokeColor:theme.curveColor, strokeWidth: 2.5});
                                return board;
                            }
                        }, 
						answer: `<p>$${formatInterval(inequality, a, x1, x2)}$</p>`,
                        options: opts
                    };
                },
                "Résoudre graphiquement une inéquation du type : f(x) < g(x), etc..": function() {
                    const [xmin, xmax] = [-5, 5]; let x1, x2, m, p, a;
                    do { x1 = randInt(xmin + 1, 0); x2 = randInt(1, xmax - 1); m = randInt(-2, 2); p = randInt(-2, 2); a = getRandomItem([1, -1]); const g=(x)=>m*x+p; const f=(x)=>a*(x-x1)*(x-x2)+g(x); const vertex_y = f((x1+x2)/2); if(vertex_y < -5 || vertex_y > 5) a=0; } while (a === 0);
                    const inequality = getRandomItem(['<', '\\leqslant', '>', '\\geqslant']);
                    
                    const correctInt = formatInterval(inequality, a, x1, x2); // Logic holds for f-g
                    const oppIneq = inequality.includes('<') ? '>' : '<';
                    const wrongInt1 = formatInterval(oppIneq, a, x1, x2);
                    
                    let opts = [];
                    //    { text: `$${correctInt}$`, isCorrect: true },
                    //    { text: `$${wrongInt1}$`, isCorrect: false },
                    //    { text: `$S = \\emptyset$`, isCorrect: false },
                    //    { text: `$S = \\mathbb{R}$`, isCorrect: false }
                    //];
					
					for (const ineq of ['<', '\\leqslant', '>', '\\geqslant']) opts.push({ text: `$${formatInterval(ineq, a, x1, x2)}$`, isCorrect: ineq === inequality });
					
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: { html: `<p>Résoudre graphiquement l'inéquation $f(x) ${inequality} g(x)$.</p><div id="jxgbox-q" class="jxgbox"></div>`,
                             render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId);
                                const g = (x) => m*x + p; const f = (x) => a * (x-x1)*(x-x2) + g(x);
                                board.create('functiongraph', [f], {name: 'C_f', withLabel:true, label:{strokeColor:theme.curveColor, fontSize: 16, cssClass: 'font-bold'}, strokeColor:theme.curveColor, strokeWidth: 2.5});
                                board.create('functiongraph', [g], {name: 'C_g', withLabel:true, label:{strokeColor:theme.lineColor2, fontSize: 16, cssClass: 'font-bold'}, strokeColor:theme.lineColor2, strokeWidth: 2.5});
                                return board;
                            }
                        }, answer: `<p>On cherche quand $C_f$ est ${inequality.includes('>') || inequality.includes('ge')?'au-dessus':'en-dessous'} de $C_g$. $${formatInterval(inequality, a, x1, x2)}$</p>`,
                        options: opts
                    };
                },
                "Déterminer graphiquement le signe d’une fonction.": function() {
                    let roots, a = getRandomItem([1, -1]), alpha, beta;
                    const caseType = randInt(1, 10);
					const isXFX = Math.random() < 0.2;    // inéquation du type x * f(x) > 0
                    
                    if (isXFX || caseType <= 6) { const r1 = randInt(-3, 0); roots = [r1, randInt(r1 + 2, 4)]; alpha = (roots[0]+roots[1])/2;}
                    else if (caseType <= 8) { roots = [randInt(-2, 2)]; alpha = roots[0];}
                    else { roots = []; alpha = randInt(-2,2); beta = a * randInt(1,3) }
                    
                    const f = (x) => {
                        if (roots.length === 2) return a * (x - roots[0]) * (x - roots[1]);
                        if (roots.length === 1) return a * (x - roots[0])**2;
                        return  a * (x - alpha)**2 + beta;
                    };
					const ymin = Math.min(-5.5,f(alpha)-randInt(2,4));
					const ymax = Math.max(5.5,f(alpha)+randInt(2,4));
					
					let question, answer, opts = [];
					if (!isXFX) {
                        const getTable = (r, coefA) => createSignTable(r, coefA).replaceAll('$$','');
                        const correctT = getTable(roots, a);
                        const wrongT1 = getTable(roots, -a); // Mauvais signe
                        // Mauvaises racines
                        const fakeRoots = roots.map(r => r === 0 ? 1 : -r);
						let wrongT2, wrongT3; 
						if (fakeRoots.length === 2){
                           wrongT2 = getTable(fakeRoots, a);
                           wrongT3 = getTable(fakeRoots, -a);
						} else if (fakeRoots.length === 1) {
						   wrongT2 = getTable([], a);
                           wrongT3 = getTable([], -a);
						} else {
						   wrongT2 = getTable([alpha], a);
                           wrongT3 = getTable([alpha], -a);
						}

                        question = { html: `<p>Dresser le tableau de signes de la fonction $f$ représentée ci-contre.</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-5.5,ymax,5.5,ymin]);
                                board.create('functiongraph', [f], {strokeColor:theme.curveColor, strokeWidth: 2.5}); return board;
                            }
                        };
						answer = createSignTable(roots, a);
                        opts = [
                            { text: `$${correctT}$`, isCorrect: true },
                            { text: `$${wrongT1}$`, isCorrect: false },
                            { text: `$${wrongT2}$`, isCorrect: false },
                            { text: `$${wrongT3}$`, isCorrect: false }
                        ];
                        
                    } else {
					    // abscisses des 4 points
					    let xA, xB, xC, xD;         
						xA = roots[0] -0.9 - Math.random(); while (f(xA) >= ymax || f(xA) <= ymin){ xA += 0.1; };
						xB = roots[0] + 0.1 + Math.random() * ((roots[1] - roots[0])/2 - 0.2);
						xC = xB + 0.5 + Math.random() * (roots[1] - xB - 0.6);
						xD = roots[1] + 0.3 + Math.random(); while (f(xD) >= ymax || f(xD) <= ymin){ xD -= 0.1; }
						
						// solutions de l'inéquation x * f(x) > 0
						let solutions = [];
						const pts = new Map([ ["$x_A$", xA], ["$x_B$", xB], ["$x_C$", xC], ["$x_D$", xD] ]);
						for (let [key,value] of pts) if(value*f(value)>0) solutions.push(key);
                        
                        const allKeys = Array.from(pts.keys());
                        const wrongSol1 = allKeys.filter(k => !solutions.includes(k)); // L'inverse
                        const wrongSol2 = [allKeys[0], allKeys[3]]; // Extrémités
                        
						question = { html: `<p>On a représenté la courbe d'une fonction $f$. Les points $A$, $B$, $C$, $D$ appartiennent à la courbe.<br/>Parmi leurs abscisses $x_A$, $x_B$, $x_C$, $x_D$, lesquelles vérifient l'inéquation $x\\times f(x) >0$ ?</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-5.5,ymax,5.5,ymin]);
                                board.create('functiongraph', [f], {strokeColor:theme.curveColor, strokeWidth: 2.5});
								board.create('point', [xA,f(xA)], {name:'A', label: {fontSize: 14, strokeColor: theme.lineColor2}, strokeColor: theme.lineColor2});
								board.create('point', [xB,f(xB)], {name:'B', label: {fontSize: 14, strokeColor: theme.lineColor2}, strokeColor: theme.lineColor2});
								board.create('point', [xC,f(xC)], {name:'C', label: {fontSize: 14, strokeColor: theme.lineColor2}, strokeColor: theme.lineColor2});
								board.create('point', [xD,f(xD)], {name:'D', label: {fontSize: 14, strokeColor: theme.lineColor2}, strokeColor: theme.lineColor2});
								return board;
                            }
                        };
						answer = `<p>${solutions.join(', ')} car dans ${solutions.length === 1 ? 'ce' : 'ces'} cas, $x$ et $f(x)$ sont de même signe.</p>`;
                        
                        opts = [
                            { text: solutions.join(', '), isCorrect: true },
                            { text: wrongSol1.length ? wrongSol1.join(', ') : "Aucune", isCorrect: false },
                            { text: wrongSol2.join(', '), isCorrect: false },
                            { text: "Toutes", isCorrect: false }
                        ];
                        // Clean duplicates
                        opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                        while(opts.length < 4) opts.push({text: "Aucune", isCorrect: false});
					};
                    
                    opts.sort(() => Math.random() - 0.5);
					return { question , answer, options: opts };
                },
                "Déterminer graphiquement le tableau de variations d'une fonction.": function() {
                    const BBOX = [-5.5, 5.5, 5.5, -5.5];
					const xmin = -5; const xmax = 5;
                    const e1 = { x: randInt(-3, -1), y: randInt(-4, 4) };
					let e2; do { e2 = { x: randInt(1, 3), y: randInt(-4, 4) }; } while (e1.y === e2.y);	
                    const start = { x: xmin, y: e1.y < e2.y ? randInt(e1.y+1, 5) : randInt(-5, e1.y-1)};
                    const end = { x: xmax, y: e1.y < e2.y ? randInt(-5, e2.y-1) : randInt(e2.y+1, 5)};
                    
                    const getTable = (pts) => createVariationTable(pts).replaceAll('$$','');
                    
                    const correctT = getTable([start, e1, e2, end]);
                    // Distracteur 1 : Inversion des extremums y (confusion min/max)
                    const d1 = getTable([start, {x:e1.x, y:e2.y}, {x:e2.x, y:e1.y}, end]);
                    // Distracteur 2 : Inversion des abscisses (impossible graphiquement mais visuellement troublant)
                    const d2 = getTable([start, {x:e2.x, y:e1.y}, {x:e1.x, y:e2.y}, end]);
                    // Distracteur 3 : Valeurs random
                    const d3 = getTable([start, {x:e1.x, y:0}, {x:e2.x, y:0}, end]);

                    let opts = [
                        { text: `$${correctT}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: { html: `<p>Dresser le tableau de variations de la fonction $f$ représentée ci-contre.</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, BBOX);
								let p = [];							
								p.push(board.create('point', [start.x, start.y], {visible:false})); 
								p.push(board.create('point', [(start.x+e1.x)/2, start.y], {visible:false})); 
								p.push(board.create('point', [(start.x+e1.x)/2, e1.y], {visible:false})); 
								p.push(board.create('point', [e1.x, e1.y], {visible:false})); 
								p.push(board.create('point', [(e2.x+e1.x)/2, e1.y], {visible:false})); 
								p.push(board.create('point', [(e2.x+e1.x)/2, e2.y], {visible:false})); 
								p.push(board.create('point', [e2.x, e2.y], {visible:false})); 
								p.push(board.create('point', [(e2.x+end.x)/2, e2.y], {visible:false})); 
								p.push(board.create('point', [(e2.x+end.x)/2, end.y], {visible:false})); 
								p.push(board.create('point', [end.x, end.y], {visible:false})); 
                                board.create('curve', JXG.Math.Numerics.bezier(p), {strokeColor: theme.curveColor, strokeWidth: 2.5});
								return board;
                            }
                        }, 
						answer: createVariationTable([start, e1, e2, end]),
                        options: opts
                    };
                },
                "Tracer une droite donnée par son équation réduite.": () => {
                    const p = randInt(-3, 3);
                    let m, expr, d;
                    if (Math.random() < 0.5) { 
                        m = randInt(-2, 2);
                        d = 1;						
                        expr = linearExpr(m, p); 
                    } else { 
						const n = randInt(1, 3) * getRandomItem([-1, 1]);
                        do { d = randInt(2, 3) } while ( gcd(Math.abs(n), d) != 1 ); 
						m = n / d; 
						expr = `${fracSign(n, d)}x ${p > 0 ? '+' : p === 0 ? '' : '-'} ${p === 0 ? '' : Math.abs(p)}`;
					}
                    
                    // Factory pour créer la fonction de rendu du graphique
                    // On simplifie le graphique (pas d'axes chiffrés lourds, juste la grille et la courbe)
                    const createOptionGraph = (slope, intercept) => {
                        return (targetId) => {
                            const { board, theme } = createBaseBoard(targetId, [-5.5, 5.5, 5.5, -5.5], { withTicksX: false, withTicksY: false });
							board.setAttribute({
                                showNavigation: false
                            });
                            board.create('line', [[0, intercept], [1, intercept + slope]], { 
                                strokeColor: theme.curveColor, 
                                strokeWidth: 3, // Un peu plus épais pour la visibilité en petit
                                fixed: true,
                                highlight: false 
                            });
                            
                            return board;
                        };
                    };

                    let opts = [
                        { isGraph: true, isCorrect: true, render: createOptionGraph(m, p) },
                        { isGraph: true, isCorrect: false, render: createOptionGraph(-m, p) }, // Erreur pente
                        { isGraph: true, isCorrect: false, render: d === 1 ? createOptionGraph(m, -p) : createOptionGraph(1/m, p) }, 
                        { isGraph: true, isCorrect: false, render: d === 1 ? createOptionGraph(-m, -p) : createOptionGraph(-1/m, p) } 
                    ];
                    
                    // Cas particulier si m=0 ou p=0 pour éviter les doublons (-0 = 0)
                    if (m === 0 || p === 0) {
                        // On remplace les options potentiellement identiques par des variations forcées
                        opts = [
                            { isGraph: true, isCorrect: true, render: createOptionGraph(m, p) },
                            { isGraph: true, isCorrect: false, render: m === 0 && p === 0 ? createOptionGraph(1,0) : createOptionGraph(p,m) },
                            { isGraph: true, isCorrect: false, render: createOptionGraph(m === 0 ? -1 : -m, p === 0 ? -1 : -p) },
                            { isGraph: true, isCorrect: false, render: createOptionGraph(m === 0 ? 2 : m*2, p === 0 ? -3 : p+2) }
                        ];
                    }

                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Laquelle de ces droites correspond à l'équation $y = ${expr} $ ?</p>`,
                        answer: {
                            html: `<div id="jxgbox-a" class="jxgbox"></div><p class="text-center mt-2">C'est la droite passant par $(0;${p})$ avec une pente de $${affFracSimp(m*10,10).replace('=','') || m}$.</p>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-5.5, 5.5, 5.5, -5.5]);
                                board.create('line', [[0, p], [1, p + m]], { strokeColor: theme.curveColor, strokeWidth: 2.5 });
                                return board;
                            }
                        },
                        options: opts
                    };
                },
                "Tracer une droite donnée par un point et son coefficient directeur.": () => {
                    let p, n, d, m, m_aff, question, answer, opts = [];
                    
                    // Génération commune
                    p = {x: randInt(-2,2), y: randInt(-2,2)};
                    if (Math.random() < 0.5) { 
                        n = randInt(-2, 2); d = 1; 
                    } else { 
                        n = randInt(1,3) * getRandomItem([-1,1]);
                        do { d = randInt(2,3) } while ( gcd(Math.abs(n),d) != 1 ); 
                    }
					m = n/d; m_aff = fracSign(n,d);

                    if (Math.random() < 0.5) {   
                        // --- CAS 1 : TRACER LA DROITE (Options Graphiques) ---
                        question = `<p>Tracer la droite passant par le point $A(${p.x}\\,; ${p.y})$ et de coefficient directeur $m=${m_aff}$.</p>`;
                        
                        // Fonction pour générer le graphique d'une option
                        const createOptionGraph = (pt, slope) => {
                            return (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-5.5, 5.5, 5.5, -5.5], { withTicksX: false, withTicksY: false });
								board.setAttribute({
                                   showNavigation: false
                                });
								
                                // On dessine le point pour aider visuellement
                                //board.create('point', [pt.x, pt.y], { size: 3, name: 'A', fixed: true, color: theme.lineColor2 });
								
                                // On dessine la droite
                                board.create('line', [[pt.x, pt.y], [pt.x + 1, pt.y + slope]], { 
                                    strokeColor: theme.curveColor, 
                                    strokeWidth: 3, 
                                    fixed: true,
                                    highlight: false
                                });
                                return board;
                            };
                        };

                        // Distracteurs
                        // 1. Bonne réponse
                        opts.push({ isGraph: true, isCorrect: true, render: createOptionGraph(p, m) });
                        // 2. Erreur de signe sur la pente
                        opts.push({ isGraph: true, isCorrect: false, render: createOptionGraph(p, m === 0 ? -1 : -m) });
                        // 3. Erreur de point (onfusion abscisse-ordonnée)
                        const wrongPt = p.x ===  p.y ? {x: p.x+1, y: p.y} : {x: p.y, y: p.x};
                        opts.push({ isGraph: true, isCorrect: false, render: createOptionGraph(wrongPt, m) });
                        // 4. Pente nulle
                        const wrongM = m === 0 ? 1 : 0;
                        opts.push({ isGraph: true, isCorrect: false, render: createOptionGraph(p, wrongM) });

                        answer = { html: `<div id="jxgbox-a" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId);
                                board.create('point', [p.x, p.y], {name:'A', label: {fontSize: 14, strokeColor: theme.lineColor2}, strokeColor: theme.lineColor2});
                                board.create('line', [[p.x, p.y], [p.x+1, p.y+m]], {strokeColor:theme.curveColor, strokeWidth: 2.5 });
                                return board;
                            }
                        };

                    } else {    
                        // --- CAS 2 : CALCUL D'ORDONNÉE (Options Textuelles sans doublons) ---
                        const dx = getRandomItem([-1,1]);
                        question = `<p>On considère la droite passant par le point $A(${p.x}\\,; ${p.y})$ et de coefficient directeur $m=${m_aff}$. On note $B$ le point de la droite d'abscisse $${p.x + dx}$.<br/>Quelle est l'ordonnée de $B$ ?</p>`;
                        
						
                        const val = simpFrac(d*p.y+n*dx,d);
                        answer = `<p>$y_B = y_A + m \\times (x_B - x_A) = ${p.y} + (${m_aff}) \\times ${dx} = ${fracSign(val.n,val.d)}$</p>`;
                        
                        // Création des options brutes
						const d1 = simpFrac(p.y,1);  // Ordonnée constante
						const d2 = simpFrac(d*p.y+n,d);  // Suppose dx=1
						const d3 = simpFrac(d*p.y-n*dx,d);  // Erreur signe
                        opts = [
                            { text: `$${fracSign(val.n,val.d)}$`, isCorrect: true },
                            { text: `$${fracSign(d1.n,d1.d)}$`, isCorrect: false }, 
                            { text: `$${fracSign(d2.n,d2.d)}$`, isCorrect: false }, 
                            { text: `$${fracSign(d3.n,d3.d)}$`, isCorrect: false } 
                        ];
                        
                        // Filtrage des doublons (ex: si m=0, val = p.y)
                        opts = opts.filter((o, i, arr) => arr.findIndex(t => t.text === o.text) === i);
                        
                        // Remplissage avec valeurs aléatoires si doublons supprimés
                        while(opts.length < 4) {
                            // On génère une valeur aléatoire proche mais différente
                            const randomOffset = randInt(1, 5) * getRandomItem([-1, 1]);
                            const randomVal = simpFrac(val.n + randomOffset * val.d,val.d);
                            const newText = `$${fracSign(randomVal.n,randomVal.d)}$`;
                            
                            if (!opts.some(o => o.text === newText)) {
                                opts.push({ text: newText, isCorrect: false });
                            }
                        }
                    };
                    
                    opts.sort(() => Math.random() - 0.5);
                    return { question, answer, options: opts };
                },
                "Lire graphiquement l’équation réduite d’une droite.": function() {
					const isEqPossible = Math.random() < 0.5;
                    const p = randInt(-3, 3);
                    let m, expr, fakes = [], d3;
                    if (Math.random() < 0.5) { 
						m = randInt(-2, 2); 
						expr = linearExpr(m,p);
						//if (isEqPossible)
						fakes = [linearExpr(m !== 0 ? -m : getRandomItem([-1,1]),p), linearExpr(m, p !== 0 ? -p : getRandomItem([-1,1]))];
						d3 = `${m !== 0 && Math.abs(m) !== 1 ? fracSign(1,m) : getRandomItem([-2,2]) }x ${p>0? '+': p === 0 ? '' : '-'} ${p === 0 ? '' : Math.abs(p)}`
					} else { 
						const n = randInt(1,3) * getRandomItem([-1,1]);
                        let d; do { d = randInt(2,3) } while ( gcd(Math.abs(n),d) != 1 ); 
						m = n/d; 
						expr = `${fracSign(n,d)}x ${p>0? '+': p === 0 ? '' : '-'} ${p === 0 ? '' : Math.abs(p)}`;
						//if (isEqPossible) {
							fakes.push(`${fracSign(-n,d)}x ${p>0? '+': p === 0 ? '' : '-'} ${p === 0 ? '' : Math.abs(p)}`);
							fakes.push(`${fracSign(n,d)}x ${-p>0? '+': p === 0 ? '' : '-'} ${p === 0 ? getRandomItem(['-1','+1']) : Math.abs(-p)}`);
						//}
						d3 = `${n !== d && n!== -d ? fracSign(d,n) : getRandomItem([-2,2]) }x ${p>0? '+': p === 0 ? '' : '-'} ${p === 0 ? '' : Math.abs(p)}`
					}
					let question, answer, opts = [];
                    
                    if (!isEqPossible) {
                        question = { html: `<p>Déterminer l'équation réduite de la droite $(d)$ représentée ci-contre.</p><div id="jxgbox-q" class="jxgbox"></div>`,
                             render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId);
                                board.create('line', [[0, p], [1, p+m]], {strokeColor:theme.curveColor, strokeWidth: 2.5 });
                                return board;
                            }
                        };
                        answer = `<p>$y = ${expr}$</p>`;	
                                              
                        opts = [
                            { text: `$y = ${expr}$`, isCorrect: true },
                            { text: `$y = ${fakes[0]}$`, isCorrect: false },
                            { text: `$y = ${fakes[1]}$`, isCorrect: false },
                            { text: `$y = ${d3}$`, isCorrect: false }
                        ];
						
						opts.sort(() => Math.random() - 0.5);

                    } else {
						const rep = getRandomItem(['Oui','Non']);
						let expr_aff, justif;
						if (rep === 'Oui') {
							expr_aff = expr;
							justif = `${m === 0 ? 'le coefficient directeur est nul' : 'c\'est le bon signe du coefficient directeur'} et ${p === 0 ? 'l\'ordonnée à l\'origine est nulle' : 'c\'est le bon signe de l\'ordonnée à l\'origine'}` 
						} else {
							const justifs = [m === 0 ? 'le coefficient directeur n\'est pas nul' : 'pas le bon signe du coefficient directeur', p === 0 ? 'l\'ordonnée à l\'origine devrait être nulle' : 'pas le bon signe de l\'ordonnée à l\'origine'];
							const i = randInt(0,1);
							expr_aff = fakes[i];
							justif = justifs[i];
						};
						question = { html: `<p>La droite représentée peut-elle avoir pour équation $y=${expr_aff}$ ?</p><div id="jxgbox-q" class="jxgbox"></div>`,
                             render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-5,5,5,-5], {withGrid: false, withTicksX: false, withTicksY: false});
                                board.create('line', [[0, p], [1, p+m]], {strokeColor:theme.curveColor, strokeWidth: 2.5 });
                                return board;
                            }
                        };
						answer = `<p>${rep} car ${justif}.</p>`;
                        opts = [
                            { text: `Oui`, isCorrect: rep === 'Oui' },
                            { text: `Non`, isCorrect: rep === 'Non' },
                            { text: `On ne peut pas savoir`, isCorrect: false }
                        ];
					}
                    
					return { question, answer, options: opts };
                },
                "Déterminer le coefficient directeur d’une droite à partir des coordonnées de deux de ses points.": function() {
                    let A, B, n, d, m, m_aff;
					if (Math.random() < 0.5) { 
							m = randInt(-5, 5); n = m; d = 1;
						} else { 
							n = randInt(1,3) * getRandomItem([-1,1]);						
							do { d = randInt(2,3) } while ( gcd(Math.abs(n),d) != 1 ); 
							m = n/d;
						}
                    A = {x: randInt(-5,5), y: randInt(-5,5)};
					B = {};
					const k = randInt(2,6) * getRandomItem([-1,1]);
					B.x = A.x + d * k; 
					B.y = A.y + n * k; 
                    
                    const res = fracSign(n,d);
                    const d1 = Math.abs(m) !== 1 ? fracSign(d,n) : -m; // Delta x / Delta y
                    const d2 = B.x+A.x !== 0 ? fracSign((B.y+A.y)/gcd(B.y+A.y,B.x+A.x),(B.x+A.x)/gcd(B.y+A.y,B.x+A.x)) : '\\text{n\'existe pas}'; // Erreur formule
                    const d3 = fracSign(n+d*getRandomItem([-1,1]), d); // N'importe quoi
                    
                    let opts = [
                        { text: `$${res}$`, isCorrect: true },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false },
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) opts.push({text: `$0$`, isCorrect: false});
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Déterminer le coefficient directeur de la droite $(AB)$ avec $A(${A.x}\\,; ${A.y})$ et $B(${B.x}\\,; ${B.y})$.</p>`,
                        answer: `<p>$m = \\dfrac{y_B - y_A}{x_B - x_A} = ${res}$</p>`,
                        options: opts
                    };
                }
            },
			"Statistiques": {
                "Lire un graphique, un histogramme, un diagramme en barres ou circulaire, un diagramme en boîte ou toute autre représentation": () => {
				  if (Math.random() < 0.5) {  	
                    // Diagramme en bâtons
                    const data = [randInt(2,10), randInt(2,10), randInt(2,10), randInt(2,10)];
                    const labels = ['A', 'B', 'C', 'D'];
                    const choiceIndex = randInt(0, 3);
                    const correctVal = data[choiceIndex];
                    
                    let opts = [{ text: `$${correctVal}$`, isCorrect: true }];
                    // Distracteurs : autres valeurs du graphique
                    data.forEach((v, i) => {
                        if (i !== choiceIndex) opts.push({ text: `$${v}$`, isCorrect: false });
                    });
                    // Compléter si pas assez de valeurs distinctes
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
					while(opts.length < 4) {
                        const val = randInt(2,10); 
                        const newText = `$${val}$`;

                        // Vérifie si cette valeur existe déjà dans le tableau opts
                        const alreadyExists = opts.some(o => o.text === newText);

                        // Si elle n'existe pas, on l'ajoute comme fausse réponse
                        if (!alreadyExists) {
                            opts.push({text: newText, isCorrect: false});
                        }
                    }
                    
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: {
                            html: `<p>À l'aide du diagramme en bâtons, quelle est l'effectif de la catégorie ${labels[choiceIndex]} ?</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-1, 12, 5, -3], { withGrid: false, withTicksX: false });
                                board.create('chart', data, { chartStyle: 'bar', width: 0.6, color: theme.curveColor });
                                labels.forEach((label, index) => {
                                    board.create('text', [index + 1, -0.1, label], { anchorX: 'middle', anchorY: 'top', color: theme.curveColor, fontSize: 16, cssClass: 'font-bold' });
                                });
                                return board;
                            }
                        },
                        answer: `<p>La valeur est $${correctVal}$.</p>`,
                        options: opts
                    };
				  } else {
                    // Diagramme circulaire
				    const a = randInt(1,8);
                    let data = [];
					data[0] = a*10;
					data[1] = randInt(1,9-a)*10;
					data[2] = 100 - data[0] - data[1];
                    const labels = ['A', 'B', 'C'];
                    const p = randInt(0,2);
                    const correctVal = data[p];
                    
                    let opts = [{ text: `$${correctVal}\\,\\%$`, isCorrect: true }];
                    data.forEach((v, i) => {
                        if (i !== p) opts.push({ text: `$${v}\\,\\%$`, isCorrect: false });
                    });
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
					while(opts.length < 4) {
                        const val = randInt(1,9)*10; 
                        const newText = `$${val}\\,\\%$`;

                        // Vérifie si cette valeur existe déjà dans le tableau opts
                        const alreadyExists = opts.some(o => o.text === newText);

                        // Si elle n'existe pas, on l'ajoute comme fausse réponse
                        if (!alreadyExists) {
                            opts.push({text: newText, isCorrect: false});
                        }
                    }
                    
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: {
                            html: `<p>À l'aide du diagramme circulaire, quelle est approximativement la part de la catégorie ${labels[p]} en pourcentage (multiple de 10) ?</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-6, 6, 6, -6], { withGrid: false, withTicksX: false, withTicksY: false });
                                board.create('chart', data, { chartStyle: 'pie', labels: labels, colors: [theme.curveColor, theme.lineColor2, theme.gridColor], label: {color: theme.strokeColor, fontSize: 16} });
                                return board;
                            }
                        },
                        answer: `<p>La catégorie ${labels[p]} représente $${correctVal}\\,\\%$ du total.</p>`,
                        options: opts
                    }; 
                  }				  
                },
				"Passer du graphique aux données et vice-versa.": () => {
				    // 1. D'abord choisir le type de graphique
                    const graphType = getRandomItem(['bar', 'pie', 'line']);
                    
                    // Fonction utilitaire pour générer des données Pie valides (Somme 100, multiples 10)
                    const generateValidPieData = (n) => {
                        let vals = [];
                        let remaining = 100;
                        for (let i = 0; i < n - 1; i++) {
                            const maxVal = (remaining / 10) - (n - 1 - i);
                            const val = randInt(1, maxVal) * 10;
                            vals.push(val);
                            remaining -= val;
                        }
                        vals.push(remaining);
                        return vals.sort(() => Math.random() - 0.5); // Mélange pour ne pas avoir toujours croissant
                    };

                    let dataValues = [];
                    let dataLabels = [];
                    const nbCats = randInt(3, 4);
                    
                    if (graphType === 'pie') {
                        dataValues = generateValidPieData(nbCats);
                        for(let i=0; i<nbCats; i++) dataLabels.push(String.fromCharCode(65+i));
                    } else {
                        // Bar/Line : Entiers aléatoires
                        const notes = [0,1,2,3,4]; 
                        for (let i = 0; i < nbCats; i++) { 
                            dataValues.push(randInt(5, 25));
                            dataLabels.push(notes[i]);
                        }
                    }
                    
                    // Helper pour créer le tableau LaTeX
                    const makeTable = (vals) => {
                        let h = '|c', c = graphType === 'pie' ? `\\text{Cat.}` : `\\text{Val.}`, e = graphType === 'pie' ? `\\text{Freq. (\\%)}` : `\\text{Eff.}`;
                        dataLabels.forEach((label, i) => { h += '|c'; c += ` & ${label}`; e += ` & ${vals[i]}`; });
                        return `$$ \\begin{array}{${h}|} \\hline ${c} \\\\ \\hline ${e} \\\\ \\hline \\end{array} $$`;
                    };
                    const table = makeTable(dataValues);

                    // Brique 2 : La fonction de rendu pour le graphique JSXGraph
                    
                    const createGraph = (vals, type, rep = true) => {
                        return (targetId) => {
                            const ymax = Math.max(...vals) + 5;
                            const box = type === 'pie' ? [-6, 6, 6, -6] : [-1, ymax, 5, -ymax/4];
                            const options = type === 'pie' ? { withGrid: false, withTicksX: false, withTicksY: false } : {};
                            const { board, theme } = createBaseBoard(targetId, box, options);
							
							if (rep) board.setAttribute({
                                   showNavigation: false
                               });
							

                            if (type === 'bar') {
                                board.create('chart', [dataLabels, vals], { chartStyle: 'bar', width: 0.6, color: theme.curveColor });
                            } else if (type === 'pie') {
							    if (rep) board.setAttribute({
                                      keepAspectRatio: true
                                   });
                                board.create('chart', vals, { chartStyle: 'pie', labels: dataLabels, colors: [theme.curveColor, theme.lineColor2, '#cccccc', '#9ca3af'] });
                            } else { 
                                board.create('chart', [dataLabels, vals], { chartStyle: 'line', fillOpacity: 0, color: theme.curveColor, strokeWidth: 2.5 });
                            }
                            // Labels
                            //if (type !== 'pie') {
                            //    dataLabels.forEach((label, index) => {
                            //        board.create('text', [index + 1, -0.5, label], { anchorX: 'middle', anchorY: 'top', color: theme.strokeColor, fontSize: 12 });
                            //    });
                            //}
                            return board;
                        };
                    };

                    const renderFunction = createGraph(dataValues, graphType, false);

                    // --- ÉTAPE 3 : Choisir le sens de la question ---
                    if (Math.random() < 0.5) {
                        // CAS A : Graphique -> Tableau (Options = Tableaux)
                        
                        // Distracteur 1 : Inversion de l'ordre
                        const d1_vals = [...dataValues].reverse();
                        
                        // Distracteur 2 : Modification des valeurs
                        let d2_vals;
                        if (graphType === 'pie') {
                            // On modifie en conservant la somme 100 et multiples de 10
                            d2_vals = [...dataValues];
                            // On prend au plus riche, on donne au plus pauvre
                            const maxVal = Math.max(...d2_vals);
                            const minVal = Math.min(...d2_vals);
                            const maxI = d2_vals.indexOf(maxVal);
                            const minI = d2_vals.lastIndexOf(minVal);
                            
                            if (maxVal >= 20 && maxI !== minI) {
                                d2_vals[maxI] -= 10;
                                d2_vals[minI] += 10;
                            } else {
                                // Si pas possible, permutation circulaire
                                d2_vals.push(d2_vals.shift());
                            }
                        } else {
                            d2_vals = dataValues.map(v => v + randInt(-2,2));
                        }

                        // Distracteur 3 : Permutation 
                        const d3_vals = [...dataValues];
                        // Echange deux valeurs au hasard
                        if (d3_vals.length >= 2) {
                             [d3_vals[0], d3_vals[1]] = [d3_vals[1], d3_vals[0]];
                        }

                        let opts = [
                            { text: makeTable(dataValues), isCorrect: true },
                            { text: makeTable(d1_vals), isCorrect: false },
                            { text: makeTable(d2_vals), isCorrect: false },
                            { text: makeTable(d3_vals), isCorrect: false }
                        ];
                        
                        // Nettoyage des doublons
                        opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                        
                        // Remplissage si besoin avec des données VALIDES
                        while (opts.length < 4) {
                             let fake;
                             if (graphType === 'pie') {
                                 // On génère une toute nouvelle répartition valide
                                 fake = generateValidPieData(nbCats);
                                 // Petit check pour pas retomber sur la bonne réponse par pur hasard
                                 if (fake.join(',') === dataValues.join(',')) fake[0] += 0; // Juste pour re-boucler
                             } else {
                                 fake = dataValues.map(v => v+5);
                             }
                             
                             const fakeText = makeTable(fake);
                             // Ajout seulement si unique
                             if (!opts.some(o => o.text === fakeText)) {
                                 opts.push({ text: fakeText, isCorrect: false });
                             }
                        }
                        
                        opts.sort(() => Math.random() - 0.5);

                        return {
                            question: {
                                html: `<p>Dresser le tableau ${graphType === 'pie' ? 'des fréquences' : 'd\'effectifs'} correspondant au graphique ci-dessous.</p><div id="jxgbox-q" class="jxgbox"></div>`,
                                render: renderFunction
                            },
                            answer: table,
                            options: opts
                        };
                    } else {
                        // CAS B : Tableau -> Graphique (Options = Graphiques)
                        
                        const d1_vals = [...dataValues].reverse();
                        let d2_vals;
                        
                        if (graphType === 'pie') {
                            d2_vals = [...dataValues];
                            d2_vals.push(d2_vals.shift()); // Rotation
                        } else {
                            d2_vals = dataValues.map(v => Math.max(1, v - 5));
                        }
                        
                        // Pour le 3eme distracteur pie, on peut faire un graphique FAUX (somme != 100) pour voir si l'élève suit ?
                        // Ou rester sur des sommes 100. Restons sur sommes 100 pour être rigoureux.
                        let d3_vals;
                        if (graphType === 'pie') {
                             d3_vals = generateValidPieData(nbCats);
                        } else {
                             d3_vals = dataValues.map((v,i) => i === 0 ? v + 5 : v);
                        }

                        let opts = [
                            { isGraph: true, isCorrect: true, render: createGraph(dataValues, graphType) },
                            { isGraph: true, isCorrect: false, render: createGraph(d1_vals, graphType) },
                            { isGraph: true, isCorrect: false, render: createGraph(d2_vals, graphType) },
                            { isGraph: true, isCorrect: false, render: createGraph(d3_vals, graphType) }
                        ];
                        opts.sort(() => Math.random() - 0.5);

                        return {
                            question: `<p>Représenter les données du tableau ${graphType === 'pie' ? 'des fréquences' : 'd\'effectifs'} ci-dessous à l'aide d'un diagramme ${graphType === 'pie' ? 'circulaire' : graphType === 'bar' ? 'en barres' : 'à ligne brisée'}.</p>${table}`,
                            answer: {
                                html: `<div id="jxgbox-a" class="jxgbox"></div>`,
                                render: renderFunction
                            },
                            options: opts
                        };
                    }
				},
				"Calculer la moyenne d'un petit nombre de valeurs.": () => {
                    const series = generateSeries(randInt(4,6), 3, 10);
					const somme = series.reduce((a,b) => a+b,0);
					if ( somme%series.length !== 0) { 
						for (let k = 1; k <= somme%series.length; k++)  series[randInt(0,series.length-1)]-- ; 
                    };
                    const value = calculateMean(series);
                    
                    // Distracteurs
                    const sorted = [...series].sort((a,b)=>a-b);
                    const median = calculateMedian(sorted);
                    const d1 = value + 1;
                    const d2 = value - 1;
                    
                    let opts = [
                        { text: `$${value}$`, isCorrect: true },
                        { text: `$${affNum(median)}$`, isCorrect: false },
                        { text: `$${d1}$`, isCorrect: false },
                        { text: `$${d2}$`, isCorrect: false }
                    ];
                    // Clean
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) {
                        const r = randInt(Math.min(...series), Math.max(...series));
                        if(!opts.some(o => o.text === `$${r}$`)) opts.push({text: `$${r}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Pour la série de données suivante : <span class="font-bold">${series.join(', ')}</span>, quelle est la moyenne ?</p>`,
                        answer: `<p>La moyenne est $${value}$.</p>`,
                        options: opts
                    };
                },
                "Calculer une moyenne pondérée dans le cas d’une série discrète.": () => {
                    let notes, coeffs, sumProd, totalCoeff, mean;
                    
                    // On boucle jusqu'à trouver une combinaison qui donne un résultat "propre"
                    do {
                        // 1. Générer 3 notes distinctes et triées
                        // On tire 3 nombres uniques
                        const n1 = randInt(2, 10);
                        let n2, n3;
                        do { n2 = randInt(2, 10); } while (n2 === n1);
                        do { n3 = randInt(2, 10); } while (n3 === n1 || n3 === n2);
                        
                        notes = [n1, n2, n3].sort((a,b) => a - b);

                        // 2. Générer des coefficients dont la somme est 10, 20 ou 30
                        totalCoeff = getRandomItem([10, 20, 30]);
                        
                        // Partition aléatoire du total en 3 entiers > 0
                        // On place deux "coupes" dans l'intervalle [1, total-1]
                        let cut1 = randInt(1, totalCoeff - 1);
                        let cut2;
                        do { cut2 = randInt(1, totalCoeff - 1); } while (cut1 === cut2);
                        
                        const minCut = Math.min(cut1, cut2);
                        const maxCut = Math.max(cut1, cut2);
                        
                        coeffs = [
                            minCut, 
                            maxCut - minCut, 
                            totalCoeff - maxCut
                        ];

                        // 3. Calcul de la somme pondérée
                        sumProd = notes[0]*coeffs[0] + notes[1]*coeffs[1] + notes[2]*coeffs[2];

                        // 4. Condition de sortie :
                        // Si total=10, diviseur=1 (toujours bon)
                        // Si total=20, diviseur=2 (il faut que sumProd soit pair)
                        // Si total=30, diviseur=3 (il faut que sumProd soit multiple de 3)
                    } while (sumProd % (totalCoeff / 10) !== 0);

                    // Calcul de la moyenne exacte (aura max 1 décimale grâce à la boucle)
                    mean = sumProd / totalCoeff;
                    
                    // Construction du tableau LaTeX
                    const table = `$$ \\begin{array}{|c|c|c|c|} \\hline \\text{Valeurs} & ${notes[0]} & ${notes[1]} & ${notes[2]} \\\\ \\hline \\text{Effectifs} & ${coeffs[0]} & ${coeffs[1]} & ${coeffs[2]} \\\\ \\hline \\end{array} $$`;
                    
                    // Distracteurs
                    const simpleMean = Math.round(10*(notes[0] + notes[1] + notes[2]) / 3)/10; // Moyenne simple
                    const wrongDiv = Math.round(10*sumProd / 3)/10; // Divisé par le nombre de notes (3) au lieu de la somme des coeffs
                    
                    // Formattage pour l'affichage (remplace point par virgule)
                    const f = (x) => affNum(x);

                    let opts = [
                        { text: `$${f(mean)}$`, isCorrect: true },
                        { text: `$${f(simpleMean)}$`, isCorrect: false },
                        { text: `$${f(wrongDiv)}$`, isCorrect: false },
                        { text: `$${f(mean + 0.2 * randInt(1,5) * getRandomItem([-1,1]))}$`, isCorrect: false } // Valeur proche
                    ];
                    
                    // Nettoyage doublons et tri
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    // Remplissage si doublons supprimés
                    while(opts.length < 4) {
                        const r = mean + 0.2 * randInt(1,5) * getRandomItem([-1,1]);
                        const txt = `$${f(r)}$`;
                        if (!opts.some(o => o.text === txt)) opts.push({text: txt, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Calculer la moyenne de la série statistique suivante :</p>${table}`,
                        answer: `<p>La moyenne est $${f(mean)}$.</p>`,
                        options: opts
                    }
                },
                "Déterminer une médiane dans le cas d’une série sous forme de données brutes.": () => {
                    const series = generateSeries(randInt(7,10), 3, 30);
                    const sorted = [...series].sort((a,b)=>a-b);
                    const median = calculateMedian(sorted);
                    
                    // Distracteurs
                    const mean = Math.round(calculateMean(series)*10)/10;
                    const badMed = calculateMedian(series);
					let d3, k=0;
					do {d3 = getRandomItem(sorted); k++} while (k<=50 && (d3 === median || d3 === mean || d3 === badMed) );
                    
                    let opts = [
                        { text: `$${affNum(median)}$`, isCorrect: true },
                        { text: `$${affNum(mean)}$`, isCorrect: false },   // moyenne
                        { text: `$${affNum(badMed)}$`, isCorrect: false }, // médiane de la série non triée
                        { text: `$${d3}$`, isCorrect: false }
                    ];
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) {
                         const r = randInt(3,30);
                         if(!opts.some(o=>o.text === `$${r}$`)) opts.push({text:`$${r}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Quelle est la médiane de la série suivante : <span class="font-bold">${series.join('; ')}</span> ?</p>`,
                        answer: `<p>Après avoir trié la série <span class="font-bold">(${sorted.join('; ')})</span>, la médiane est $${affNum(median)}$.</p>`,
                        options: opts
                    };
                },
				"Déterminer les quartiles dans le cas d’une série sous forme de données brutes.": () => {
                    const series = generateSeries(randInt(7,10), 3, 30);
                    const sorted = [...series].sort((a,b)=>a-b);
                    const { q1, q3 } = calculateQuartiles(sorted);
                    
                    // Distracteurs
                    const med = calculateMedian(sorted);
                    const d1 = {q1: sorted[0], q3: sorted[sorted.length-1]}; // Min / Max
                    //const d2 = {q1: q3, q3: q1}; // Inversion
                    const d3 = {q1: med, q3: sorted[sorted.length-2]};   //médiane
					const bad_q = calculateQuartiles(series);   // série non ordonnée
                    
                    let opts = [
                        { text: `$Q_1=${q1}$ et $Q_3=${q3}$`, isCorrect: true },
                        { text: `$Q_1=${d1.q1}$ et $Q_3=${d1.q3}$`, isCorrect: false },
                        { text: `$Q_1=${affNum(d3.q1)}$ et $Q_3=${d3.q3}$`, isCorrect: false },
                        { text: `$Q_1=${bad_q.q1}$ et $Q_3=${bad_q.q3}$`, isCorrect: false }
                    ];
					opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) {
                         const r1 = randInt(sorted[0],sorted[sorted.length-1]);
						 let r3;
						 do {r3 = randInt(sorted[0],sorted[sorted.length-1]);} while(r3 === r1);
						 
                         if(!opts.some(o=>o.text === `$Q_1=${Math.min(r1,r3)}$ et $Q_3=${Math.max(r1,r3)}$`)) opts.push({text:`$Q_1=${Math.min(r1,r3)}$ et $Q_3=${Math.max(r1,r3)}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Quels sont les quartiles de la série suivante : <span class="font-bold">${series.join('; ')}</span> ?</p>`,
                        answer: `<p>Après avoir trié la série <span class="font-bold">(${sorted.join('; ')})</span>, les quartiles sont $Q_1 = ${q1}$ et $Q_3 = ${q3}$.</p>`,
                        options: opts
                    };
                },
                "Résoudre des problèmes faisant intervenir les différents indicateurs statistiques.": () => {
                    const series = [randInt(5,10), randInt(10,15)];
                    const mean = randInt(10, 15);
                    const x = mean * 3 - (series[0] + series[1]);
                    
                    let opts = [
                        { text: `$${x}$`, isCorrect: true },
                        { text: `$${mean}$`, isCorrect: false },
                        { text: `$${Math.abs(x-2)}$`, isCorrect: false },
                        { text: `$${Math.abs(x+5)}$`, isCorrect: false }
                    ];
					opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
					while(opts.length < 4) {
                         const r = randInt(10,15);
                         if(!opts.some(o=>o.text === `$${r}$`)) opts.push({text:`$${r}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>La moyenne de trois nombres est ${mean}. Deux de ces nombres sont ${series[0]} et ${series[1]}. Quel est le troisième nombre ?</p>`,
                        answer: `<p>Le troisième nombre est <strong>${x}</strong>.</p>`,
                        options: opts
                    }
                },
                "Calculer des effectifs cumulés croissants.": () => {
                    const startValue = randInt(10, 15);
                    const numValues = randInt(4,5);
                    const freqs = {};
                    let lastValue = startValue;
                    for (let i = 0; i < numValues; i++) {
                        const value = lastValue;
                        const effectif = randInt(2, 8);
                        freqs[value] = effectif;
                        lastValue += randInt(1, 2);
                    }

                    const values = Object.keys(freqs);
                    const effectifs = Object.values(freqs);

                    let tableHeader = '|c';
                    let tableValues = `\\text{Valeur}`;
                    let tableEffectifs = `\\text{Effectif}`;
                    
                    values.forEach(v => {
                        tableHeader += '|c';
                        tableValues += ` & ${v}`;
                        tableEffectifs += ` & ${freqs[v]}`;
                    });
                    
                    const table = `$$ \\begin{array}{${tableHeader}|} \\hline ${tableValues} \\\\ \\hline ${tableEffectifs} \\\\ \\hline \\end{array} $$`;

                    const targetIndex = randInt(0,values.length-1);
                    const targetValue = values[targetIndex];

                    let cumulativeEffectif = 0;
                    for (let i = 0; i <= targetIndex; i++) cumulativeEffectif += freqs[values[i]];
                    
                    // Distracteurs
                    const freqSimple = targetIndex === 0 ? 0 : freqs[targetValue];
                    const totalFreq = effectifs.reduce((a,b)=>a+b,0);
                    const wrongCumul = cumulativeEffectif - freqSimple; // ECC précédent
                    
                    let opts = [
                        { text: `$${cumulativeEffectif}$`, isCorrect: true },
                        { text: `$${freqSimple}$`, isCorrect: false },
                        { text: `$${totalFreq}$`, isCorrect: false },
                        { text: `$${wrongCumul > 0 ? wrongCumul : randInt(freqSimple,totalFreq)}$`, isCorrect: false }
                    ];
                    opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
					while(opts.length < 4) {
                         const r = randInt(freqSimple,totalFreq);
                         if(!opts.some(o=>o.text === `$${r}$`)) opts.push({text:`$${r}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Pour le tableau d'effectifs suivant, quel est l'effectif cumulé croissant de la valeur <strong>${targetValue}</strong> ?</p>${table}`,
                        answer: `<p>C'est la somme des effectifs jusqu'à ${targetValue} inclus : $${cumulativeEffectif}$.</p>`,
                        options: opts
                    };
                },
                "Donner les quartiles et la médiane d’une série donnée sous forme de tableau d’effectifs ou de diagramme en barres.": () => {
                    const freqs = {};
                    let startValue = randInt(8, 12);
                    const numValues = randInt(4, 5);
                    let totalEffectif = 0;

                    for (let i = 0; i < numValues; i++) {
                        const effectif = randInt(2, 6);
                        freqs[startValue] = effectif;
                        totalEffectif += effectif;
                        startValue += randInt(1, 2);
                    }
                                       
                    const series = [];
                    for (const value in freqs) {
                        for (let i = 0; i < freqs[value]; i++) {
                            series.push(parseInt(value));
                        }
                    }

                    const summary = get5NumberSummary(series);
                    const q1 = summary[1];
                    const median = summary[2];
                    const q3 = summary[3];

                    const useChart = Math.random() < 0.5;
                    let presentation;
                    let renderFunction = null;

                    if (useChart) {
                        presentation = `<div id="jxgbox-q" class="jxgbox"></div>`;
                        renderFunction = (targetId) => {
                            const data = Object.values(freqs);
                            const labels = Object.keys(freqs);
                            const ymax = Math.max(...data) + 2;
                            const { board, theme } = createBaseBoard(targetId, [-1, ymax, labels.length+1, -1.5], { withGrid: false, withTicksX: false });
                            board.create('chart', data, { chartStyle: 'bar', width: 0.6, color: theme.curveColor });
                            labels.forEach((label, index) => {
                                board.create('text', [ index + 1, -0.1, label ], { anchorX: 'middle', anchorY: 'top', color: theme.curveColor, fontSize: 16, cssClass: 'font-bold' });
                            });
                            return board;
                        };
                    } else {
                        const values = Object.keys(freqs);
                        let tableHeader = '|c';
                        let tableValues = `\\text{Val.}`;
                        let tableEffectifs = `\\text{Eff.}`;
                        values.forEach(v => { tableHeader += '|c'; tableValues += ` & ${v}`; tableEffectifs += ` & ${freqs[v]}`; });
                        presentation = `$$ \\begin{array}{${tableHeader}|} \\hline ${tableValues} \\\\ \\hline ${tableEffectifs} \\\\ \\hline \\end{array} $$`;
                    }
                    
                    // Distracteurs
                    const vals = Object.keys(freqs).map(Number);
                    const wrongMed = calculateMedian(vals); // Mediane des valeurs uniques, pas pondérée
					const wrongQ = calculateQuartiles(vals);
					
					const bad_vals = () => {
					   let d1, d2, d3;
					   d1 = getRandomItem(vals);
					   do {d2 = getRandomItem(vals);} while (d2 === d1);
					   do {d3 = getRandomItem(vals);} while (d3 === d1 || d3 === d2);
					   return [d1,d2,d3].sort((a,b)=>a-b);
					}
					
					const bad_v1 = bad_vals();
					const bad_v2 = bad_vals();
                    
                    let opts = [
                        { text: `Med=$${median}$; $Q_1$=${q1}; $Q_3$=${q3}`, isCorrect: true },
                        { text: `Med=$${affNum(wrongMed)}$; $Q_1$=$${wrongQ.q1}$; $Q_3$=$${wrongQ.q3}$`, isCorrect: false },
                        { text: `Med=$${bad_v1[1]}$; $Q_1$=$${bad_v1[0]}$; $Q_3$=$${bad_v1[2]}$`, isCorrect: false },
                        { text: `Med=$${bad_v2[1]}$; $Q_1$=$${bad_v2[0]}$; $Q_3$=$${bad_v2[2]}$`, isCorrect: false }
                    ];
					opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) {
                         let r = bad_vals();						 				 
                         if(!opts.some(o=>o.text === `Med=$${r[1]}$; $Q_1$=$${r[0]}$; $Q_3$=$${r[2]}$`)) opts.push({text:`Med=$${r[1]}$; $Q_1$=$${r[0]}$; $Q_3$=$${r[2]}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);
                    
                    return {
                        question: {
                            html: `<p>À partir des données ci-dessous, déterminer la médiane, le premier et le troisième quartile.</p>${presentation}`,
                            render: renderFunction
                        },
                        answer: `<p>Médiane = $${median}$, Premier quartile (Q1) = $${q1}$, Troisième quartile (Q3) = $${q3}$.</p>`,
                        options: opts
                    };
                },
                "Construire des boîtes à moustaches.": () => {
                    const series = generateSeries(25, 0, 100);
                    const summary = get5NumberSummary(series);
                    // summary = [min, q1, med, q3, max]
                    
                    // Fonction pour générer le graphique d'une option
                    const createOptionBoxplot = (stats) => {
                        return (targetId) => {
                            const { board, theme } = createBaseBoard(targetId, [-5, 5, 105, -1.5], { withAxeY: false, withTicksY:false });
							board.setAttribute({
                                showNavigation: false
                            });
                            board.create('boxplot', [stats, 3, 2], { dir: 'horizontal', width: 1, color: theme.curveColor });
                            return board;
                        };
                    };
                    
                    // Distracteurs : Variations des statistiques
                    // d1: Med décalée
                    const d1 = [...summary]; d1[2] = d1[2] + 10; if(d1[2]>d1[3]) d1[2]=d1[1]+1;
					d1.sort((a,b)=>a-b);
                    // d2: Q1/Q3 élargis
                    const d2 = [summary[0], summary[1]-5, summary[2], summary[3]+5, summary[4]];
					d2.sort((a,b)=>a-b);
                    // d3: Min/Max réduits
                    const d3 = [summary[0]+10, summary[1], summary[2], summary[3], summary[4]-10];
					d3.sort((a,b)=>a-b);
                    
                    let opts = [
                        { isGraph: true, isCorrect: true, render: createOptionBoxplot(summary) },
                        { isGraph: true, isCorrect: false, render: createOptionBoxplot(d1) },
                        { isGraph: true, isCorrect: false, render: createOptionBoxplot(d2) },
                        { isGraph: true, isCorrect: false, render: createOptionBoxplot(d3) }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Une série statistique a pour résumé : Min=${summary[0]}, Q1=${summary[1]}, Médiane=${summary[2]}, Q3=${summary[3]}, Max=${summary[4]}. Quelle est l'allure de sa boîte à moustaches ?</p>`,
                        answer: {
                            html: `<div id="jxgbox-a" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-5, 7, 105, -2], { withAxeY: false });
                                board.create('boxplot', [summary,3,2], { dir: 'horizontal', width: 0.5, color: theme.curveColor });
                                return board;
                            }
                        },
                        options: opts
                    };
                },
                "Comparer des distributions à l’aide de boites à moustaches.": () => {
                    const seriesA = generateSeries(30, 10, 70);
                    const seriesB = generateSeries(30, 10, 70);
                    const summaryA = get5NumberSummary(seriesA);
                    const summaryB = get5NumberSummary(seriesB);
                    // On s'assure qu'ils ne sont pas trop proche pour le QCM
                    if (Math.abs(summaryA[2] - summaryB[2]) < 5) summaryA[2] > summaryB[2] ? summaryA[2] += 5 : summaryB[2] += 5;
                    
                    const winner = summaryA[2] > summaryB[2] ? 'A' : 'B';
                    
                    let opts = [
                        { text: `Le groupe A`, isCorrect: winner === 'A' },
                        { text: `Le groupe B`, isCorrect: winner === 'B' },
                        //{ text: `C'est identique`, isCorrect: false },
                        { text: `On ne peut pas savoir`, isCorrect: false }
                    ];
                    

                    return {
                        question: {
                            html: `<p>En observant les boîtes à moustaches des groupes A et B, quel groupe a la médiane la plus élevée ?</p><div id="jxgbox-q" class="jxgbox"></div>`,
                            render: (targetId) => {
                                const { board, theme } = createBaseBoard(targetId, [-5, 6, 85, -1], { withAxeY: false });
                                board.create('boxplot', [summaryA,4,2], { dir: 'horizontal', offset: 0.5, width: 0.5, color: theme.curveColor});
                                board.create('text', [75, 4, 'A'], {color: theme.curveColor, fontSize: 16, cssClass: 'font-bold'});
                                board.create('boxplot', [summaryB,1.5,2], { dir: 'horizontal', offset: -0.5, width: 0.5, color: theme.lineColor2});
                                board.create('text', [75, 1.5, 'B'], {color: theme.lineColor2, fontSize: 16, cssClass: 'font-bold'});
                                return board;
                            }
                        },
                        answer: `<p>Le groupe ${winner} a la médiane la plus élevée (la barre verticale dans la boîte est plus à droite).</p>`,
                        options: opts
                    };
                }
            },
			"Probabilités": {
                "Savoir qu’une probabilité est un nombre entre 0 et 1.": () => {
                    const validProbs = [0, 1, '0,5', '\\dfrac12', '\\dfrac14', '0,2', '10^{-1}'];
                    const invalidProbs = ['1,1', '-0,1', '\\dfrac32', -2, '10', '-0,5'];
                    
                    // On décide d'abord si on pose une question Vraie ou Fausse
                    const isValid = Math.random() < 0.5;
                    const choice = isValid ? getRandomItem(validProbs) : getRandomItem(invalidProbs);
                                                        
                    let opts = [
                        { text: `Oui`, isCorrect: isValid },
                        { text: `Non`, isCorrect: !isValid },
                        { text: `On ne peut pas savoir`, isCorrect: false }
                    ];

                    return {
                        question: `<p>La valeur $${choice}$ peut-elle être une probabilité ?</p>`,
                        answer: `<p><strong>${isValid ? 'Oui' : 'Non'}</strong>. ${isValid ? 'Elle est bien comprise entre 0 et 1.' : 'Une probabilité doit être un nombre compris entre 0 et 1.'}</p>`,
                        options: opts
                    };
                },
                "Calculer la probabilité d’un événement comme somme des probabilités des issues qui le composent.": () => {
                    const p1 = (randInt(1,3)/10); const p2 = (randInt(1,3)/10); const p3 = (randInt(1,3)/10);
                    const pSum = parseFloat((p1 + p2 + p3).toFixed(1));
                    const pReste = parseFloat((1 - pSum).toFixed(1));
					const colors = ['rouge','bleue','verte','jaune'].sort(() => Math.random() - 0.5);
                    
                    let opts = [
                        { text: `$${affNum(pReste)}$`, isCorrect: true },
                        { text: `$${affNum(pSum)}$`, isCorrect: false }, // Oubli du complément à 1
                        { text: `$${affNum(pReste + 0.1)}$`, isCorrect: false }, // Erreur calcul
                        { text: `$${affNum(p1+p2)}$`, isCorrect: false } // Incomplet
                    ];
					opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) {
                         let r = randInt(1,9)/10;						 				 
                         if(!opts.some(o=>o.text === `$${affNum(r)}$`)) opts.push({text:`$${affNum(r)}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Une urne contient des boules de 4 couleurs. On a $P(\\text{${colors[1]}})=${affNum(p1)}$ ; $P(\\text{${colors[2]}})=${affNum(p2)}$ et $P(\\text{${colors[3]}})=${affNum(p3)}$. Toutes les autres boules sont ${colors[0]}s. Quelle est la probabilité de tirer une boule ${colors[0]} ?</p>`,
                        answer: `<p>La somme des probabilités doit faire 1. $P(\\text{${colors[0]}}) = 1 - (${affNum(p1)}+${affNum(p2)}+${affNum(p3)}) = ${affNum(pReste)}$.</p>`,
                        options: opts
                    };
                },
                "Utiliser la relation P(A) = Card(A) / Card(Ω) dans le cas de l’équiprobabilité.": () => {
                    const scenarioType = randInt(1, 3);
                    let question, answer, opts = [];

                    if (scenarioType === 1) { // Scénario : Jeu de cartes
                        const total = getRandomItem([32, 52]);
                        const eventType = randInt(1, 3);
						const colors = ['coeur','carreau','pique','trèfle'];
						let cards = ['As','Roi','Dame','Valet','10','9','8','7'];
						if (total === 52) cards.push('2','3','4','5','6');

                        if (eventType === 1) { // Tirer une figure
                            const figures = 12; 
                            const g = gcd(figures, total);
                            question = `<p>On tire une carte au hasard dans un jeu de ${total} cartes. Quelle est la probabilité de tirer une figure (Valet, Dame ou Roi) ?</p>`;
                            answer = `<p>$P(\\text{Figure}) = \\dfrac{${figures}}{${total}} ${affFracSimp(figures,total)}$.</p>`;
                            
                            opts = [
                                { text: `$${fracSign(figures, total)}$`, isCorrect: true },
                                { text: `$${fracSign(4, total)}$`, isCorrect: false }, // Juste une couleur
                                { text: `$${fracSign(3, total)}$`, isCorrect: false }, // Juste V, D, R d'une couleur
                                { text: `$${fracSign(3, 12)}$`, isCorrect: false } 
                            ];

                        } else if (eventType === 2) { // Tirer une couleur 
                            const c = total / 4;
                            const g = gcd(c, total);
							const color = getRandomItem(colors);
                            question = `<p>On tire une carte au hasard dans un jeu de ${total} cartes. Quelle est la probabilité de tirer un ${color} ?</p>`;
                            answer = `<p>$P(\\text{${color}}) = \\dfrac{${c}}{${total}} = \\dfrac{${c/g}}{${total/g}}$.</p>`;
                            
                            opts = [
                                { text: `$\\dfrac{1}{4}$`, isCorrect: true },
                                { text: `$\\dfrac{1}{2}$`, isCorrect: false },
                                { text: `$\\dfrac{1}{${c}}$`, isCorrect: false },
                                { text: `$\\dfrac{4}{${total}}$`, isCorrect: false }
                            ];

                        } else { // Tirer une carte précise
						    const card = getRandomItem(cards);
							const color = getRandomItem(colors);
                            question = `<p>On tire une carte au hasard dans un jeu de ${total} cartes. Quelle est la probabilité de tirer ${card === 'As' ? 'l\'' : 'le '}${card} de ${color} ?</p>`;
                            answer = `<p>$P(\\text{${card} de ${color}}) = \\dfrac{1}{${total}}$.</p>`;
                            opts = [
                                { text: `$\\dfrac{1}{${total}}$`, isCorrect: true },
                                { text: `$\\dfrac{4}{${total}}$`, isCorrect: false }, 
                                { text: `$\\dfrac{1}{4}$`, isCorrect: false },
                                { text: `$\\dfrac{1}{${total-1}}$`, isCorrect: false }
                            ];
                        }

                    } else if (scenarioType === 2) { // Scénario : Lancer de dé
					    const cardOmega = getRandomItem([6,8,12]);
                        const cardA = randInt(1, cardOmega);
                        
                        question = `<p>On lance un dé équilibré à ${cardOmega} faces numérotées de 1 à ${cardOmega}. Quelle est la probabilité d'obtenir un nombre inférieur ou égal à ${cardA} ?</p>`;
                        answer = `<p>$P(X \\leqslant ${cardA}) = \\dfrac{${cardA}}{${cardOmega}} ${affFracSimp(cardA,cardOmega)}$.</p>`;
                        
                        opts = [
                            { text: `$${fracSign(cardA, cardOmega)}$`, isCorrect: true },
                            { text: `$${cardA !== 1 ? fracSign(cardA-1, cardOmega) : 0}$`, isCorrect: false } // strictement inférieur
                        ];
						while(opts.length < 4) {
                         let r = randInt(1, cardOmega);						 				 
                         if(!opts.some(o=>o.text === `$${fracSign(r, cardOmega)}$`)) opts.push({text:`$${fracSign(r, cardOmega)}$`, isCorrect: false});
                        }
                    
                    } else { // Scénario : Urne
                        const cardOmega = randInt(15, 30);
						const mult = randInt(2,Math.floor(cardOmega/2));
                        const cardA = Math.floor(cardOmega/mult);
                        const g = gcd(cardA, cardOmega);
                        question = `<p>Une urne contient ${cardOmega} boules numérotées de 1 à ${cardOmega}. Quelle est la probabilité de tirer un multiple de ${mult} ?</p>`;
                        answer = `<p>$P(\\text{multiple}) = \\dfrac{${cardA}}{${cardOmega}} ${affFracSimp(cardA,cardOmega)}$.</p>`;
                        
                        opts = [
                            { text: `$${fracSign(cardA, cardOmega)}$`, isCorrect: true },
                            { text: `$${cardA !== 1 ? fracSign(cardA-1, cardOmega) : 0}$`, isCorrect: false }
                        ];
						while(opts.length < 4) {
                         let r = randInt(2, Math.floor(cardOmega/2));						 				 
                         if(!opts.some(o=>o.text === `$${fracSign(r, cardOmega)}$`)) opts.push({text:`$${fracSign(r, cardOmega)}$`, isCorrect: false});
                        }
                    }
                    
                    opts.sort(() => Math.random() - 0.5);
                    return { question, answer, options: opts };
                },
                "Définir : événement contraire, réunion, intersection, ensemble vide.": () => {
                    const defs = {
                        'contraire (noté $\\overline{A}$)': "l'ensemble de toutes<br/> les issues de l'univers qui<br/> ne sont pas dans A.",
                        'réunion (notée $A \\cup B$)': "l'ensemble des issues<br/> qui sont dans A, OU <br/>dans B (ou dans les deux).",
                        'intersection (notée $A \\cap B$)': "l'ensemble des issues<br/> qui sont à la fois<br/> dans A ET dans B.",
                        'ensemble vide (noté $\\emptyset$)': "un événement qui ne<br/> contient aucune issue."
                    };
                    const keys = Object.keys(defs);
                    const choice = getRandomItem(keys);
                    
                    // Les options sont les définitions
                    let opts = [];
                    opts.push({ text: defs[choice], isCorrect: true });
                    
                    keys.forEach(k => {
                        if(k !== choice) opts.push({ text: defs[k], isCorrect: false });
                    });
                    
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Que signifie l'événement <strong>${choice}</strong> ?</p>`,
                        answer: `<p>C'est ${defs[choice].replaceAll('<br/>','')}</p>`,
                        options: opts
                    };
                },
                "Calculer des probabilités d’événements faisant intervenir « ou », « et ».": () => {
                    const pA = (randInt(3,7)/10); const pB = (randInt(3,7)/10);
					let pAinterB, pAunionB;
					do {
					    pAinterB = (randInt(1,6)/10); 
						pAunionB = parseFloat((pA + pB - pAinterB).toFixed(1));
					} while (pAunionB >= 1 || pAunionB < 0);
                    
                    let question, answer, opts = [];
                    
                    // On génère des erreurs types
                    const d1_add = parseFloat((pA + pB).toFixed(1)); // Oubli intersection
                    const d2_prod = parseFloat((pA * pB).toFixed(2)); // Produit (indépendance supposée)
                    const d3_wrong = Math.abs(parseFloat((pA - pB).toFixed(1)));
                    
                    if (Math.random() < 0.5) {
                        // Chercher UNION
						question = `<p>$P(A) = ${affNum(pA)}$, $P(B) = ${affNum(pB)}$, $P(A \\cap B) = ${affNum(pAinterB)}$.<br>Calculer $P(A \\cup B)$.</p>`;
						answer = `<p>$P(A\\cup B) = P(A) + P(B) - P(A\\cap B) = ${affNum(pA)} + ${affNum(pB)} - ${affNum(pAinterB)} = ${affNum(pAunionB)}$</p>`;
                        opts = [
                            { text: `$${affNum(pAunionB)}$`, isCorrect: true },
                            { text: `$${affNum(d1_add)}$`, isCorrect: false },
                            { text: `$${affNum(pAinterB)}$`, isCorrect: false },
                            { text: `$${affNum(d2_prod)}$`, isCorrect: false }
                        ];
					} else {
                        // Chercher INTERSECTION (même formule)
                        // On donne l'union, on cherche l'inter
						question = `<p>$P(A) = ${affNum(pA)}$, $P(B) = ${affNum(pB)}$, $P(A \\cup B) = ${affNum(pAunionB)}$.<br>Calculer $P(A \\cap B)$.</p>`;
						answer = `<p>$P(A \\cap B) = P(A) + P(B) - P(A\\cup B) = ${affNum(pA)} + ${affNum(pB)} - ${affNum(pAunionB)} = ${affNum(pAinterB)}$</p>`;
                        opts = [
                            { text: `$${affNum(pAinterB)}$`, isCorrect: true },
                            { text: `$${affNum(d1_add)}$`, isCorrect: false },
                            { text: `$${affNum(pAunionB)}$`, isCorrect: false },
                            { text: `$${affNum(d2_prod)}$`, isCorrect: false }
                        ];
					}
					opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) {
                         let r = randInt(1,9)/10;						 				 
                         if(!opts.some(o=>o.text === `$${affNum(r)}$`)) opts.push({text:`$${affNum(r)}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);
                    
                    return { question, answer, options: opts };
                },
                "Savoir calculer la probabilité de l’événement contraire.": () => {
                    const pA = (randInt(1, 99) / 100);
                    const pBar = parseFloat((1 - pA).toFixed(2));
                    
                    let opts = [
                        { text: `$${affNum(pBar)}$`, isCorrect: true },
                        { text: `$${affNum(pA)}$`, isCorrect: false },
                        { text: `$${affNum(pA - 1)}$`, isCorrect: false }, // Signe
                        { text: `$${affNum(-pA)}$`, isCorrect: false } // Opposé
                    ];
					opts = opts.filter((o,i,arr) => arr.findIndex(t => t.text === o.text) === i);
                    while(opts.length < 4) {
                         let r = randInt(1,99)/100;						 				 
                         if(!opts.some(o=>o.text === `$${affNum(r)}$`)) opts.push({text:`$${affNum(r)}$`, isCorrect: false});
                    }
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>$P(A) = ${affNum(pA)}$. Quelle est la probabilité de l'événement contraire $\\overline{A}$ ?</p>`,
                        answer: `<p>$P(\\overline{A}) = 1 - P(A) = 1 - ${affNum(pA)} = ${ affNum(pBar) }$.</p>`,
                        options: opts
                    };
                },
                "Pour des expériences aléatoires à deux épreuves indépendantes, représenter ou utiliser des arbres de dénombrement ou des tableaux.": () => {
                    const pA_val = (randInt(6, 9) / 10);
                    const pB_val = (randInt(1, 4) / 10); // Valeurs distinctes pour bien voir la différence
                    
                    const pA = affNum(pA_val);
                    const pA_bar = affNum(1 - pA_val);
                    const pB = affNum(pB_val);
                    const pB_bar = affNum(1 - pB_val);

                    // Fonction pour générer le graphique de l'arbre
                    // p1: proba branche haut niveau 1, p2: proba branche haut niveau 2
                    const createTreeGraph = (prob1, prob2) => {
                        return (targetId) => {
                            const { board, theme } = createBaseBoard(targetId, [-0.5, 3, 3.5, -3], { withGrid: false, withAxeX: false, withAxeY: false });
							
							board.setAttribute({
                                showNavigation: false
                            }); 
                            
                            // Style des lignes et textes
                            const lineStyle = { strokeColor: theme.strokeColor, strokeWidth: 2 };
                            const textStyle = { anchorX: 'middle', anchorY: 'bottom', fontSize: 12, color: theme.curveColor };
							const probStyleH = { anchorX: 'middle', anchorY: 'bottom', fontSize: 11, color: theme.lineColor2 };
                            const probStyleB = { anchorX: 'middle', anchorY: 'top', fontSize: 11, color: theme.lineColor2 };

                            // --- RACINE ---
                            const root = board.create('point', [0, 0], { visible: false });

                            // --- NIVEAU 1 (A / A_bar) ---
                            const nA = board.create('point', [1.5, 1.5], { visible: false });
                            const nA_bar = board.create('point', [1.5, -1.5], { visible: false });

                            // Branches N1
                            board.create('segment', [root, nA], lineStyle);
                            board.create('segment', [root, nA_bar], lineStyle);

                            // Labels N1
                            board.create('text', [1.6, 1.5, '$A$'], textStyle);
                            board.create('text', [1.6, -1.5, '$\\overline{A}$'], textStyle);
                            
                            // Probas N1 (Milieu des segments)
                            // On doit calculer les compléments pour l'affichage
                            const val1 = parseFloat(prob1.replace('{,}', '.')); 
                            const comp1 = '$'+affNum(1 - val1)+'$';
                            
                            board.create('text', [0.75, 0.8, '$'+prob1+'$'], probStyleH);
                            board.create('text', [0.75, -0.8, comp1], probStyleB);

                            // --- NIVEAU 2 (B / B_bar) ---
                            // Haut (partant de A)
                            const nAB = board.create('point', [3, 2.2], { visible: false });
                            const nAB_bar = board.create('point', [3, 0.8], { visible: false });
                            board.create('segment', [nA, nAB], lineStyle);
                            board.create('segment', [nA, nAB_bar], lineStyle);
                            
                            // Bas (partant de A_bar)
                            const nAbarB = board.create('point', [3, -0.8], { visible: false });
                            const nAbarB_bar = board.create('point', [3, -2.2], { visible: false });
                            board.create('segment', [nA_bar, nAbarB], lineStyle);
                            board.create('segment', [nA_bar, nAbarB_bar], lineStyle);

                            // Labels N2
                            board.create('text', [3.1, 2.2, 'B'], textStyle);
                            board.create('text', [3.1, 0.8, '$\\overline{B}$'], textStyle);
                            board.create('text', [3.1, -0.8, 'B'], textStyle);
                            board.create('text', [3.1, -2.2, '$\\overline{B}$'], textStyle);

                            // Probas N2
                            const val2 = parseFloat(prob2.replace('{,}', '.'));
                            const comp2 = '$'+affNum(1 - val2)+'$';

                            // Branche haut
                            board.create('text', [2.2, 1.9, '$'+prob2+'$'], probStyleH);
                            board.create('text', [2.2, 1.1, comp2], probStyleB);
                            // Branche bas (Indépendance -> mêmes probas)
                            board.create('text', [2.2, -1.1, '$'+prob2+'$'], probStyleH);
                            board.create('text', [2.2, -1.9, comp2], probStyleB);

                            return board;
                        };
                    };

                    // Options QCM
                    let opts = [
                        // Correct : P(A) en 1er, P(B) en 2ème
                        { isGraph: true, isCorrect: true, render: createTreeGraph(pA, pB) },
                        // Erreur 1 : Inversion P(B) en 1er, P(A) en 2ème
                        { isGraph: true, isCorrect: false, render: createTreeGraph(pB, pA) },
                        // Erreurs 2 et 3 : Utilisation des compléments comme probas principales
                        { isGraph: true, isCorrect: false, render: createTreeGraph(pA_bar, pB) },
                        { isGraph: true, isCorrect: false, render: createTreeGraph(pA, pB_bar) }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>On réalise deux épreuves indépendantes.<br>
                                   1ère épreuve : probabilité de succès $P(A)=${pA}$.<br>
                                   2ème épreuve : probabilité de succès $P(B)=${pB}$.<br>
                                   Quel est l'arbre pondéré correspondant ?</p>`,
                        answer: {
                            html: `<div id="jxgbox-a" class="jxgbox"></div>`,
                            render: createTreeGraph(pA, pB)
                        },
                        options: opts
                    };
                },
                "Calculer des probabilités conditionnelles lorsque les événements sont présentés sous forme de tableau croisé d’effectifs ou d’arbres pondérés.": () => {
                    const G_E = randInt(50, 100); const F_E = randInt(50, 100);
                    const G_I = randInt(50, 100); const F_I = randInt(50, 100);
                    const T_G = G_E + G_I; const T_F = F_E + F_I;
                    const T_E = G_E + F_E; const T_I = G_I + F_I;
                    const Total = T_G + T_F;
                    const table = `
$$
\\begin{array}{|l|c|c|c|}
\\hline
 & \\text{G} & \\text{F} & \\text{Total} \\\\
\\hline
\\text{Ext} & ${G_E} & ${F_E} & ${T_E} \\\\
\\hline
\\text{Int} & ${G_I} & ${F_I} & ${T_I} \\\\
\\hline
\\text{Total} & ${T_G} & ${T_F} & ${Total} \\\\
\\hline
\\end{array}
$$`;
                    
								
					const g = gcd(G_I, T_I);
                    
                    // Distracteurs : 
                    // P(G inter I) = G_I / Total
                    // P_G(I) = G_I / T_G (Inverse condition)
                    // P(I) = T_I / Total
                    
                    let opts = [
                        { text: `$\\dfrac{${G_I}}{${T_I}}$`, isCorrect: true },
                        { text: `$\\dfrac{${G_I}}{${Total}}$`, isCorrect: false },
                        { text: `$\\dfrac{${G_I}}{${T_G}}$`, isCorrect: false },
                        { text: `$\\dfrac{${T_I}}{${Total}}$`, isCorrect: false }
                    ];
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>On choisit un élève au hasard. Calculer la probabilité que ce soit un garçon sachant qu'il est interne ($P_I(G)$).</p>${table}`,
                        answer: `<p>Il y a ${T_I} internes, et parmi eux ${G_I} sont des garçons. Donc $P_I(G) = \\dfrac{${G_I}}{${T_I}} ${affFracSimp(G_I,T_I)}$.</p>`,
                        options: opts
                    };
                },
                "Distinguer P(A ∩ B), P_A(B), P_B(A).": () => {
                    const defs = {
                        '$P(A \\cap B)$': "Probabilité que A ET B<br/> se réalisent (simultanément).",
                        '$P_A(B)$': "Probabilité que B se réalise<br/> SACHANT QUE A est réalisé.",
                        '$P_B(A)$': "Probabilité que A se réalise<br/> SACHANT QUE B est réalisé.",
                        '$P(A \\cup B)$': "Probabilité que A OU B<br/> se réalise."
                    };
					let choice;
					// On enlève P(AUB) car pas dans le thème
                    do { choice = getRandomItem(Object.keys(defs)) } while (choice === '$P(A \\cup B)$');
                    
                    const keys = Object.keys(defs);
                    
                    let opts = [];
                    opts.push({ text: defs[choice], isCorrect: true });
                    
                    keys.forEach(k => {
                        if(k !== choice) opts.push({ text: defs[k], isCorrect: false });
                    });
                    opts.sort(() => Math.random() - 0.5);

                    return {
                        question: `<p>Quelle est la signification de la notation <strong>${choice}</strong> ?</p>`,
                        answer: `<p>${choice} est la ${defs[choice].replace('<br/>','')}</p>`,
                        options: opts
                    };
                }
            }
        };

        export function generateRandomQuestion(category, i) {
		    if (questionGenerators[category]){
				const generator = Object.keys(questionGenerators[category])[i]
				if (questionGenerators[category][generator]) {
					return questionGenerators[category][generator]();
				}
			}
            return {
                question: 'pas encore implémenté',
                answer: `<p>pas encore implémenté</p>`
            };
        }

        // Fonctions utilitaires pour les générateurs
		function affNum(x, max_digits = 6) {
			return parseFloat(x.toFixed(max_digits)).toString().replace('.','{,}');
		}
		
		
        function isDivisible(num, value) {
            return value % num === 0;
        }
		
		//const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
		function randInt(min, max, exclude) {
		    const exclusionSet = new Set(exclude);
		    let random;
		    do {
				random = Math.floor(Math.random() * (max - min + 1)) + min;
			} while (exclusionSet.has(random)); // On recommence tant que le nombre est dans la liste d'exclusions
		    return random;
		}
		
		const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
        
        const gcd = (a, b) => {
            a = Math.abs(a);
            b = Math.abs(b);
            while(b) {
                [a, b] = [b, a % b];
            }
            return a;
        };
		
		const lcm = (a, b) => (a * b) / gcd(a, b);
		
		function linearExpr(a, b, variable = 'x') {
            if (a === 0 && b === 0) return '0';
            if (a === 0) return `${b}`;
            
            let aStr = '';
            if (a === 1) aStr = variable;
            else if (a === -1) aStr = `-${variable}`;
            else aStr = `${a}${variable}`;
            
            if (b === 0) return aStr;
            
            const sign = b > 0 ? ' + ' : ' - ';
            const bAbs = Math.abs(b);
            
            return `${aStr}${sign}${bAbs}`;
        }
		
		// Fonction pour simplifier une fraction
		const simpFrac = (n, d) => {
		    if (!Number.isInteger(n) || !Number.isInteger(d)) return { n: n / d, d: 1 }  // si n ou d n'est pas un nombre entier
			if (d < 0) { n = -n; d = -d; }
			const common = gcd(n, d);
			return { n: n / common, d: d / common };
		};
		
		 
		function fracSign(a,b) {   // b différent de 0
			if ( a===0 ) return '0';
			else if (Math.abs(b) === 1 ) return `${a*b>0? '' : '-'} ${Math.abs(a)}`;
			else if ( a*b > 0 ) return `\\dfrac{${Math.abs(a)}}{${Math.abs(b)}}`;
			else return `-\\dfrac{${Math.abs(a)}}{${Math.abs(b)}}`;
		}
		
		function affFracSimp(a,b) {
			const g = gcd(a,b);
			if (g === 1 && a>0 && b>0){
				return '';
			} else {
			    return `= ${fracSign(a/g,b/g)}`;
			}
			
		}
		
		function createBaseBoard(targetId, BBOX = [-5, 5, 5, -5], options = {}) {		
			const theme = {
                strokeColor: 'var(--graph-text)',
                gridColor: 'var(--graph-grid)',
                curveColor: 'var(--graph-curve)',
                lineColor2: 'var(--graph-line)'
            };

            const container = document.getElementById(targetId);
            if (container && container.jsxgb_board) {
                JXG.JSXGraph.freeBoard(container);
            }
            
            const board = JXG.JSXGraph.initBoard(targetId, {
                boundingbox: BBOX,			
				axis: false, 
				showCopyright: false, 
				showNavigation: true,
				//resize: { enabled: true, throttle: 200 },
				// pan et zoom à false en attendant résoudre bug sur answer
                pan: { enabled: false, needShift: false },
                zoom: { enabled: false, wheel: true, needShift: false }
            });

            const xAxis = board.create('axis', [[0, 0], [1, 0]], { strokeColor: theme.strokeColor, ticks: { strokeColor: theme.strokeColor , label: {anchorX: 'middle',
									offset: [0,-12], fontSize: 14, strokeColor: theme.strokeColor}} });
			if ((Object.keys(options).includes('withAxeX') && !options.withAxeX)) {
                xAxis.hideElement();
            }						
			if (Object.keys(options).includes('withTicksX') && !options.withTicksX) {
                xAxis.removeTicks(xAxis.defaultTicks);
            }
			
            const yAxis = board.create('axis', [[0, 0], [0, 1]], { strokeColor: theme.strokeColor, ticks: { strokeColor: theme.strokeColor, label: {anchorX: 'middle',
									offset: [-13,0], fontSize: 14, strokeColor: theme.strokeColor} } });
			if ((Object.keys(options).includes('withAxeY') && !options.withAxeY)) {
                yAxis.hideElement();
				xAxis.defaultTicks.setAttribute({drawZero: true});
            }
			if ((Object.keys(options).includes('withTicksY') && !options.withTicksY)) {
                yAxis.removeTicks(yAxis.defaultTicks);
            }
			
            const grid = board.create('grid', [], { gridX: 1, gridY: 1, strokeColor: theme.gridColor, strokeOpacity: 0.7 });
			if ((Object.keys(options).includes('withGrid') && !options.withGrid)) {
                grid.hideElement();
            }
					

            return { board, theme };   
        }

        function formatInterval(inequality, a, x1, x2) {
            const roots = [x1, x2].sort((a,b) => a - b);
            const [r1, r2] = roots;
            const isStrict = inequality.includes('<') || inequality.includes('>');
            
            let between, outside;
            if (!isStrict) {
                between = `S = [${r1}\\,; ${r2}]`;
                outside = `S = ]-\\infty\\,; ${r1}] \\cup [${r2}\\,; +\\infty[`;
            } else {
                between = `S = ]${r1}\\,; ${r2}[`;
                outside = `S = ]-\\infty\\,; ${r1}[ \\cup ]${r2}\\,; +\\infty[`;
            }

            if (a > 0) { // Parabole "souriante"
                return (inequality.includes('<') || inequality.includes('le')) ? between : outside;
            } else { // Parabole "triste"
                return (inequality.includes('>') || inequality.includes('ge')) ? between : outside;
            }
        }

        function createSignTable(roots, a, deg = 2) {
            const r = roots.sort((a, b) => a - b);
            const sign = a > 0 ? '+' : '-';
            const oppSign = a > 0 ? '-' : '+';
            if (r.length === 2) {
                return `$$ \\begin{array}{c|ccccccc} x & -\\infty & & ${r[0]} & & ${r[1]} & & +\\infty \\\\ \\hline f(x) & & ${sign} & 0 & ${oppSign} & 0 & ${sign} & \\end{array} $$`;
            } else if (r.length === 1) {
                return `$$ \\begin{array}{c|ccccc} x & -\\infty & & ${r[0]} & & +\\infty \\\\ \\hline f(x) & & ${deg === 1 ? oppSign : sign } & 0 & ${sign} & \\end{array} $$`;
            } else {
                return `$$ \\begin{array}{c|ccc} x & -\\infty & & +\\infty \\\\ \\hline f(x) & & ${sign} & \\end{array} $$`;
            }
        }

        function createVariationTable(extrema) {
            const isUpFirst = extrema[1].y > extrema[0].y;
            const arrow1 = isUpFirst ? '\\nearrow' : '\\searrow';
            const arrow2 = isUpFirst ? '\\searrow' : '\\nearrow';
            const arrow3 = isUpFirst ? '\\nearrow' : '\\searrow';
			const lin1 = isUpFirst ? ` & & & ${extrema[1].y} & & & & ${extrema[3].y} ` : ` & ${extrema[0].y} & & & & ${extrema[2].y} & & `;
			const lin2 = isUpFirst ? ` & ${extrema[0].y} & & & & ${extrema[2].y} & & ` : ` & & & ${extrema[1].y} & & & & ${extrema[3].y} `;
            return `$$ \\begin{array}{c|ccccccc} x & ${extrema[0].x} & & ${extrema[1].x} & & ${extrema[2].x} & & ${extrema[3].x} \\\\ \\hline ${lin1} \\\\ f & & ${arrow1} & & ${arrow2} & & ${arrow3} & \\\\ ${lin2}\\end{array} $$`;
        }
		
		
        function generateSeries(count = 10, min = 1, max = 20) {
            const series = [];
            for (let i = 0; i < count; i++) {
                series.push(randInt(min, max));
            }
            return series;
        }

        function calculateMean(series) {
            const sum = series.reduce((a, b) => a + b, 0);
            return sum / series.length;
        }

        function calculateMedian(sortedSeries) {
            const mid = Math.floor(sortedSeries.length / 2);
            if (sortedSeries.length % 2 === 0) {
                return (sortedSeries[mid - 1] + sortedSeries[mid]) / 2;
            } else {
                return sortedSeries[mid];
            }
        }
        
        function calculateQuartiles(sortedSeries) {
			let n1 = Math.floor(sortedSeries.length / 4); if (sortedSeries.length%4 === 0) n1-=1; 
			let n3 = Math.floor(3*sortedSeries.length / 4); if (sortedSeries.length%4 === 0) n3-=1;
			
			const q1 = sortedSeries[n1];
			const q3 = sortedSeries[n3];
            return { q1, q3 };
        }

        function get5NumberSummary(series) {
            const sorted = [...series].sort((a,b) => a - b);
            const min = sorted[0];
            const max = sorted[sorted.length - 1];
			const median = calculateMedian(sorted);
            const { q1, q3 } = calculateQuartiles(sorted);
            return [min, q1, median, q3, max];
        }

        function calculateFrequencies(series) {
            const freqs = {};
            series.forEach(val => {
                freqs[val] = (freqs[val] || 0) + 1;
            });
            return freqs;
        }
		
		
		export function renderMath(element) {
            if (window.renderMathInElement) {
                renderMathInElement(element, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false}
                    ],
					macros: {
						",": "{\\char`,}"
					},
                    throwOnError: false
                });
            }
        }

        export function adjustMathFontSize() { 
		    const containers2 = document.querySelectorAll('.katex-display');
            containers2.forEach(container => {
                const content = container.parentElement;
                if (!content) return;
                content.style.transform = 'none';
				content.style.marginBottom = '0px';
				content.classList.add('inline-block');
				container.classList.add('inline-block');
				
				const appC = document.querySelector('#app')
				//const padding = document.querySelector('.flashcard') ? 128 : 80;
				//let padding = 80;
				let ref = (appC.clientWidth - 80);
				if (appC.querySelector('.flashcard')) {
					//ref = (appC.clientWidth - 112);
					//if((appC.clientWidth-112) <= 512){
						ref = Math.min(appC.clientWidth - 112,512);
						//document.getElementById('flip-inner').style.width = (appContainer.clientWidth-80)*0.9 + 'px';
						//document.querySelector('.flip-card-front').style.width = (appContainer.clientWidth-80)*0.9 + 'px';
						//document.querySelector('.flip-card-back').style.width = (appContainer.clientWidth-80)*0.9 + 'px';
						appC.querySelector('#question-content').style.width = ref + 'px';
						appC.querySelector('#answer-content').style.width = ref + 'px';
						//ref = ((appC.clientWidth-80)*0.9 - 32);
						
					//};
				};

                const scale = Math.min(
                    ref / content.scrollWidth,
                    //(container.parentElement.clientHeight - 5) / content.scrollHeight,
                    1
                );
                
                if (scale < 1) {
                    content.style.transformOrigin = 'top left';
                    content.style.transform = `scale(${scale})`;
					
					const originalHeight = content.scrollHeight;
					const scaledHeight = originalHeight * scale;
					const spaceToTrim = originalHeight - scaledHeight;
            
					// 3. On applique une marge négative pour "aspirer" le vide 
					// et dire au parent que le bloc prend moins de place en hauteur
					content.style.marginBottom = `-${spaceToTrim}px`;
                }
            });
			
            const containers = document.querySelectorAll('.math-option-container');
            containers.forEach(container => {
                const content = container.querySelector('.math-content');
                if (!content) return;
                content.style.transform = 'none';
                
                const scale = Math.min(
                    (container.clientWidth - 10) / content.scrollWidth,
                    (container.clientHeight - 5) / content.scrollHeight,
                    1
                );
                
                if (scale < 1) {
                    content.style.transformOrigin = 'center center';
                    content.style.transform = `scale(${scale})`;
                }
            });
			
			
        }
		
