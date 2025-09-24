const INPUT_PRENOM = document.getElementById('prenom');
const INPUT_NOM = document.getElementById('nom');
const INPUT_AGE = document.getElementById('age');
const INPUT_URL = document.getElementById('urlimage');
const BTN_VALIDER = document.getElementById('valider');
const IMG_RESULTAT = document.getElementById('image');
const P_RESULTAT = document.getElementById('resultat');

// = Cette partie sert à conserver les valeurs des id (= prenom, valider,...) dans des variables ( = INPUT_PRENOM, BTN_VALIDER,...)

BTN_VALIDER.addEventListener('click', () => {
    let prenom=INPUT_PRENOM.value;
    let nom=INPUT_NOM.value;
    let age=INPUT_AGE.
    valueAsNumber; // car value ne fonctionne qu'avec les valeurs type text => préciser que c'est un type number ! + Pour les input nombres, écrire direct dans le html "type=number".
    let urlimage =INPUT_URL.value;
    // /!\ Les lignes "let id=INPUT" servent à récupérer  les valeurs d'id conservées dans les variables INPUT, qui vont être renvoyées dans la partie resultat. En gros, ça dit "Quand l'id prenom sera appelé, renvoyer la valeur conservée dans la variable "INPUT_PRENOM".
    P_RESULTAT.textContent = `Bonjour, je m'appelle ${prenom} ${nom}, et je vais bientôt avoir ${age + 1} ans !`
    IMG_RESULTAT.src = urlimage ;
    IMG_RESULTAT.alt = "image qui représente "+ prenom;
    // Il faut écrire les id entre {}, PAS LES NOMS qu'on leur a donnés ! 
    // Ici, les id prenom, nom et age sont appelés, et les valeurs renvoyées sont celles conserveés dans les variables INPUT.
    
});

const DIV_THEME = document.getElementById('theme');
const BTN_CLAIR = document.getElementById('btn_clair');
const BTN_DARK = document.getElementById('btn_dark');
const BTN_CHOIX = document.getElementById('btn_choix');

BTN_CLAIR.addEventListener('click', () => {
    DIV_THEME.classList.add('clair');
    DIV_THEME.classList.remove('dark');
});

BTN_DARK.addEventListener('click', () => {
    DIV_THEME.classList.add('dark');
    DIV_THEME.classList.remove('clair');
});

BTN_CHOIX.addEventListener('click', () => {
    let couleurFond = prompt('Choisissez une couleur de fond');
    let couleurTexte = prompt('Choississez une couleur de texte');
    DIV_THEME.style.background = couleurFond;
    DIV_THEME.style.color = couleurTexte;
}); // = modifier le style d'une balise



