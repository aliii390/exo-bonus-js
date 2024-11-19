const button = document.querySelector('#btn');
const btnRetour = document.querySelector('#btn-retour')
const openPopup = document.querySelector(".open-btn")
// const test = document.getElementById("test");
const pageBody = document.querySelector("body")



button.addEventListener("click", handleClik);

pageBody.addEventListener("click", handleRetour);

function handleClik(event){
    event.preventDefault ();
    openPopup.style.display = "block";
    pageBody.style.backgroundColor ="gray"
    event.stopPropagation()


}


function handleRetour(event){
    
    if(event.target  != openPopup){
        event.preventDefault ();
        openPopup.style.display = "none";
        pageBody.style.backgroundColor ="white"
    }
    

}




