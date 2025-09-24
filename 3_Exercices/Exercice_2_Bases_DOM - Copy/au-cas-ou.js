const MON_PRENOM = document.getElementById('prenom'); // Possible que ce soit const pour prenom et nom ?
const MON_NOM = document.getElementById('nom');
let monAge = document.getElementById('age');
const URL_IMAGE = document.getElementById('url-image');
let ageNombre = parseInt(monAge);
const BTN_VALIDER = document.getElementById('valider');
const MON_RESULTAT = document.getElementById('resultat');


BTN_VALIDER.addEventListener('click', () => {
    MON_RESULTAT.textContent =  `Bonjour, je m'appelle ${MON_PRENOM} ${MON_NOM} et je vais bientôt avoir ${ageNombre + 1 } ans !`;
    MON_PRENOM.value ='';
    MON_NOM.value = '';
});