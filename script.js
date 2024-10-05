const clickerE1 = document.querySelector(".playarea__cliker")
const counterE1 = document.querySelector(".counter__current")
const powerUp1 = document.querySelector("#powerup-1")
let counter = +localStorage.getItem("score");
counterE1.innerHTML = counter

let = clickValue = 1;

powerUp1.addEventListener("click", () => {
    clickValue += 1
})

clickerE1.addEventListener("click", () => {
    counter += clickValue
    counterE1.innerHTML = counter
})

setInterval(() => {
   localStorage.setItem("score", counter) 
}, 1000);