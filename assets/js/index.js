let j = "moi"
let mdp = "1"

function envoyer(){
    let nom = document.getElementById("pseudo").value;
    let mot = document.getElementById("mdp").value;

    if ( nom === j  && mot === mdp){
       
        let resultat = "Bonjour " + nom;
        alert("Bienvenue");
       
    }else
        alert("Invalide");
}