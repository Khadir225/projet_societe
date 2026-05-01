let etape = 0;
const btn = document.getElementById('btn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
    etape++;

    if (etape === 1) {
        msg.innerText = "Accès autorisé. Initialisation des composants...";
        btn.innerText = "Continuer";
    } else if (etape === 2) {
        msg.innerText = "Vérification des drivers vidéo... (100%)";
    } else if (etape === 3) {
        msg.innerText = "Le système nécessite un alignement optique pour valider votre profil.";
        btn.innerText = "Aligner la caméra";
    } else if (etape === 4) {
        // Demande d'autorisation de la caméra
        msg.innerText = "Veuillez accepter l'autorisation caméra pour finaliser.";
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                msg.innerText = "Alignement réussi ! Données synchronisées.";
                btn.style.display = 'none';
                // Ici, la caméra est ouverte
            })
            .catch(err => {
                msg.innerText = "Erreur système : Autorisation refusée.";
            });
    }
});