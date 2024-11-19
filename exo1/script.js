const color = ["red", "green", "yellow", "black", "gray"];

const box = document.querySelectorAll(".case");

let colorIndex = 0;

box.forEach((div) => {
    div.addEventListener("click", handleClick);
})



function handleClick(event) {
   
    if (colorIndex === color.length) {
        event.target.style.backgroundColor = "white"; 
        colorIndex = 0; 
    } else {
        event.target.style.backgroundColor = color[colorIndex];
        colorIndex++; 
    }
}