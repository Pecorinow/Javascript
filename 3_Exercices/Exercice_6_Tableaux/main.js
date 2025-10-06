// Étape 1 : Ajouter dans un tableau + Afficher

const INPUT_PRENOM = document.getElementById('inputPrenom');
const BTN_AJOUTER = document.getElementById('ajouter');
const P_INVALIDE = document.getElementById('invalide');
const P_AFFICHAGE = document.getElementById('affichage');
const BTN_TIRAGE = document.getElementById('tirage');
const P_AFFICHAGE_TIR = document.getElementById('affichageTirage');

const TAB_PRENOM = [];

BTN_AJOUTER.addEventListener('click', () => {
    let inputPrenom = INPUT_PRENOM.value;
    if(inputPrenom == "" || !isNaN(inputPrenom)) {
        P_INVALIDE.textContent = "Attention, tu dois rentrer une chaine de caractères !";
        INPUT_PRENOM.value = "";
    } else {
        TAB_PRENOM.push(inputPrenom); // Pour entrer une valeur liée à un élément html, écrire directement le nom de sa variable entre () et sans '' !
        P_AFFICHAGE.textContent = TAB_PRENOM.join(' | ');
    }
});


// Étape 2 : Random, afficher case en particulier, suppression

let random;
let tabLength = TAB_PRENOM.length;

BTN_TIRAGE.addEventListener('click', () => {
    random = Math.floor(Math.random() * tabLength + 0);
    if( random == tabLength ) { //! ça ne peut pas être == tabLength, car tabLength = longueur du tableau, PAS l'index d'un nom !
        P_AFFICHAGE_TIR.textContent = `Pas de bol ${}`;
    }

});

