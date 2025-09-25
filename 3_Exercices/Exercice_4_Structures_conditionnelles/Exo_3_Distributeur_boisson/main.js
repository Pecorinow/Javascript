const INPUT_CODE = document.getElementById('code');
const BTN_VALIDER = document.getElementById('valider');
const P_RESULT = document.getElementById('resultat');
const P_IMAGE = document.getElementById('image');

BTN_VALIDER.addEventListener('click', () => {
    let code = INPUT_CODE.ValueAsNumber;

    switch (INPUT_CODE) {
        case (code === 542) :
            P_RESULT.textContent = "Un café, à cette heure, vous êtes sûr ? 🤨";
            P_IMAGE.textContent = "☕";
            break;
        case (code === 421) :
            P_RESULT.textContent = "Bravo, le thé est un excellent diurétique ! 😀 ";
            P_IMAGE.textContent = "🍵";
            break;
        case (code === 623) :
            P_RESULT.textContent = "Vous saviez qu'il y avait l'équivalent de 5 cubes de sucre dans un Minute Maid ? 😑";
            P_IMAGE.textContent = "🧃";
            break;
        default :
            P_RESULT.textContent = "Veuillez entrer un code valide.";
            P_IMAGE.textContent = "🙅‍♂️";
    }
});
