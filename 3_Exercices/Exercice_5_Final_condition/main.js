const BTN_FACILE = document.getElementById('facile');
const BTN_NORMAL = document.getElementById('normal');
const BTN_DIFF = document.getElementById('difficile');
const P_DEVINE = document.getElementById('devine');
const INPUT_TEST = document.getElementById('nbTest');
const BTN_VALIDER = document.getElementById('valider');
const P_NB_TENTATIVES = document.getElementById('nb-tentatives');
const P_RESULT = document.getElementById('resultat');
const IMG = document.getElementById('img');

// Création de variables vides, auxquelles on assignera des valeurs plus tard à chaque niveau :
let nbTentatives;
let max;
let nbMystere;

// Empêcher d'entre un nombre et de valider tant qu'aucun niveau n'a été choisi :
INPUT_TEST.disabled = true;
BTN_VALIDER.disabled = true;


BTN_FACILE.addEventListener('click', () => {
    nbTentatives = 5;
    max = 10;
    nbMystere = Math.floor(Math.random() * max + 1);
    P_DEVINE.textContent = `Devine le prix de ce menu super healthy maxi-burger avec frites sauce Dallas calories +++ (boisson non-inclue), entre 1 et ${max}€ ! `;
    P_NB_TENTATIVES.textContent = `Il te reste ${nbTentatives} tentatives !`;
    IMG.src = './img_facile.jpg';
    IMG.alt = 'Greasy burger with its traditional fries and sauce';

    INPUT_TEST.disabled = false;
    BTN_VALIDER.disabled = false;

    BTN_FACILE.disabled = true;
    BTN_NORMAL.disabled = true;
    BTN_DIFF.disabled = true;
});


BTN_NORMAL.addEventListener('click', () => {
    nbTentatives = 10;
    max = 100;
    nbMystere = Math.floor(Math.random() * max + 1);
    P_DEVINE.textContent = `Devine le prix de cette adorbale yaourtière toute ronde, entre 1 et ${max}€ ! `;
    P_NB_TENTATIVES.textContent = `Il te reste ${nbTentatives} tentatives !`;
    IMG.src = './img_normal.jpg';
    IMG.alt = 'Round and shiny yogurt maker';

    INPUT_TEST.disabled = false;
    BTN_VALIDER.disabled = false;

    BTN_FACILE.disabled = true;
    BTN_NORMAL.disabled = true;
    BTN_DIFF.disabled = true;

});


BTN_DIFF.addEventListener('click', () => {
    nbTentatives = 15;
    max = 1000;
    nbMystere = Math.floor(Math.random() * max + 1);
    P_DEVINE.textContent = `Devine le prix de cette élégante machine à laver, parfaite pour laver les vêtemente ou déposer des plantes en pot, entre 1 et ${max}€ ! `;
    P_NB_TENTATIVES.textContent = `Il te reste ${nbTentatives} tentatives !`;
    IMG.src = './img_diff.jpg';
    IMG.alt = 'Elegant white washing machine';

    INPUT_TEST.disabled = false;
    BTN_VALIDER.disabled = false;

    BTN_FACILE.disabled = true;
    BTN_NORMAL.disabled = true;
    BTN_DIFF.disabled = true;
});


BTN_VALIDER.addEventListener('click', () => {
    let nbTest = INPUT_TEST.valueAsNumber;
    //* On avait créé ici une ligne let nbMystere = NB_MYSTERE.valueAsNumber; => erreur, car nbMystere est déjà un nombre généré par Math.random, et PAS un élément HTML, car il n'est pas relié à un id dans le html.
    // => on ne peut pas y appliquer la propriété .value ou valueAsNumber, car on ne peut récupérer la valeur que d'un élément html (comme INPUT_TEST qui est une référence à l'élément html nbTest).
    // Or, ici, on essayait de récupérer la valeur d'un nombre qui est déjà une valeur en soi, comme si on avait écrit 7.valueAsNumber.
    //* => .value ou .valueAsNumber sert à récupérer une valeur stockée dans un élément HTML, mais est inutile pour appeler une valeur en soi !
    // En cas de valeur "brute" comme c'est le cas ici, on peut juste l'appeler en écrivant nbMystere 


    if (isNaN(nbTest) || nbTest > max || nbTest <= 0) {
        P_RESULT.textContent = `Petit plaisantin ! On a dit un nombre entre 1 et ${max} !`;

    } else if (nbTest < nbMystere) {
        P_RESULT.textContent = "Essaie avec un nombre plus élevé !";
        nbTentatives = nbTentatives - 1;
        if (nbTentatives > 0) {
            P_NB_TENTATIVES.textContent = `Attention, il te reste ${nbTentatives} tentatives !`;
        } else {
            P_RESULT.textContent = `C'est raté pour cette fois hihi, le nombre mystère était ${nbMystere} !`;
            P_NB_TENTATIVES.textContent = "Tentatives épuisées ! 🫢";

            INPUT_TEST.disabled = true;
            BTN_VALIDER.disabled = true;
        
            BTN_FACILE.disabled = false;
            BTN_NORMAL.disabled = false;
            BTN_DIFF.disabled = false;
        }


    } else if (nbTest > nbMystere) {
        P_RESULT.textContent = "Essaie avec un nombre plus bas !";
        nbTentatives = nbTentatives - 1;
        if (nbTentatives > 0) {
            P_NB_TENTATIVES.textContent = `Attention, il te reste ${nbTentatives} tentatives !`;
        } else {
            P_RESULT.textContent = `C'est raté pour cette fois hihi, le prix mystère était ${nbMystere} !`;
            P_NB_TENTATIVES.textContent = "Tentatives épuisées ! 🫢";

            INPUT_TEST.disabled = true;
            BTN_VALIDER.disabled = true;
        
            BTN_FACILE.disabled = false;
            BTN_NORMAL.disabled = false;
            BTN_DIFF.disabled = false;
        }

    } else if (nbTest === nbMystere) {
        P_RESULT.textContent = "Bravo ! Je n'ai jamais vu quelqu'un deviner les prix comme ça, tu es un génie ! 🤩";
        P_NB_TENTATIVES.textContent = ""; // ! Prq ne s'applique pas ??


        INPUT_TEST.disabled = true;
        BTN_VALIDER.disabled = true;
    
        BTN_FACILE.disabled = false;
        BTN_NORMAL.disabled = false;
        BTN_DIFF.disabled = false;
    }
});


