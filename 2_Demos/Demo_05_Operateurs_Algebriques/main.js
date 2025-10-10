const nb1 = 10;
const nb2 = 3;

// multiplication :
let multiplicaton = nombre1 * nombre2;

// division :
let division = nb1 / nb2;

// addition :
let addition = nb1 + nb2;

// soustraction :


// Le modulo : Reste d'une division entière, s'il n'est tpas égale à 0 alors la division n'est pas une division entière.
let modulo = nb1 % nb2;

// La puissance / l'exposant :
let puissance2 = nb1 ** nb2; // ** = exposant

//--------------------------------------------

// Comment ajouter des nombres petit à petit :
let somme = 0;
somme = somme +12;
somme = somme + 8;
somme = somme +2; // Si on fait console.log ici, il affichera 22, car la somme à chq fois été mise à jour.

//* Raccourci :
somme += 5; // -> ici, somme = 27
console.log(somme);
somme -= 7;
console.log(somme); //-> ici, somme = 20;
somme *= 2;
console.log(somme) // -> ici, somme = 40;
somme /= 2;
console.log(somme); // -> ici, somme = de nouveau 20;

// * Ajouter 1 :
console.clear();// juste pour repartir à 0

somme++; // = raccourci de somme + 1;
//MAIS

//!--------------------------------------------------------------
//! Cours de Aude :

let nombre1 = 5;
let nombre2 = 2;

// L'addition
let addition = nombre1 + nombre2;
console.log(addition);

// La soustraction
let soustraction = nombre1 - nombre2;
console.log(soustraction);

// La multiplication
let multiplication = nombre1 * nombre2;
console.log(multiplication);

// La division (normale)
let division = nombre1 / nombre2;
console.log(division);
// Si vouhaitez faire une division entière
let divisionEntiere = parseInt(nombre1 / nombre2);
console.log(divisionEntiere);

let divisionEntiere2 = Math.floor(nombre1 / nombre2); /* Arrondi à l'entier inférieur */
console.log(divisionEntiere2);

let arrondiSup = Math.ceil(nombre1 / nombre2); 
/* Arrondi à l'entier supérieur */
console.log(arrondiSup);

let arrondiPlusProche = Math.round(nombre1 / nombre2); 
/* Arrondi à l'entier le plus proche 
si <2.5 => 2 
>= 2.5 => 3*/
console.log(arrondiPlusProche);

// Le modulo 
let modulo = nombre1 % nombre2;
console.log(modulo); /* modulo = 1 donc 5 n'est pas entièrement divisible par 2*/
console.log(6 % 2); /* modulo = 0 donc 6 est entièrement divisible par 2 */

// La puissance (exp)
// avant arrivée de l'opérateur on devait utiliser une fonction
let puissance = Math.pow(nombre1, nombre2);
console.log(puissance);
// après arrivée de l'opérateur puissance
let puissance2 = nombre1 ** nombre2;
console.log(puissance2);

// ------------------------------------
// affectations raccourcies
console.clear();

let somme = 0;
somme = somme + 12;
somme = somme + 8;
somme = somme + 2;
console.log(somme); //22
somme += 5; //écriture raccourcie de somme = somme + 5
console.log(somme); //27
somme -= 7;
console.log(somme); //20
somme *= 2;
console.log(somme); //40
somme /= 2;
console.log(somme); //20

// incrémentation / décrémentation
// somme += 1;
console.clear();
somme++;
console.log(somme); //21
++somme;
console.log(somme); //22

console.log(somme++); //22 //somme, au moment où elle est affichée, n'a pas encore subie l'incrémentation mais elle va se faire pour la ligne suivante
console.log(somme); //23

console.log(++somme); //24 //somme va être incrémentée avant d'être affichée par le console.log
console.log(somme); //24

somme--;
console.log(somme); //23






