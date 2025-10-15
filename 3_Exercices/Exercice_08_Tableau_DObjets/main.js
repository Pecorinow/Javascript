// Créer un tableau contenant des objets représentant un produit
 
// Un produit est caractérisé par :
// - un nom (string)
// - une image (string)
// - une description (string)
// - un prix (number)
// - une valeur pour savoir s'il est en promo (booléen)
// - un prix s'il est en promo (number)
 
// ex avec des pizzas :
// nom : "Pizza 4 fromages"
// image : "https://lienVersMaPizza4From.jpg"
// description : "Pizza base tomate avec mozzarella, parmesan, gorgonzolla et ricotta"
// prix : 10.50€
// en promo : Non
// prix si promo : 9.50€
 
// À l'aide d'une boucle, affichez vos produits dans la page avec le design de votre choix
// Si le produit est en promo, barrez le prix initial (et si vous le souhaitez rajoutez une pastille promo)
 
// (Au début, affichez juste les valeurs en console, quand ça marche, essayez d'afficher le nom de vos produits dans la page, quand ça marche, on tente de construire du HTML :))

//* Créer un tableau :
const tabBarbies = [
    {
        image : './barbie.png',
        name : 'Barbie',
        description : 'Barbie est une mannequin immortelle qui a 20 ans depuis 1959. Barbie est une vampire, mais en plus rose, et qui n\'a pas peur du soleil.',
        prix : `${29.99} €`,
        promo : false,
        prixPromo : `${24.99} €`
    },
    { 
        image : './ken.png',
        name : 'Ken',
        description : 'Ken est le seul homme qui existe dans le monde de Barbie, et tout le monde trouve ça normal.',
        prix : `${29.99} €`,
        promo : true,
        prixPromo : `${24.99} €`
    },
    {
        image : './skipper.png',
        name : 'Skipper',
        description : 'Skipper est la petite soeur de Barbie en pleine crise d\'ado depuis 1964. Elle écoute Billie Eilish, s\'est teint une mèche en mauve et râle parce qu\'elle est condamnée à rester dans la puberté pour l\'éternité.',
        prix : `${24.99} €`,
        promo : true,
        prixPromo : `${19.99} €`
    },
    {
        image : './chelsea.png',
        name : 'Chelsea',
        description : 'Chelsea est la plus jeune soeur de Barbie, elle a 6 ans depuis 1995. Imaginez devoir vous occuper d\'une enfant de 6 ans pour l\'éternité, c\'est l\'enfer dans lequel vit Barbie',
        prix : `${20.99} €`,
        promo : true,
        prixPromo : `${15.99} €`
    },
];

//* Créer une variable TBODY_BARBIES :

const TBODY_BARBIES = document.getElementById('barbies');

//* Boucle :
tabBarbies.forEach((puppet, index) => {
    // Créer une ligne <tr>
    const TR = document.createElement('tr');

    // Créer une première <td> avec dedans l'image <img>
    const TD_IMAGE = document.createElement('td'); // 1) Créer une balise <td>
    const IMG = document.createElement('img'); // 2) Créer une balise <img>
    IMG.src = puppet.image; // 3) attribuer une soucre à l'image
    IMG.alt = "avatar de " + puppet.name; // 4) attribuer un alt à l'image
    TD_IMAGE.append(IMG); // 5) ajout de la balise <img> dans la <td>

    // Créer une case <td> avec le nom
    const TD_NAME = document.createElement('td');
    TD_NAME.textContent = puppet.name;

    // Créer une case <t> avec la description 
    const TD_DESCR = document.createElement('td');
    TD_DESCR.textContent = puppet.description;

    // Créer une case <td> avec le prix
    const TD_PRIX = document.createElement('td');
    TD_PRIX.textContent = puppet.prix;
    
    // Créer une case <td> qui affiche si la promo est vraie ou fausse
    const TD_PROMO = document.createElement('td');
    const ICON_PROMO = document.createElement('i');
    ICON_PROMO.classList.add('fa-regular', 'fa-percent');
    TD_PROMO.append(ICON_PROMO);

    // Créer une case <td> avec prix promo 
    const TD_PRIX_PROMO = document.createElement('td');
    TD_PRIX_PROMO.textContent = puppet.prixPromo;

    if(!puppet.promo) {
        TD_PRIX.classList.add('prixBarre');
        TD_PROMO.classList.add('hidePromo');
        TD_PRIX_PROMO.classList.add('hidePrixPromo')
    };

    //* À ce stade rien ne s'affiche encore, pour ça il faut :
    // Ajouter toutes les <td> à la <tr>
    TR.append(TD_IMAGE, TD_NAME, TD_DESCR, TD_PRIX, TD_PROMO, TD_PRIX_PROMO);

    // Ajouter la <tr> dans le <tbody>
    TBODY_BARBIES.append(TR);
});