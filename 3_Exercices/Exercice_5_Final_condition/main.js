const BTN_FACILE = document.getElementById('facile');
const BTN_NORMAL = document.getElementById('normal');
const BTN_DIFF = document.getElementById('difficile');
const P_DEVINE = document.getElementById('devine');
const INPUT_TEST = document.getElementById('test');
const BTN_VALIDER = document.getElementById('valider');
const P_NB_TENTATIVES = document.getElementById('nb-tentatives');
const P_RESULT = document.getElementById('resultat');


BTN_FACILE.addEventListener('click', () => {
    P_DEVINE.textContent = "Devine un chiffre entre 1 et 10 !";
    P_NB_TENTATIVES.textContent = "5";
    const NB_MYSTERE = Math.floor(Math.random() * 10 + 1);
    
    BTN_VALIDER.addEventListener('click', () => {
        let test = INPUT_TEST.valueAsNumber;
        let nbMystere = NB_MYSTERE.valueAsNumber;

        if (isNaN(test) || test >= 10 || test <=0 ) {
            P_RESULT.textContent = "Petit plaisantin ! On a dit un nombre entre 1 et 10 !";
        } else if(test < nbMystere) {
            P_RESULT.textContent = "Eeeeh non, le prix mystère est plus élevé !";
        } else if(test > nbMystere) {
            P_RESULT.textContent = "Eeeeh non, le prix mystère est plus bas !";
        } else if(test === nbMystere);
    });

});

BTN_NORMAL.addEventListener('click', () => {
    P_DEVINE.textContent = "Devine un chiffre entre 1 et 100 !";
    P_NB_TENTATIVES.textContent = "10";
});

BTN_DIFF.addEventListener('click', () => {
    P_DEVINE.textContent = "Devine un chiffre entre 1 et 1000 !";
    P_NB_TENTATIVES.textContent = "20";
});

