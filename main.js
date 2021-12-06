let container = document.getElementById("container");
let colors = ["#a56cc1","#a6acec","#ace7ef","#cefff1","#1e6262","#2d767f","#b4f1f1","#3d6cb9","#226089","#49beb7"];
let SQUARES = 600;
let getRandomColor = () => colors[Math.floor(Math.random()*colors.length)];
let setColor = (square) => {
    let color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
let removeColor = (square) => {
    square.style.background = "#1d1d11";
    square.style.boxShadow = "0 0 2px #000";
};
for (let i = 0; i < SQUARES; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover",() => setColor(square));
    square.addEventListener("mouseout",() => removeColor(square));
    container.appendChild(square);
}