const button = document.querySelector('#btn');
const btnRetour = document.querySelector('#btn-retour')
const openPopup = document.querySelector(".open-btn")

const page = document.querySelector("body")



button.addEventListener("click", handleClik);

btnRetour.addEventListener("click", handleRetour);

function handleClik(event){
    event.preventDefault ();
    openPopup.style.display = "block";
    page.style.backgroundColor ="gray"


}



function handleRetour(event){
    event.preventDefault ();
    openPopup.style.display = "none";
    page.style.backgroundColor ="white"



}




