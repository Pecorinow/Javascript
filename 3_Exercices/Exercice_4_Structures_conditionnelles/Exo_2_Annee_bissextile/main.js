const INPUT_ANNEE = document.getElementById('annee');
const BTN_VALIDER = document.getElementById('valider');
const P_RESULT = document.getElementById('resultat');

BTN_VALIDER.addEventListener('click', () => {
    let annee = INPUT_ANNEE.valueAsNumber;
    // Pseudo-code :
    // Si nombre (divisible par 4 ET pas par cent) OU divisible par 400 

    // * D'abord écrire la condition excluante :
    if (isNaN(annee)) {
        P_RESULT.textContent = 'Veuillez rentrer un nombre, svp.';

    } else if((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        P_RESULT.textContent = 'Youpiii, cette année est bissextile !';
    } else {
        P_RESULT.textContent = 'Nope, réessayez !';
    }
});

//