/*
Attendre le chargement du DOM
https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded
*/
document.addEventListener('DOMContentLoaded', () => {

    /*
    Déclaration des variables
    */
        /* 
        Sélectionner toutes les balises BUTTON de la NAV
        https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
        */
        const navButtons = document.querySelectorAll('nav button');

        /*
        Sélectionner une balise du DOM
        https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
        */
        const userCardImg = document.querySelector('#userCard img');
        const computerCardImg = document.querySelector('#computerCard img');
        const userScore = document.querySelector('#userScore');
        const computerScore = document.querySelector('#computerScore');

        // Créer une collection de données
        const computerMemory = [ 'stone', 'paper', 'scissors' ];

        //creer un objet pour les scores
        
    //

    /*
    Créer une fonction pour définir les scores
    */
        const defineScore = (player, score) => {
            /* 
            Changer le contenu textuel d'une balise
            https://developer.mozilla.org/fr/docs/Web/API/Node/textContent
            */
            player === 'user' 
            ? userScore.textContent =  score 
            : computerScore.textContent = score;
        };

        defineScore('user', 0);
        defineScore('computer', 0);
    //

    /*
    Créer une fonction pour définir le choix de l'ordinateur
    */
        const defineComputerChoice = () => {
            /*
            Définir un entier aléatoirement entrer 0 et X
            https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
            */
            let cptChoice = Math.floor(Math.random() * Math.floor(computerMemory.length));
            console.log(computerMemory[cptChoice]);

            // Définit le choix de l'ordinateur
            changeCardImage('computer', computerMemory[cptChoice]);

            
        };
    //

    /*
    Création d'un fonction pour modifier les images des cartes
    */
        const changeCardImage = (player, choice) => {
            /*
            Evaluer le choix
            https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
            Pour changer la valeur de l'attribut SRC
            https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
            */
            switch(choice){
                case 'stone':
                    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_conditionnel
                    player === 'user'
                    ? userCardImg.setAttribute('src', './img/noun_rock_5846.png')
                    : computerCardImg.setAttribute('src', './img/noun_rock_5846.png');
                break;

                case 'paper':
                    player === 'user'
                    ? userCardImg.setAttribute('src', './img/noun_Paper_1091290.png')
                    : computerCardImg.setAttribute('src', './img/noun_Paper_1091290.png');
                break;

                default:
                    player === 'user'
                    ? userCardImg.setAttribute('src', './img/noun_Scissors_2826183.png')
                    : computerCardImg.setAttribute('src', './img/noun_Scissors_2826183.png');
                break;
            };
        };
    //

    /*
    Capter le clic sur les balise BUTTON de la NAV
    */
        // Faire une boucle sur navButtons
        for( let button of navButtons ){
            // Ajouter l'écouteur d'événement
            button.addEventListener('click', () => {
                /* 
                Récupérer la valeur de l'attribut button-data
                https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute
                */
               let userChoice = button.getAttribute('button-data');
                console.log(userChoice);

                // Définit le choix de l'utilisateur
                changeCardImage('user', userChoice);
                defineComputerChoice();
            });
        };
    //
});
//