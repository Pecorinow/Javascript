const INPUT_AGE = document.getElementById('age');
const BTN_VALIDER = document.getElementById('valider');
const P_RESULT = document.getElementById('resultat');

BTN_VALIDER.addEventListener('click', ()=>{
    let age = INPUT_AGE.valueAsNumber;

    if (isNaN(age)) {
        P_RESULT.textContent = 'Veuillez rentrer un nombre, svp.';
    } else if(age>=18) {
        P_RESULT.textContent = 'Bienvenue sur notre site de recettes de cuisine réservé aux adultes !🍕';
    } else {
        P_RESULT.textContent = 'Reviens quand tu seras grand 🥸 ';
    }
});

//? Faire en sorte que Valider fonctionne aussi avec Enter : :
// event : paramètre faculttaif de la fonction déclenchée, représnete l'evènement 
// keydown = "quand la touche est en bas"
BTN_VALIDER.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter') {
    // Soit on réécrit tout dedans :
    //     let age = INPUT_AGE.valueAsNumber;

    // if (isNaN(age)) {
    //     P_RESULT.textContent = 'Veuillez rentrer un nombre, svp.';
    // } else if(age>=18) {
    //     P_RESULT.textContent = 'Bienvenue sur notre site de recettes de cuisine réservé aux adultes !🍕';
    // } else {
    //     P_RESULT.textContent = 'Reviens quand tu seras grand 🥸 ';
    // }

    // Soit :
    BTN_VALIDER.click(); // = l'attribut click du BTN_VALIDER va se déclencher si on appuie sur la touche Enter
    }
});