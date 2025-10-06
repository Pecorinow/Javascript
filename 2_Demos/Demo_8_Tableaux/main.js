//!--------------
//! Les tableaux :
//!--------------

//! ATTENTION : En JS , pas de différence entre tableaux et listes. Les tableaux en js n'ont pas de taille fixe, si on ajoute des valeurs dedans, il grandit et si on en enlève il rétrécit.

//! ATTENTION : En JS, on peut mettre N'IMPORTE QUOI dans un tableau, ce qui peut poser des soucis par la suite car souvent on fait faire les mêmes choses à tous les éléments d'un tableau, DONC faire des tableau avec les mêmes types de données dedans.
let bazar = ['Soup <3 ', 42, true];
console.log('bazar');// gros bordel mais c'est permis.
// MAIS : 
for (let truc of bazar) {
    console.log(truc);
}; // TODO aucune idée de ce que truc est

//for(let truc of bazar) {
//   console.log(truc.toUpperCase())}; 
// Ici, on a fait planter la console après 'Soup', car on a demandé de mettre des nombres, des dates et des booléens en majuscule, ce qui est impossible.

//! Pour déclarer un tableau : 
// On a créé un tableau qui s'abbelle hobbies (= nom de la variable), dans lequel on a mis :
// - dans la première case : 'Pétanque'
// - dans la deuxième : 'Ricard'
// - dans la troisième : 'Poulet-compote'
let hobbies = ['Pétanque', 'Ricard', 'Poulet-compote']

// Chaque valeur/case stockée dans le tableau possède un indice (ou index), qui permet de le retrouver dans le tableaux.
// Cet index commence toujours à 0 (sauf en winDev -_-)
// => L'index max vaudra toujours la taille de notre tableau -1.
// Ex : Si taille tableau = 3, alors l'index max = 3-1 = 2. (oui c'est horrible).
//* => Si je veux afficher la valeur de la 2e case, qui porte l'index 1 :
console.log(hobbies);
console.table(hobbies); // = affichage + structuré

// Si on essaie d'afficher le tableau entier dans la page, comme le navigateur est incap d'afficher un objet dans la page, il fait un toString() sur le tableau.
// => Il concatène toutes les valeurs du tableau et les sépare par des virgules :
document.getElementById('affichage1').textContent = 'hobbies';

//* DONC Si je veux afficher la valeur de la 2e case : elle porte l'index 1 :
console.log(hobbies[1]); // Ricard
console.log(hobbies[6]); // undefined, car pas de valeur à l'index 6

//! Accéder à la taille d'un tableau :
console.log(hobbies.length); // Affiche le nbr d'éléments dans le tableau hobbies, ici 3.

//! Afficher un nouvel élément dans un tableau :
//? Version nulle et peu secure: 
// On ajoute à l'index 3, qui n'a pas encore de valeur :
hobbies [3] = 'Zumba';
console.log(hobbies); // Affiche bien Zumba en index 3

// Problème :
// hobbies [11] = 'Moussaka';
// console.log(hobbies);
// Fonctionne, mais :
// - va laisser pleins de cases vides entre l'index 3 et l'index 11 => consomme de la mémoire pour rien.
// - si on veut p.ex. afficher des cases vides en majuscules => plantage de la page car on veut afficher des undefined.
// - risque d'écrasement si on ajoute une valeur dans une case déjà occupée.

//? Version cool, celle qu'il faut faire :
// Méthode qui permet d'ajouter un élément à la FIN d'un tableau existant :
hobbies.push('Tuning');
console.log(hobbies); // Youpi l'élément s'est mis à la fin du tableau.

// Méthode qui permet d'ajouter au DEBUT du tableau (moins utilisée) :
hobbies.unshift('Pistaches');
console.log(hobbies); // L

//! Supprimer une valeur dans un tableau :
console.clear();

// déclarer un tableau vide : 
const technos = [];

// ajouter à un tableau :
technos.push('CSS');
technos.push('Javascript');

technos.unshift('HTML');

// consulter une case :
console.log(technos[0]);

// afficher tout le tableau :
console.log(technos);
// console.table(technos);

//? Supprimer :
//* technos.pop(); = supprime toujours le dernier élément
// console.log(technos);
//* technos.shift(); = supprime toujours le prmeier élément
// console.log(technos);

// MAIS c'est rare de supprimer un élément au début ou à la fin d'un tableau, on supprime plutôt des éléments précis :

//! Supprimer un élement ciblé avec tableau.splice(indexDepart, nbElementASupprimer) :
// nbElementASupprimer = optionnel, mais si on ne le met pas => supprime tout jusqu'à la fin :
// technos.splice (1); = supprime tout à partir de CSS jusqu'à la fin

// DONC on préfère :
technos.splice(1, 1); // = supprime juste CSS qui se trouve à l'indice 1
console.log(technos);

//? NOTE : Méthode filter = bcp utilisée pour supprimer (nécessaire en React) :
// technos = technos.filter( (t) => t!== 'CSS'); 
// console.log(technos);
//   Mais on verra ça dans des tableaux plus avancés.

//! Quelques méthodes utiles :

const DIV_AFF_2 = document.getElementById('affichage2');

//? Afficher les éléments d'un tableau dans la page :
//DIV_AFF_2.textContent = technos;
// tableau.toString() -> Transforme un tableau en string en concaténant tous les éléments du tableau  et en les séparant par une virgule.
// DIV_AFF_2.textContent = technos.toString;    -> C'ets moche
//* join = permet de faire un toString mais on a le choix du séparateur :
// DIV_AFF_2.textContent = technos.join(' | ');
// -> Va séparer les éléments par un | (vachement plus sexy)
DIV_AFF_2.textContent = technos.join(' - ');
// -> vachement plus mignon


//? inverser un tableau :
console.clear();

const motsRigolos = ['Bouille', 'Fouille', 'Nouille', 'Touille', 'Douille'];

console.log(motsRigolos);
motsRigolos.reverse; // * inverse le sens du tableau 
console.log(motsRigolos);


//? Trier un tableau :
console.clear();

const notes = [12, 8, 26, 1, 127];
notes.sort();
console.log(notes); // Le tri se fait, mais sur le POIDS des caractères ascii, pas sur les nombres oskouuuuuur

// DONC besoin de FONCTIONS DE COMPARAISON :

//* par ordre croissant :
notes.sort((a, b) => a - b); // Va chaque fois calculer le coefficient entre un nombre et le suivant, et va classer ces coefficients du plus PETIT au plus GRAND.
console.log(notes); 

//* par ordre décroissant :
notes.sort((a, b) => b - a ); // Va chaque fois calculer le coefficient entre un nombre et le //TODO ?précédent ou rien à voir?,
// et va classer ces coefficients du plus GRAND au plus PETIT.
// a et b : on écrit ce qu'on veut à la place, c'est l'ordre du calcul qui compte
console.log(notes); 

// Avant d'avoir une fonction sort, on devait créer un tableau temporaire où on mettait chaque coeff et on les déplaçait à chaque nouveau coeff ajouté, merci les dev d'avoir créé sort <3

//* Et dans un tableau de strings ? 🩲
const gateaux = ['éclair', 'merveilleux', 'paris-brest', 'tarte-tatin', 'couign-aman'];
console.log(gateaux);

// gateaux.sort((a, b) => a - b);  => Ne fonctionne pas car c'est une opération mathématique, or ici on compare des 🩲 ! 
// DONC :
//* par ordre alphabétique :
gateaux.sort((chaine1, chaine2) => chaine1.localeCompare(chaine2));
// = compare une string à la suivante selon les lettres et non les nombres. //TODO j'ai pas tout capté, les lettres ont des POIDS ???
// chaine1 et chaine 2 : on écrit ce qu'on veut à la place, c'est l'ordre du compare qui compte.
console.log(gateaux);

//* par ordre anti-alphabétique :
gateaux.sort((chaine1, chaine2) => chaine2.localeCompare(chaine1));
// = compare une string à la précédente selon les lettres et non les nombres.

//* prénomsDeDroite : Aristide, Evariste, Pierre-Emmanuel, Olympe, Berthole, Valère, Marie-Clémence, Athénaïs.





