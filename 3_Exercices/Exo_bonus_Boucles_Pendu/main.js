// À partir d'un tableau rempli de mots, sélectionnez un mot aléatoire, ce sera le mot à deviner 
 
// Afficher dans la page autant de _ qu'il y a de lettres dans le mot
 
// Le joueur peut proposer des lettres
// Vous devez lui indiquer les lettres qu'il a déjà jouées 
// S'il se trompe, on compte une erreur et le pendu se dessine de plus en plus 
// S'il a bon, on dévoile la lettre dans la mot
 
// Petit tips : 
// Une chaine de caractères, peut être parcourue avec une boucle, puisque que c'est un peu un tableau où chaque caractère se trouve dans une case
// ex :  let chaine = "Bonjour"
// chaine[0] // "B"

// Tips : 
// Pour stocker les lettres déjà jouées -> tableau
// Pour votre mot à afficher, pour pouvez créer un tableau qui fait la même taille que le mot recherché mais où tous les caractères sont des __
 
// Quand le joueur propose une lettre, on parcourt le mot pour trouver les indices où sont cette lettre et on affiche dans notre tableau du mot à trouver au même indice, cette fameuse lettre 

//* 1) Créer les variables pour chaque élément :

const BTN_TIRAGE = document.getElementById('tirage');
const P_MOT_MYSTERE = document.getElementById('motMystere');
const INPUT_PROP = document.getElementById('proposition');
const P_RESULT = document.getElementById('resultat');
const BTN_REJOUER = document.getElementById('rejouer');
const P_NB_TENTATIVES = document.getElementById('nbTentatives');
const P_LETTRES_JOUEES = document.getElementById('lettresJouees')
const P_WIN = document.getElementById('win');
const P_LOSE = document.getElementById('lose');

// variable random :
let random;


//* 2) Créer un tableau de mots ET un tableau des lettres jouées ET un tableau de traits underscores :

let tabNoms = ['Fenouil', 'Albert', 'SteveNoJobs', 'Poussière', 'Xena', 'Aïoli', 'Pisco', 'Angela', 'ChatGuevarra', 'Galbatorix', 'Thanos', 'Callisto', 'Tofu', 'Pavlov', 'Schodinger', 'Kropotkin', 'Princesse Papillon de lumière', 'Rasputin'];

let tabLettresJouees = [];

let tabTraits =[];

//* 3) Fonction tirage au sort :

function randomName() {
    let tabLength = tabNoms.length;
    randomIndex = Math.floor(Math.random() * tabLength); // Attention : randomIndex = l'index du mot, pas le mot lui-même !
    tabTraits = ('_'.repeat(tabNoms[randomIndex].length)).split('');
    // On avait 3 problèmes ici : 
    // 1) SPLIT : .split transforme une chaine de caractère en un tableau de plusieurs éléments distincts.
        // On avait d'abord écrit :
        // traits = ['_'.repeat(random.length)];
        // -> Problème : on obtenait un tableau avec un seul élément '________' au lieu de plusieurs éléments '_'.
    // 2) On ne met pas le contenu du tableau entre [], le split à lui-seul implique qu'il s'agit d'un tableau !
    // 3) randomIndex = un index, et non une string
        // => randomIndex.length = impossible, car un index n'a pas de longueur.
        // => On veut en fait :
        // tabNoms[randomIndex].length
        // càd la longueur du MOT qui correspond à randomIndex dans le tableau.
    P_MOT_MYSTERE.textContent = tabTraits.join(' ');
};

BTN_TIRAGE.addEventListener('click', () => {
    randomName();

});

//* 4) Fonction ajouter des lettres :

INPUT_PROP.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        let proposition = INPUT_PROP.value;
        ajouter()

    }
});

// Ce qu'on veut :
// - Un tableau de lettres déjà jouées
// - Une variable nbTentatives = 20
// Une fonction Ajouter :
// 
// - Si lettre incorrecte :
//   Si nombre tentatives <= 20 :
//      => 1) P_RESULT annonce 'Lettre incorrecte !'.
//         3) nbTentatives -1
//         4) P_NB_TENTATIVES affiche nbTentatives
//         5) lettre jouée est push dans tabLettresJouees
//         6) P_LETTRES_JOUEES affiche le tabLettresJouees
//   Sinon :
//      => P_RESULT annonce `Pas de bol, tu as épuisé tes tentatives, le nom de mon chat était tabNoms[randomIndex]`.
// - Si lettre correspond à un index de tabNoms :
//      S'il reste des _ dans le mot :
//      => 1) Remplacer un _ par la lettre à l'index correspondant.
//         2) P_RESULT annonce 'Bravo !'.
//      Sinon : 
//      => P_RESULT annonce 'Bravo, tu as deviné le nom de mon chat tabNoms[randomIndex] !'
//      


