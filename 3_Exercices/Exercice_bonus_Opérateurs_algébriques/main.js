const INPUT_NB1 = document.getElementById('nb1');
const INPUT_NB2 = document.getElementById('nb2');
const INPUT_RESULT = document.getElementById('result');
const BTN_ADD = document.getElementById('addition');
const BTN_STR = document.getElementById('soustraction');
const BTN_MUL = document.getElementById('multiplication');
const BTN_DIV = document.getElementById('division');
const BTN_PCT = document.getElementById('pourcentage');
const BTN_RESET = document.getElementById('reset');

BTN_ADD.addEventListener('click', () => {
    /* récupérer les valeurs : */
    let nb1 = INPUT_NB1.valueAsNumber;
    let nb2 = INPUT_NB2.valueAsNumber;

    /* faire le calcul : */
    INPUT_RESULT.valueAsNumber = nb1 + nb2;
});

BTN_STR.addEventListener('click', () => {
    /* récupérer les valeurs : */
    let nb1 = INPUT_NB1.valueAsNumber;
    let nb2 = INPUT_NB2.valueAsNumber;

    /* faire le calcul : */
    INPUT_RESULT.valueAsNumber = nb1 - nb2;
});

BTN_MUL.addEventListener('click', () => {
    /* récupérer les valeurs : */
    let nb1 = INPUT_NB1.valueAsNumber;
    let nb2 = INPUT_NB2.valueAsNumber;

    /* faire le calcul : */
    INPUT_RESULT.valueAsNumber = nb1 * nb2;
});

BTN_DIV.addEventListener('click', () => {
    /* récupérer les valeurs : */
    let nb1 = INPUT_NB1.valueAsNumber;
    let nb2 = INPUT_NB2.valueAsNumber;

    /* faire le calcul : */
    INPUT_RESULT.valueAsNumber = nb1 / nb2;
});

BTN_PCT.addEventListener('click', () => {
    /* récupérer les valeurs : */
    let nb1 = INPUT_NB1.valueAsNumber;
    let nb2 = INPUT_NB2.valueAsNumber;

    /* faire le calcul : */
    INPUT_RESULT.valueAsNumber = nb1 * (nb2 / 100);
});

BTN_RESET.addEventListener('click', () => {
    INPUT_NB1.valueAsNumber = '';
    INPUT_NB2.valueAsNumber = '';
    INPUT_RESULT.valueAsNumber = '';
})