//! Les objets :
//!-------------

//! Déclarer un objet :
const trainer1 = {
    //nomPropriété : valeur de cette propriété
    lastname : 'Beurive',
    firstname : 'Aude',
    birthDate : new Date('1989-10-16'),
    category : 'Dev',
    hobbies :['dessin', 'cuisine', 'collection d\'ongles'], // = tableau
    adress : { // = objet
        number : 2,
        street : 'Rue du Pain',
        city : 'Bikini Bottom'
    },
    pets : [ // = propriété qui contient un tableau d'objets
        {
            name : 'Catherine La Grande',
            type : 'Chien'
        },  
        {
            name : '',
            type : 'Chat'
        }
    ]
}
// Objet = variable qui contient plusieurs 'sous-valeurs' entre {}, DE TYPES DIFFERENTS, y compris des TABLEAUX ou d'AUTRES OBJETS !
// => Peut contenir :
// - une propriété tableau
// - une propriété objet
// - une propriété qui contient un tableau d'objets
// TODO ? Méthode = fonction pré-existante, qui va exécuter une certaine action (ex: )
// Propriété = sous-variable contenant une info d'un tableau ou d'un objet.
// Valeur = ce que contient la propriété

//!Accéder à une propriété :
console.log(trainer1);
console.log(trainer1.firstname);
console.log(trainer1.hobbies[0]); // = accéder à une propriété dans le tableau hobbies, lui-même propriété de l'objet trainer1)
console.log( trainer1.pets[0].name); // = accéder à la propriété name d'un objet, lui-même à l'index 0 du tableau pets, lui-même propriété du tableau trainer1, lui-même propriété de ma future dépression saisonnière je le sens

//! Afficher un objet dans la page hrml :

// ATTENTION : si on essaie d'afficher tout un objet dans une balise HTML, on obtiendra juste 'Object obkect', car on ne peut y afficher que du texte :
const DIV_TRAINER1_V1 = document.getElementById('trainer1-v1');

DIV_TRAINER1_V1.textContent = trainer1; // = afficher tout le contenu d'un objet
// FLOP => Ce n'est pas du texte => Ne peut pas l'afficher !

// ? V2 :
//?------
const DIV_TRAINER1_V2 = document.getElementById('trainer1-v2');

DIV_TRAINER1_V2.innerHTML = `
    Nom : ${trainer1.lastname} <br>
    Prenom : ${trainer1.firstname} <br>
    Date de naissance : ${trainer1.birthDate.toLocaleDateString('fr')} <br>
    Adresse : ${trainer1.adress.number} ${trainer1.adress.street} ${trainer1.adress.city}
`;
// .toLocaleDateString('fr') = formate la date dans la langue entre (), ici français.
// Adresse : c'est un objet, on ne peut donc pas l'afficher tel quel, il faut aller chercher chaque propriété séparément

// ? V3 :
//?------
const DIV_TRAINER1_V3 = document.getElementById('trainer1-v3');

//* Version nulle 💩 :
DIV_TRAINER1_V3.innerHTML = `
    <p> <span class="desc"> Nom :</span> <span> ${trainer1.lastname} </span> </p>
    <p> <span class="desc"> Prénom :</span> <span> ${trainer1.firstname} </span> </p>
    <p> <span class="desc"> Date de naissance :</span> <span> ${trainer1.birthDate.toLocaleDateString('fr')} </span> </p>
`;

// Nul car pas très sécure, si on a mal écrit son HTML ça s'affiche n'importe comment
// TODO rien capté mais c'est sûrement vrai


//* Version waw 🌸 : Pl
// Plus long mais plus secure, car utilise .textContent et non .innerHTML !

// Création du paragraphe qui affichera le Nom :
const P_LASTNAME = document.createElement('p');
// Ici, crée le paragraphe <p> qui contiendra <span class="desc"> Nom </span>

// Création du span contenu dans <p> pour afficher Nom :
const SPAN_LASTNAME_DESC = document.createElement('span'); // 
SPAN_LASTNAME_DESC.textContent = 'Nom : ';
SPAN_LASTNAME_DESC.classList.add ('desc');

// Création du 2e span pour mettre la valeur contenue dans trainer1 :
const SPAN_LASTNAME = document.createElement('span');
SPAN_LASTNAME.textContent = trainer1.lastname;
// là ils existent, mais ne sont pas affichés

// => Pour les afficher : Ajout des 2 span dans le paragraphe du nom :
P_LASTNAME.append(SPAN_LASTNAME_DESC, SPAN_LASTNAME); // l'ordre dans les () = l'ordre d'affichage dans la page.

// Ajout du paragraphe Nom dans la div :
DIV_TRAINER1_V3.append(P_LASTNAME);
// TODO il faudrait faire la même pour le reste mais flemme

//! Exemples plus concrets :
//!-------------------------

const contacts = [
    {
        lastname : 'Squarepants',
        firstname : 'Sponge Bob',
        email : 'amazingsponge@krabbypatty.com',
        avatar : './bob.png',
        favorite : true
    },
    {
        lastname : 'Starfish',
        firstname : 'Partick',
        email : 'jygf=:;vlk2545@rock.com',
        avatar : './patrick.png',
        favorite : false
    },
    {
        lastname : 'Tentacles',
        firstname : 'Squidward',
        email : 'hateful_and_proud@clarinette.com',
        avatar : './squidward.png',
        favorite : false
    },
]

const TBODY_CONTACTS = document.getElementById('contacts');

contacts.forEach((contact, index) => { // .forEach(valeur = contact, index = index)
// -> la valeur contact (sans s) vient juste d'être créée par le forEach (pas besoin de faire un let ou un const).
    //* Ajouter un contact :
    //? Créer une ligne <tr>
    const TR = document.createElement('tr'); // = crée une variable appelée TR qui correspond à l'élément html nouvellement créé <tr>.

    //? Créer une première <td> avec dedans l'image <img>
    const TD_AVATAR = document.createElement('td');
    const IMG_AVATAR = document.createElement('img');
    IMG_AVATAR.src = contact.avatar; // avatar : voir propriété avatar dans le tableau
    IMG_AVATAR.alt = "avatar de " + contact.firstname;
    TD_AVATAR.append(IMG_AVATAR); // ajout de l'image dans la <td>

    //? Créer une ligne <td> avec le nom
    const TD_LASTNAME =document.createElement('td');
    TD_LASTNAME.textContent = contact.lastname;

    //? Créer une ligne <td> avec le prénom
    const TD_FIRSTNAME =document.createElement('td');
    TD_FIRSTNAME.textContent = contact.firstname;

    //? Créer une ligne <td> avec l(email)
    const TD_EMAIL =document.createElement('td');
    TD_EMAIL.textContent = contact.email;

    //? Créer une ligne <td> avec un truc pour savoir si on a un contact fav ou pas :
    const TD_FAVORITE = document.createElement('td'); 
    const ICON = document.createElement('i'); // récupéré sur Fontawesome
    ICON.classList.add('fa-solid', 'fa-heart'); // 
    if(contact.favorite){ // = si la propriété favorite de l'objet contact est TRUE, alors...
        ICON.classList.add('favorite'); // ... ajouter la classe CSS favorite.
    }
    TD_FAVORITE.append(ICON); // = ajouter l'icone coeur à la <td> favorite

    //* À ce stade rien ne s'affiche encore, pour ça il faut :
    //? Ajouter toutes les <td> à la <tr>
    TR.append(TD_AVATAR, TD_LASTNAME, TD_FIRSTNAME, TD_EMAIL, TD_FAVORITE);

    //? Ajouter la <tr> dans le <tbody>
    TBODY_.append(TR);
}) 


