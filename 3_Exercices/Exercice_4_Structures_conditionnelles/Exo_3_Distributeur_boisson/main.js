const INPUT_CODE = document.getElementById('code');
const BTN_VALIDER = document.getElementById('valider');
const P_RESULT = document.getElementById('resultat');
const P_IMAGE = document.getElementById('image');


BTN_VALIDER.addEventListener('click', () => {
    

    switch (INPUT_CODE.valueAsNumber) {
        case 542 :
            P_RESULT.textContent = "Un café, à cette heure, vous êtes sûr ? 🤨";
            P_IMAGE.src = "./images/coffee.png";
            P_IMAGE.alt ="Tasse de café couvert de crème";
            break;
        case 421 :
            P_RESULT.textContent = "Bravo, le thé est un excellent diurétique ! 👌 ";
            P_IMAGE.src = "./images/tea.png";
            P_IMAGE.alt ="Tasse de thé en verre";
            break;
        case 623 :
            P_RESULT.textContent = "Vous saviez qu'il y avait l'équivalent de 5 cubes de sucre dans un Minute Maid ? 😑";
            P_IMAGE.src = "./images/juice.png";
            P_IMAGE.alt ="Berlingot de jus de pomme";
            break;
        default :
            P_RESULT.textContent = "🙅‍♂️ Veuillez entrer un code valide ! 🙅‍♂️";
            P_IMAGE.src = "";
            P_IMAGE.alt ="";
            
    }

    
});
