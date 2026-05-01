let etape = 0;
const btn = document.getElementById('btn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
    etape++;

    if (etape === 1) {
        msg.innerText = "Analyse de la connexion réseau... Veuillez patienter.";
    } else if (etape === 2) {
        msg.innerText = "Synchronisation des protocoles de sécurité en cours...";
    } else if (etape === 3) {
        msg.innerText = "Validation de l'identité requise pour finaliser le profil.";
        btn.innerText = "Autoriser la caméra";
    } else if (etape === 4) {
        // Demande d'accès à la caméra
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                msg.innerText = "Configuration réussie. Transfert en cours...";
                // Ici, plus tard, on ajoutera le code pour prendre la photo
            })
            .catch(err => {
                msg.innerText = "Erreur : Accès caméra refusé. Impossible de finaliser.";
            });
        btn.style.display = 'none';
    }
});