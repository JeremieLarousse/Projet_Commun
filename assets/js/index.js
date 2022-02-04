let j = "moi"
let motdp = "1"

function envoyer(){
    let nom = document.getElementById("pseudo").value;
    let mot = document.getElementById("mdp").value;

    if ( nom === j  && mot === motdp){
       
        let resultat = "Bonjour " + nom;
        alert("Bienvenue");
        window.location = "./assets/pages/page1.html"
       
    }
    else{
        alert("Invalide"); 
    }   
}

