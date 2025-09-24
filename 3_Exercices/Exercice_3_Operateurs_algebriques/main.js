//Grâce à trois input, récupérer : 
//- Le prix total de la note du restau
//- Le pourcentage du pourboire
//- Le nombre de personnes qui ont mangé

//Quand on clique sur Calculer : 
//-Afficher le montant du pourboire par rapport à la note en fonction du % indiqué
//- Afficher le montant à payer par personne (note + pourboire) / nombre de personne
//- Afficher le montant total à payer (noter + pourboire)

// Quand on clique sur Réinitialiser, remet tout à 0
 
// Bonus : Arrondir les résultats toujours à 2 chiffres après la virgule (comme dans l'image)

//! étape 1 : déclarer sesvariables ;
const NOTE = document.getElementById('note');
const PCT_POURBOIRE = document.getElementById('pct_pourboire');
const NOMBRE_PERSONNES = document.getElementById('nombre_personnes');
const BTN_CALCULER = document.getElementById('btn_calculer');
const MT_POURBOIRE = document.getElementById('mt_pourboire');
const MT_PERSONNE = document.getElementById('mt_personne');
const MT_TOTAL = document.getElementById('mt_total');
const BTN_RE = document.getElementById('reinitialiser');

//! étape 2 : Ajouter l'évènement sur le bouton :

BTN_CALCULER.addEventListener('click', () => {
    //! Faire nos calculs et mettre dans la page :

    // ? D'abord, récupérer nos valeurs d'input = "les sortir de la boîte" où elles sont stockées pour les utiliser :

    //* Montant du pourboire :
    let note = NOTE.valueAsNumber; // ? = récupérer la valeur d'input
    let pct_pourboire = PCT_POURBOIRE.valueAsNumber; 
    let pourboire = note * (pct_pourboire / 100); // Sert à avoir le montant du pourboire sans le '€' qui lui sera ajouté dans MT_Pourboire.
    MT_POURBOIRE.textContent = pourboire.toFixed(2) + '€'; // Le .textContent transforme automatiquement la valeur pourboire en string même si c'est un nombre, donc pas besoin de faire un .toString avant, on peut l'écrire telle quelle.
    // ATTENTION : On avait d'abord écrit :
        // MT_POURBOIRE = note * (pct_pourboire/100) -> 2 problèmes :
        // 1) Mauvais car alors on remplaçait un élément html <p> par une valeur nombre -> ne pouvait pas fonctionner dans le HTML car on perdait le <p>.
        // 2) En faisant un .textContent après, on demandait à remettre du texte dans un élément qui n'était plus un <p>, ce qui est impossible.
    

    //* Montant par personne :
    let nombre_personnes = NOMBRE_PERSONNES.valueAsNumber; // ? = récupérer la valeur d'input
    MT_PERSONNE.textContent = (pourboire / nombre_personnes).toFixed(2) + '€';

    //* Montant total :
    MT_TOTAL.textContent =  (note + pourboire).toFixed(2) + '€';

    pourboire
});


BTN_RE.addEventListener('click', () => {
    NOTE.valueAsNumber = '';
    PCT_POURBOIRE.valueAsNumber = '';
    NOMBRE_PERSONNES.valueAsNumber = '';

    // ou document.getById(form).reset()
    // ou document.forms[0].reset()
    // ou document.forms.splitforms
    
    MT_PERSONNE.textContent = '0.00 €';
    MT_POURBOIRE.textContent = '0.00 €';
    MT_TOTAL.textContent = '0.00 €';
    
});