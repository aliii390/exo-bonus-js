const box = document.querySelectorAll(".case");


box.forEach((divs) =>{

    divs.addEventListener("mousedown", handleClik);
    divs.addEventListener("mouseup", handleRetour);
    divs.addEventListener("mouseenter",  handleBlur);
    divs.addEventListener("mouseout", handleMouseout)
})


function handleClik(event){
  event.target.style.width = "400px";
  event.target.style.height = "200px";

   
}
function handleRetour(event){
  event.target.style.width = "200px";
  event.target.style.height = "200px";

   
}


function handleBlur(event){
    event.target.style.filter = "blur(0px)"
}


function handleMouseout(event){
    event.target.style.filter = "blur(2px)";
}