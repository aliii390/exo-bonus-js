const combine = document.querySelector('body');

combine.addEventListener("keydown", handleKeyDown);

let touche = "a";

function handleKeyDown(){

    if(touche === combine.value){
        alert("Bonne combine")
    }else{
        alert("mauvaise combine")
    }

}