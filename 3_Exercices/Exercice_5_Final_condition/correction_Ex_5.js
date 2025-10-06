BTN_EASY.disabled = true;
BTN_MILD.disabled = true;
BTN_HARDCORE.disabled = true;

BTN_EASY.addEventListener ('click', {
    initGame('easy');
});

BTN_MILD.addEventListener ('click', {
    initGame('mild');
});

BTN_HARDCORE.addEventListener ('click', {
    initGame('hardcore');
});

// ! Fonction pour 
// JSDoc : permet de rajouter des infos à votre fonction, c'est plus agréable pour nous et d'autres dév.
/** 
 * initialize the game with a level in parameter (hard, mild or easy)
 * @param {string} level 
 */

function initGame (level) {


    if (level === hard) {
    nbMax = 1000;
    maxGuess = 15;
} else if (level === mild) {
    nbMax = 100;
    maxGuess = 10;
} else if (level === easy) {
    nbMax = 100;
    maxGuess = 5;
}
};

//------------JEU----------------------
BTN_GO.addEventListener('click', () => {

})

INPUT_NB_USER.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        verifyNumber();
    }
})

/**
 * verify if the user number matches the random number
 */
function verifyNumber() {
    const userNumber = INPUT_NB_USER.valueAsNumber;

    // Si l'utilisateur rentre n'importe quoi :
    if (isNaN(userNumber) || userNumber < 1 || userNumber > nbMax) {
        P_RESULT.textContent = 'Tu sais lire ?';
    } // Si l'utilisateur propose un chiffre trop haut :
    else if (userNumber > random) {
        P_RESULT.textContent = 'C\'est plus que' + userNumber;
    }// Si l'utilisateur propose un chiffre trop bas :
    else if (userNumber < random) {
        P_RESULT.textContent = 'C\'est moins que' + userNumber;
    }
}



//--------------FIN JEU------------------------------
//?Emojis //
function showGuess() {
    //* Pour afficher les tentatives restantes  en nombres :
    // P_GUESS.textContent = maxGuess - guess;

    //* En chaines de caractère :
    // let guessAvailable = maxGuess - guess;
    // P_GUESS.textContent = "".padEnd(guessAvailable, '*' ) // = le nombre de tentatives restantes sera représenté par des *.
        //* "String".padEnd(maxLength, 'character') :
    // -> le padEnd rempli la place restante d'une chaine de caractère (p.ex."String") par la chaine de caractère entre (), (p.ex. '*').
    // Ici, comme on voulait juste mettre les étoiles, on laisse le début de la chaine vide "", pour que seules les étoiles s'affichent.

    //* Et en emojis :
    let guessAvailable = maxGuess - guess;
    // Vu que l'emoji dollar prend 2 caractères, il faut doubler la longueur de la chaine à rajouter :
    // P_
}