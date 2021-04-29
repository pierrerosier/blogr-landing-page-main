//-----MODIFICATION DE L'APPARENCE DES LIENS CLIQUÉS DU MENU DROPDOWN----//

const $navbarDropdown = document.querySelectorAll('#navbarDropdown')
let navItem = null;
let presentAdress = "";
presentAdress = window.location;

//$navbarDropdown va chercher plusieurs éléments, il faut donc les parcourir
for (let i=0 ; i < $navbarDropdown.length; i++) {

    //ajout du gestionnaire d'évènement 'click'
    $navbarDropdown[i].addEventListener('click', (evt) => {

        // si navItem n'est pas l'élément auquel le gestionnaire d'evt est attaché,
        //cela signifie qu'il n'a pas la class 'active', il faut donc lui supprimer si il était précédement 'active'.
        if (navItem !== evt.currentTarget) {
            evt.currentTarget.classList.toggle('active');
        }
        //si navItem n'est pas null (il a donc déjà été visité mais n'est plus visé) et
        // qu'il n'est pas l'élément auquel le gestionnaire d'evt est attaché,
        //il faut supprimer la class 'active'.
        if (navItem !== null && navItem !== evt.currentTarget) {
            navItem.classList.remove('active');
        }
        navItem = evt.currentTarget;
    }, false);
}