let prenom = prompt('Mademoiselle vous êtes charmante c\'est quoi votre prénom ?');

let nom = prompt('et vous avez pas un ptit nom de famille ?');

let age = prompt('Wah c\'est trop beau et vous avez quel âge si je peux me permettre ?');

//* Option la plus propore :
let ageNombre = parseInt(age); // parseInt = convertir une string en nombre entier, parseFloat = convertir une string en nombre à virgule

let confirmation = confirm(`Waaaah ${prenom} ${nom}, vous faites pas du tout ${ageNombre + 1} ans jsuis choqué`); // pour obtrenir l'âge +1, juste mettre + 1 à côté de la variable convertie en nombre.
// JE SUIS UN GENIE

// * Options plus crade :
let ageNombre2 = Number(age);
// OU
let ageNombre3 = +age; // Rajouter un + devant va la transformer en nombre, mais pas conseillé, notamment dans le cas d'un gros calcul à plusieurs nombres, car le + va rester et rendre le tout illisible.
// OU :     en incrémentant directement age :
age++; // Le ++ rajoute 1 à la variable, mais ce n'est faisable que sur des nombres, donc SJ convertit automatiquement la string en nombre avant de faire le calcul.
 
