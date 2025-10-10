//!-----------------------------------------
//! Les structures conditionnelles oskour 🫠
//!-----------------------------------------

//? Le if else simple :

const INPUT_NB1 = document.getElementById('nb1');
const BTN_VALIDER1 = document.getElementById('valider1');
const P_RESULTAT1 = document.getElementById('resultat1');

BTN_VALIDER1.addEventListener('click', () => {
    let nombreATester = INPUT_NB1.valueAsNumber;

    //Si le nombre est pair -> Afficher qu'il l'est dans le paragraphe
    // Sinon -> Affoicher qu'il ne l'est pas dans le paragraphe

    //* Pseudo-code :
    // SI nombreATester MOD 2 VAUT 0        (MOD = modulo)
    // Ecrire ("Pair")
    // SINON
    // Ecrire ("Impair")

    // Pour savoir si un nombre est pair, il doit être entièrement divisible par deux, donc le modulo du nombre par 2 doit valoir 0 :
    if (nombreATester % 2 === 0) {
        P_RESULTAT1.textContent = `Le nombre ${nombreATester} est pair.`;

    }   else {
        P_RESULTAT1.textContent = `Le nombre ${nombreATester} est impair.`
    }

});

//?-------------------------------------------
//? 2) Le if else if else (= SI SINON SI SINON):

const INPUT_NB2 = document.getElementById('nb2');
const BTN_VALIDER2 = document.getElementById('valider2');
const P_RESULTAT2 = document.getElementById('resultat2');

BTN_VALIDER2.addEventListener('click', () => {
    let nombreATester = INPUT_NB2.valueAsNumber;

    // SI ce qui a été tapé n'est pas un nombre :
    if (isNaN(nombreATester)) {
        P_RESULTAT2.textContent = "Veuillez rentrer un nombre, svp (connard)."

        // SINON, on repart avec le SI SINON simple :
    }   else if (nombreATester % 2 === 0) {
            P_RESULTAT2.textContent = `Le nombre ${nombreATester} est pair.`;

    }   else {
        P_RESULTAT1.textContent = `Le nombre ${nombreATester} est impair.`
    }
});

//?-------------------------------------------
//? 2) Le if à ne pas faire :

const P_RESULTAT3 = document.getElementById('resultat3');
// Créer une variable avec la date du jour :
const DATE_DU_JOUR = new Date(); 
// Je récup le jour de la semaine de cette date du jour :
const JOUR_SEMAINE = DATE_DU_JOUR.getDay();
// La valeur qu'on a récupéré est un nombre entre 0 et 6
// 0 correspondant au dimanche et 6 au samedi

// si dimanche
if(JOUR_SEMAINE === 0){

    P_RESULTAT3.textContent = "C'est dimanche, c'est le weekend !";

} else if(JOUR_SEMAINE === 1) {

    P_RESULTAT3.textContent = "C'est lundi, c'est le début de la semaine";

} else if(JOUR_SEMAINE === 2 ) {

    P_RESULTAT3.textContent = "C'est mardi, c'est le début de la semaine";

} else if(JOUR_SEMAINE === 3) {

    P_RESULTAT3.textContent = "C'est mercredi, c'est le milieu de la semaine (mais le morceau de la semaine qui est chiant)";

} else if(JOUR_SEMAINE === 4) {
    
    P_RESULTAT3.textContent = "C'est jeudi, c'est bientôt le weekend";

} else if(JOUR_SEMAINE === 5) {
    
    P_RESULTAT3.textContent = "C'est vendredi, c'est ce soir le weekend";

} else {

    P_RESULTAT3.textContent = "C'est samedi, c'est le weekend !";

}
 
// On évite les if else if else if else if à l'infini. En général, on tolère 2 else if
// if else if else if else -> encore ok, au dessus, on fera plutôt...

// ? Le switch 

const P_RESULTAT4 = document.getElementById('resultat4');

// Attention : le switch compare la variable renseignée à la valeur avec une égalité stricte.
// JOUR_SEMAINE 
switch (JOUR_SEMAINE) {
    case 0 :
        P_RESULTAT4.textContent = "Dimanche"
        break; // break = instruction qui permet de sortir du switch
    case 1: // case = "dans le cas où..." + la condition, ici le jour de la semaine 1.
        P_RESULTAT4.textContent = "Lundi"
        break;
    case 2:
        P_RESULTAT4.textContent = "Mardi"
        break;
    case 3:
        P_RESULTAT4.textContent = "Mercredi"
        break;
    case 4:
        P_RESULTAT4.textContent = "Jeudi"
        break;
    case 5:
        P_RESULTAT4.textContent = "Vendredi"
        break;
    case 6:
        P_RESULTAT4.textContent = "Samedi"
        break;
    default : // = si aucune des valeurs du case n'est entrée :
        P_RESULTAT4.textContent = "Nope";
}
// Attention : 
// Attention, dans le switch, on ne peut pas mettre de comparaison telle que :
let note = 14;
switch(note) {
    case note < 10 : 
        //ne fonctionnera pas, le switch va regarder
        // if(note === (note < 10)) -> (14 === false)
}

// * ( en fait si on peut en trichant mais on le fait rarement parce que beaucoup de dev trouvent ça berk et c'est un des rares où on peut )
// * on peut tricher en mettant true dans le switch puisqu'on veut rentrer dans le case qui vaut true
switch(true) {
    // if note < 10 === true
    case note < 10 :
        console.log("note inférieure à 10 : bof");
        break;
    // if note === 10 === true
    case note === 10 :
        console.log("moyenne tout pile");
        break;
    // if note > 10 === true
    case note > 10 : 
        console.log("note supérieure à la moyenne : cool");
        break;
    default :
        console.log("erreur");  
}

//?---------------
// ? La ternaire :

// La ternaire sert à des if else très courts :
const P_RESULTAT5 = document.getElementById('resultat5');
let quantitePatates = 5;

// * Sans la ternaire :
    // if (quantitePatates > 1) {
    // P_RESULTAT5l;textContent = `Il reste ${quantitePatates} patates.`

    // } else  { P_RESULTAT5l;textContent = `Il reste ${quantitePatates} patate.`
    // }

// * Avec la ternaire :
if (quantitePatates > 1) {P_RESULTAT5;textContent = `Il reste ${quantitePatates} patate${ (quantitePatates > 1)? 's' : ''} `;
// = SI quantite_patates > 1 , alors la chaine de caractère au bout de patate est un 's'.
}
//* On évite de faire des ternaires dans des ternaires dans des tranaires, sinon le code devient illisible !


// ? Le coalesce

const P_RESULTAT6 = document.getElementById('resultat6');
// = du conditionnel pour les valeurs null :
let trainer1 = { // = objet
    firstname : 'Aude',
    email : null,
    tel : '0000000000'
}

let trainer2 = { // = objet
    firstname : 'Gavin',
    email : 'gavin@osef.com',
    tel : null
}

P_RESULTAT6.textContent= `Le.a formateur.ice ${trainer1.firstname} a pour mail ${trainer1.email ?? '[Non renseigné]'} et pour tel ${trainer1.tel ?? '[Non renseigné]'}`;
// Ecriture : valeur-a-afficher-si-non-null ?? valeur-a-afficher-si-null
// Le coalesce permet d'afficher le contenu d'une variable si elle n'est pas nulle, SINON prendra la partie à droite des ??

// * Autre cas d'utilisation :
P_RESULTAT6.textContent = `Votre personne de contact est : ${trainer1.email ?? trainer2.email ?? 'Courage frère et bienvenue chez Actiris!'}`;
// Si on enchaine plusieurs variables pottentiellement nulles, la première non-nulle sera celle prise en compte.


//? If avec opérateurs logiques:

const INPUT_NB7 = document.getElementById('nb7');
const BTN_VALIDER7 = document.getElementById('valider7');
const P_RESULTAT7 = document.getElementById('resultat7');

BTN_VALIDER7.addEventListener('click', ()=>{
    let note = INPUT_NB7.valueAsNumber;

    // Si la note rentrée n'est ni un nombre, est < à 0 et est > à 20 -> note invalide :
    if(isNaN(note) || note < 0 || note > 20) {
        P_RESULTAT7.textContent = `Vous n'avez pas rentré de note valide.`;
    } else if(note===0) {
        P_RESULTAT7.textContent = `Vous êtes nul.`;
        
    } else if(note > 0 && note < 10) {
        P_RESULTAT7.textContent = `Vous êtes une déception pour vos parents.`;
        
    } else if(note===10) {
        P_RESULTAT7.textContent = `Médiocre.`;
        
    } else if(note > 10 && note<= 15) {
        P_RESULTAT7.textContent = `On voit que vous n'avez pas connu la guerre.`;
        
    } else if(note > 15 && note < 20) {
        P_RESULTAT7.textContent = `Soit on est le meilleur, soit on est un looser.`;
        
    } else if(note ===20) {
        P_RESULTAT7.textContent = `Vous attendez qu'on vous applaudisse ?`;        
    }
});