const button = document.querySelector('#btn');
const openPopup = document.querySelector(".open-btn")
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
    
    if(!openPopup.contains(event.target)){
        event.preventDefault ();
        openPopup.style.display = "none";
        pageBody.style.backgroundColor ="white"
    }
    

}




