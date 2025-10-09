// Étape 1 : Ajouter dans un tableau + Afficher

const INPUT_PRENOM = document.getElementById('inputPrenom');
const BTN_AJOUTER = document.getElementById('ajouter');
const P_INVALIDE = document.getElementById('invalide');
const P_AFFICHAGE = document.getElementById('affichage');
const BTN_TIRAGE = document.getElementById('tirage');
const P_AFFICHAGE_TIR = document.getElementById('affichageTirage');
const BTN_RESET = document.getElementById('reset');

const TAB_PRENOM = [];

BTN_AJOUTER.addEventListener('click', () => {
    addName();
});

INPUT_PRENOM.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addName();
    }
});

function addName() {
    let inputPrenom = INPUT_PRENOM.value.trim(); 
    //* trim = sert à faire disparaître les espaces avant ou après une chaine de caractère => ne compte pas l'espace comme un caractère.
    if(inputPrenom == "" || !isNaN(inputPrenom)) {
        P_INVALIDE.textContent = "Attention, tu dois rentrer une chaine de caractères !";
        INPUT_PRENOM.value = "";
    } else {
        TAB_PRENOM.push(inputPrenom); // Pour entrer une valeur liée à un élément html, écrire directement le nom de sa variable entre () et sans '' !
        P_AFFICHAGE.textContent = TAB_PRENOM.join(' | ');
        INPUT_PRENOM.value = "";
    }
};

// Étape 2 : Random, afficher case en particulier

let random;

BTN_TIRAGE.addEventListener('click', () => {
    randomName()
});

function randomName() {
    let tabLength = TAB_PRENOM.length; // * tabLength doit être à l'INTERIEUR de l'évènement, sinon elle ne se calcule qu'une fois avant même le clic et elle est toujours égale à 1 => n'affiche que le premier prénom à chq fois !
    random = Math.floor(Math.random() * tabLength);
    P_AFFICHAGE_TIR.textContent = `Bonté divine ${TAB_PRENOM[random]}, Père a perdu tous ses bitcoins, nous allons devoir vendre la maison du Cap d'Agde 😭 !`
    
// Étape 3 : suppression du nom sélectionné
    TAB_PRENOM.splice(random, 1);
    P_AFFICHAGE.textContent = TAB_PRENOM.join(' | ');
};

BTN_RESET.addEventListener('click', () => {
    TAB_PRENOM.length = 0;
    P_AFFICHAGE.textContent = '';
    P_AFFICHAGE_TIR.textContent = '';
});







