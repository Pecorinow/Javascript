// ! Bases des intéractions avec le DOM :
// ! ------------------------

// Document Object Model = gigantesque objets où on trouve toutes les infos relatives à la page.

//* window est un objet qui représente toute notre fenêtre de navigateur qui peurt servir à récup des infos comme :
// - sur quel navigateur est l'utilisateur
// - la liste des extensions installées par l'utilisateur -> ex. popups anti adblock, lecteurs d'écran, 
// - localisation de l'utilisateur -> ex. lui proposer des restos...
// - langue du navigateur de l'utilisateur
// - sa préférence de thème (thème sombre, clair)
// - l'url actuelle...

//* document est un bojet qui représente toute la page html
//? C'est lui qu nous intéresse pour le moment
// = gros objet qui représente toute notre page, y compris son titre.
// Comme une page ne possède qu'un seul title, on peut par ex le modifier depui sl'objet document :
document.title = 'La bonne page';
// Le body étant aussi unique, on pet y accéder directement depuis le doc, ainsi qu'çà ce qu'il contient :
// document.body.classList

//! Par contre, si on veut récup des éléments précis, pas garanti qu'il n'y en ait qu'un, ni qu'il existe :
// document.div -> impossible car quelle div ?
// -> Méthodes ou fonctions nécessaires pour récup des éléments dans la page !


//? Plusieurs méthodes de récup :
//?----------------------------
// Celui qu'on utilisera le plus prochainement sera //!via l'id de l'élément à récup :
// Attention, sur deux id similaires dans le html (normalement pas permis mais on sait jamais), c'est le premier qui apparaît qui sera repris, l'autre osef
// La méthode document.getElementById('nom id'); récupère l'élément qui correspond à l'id
// On devra alors le stocker dans une variable pour l'utiliser ensuite :

// On préfère //*stocker la valeur dans une const, car let risque d'écraser la valeur actuelle :
const DIV_EX_1 = document.getElementById('prout');  
console.log(DIV_EX_1); // Ici on a créé l'objet DIV_EX_1, qui représente la balise HTML dont l'id est 'prout'.

// const DIV_EX_1 = document.getElementById('proute');  // si faute dans l'écriture de l'id, la valeur renvoyée sera null car l'élément n'aura pas été trouvé.

//! Autres méthodes : récupérer des listes d'éléments :
//*Via une classe :
const TOUS_LES_ELEMENTS_BLEUS = document.querySelectorAll('blue');
// = srécupérer tous les éléments qui ont la classe 'blue'

//* Via nom de balise :
// const TOUS_LES_LIENS = document.querySelectorAll(a);
// = récupérer via le nom de la balise

//! Modifier le contenu (textuel) d'un élément HTML :
// Uniquement sur les balises en paires, donc div, nav, listes, mais pas images p.ex.
// * innerText ou textContent:
DIV_EX_1.innerText = '1e modif';
DIV_EX_1.textContent ='2e modif';

// * innerHTML :
DIV_EX_1.innerHTML = '3e modif';

//* Quelle diff entre innerText et textContent ?
// ! Compléter avec le cours !!


//! Ajouter un évènement
//!---------------------
const DIV_PLANTE = document.getElementById('plante');
const BTN_ARROSER = document.getElementById('arroser');
// Pour ajçouter une gestion d'évènements sur l'élément html, on lui ajoute un "écouter d'élément", qui va 1.guéter l'arrivée d'un évènement 2.déclencher 
// Cett eméthode addEbventListener demande 2 infos :
//1. le type d'vent (string)
//2. le code à exécuter au moment de cet event (fonction), ici une fonction anonyme :
// () => {} = fonction anonyme :
BTN_ARROSER.addEventListener('click', () => {
    DIV_PLANTE.textContent = '🌳';
});
    // = dans les {} on ajoute tout le code qu'on veut exécuter lors du click (ici click = évènement)
    // Au click, un arbre apparaîtra à la place de la plante dans la div qui porte l'id plante



//! Modifier les classes
const DIV_JOUR = document.getElementById('jour');
const BTN_INVERSER = document.getElementById('inverser');
// = Comme d'hab, ici on récup et conserve les éléments 'jour' et 'inverser', puis...
BTN_INVERSER.addEventListener('click', () => {
    DIV_JOUR.classList.toggle('jour');
    DIV_JOUR.classList.toggle('nuit');
});
    // * classList donne la liste des classes de l'élément :
    // classlist.add('nomClass') ajoute la classe
    // classlist.remove('nomClass') retire la classe
    // classlist.contains('nomClass') renvoie un booléen pour savoir si la classe est présente ou non
    // classlist.toggle('nomClass') supprime la classe si elle est présente, sinon l'ajoute = peut échanger une classe avec une autre si on met 1 toggle pour chaque classe !

//! Modifier le style d'une balise (seulement en cas de besoin!)
const BTN_COMBIEN = document.getElementById('combien');
const DIV_JAUGE = document.getElementById('jauge');

BTN_COMBIEN.addEventListener('click', () => {
   let note = prompt('Tu te mets combien en Javascript sur 100 ?');
   
   //on modifie la taille de la div jauge pour qu'elle soit égale à la note de l'utilisateur
   DIV_JAUGE.style.width = note + '%';
});



//! Modifier les attributs
const P_VOUS = document.getElementById('vous');
const IMG_VOUS = document.getElementById('vous-img');
const BTN_FINIR = document.getElementById('finir');

BTN_FINIR.addEventListener('click', () => {
    P_VOUS.textContent = 'Vous à la fin de la journée :';
    IMG_VOUS.src = 'https://m.media-amazon.com/images/I/513eV9QFlAL._UF350,350_QL50_.jpg';
    IMG_VOUS.alt = 'crying cat';
});

//! Consulter / modifier la valeur d'un champs :
const INPUT_TECHNO = document.getElementById('techno');
const BTN_VALIDER = document.getElementById('valider');
const P_RESULTAT = document.getElementById('resultat');
// Cette partie sert à conserver les valeurs des id (= techno, valider...) dans des variables ( =INPUT_TECHNO...)

BTN_VALIDER.addEventListener('click', () => {
    let techno=INPUT_TECHNO.value; 
    P_RESULTAT.textContent = `Aaaah oui ${techno} c'est la pire, courage, tu vas juste faire ça toute ta vie 🙃`; // /!\ Les lignes "let id=INPUT" servent à récupérer  les valeurs d'id conservées dans les variables INPUT, qui vont être renvoyées dans la partie resultat. En gros, ça dit "Quand l'id techno sera appelé, renvoyer la valeur conservée dans la variable "INPUT_TECHNO".

    INPUT_TECHNO.value = ''; //'' chaine vide = réinitialiser et effacer les données présentes dans les inputs (si on ne le fait pas les valeurs entrées restent visibles dans les inputs même après obtention du résultat)
});

// Exo perso:
const P_MOI = document.getElementById('moi');
const IMG_MOI = document.getElementById('moi-img');
const BTN_APRES = document.getElementById('apres');

BTN_APRES.addEventListener('click', () => {
    P_MOI.textContent = 'Moi 0.02 secondes après avoir commencé JavaScript (aidez-moi)';
    IMG_MOI.src = 'https://i.pinimg.com/736x/37/44/41/374441df50f7ddc13b6b0affec3d9f5b.jpg';
    IMG_MOI.alt = 'Carlo Tentacule bizarre';
})




