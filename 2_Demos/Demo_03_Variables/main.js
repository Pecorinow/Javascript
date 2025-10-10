var variable1 = 'coucou';

var variable1 = 56; // var : permet de re-déclarer une variable, mais du coup d'écraser la valeur précédente si elle est re-déclarée. =/= let ou const qui ne permettent simplement pas de re-déclarer une même variable.

// *let = utilisée pour modifier la valeur d'une variable
let somme = 0;
somme = somme + 42; // Ici, somme a pu être modifiée après coup.

// *const = utilisée pour les variables qui resteront constantes (non shit), donc dont on ne pourr aplus modifier la valeur.
const Pi = 3.14;
// Si on veut la modifier par la suite avec Pi = 13, l'action ser aimpossible (mais pas soulignée par VSC).
// !Attention cependant :
const PERSON = {
    firstName = 'Caro'
    lastName = 'Poveda'
};
PERSON.firstName = 'Ludmilla'; // Dans le cas d'OBJETS, on pourra modifier l'INTERIEUR de l'objet, mais pas le nom de l'objet, donc :
// person = 'nouveauNom'; --> impossible, on ne peut pas modifier l'objet lui-même.


//!--------------------------
// !Conventions de nommages :
//!--------------------------

// *let : on écrit en lowerCamelCase = majuscule à chaque nouveau mot, sauf le premier.
// Ex : let prixDuProduit = 'trop cher'

// *const : on écrit en UPPERCASE, en majuscule avec des _ entre chaque mot.
// Ex : const MA_PHOBIE = 'tout'

// *let ET const :
// pas de caractères spéciaux ni accents, sauf $ (utilisation précise).
// chiffres autorisés, mais pas en premier caractère (variable1 = OK, 1variable = NOPE)
// pas d'espaces.
// noms concis et explicites sur ce que contient la variable.
// noms de variables et fonctions en ANGLAIS si possible.


//!-------------------------------------------------
// !Typage :
//!--------------------------------------------------

// ? Types de base :
//?---------------

//* number
let nombreEntier = 12;
let nombreDecimal = 3.14;

let grosNombre = 36891698136811398913981391831n; // pour les très gros entiers, on rajoute n à la fin -> devient un BigInt, mais ne peut être manipulé qu'avec d'autres BigInt.
// Pour les gros nombres, on peut aussi mettre des _ entre les centaines pour mieux lire les nombres, ils ne seront pas visibles sur la page web.

// * string
//S'écrit entre "" ou entre '' ('' plus conseillé)
let maChaine = "la belle chaîne"; // Ici il faudra mettre un \ devant les ".
let maChaine = 'la belle chaîne'; // ..;et ici devant les ' .
// On garde les mêmes pour tout le code.
// Interpolation de chaine :
let nb1 = 15;
let nb2 = 3;
console.log(`Le résultat de ${nb1} + ${nb2} vaut ${nb1 + nb2}`)

// * booléen
// Détermine si une variable est dans un état ou un autre :
let jeSuisFatiguee = true;
let jeSuisBronzee =false;
// Cas courants : jeux :
let caseArrivee = false;
let continuerPartie = true;


// ?Variables prédéfinies :
//?----------------------

//* type undefined :
//Valeur spéciale, signifie qu'il n'y a pas de valeur dans la variable (variable vide).
//soit pcq oubliée :
let uneVariable; // ici, pas de valeur déclarée.
console.log(uneVariable + 6); // impossible car pas de valeur dans la varibale -> la console nous renverra undefined.
// soit pcq certaines fonstions nous renvoient volonrtairement undefined car elles n'ont rien trouvé:

// * type null :
//Absence de valeur volontaire, si par exemple on ne connaît pas encore la valeur, ou qu'on sait qu'il n'y a pas de valeur dans cette variable par rapport à d'autres (Ex: si on ne rempli pas tous les champs facultatifs d'un quetsionnaire, les champs non remplis seront notés null).
let resultatExamensFinAnnee = null; // car on ne les connaît pas encore.
//OU
let couleurChienBob = 'vert';
let couleurChienJim = 'bleu';
let couleurChienBill = null; // car Bill n'as pas de chien :(

// * NaN :
// Signifie que la valeur n'est pas un nombre, MAIS NaN est bien de type number !
console.log('patates' * 12); // va donner NaN car multiplication entre string et number impossible.
// Conversion ratée :
console.log( parseInt('patates')); // NaN car 'patates' = string;
// Dès qu'on compare qlqch de NaN avec NaN, ce sera faux, car on compare deux nombres indéfinis donc incomparables.
console.log('patates' == NaN); //faux
console.log( parseInt('patates') ==NaN) //faux
console.log(NaN == NaN) //faux

// * infinity :
// Représente l'infini mathématiques, on le rencontrara peu.
console.log(56 / 0);


//? Types avancés :
//?--------------
// * Tableaux :
// Dans un tableau, on peut déclarer pleins de types de variables mais pas conseillé -> ❤️Un tableau pour un type de variables.
//Valeurs déclarées //! entre []
// Tableaux = variables composées de cases (= objets) qui vont de 0 à [nombre de cases - 1].
// Sert à stocker un très grand nombre de valeurs organisées en variables et en objets, autour du même thème.
let monTableau = ['Lundi', 'Mardi', 'Mercredi',];
// Pour accéder à un endroit précis du tableau :
console.log(monTableau[2]); // = Mercredi, car mercredi correspond à la case 3, -1 = 2

// * Objets :
//Dans les objets, on déclare des //! PROPRIÉTÉS entre {},
// et séparées par des //!VIRGULES :
let monObjet {
    'propriété 1' : 'valeur associée', // propriétés soit entre '', mais pas conseillé
    propriete2 : 'valeur associée 2', // ... ❤️ soit sans '', mais sans espaces ni caract spéciaux 
}
// Et pour récupérer ou afficher une propriété dans un tableau, on ajoute un //!POINT
// entre l'objet et la propriété voulue :
console.log(monObjet.propriete2);
console.log(monObjet['propriété 1']); // c'est chiant de remettre les '' donc on ne fait pas ça.

// Ex. d'objet :
let person1 = { // Nom de l'objet en lowerCamelCase car let
    firstname : 'Aude', // propriété déclarée sans maj ni espace
    lastname : 'Beurive',
    birthdate : new Date('1989-10-16'),
    vacations : false,
    dogName : 'Taylor',
    catName : null, //mais ce sera bientôt Soup
    direBonjour : () => { console.log('Bonjour je suis ' + person1.firstname) }
    //...
}

console.log(`Nous vous présentons ${person1.firstname} ${person1.lastname} née le ${person1.birthdate}`)
person1.direBonjour();

console.clear();
console.log(monTableau)
console.log(person1);

// Spoiler de ce qui nous attend demain
const BTN = document.getElementById('btn');
console.log(BTN);
// BTN est un objet qu'on va manipuler
BTN.textContent = 'C\'est l\'heure';
BTN.addEventListener('click', () => {
    BTN.style.backgroundColor = 'chartreuse';
});




