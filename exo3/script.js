const combine = document.querySelector('body');

combine.addEventListener("keydown", handleKeyDown);

let touche = "r";

function handleKeyDown(event){

    console.log(event.altKey);
    if(event.altKey && touche == event.key){
        
        console.log("Bonne combine")
    }else{
        console.log("mauvaise combine")
    }

}