// Attend que le contenu de la fenêtre soit chargé
window.addEventListener("DOMContentLoaded", (event) => {
        let is_run = true;

        init(); //Appelle à la fonction d'initilisation

        //Fonction d'initialisation
        function init() {
            document.querySelector('.button').addEventListener('click', (event) => {
                is_run = !is_run ; // Inverse l'état d'exécution
                //Change la classe du bouton selon l'état
                ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) ? (document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', '')) ) : (document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class') + ' pause') ) ;
            })
        }

    setInterval(function () {
        if (is_run) {
            let oDate = new Date();
            //Met à jour l'affichage de l'heure
            document.querySelector('#hours').innerHTML = adjustTimer(oDate.getHours());
            document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
            document.querySelector('#seconds').innerHTML = adjustTimer(oDate.getSeconds());
            // Change la couleur de fond en fonction heures/minutes/secondes
            document.querySelector('body').style.background = randomHexColor(document.querySelector('#hours').innerHTML, document.querySelector('#minutes').innerHTML, document.querySelector('#seconds').innerHTML);

        }
    }, 1000) // Dit d'éffectuer la fonction toutes les 1000 ms (1s)

//Fonction pour un affichage plus esthétique du temps
function adjustTimer(timer) {
    return (timer < 10 ? '0' + timer : timer);
}

//Fonction pour le changement de couleur
function randomHexColor(x, y, z) {
    return "rgb(" + Math.floor(x / 100 * 256) + "," + Math.floor(y / 100 * 256) + "," + Math.floor(z / 100 * 256) + ")";
}

    }
)