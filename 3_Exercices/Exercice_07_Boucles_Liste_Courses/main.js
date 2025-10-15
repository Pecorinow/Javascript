// Consignes :
// 1) Créer un produit avec déjà qlqes éléments
// 2) Créer un input et un button pour ajouter des produits à la liste.
// 3) Créer un nouvel élément pour chaque produit de la liste et l'afficher dans un paragraphe, grâce à : 
//     - une boucle
//     - un innerHTML
// 4) Si produit déjà présent, ne pas l'ajouter !
// 5) Mettre une poubelle pour chaque élément

const INPUT_ELEM = document.getElementById('newElem');
const BTN_AJOUTER = document.getElementById('ajouter');
const UL_AFFICHAGE = document.getElementById('affichage');
const BTN_SUPPRIMER = document.getElementById('supprimer')

//* 1) Créer un tableau :
let tabCourses = ['Pain', 'Vin', 'Boursin'];

//* 2) Créer une fonction d'affichage qui contient la boucle :
function afficher(){
    UL_AFFICHAGE.innerHTML = '';
    // Cette ligne a 2 rôles :
    // 1) Indiquer qu'on va ajouter du HTML à la liste <ul> de départ (on la laisse vide, elle va se remplir à la ligne suivante).
    // 2) VIDER le contenu HTML précédent et n'ajouter que le HTML qui va être ajouté au clic du bouton. Sinon, à chaque nouvel input, c'est chaque fois tout le tableau qui se réaffiche en dessous du précédent.
    tabCourses.forEach((newElem, i) => {
        // = Pour chaque élément(= valeur) contenu dans le tableau et possédant l'index appelé i...
        UL_AFFICHAGE.innerHTML += `<li>${newElem}   <button onclick="supprimer(${i})" >🗑️</button> </li>`;
        // ... on l'affiche comme nouvel élément HTML de la liste <ul> (ici l'élement HTML est un <li>).
        // attribut onclick = ajoute un event sur le bouton, ici l'event = la fontion supprimer() développée plus bas.
        // i = permet d'appliquer la fonction supprimer(), dont le "index" est remplacé par i => La fonction sait qu'elle doit supprimer l'élément dont l'index est i !
    });
    

    INPUT_ELEM.value = '';
};

afficher(); // Lancer l'affichage avant les events = afficher le tableau existant dès le chargement de la page.

//* 3) Créer une fonction d'ajout pour ajouter le nouvel élément à la liste :

function ajouter() {
    let newElem = INPUT_ELEM.value;
    if(tabCourses.includes(newElem) ) {
        alert('Vous avez déjà rentré cet élément !');
    } else if (!isNaN(newElem) || newElem == ''){
        alert('Ça n\'a rien à faire dans une liste de courses, ça !')
    } else {
        tabCourses.push(newElem);
    }
};

//* Fonction supprimer :
/**
 * 
 * @param {number} index 
 */
function supprimer(index){
    tabCourses.splice(index, 1);
    afficher();
}
// index = peut être nommé n'importe comment, mais comme on est dans un splice, on sait que le premier élément entre () est un index, qui sera précisé dans la fonction afficher().


//* 4) Ajouter un eventListener au bouton :

BTN_AJOUTER.addEventListener('click', () => {
        ajouter();
        afficher();
});

INPUT_ELEM.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        ajouter();
        afficher();
    }
});



