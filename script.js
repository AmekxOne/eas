//target the container segment and set the
const boardContainer = document.querySelector(".boardContainer");
boardContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
boardContainer.style.gridTemplateRows = "repeat(16, 1fr)";

//create 16x16 grid
for(let i=0; i<256; i++){  
    let boardElement = document.createElement("div");
    boardElement.className = "boardElement";
    boardContainer.appendChild(boardElement);
}



let byClass = document.getElementsByClassName("boardElement");
let rainbowColors = [ "orange", "yellow", "green", "blue", "navy", "purple", "red"];

for(let i=0; i<byClass.length; i++){    
    document.querySelectorAll(".boardElement")[i].addEventListener("mouseenter", function(){
        rainbowColors.push(rainbowColors.shift());
        this.style.background = rainbowColors[0];
    });
}

let resize = document.getElementById("resize");
resize.addEventListener("click", function(){
    let resizeAnswer = prompt("How many squares per side you want? Max is 100.");
    
    if(resizeAnswer <= 100){
        boardContainer.style.gridTemplateColumns = "repeat("+resizeAnswer+", 1fr)";
        boardContainer.style.gridTemplateRows = "repeat("+resizeAnswer+", 1fr)";
    }
});