//!Les boucles
//! 2 types : WHILE et FOR

//?TANT QUE (condition ok) FAIRE (quelque-chose)
//?     while(condition){}

// = vaut pour une action dont on ne sait pas combien de fois elle va se répéter
// Ex : un jeu, la lecture d'un fichier...

let prenom = prompt('Entrez votre prénom');

while (!isNaN(prenom) || prenom.trim() === '' ) {
    // on affiche un message et on redemande à l'utilisateur d'entrer un nom
    alert('Vous n\'avez pas entré de nom valide');
    prenom = prompt('Entrez un prénom valide');//! -> Dans un WHILE, on fera toujours attention de permettre à l'utilisateur de changer la variable utilisée dans la condition (ici, ré-entrer un prénom), sinon on est coincé dns une BOUCLE INFINIE et on fait crash le code.
};

alert('Bienvenue ' + prenom);

// while(true){
    // boucle infinie parfaite -> CRASH
// }

//?FAIRE (quelque-chose)) TANT QUE (condition ok)
//?     do{}while(condition)

let prenom2;
do {
    prenom2 = prompt ('Entrez un prénom')
}while (!isNaN(prenom2) || prenom.trim === '');

alert('Bienvenue '+ prenom2);

//! Attention:  Dans le cas du do... while, il se fera toujours au moins une fois, même si la condition de départ n'est pas respectée !
//! Pourquoi ? Car il fait l'action AVANT de vérifier la condition.
// Ex : Si on veut ajouter 1 à un nombre tant qu'il est en dessous de 3, mais qu'on commence à compter à 5, le do... while ajoutera d'abord 1 à 5, PUIS il constatera que 5 est plus grand que 3 et sortira de la boucle -> La condition n'est pas remplie mais l'instruction a quand-même été exécutée.


//?----------------------------------------------
//? POUR VALEUR ALLANT DE X À Y, PART PAS DE Z, FAIRE
//? for(let i = 0; i <10, i++) {}
// = vaut pour une action dont on sait exactement combien de fois elle va se répéter.
// Ex : action à faire sur un tablau de 4 cases -> action répétée 4 fois.

// POUR(INITIALISATION VARIABLE; CONDITION DE SEJOUR ; PAS D'INCREMENTATION)

// for(let i = 0; i > 10 ; i++){ // = i vaut 0, on reste dans la boucle tant que i est plus petit que 10, et à chaque tour on y ajoute 1
// console.log(i); // va afficher 0-> 9, et à 10 on sort de la boucle.
// }

 let courses = ['Patates', 'Carottes', 'PQ', 'Poulet'];
//  console.log(courses[0])
//  console.log(courses[1])
//  console.log(courses[2])
//  console.log(courses[3])
for(let i = 0 ; i > courses.length; i++) {
    console.log(i);
    console.log(courses[i].toUpperCase());
};
//* Attention : le i n'existe à chaque fois que dans les parenthèses du for, et peut donc être réutilisé ailleurs dans le code.

let notes = [];
let nombreEtudiants = 4;
for(let i = 0; i < notes.length ; i++){
    let notes = prompt(`Entrez la note de l'élève numéro ${i+1}`);
    notes.push(notes);
};

alert(notes);

//* Cette boucle est utile sur des tableaux pas encore remplis !
//Pour des tableaux remplis : ⏬


//?--------------------------------------------------
//? Les for plus sympas :
//! Ne sont utilisés que sur des tableaux déjà remplis !

let vetements = ['Salopette', 'Chaussette', 'Slippp', 'Top'];

//? for in :    = pour chaque (truc) à l'intérieur du tableau
console.log('FOR IN');
for (let indice in vetements){
    console.log(`Vetements n°${parseInt(indice) + 1} : ${vetements[indice]}`);
} // La variable VETEMENT peut s'appeler comme on veut mais elle contiendra les INDICES de chaque élément.


//? for of :    
console.log('FOR OF');
for(let vetements of vetements){
    // la variable VETEMENTS peut s'appeler comme on veut mais elle contiendra les différentes VALEURS de chaque élement
}


// ? for each
//?     array.forEach( (valeur, indice, array) => {} )

// utilisé comme un for of (valeur)
console.log("FOR EACH");

vetements.forEach( (vetement) => {
    console.log( vetement.toUpperCase() );
})

// utilisé à demi potentiel (valeur + indice)
vetements.forEach( (vetement, indice) => {
    console.log(indice + ' : ' + vetement);
})

// utilisé à full potentiel (très très très peu utilisé)
console.clear();
vetements.forEach( (vetement, indice, vetementsInitiaux) => {
    console.log(indice + ' : ' + vetement);
    console.log(vetementsInitiaux); //représente le tableau sur lequel le forEach est utilisé
})

// ! Pour l'instant on n'a pas appris à créer de l'html proprement donc on va se contenter de .innerHtml

const UL_TRAINERS = document.getElementById('trainers');

const favTrainers = ['Gavin', 'Aurélien', 'Mélanie', 'Quentin', 'Khun'];

// for(let trainer of favTrainers) {
//     //UL_TRAINERS.innerHTML = UL_TRAINERS.innerHTML + `<li>${trainer}</li>`;
//     UL_TRAINERS.innerHTML += `<li>${trainer}</li>`;
// }

favTrainers.forEach((trainer) => {
    UL_TRAINERS.innerHTML += `<li>${trainer}</li>`;
});

