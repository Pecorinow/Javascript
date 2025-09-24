console.log(42); // = nombre

console.log('coucou'); // = ch de caractère

console.log('42'); // aussi ch de caract

console.log('J\'ai faim');

console.error('Oups');

console.warn('Attention problème');

console.alert('hello alerte'); // = Message d'alerte ou remarque



// *Pour demander et récupérer  une info :
// Comme on récupère une info, on crée une variable pour pouvoir la récup plus tard :
let prenom = prompt('Comment vous appelez-vous ?'); //let = déclare la variable, prenom = nom de la variable, prompt = valeur de la variable (ici, le prénom que je vais entrer).
// * Prompt sert à récupérer une valeur !
// Là, une fenêtre s'ouvre où je peux rentre mon prénom, qui sera donc enregistré comme valeur pour la variable prenom.


// *Pour demander confirmation :
// let confirmation = confirm('Vous vous appelez bien ' + prenom + ' ?');     = CONCATENATION de chaines de caract et de la variable prenom.

// Sinon, manière plus simple de l'écrire :
let confirmation = confirm(`Vous vous appelez bien ${prenom} ?`); // les deux petits signes = 2x la touche d'accent grave (alt gr + µ), PAS les apostrophes ! 
//  
