const buttons = document.querySelectorAll(".sinal");
const semaforo = document.querySelector("#semaforo");

function RedYellowGreen () {
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
          console.log(button);
      
          if (button.classList.contains("red")) {
            semaforo.setAttribute("src", "imgs/vermelho.png");
          } else if (button.classList.contains("yellow")) {
            semaforo.setAttribute("src", "imgs/amarelo.png");
          } else if (button.classList.contains("green")) {
            semaforo.setAttribute("src", "imgs/verde.png");
          }
        });
      });
}
RedYellowGreen()

let images = ["imgs/vermelho.png", "imgs/amarelo.png", "imgs/verde.png"];
let index = 0;

function change() {
  semaforo.src = images[index];
  index > 1 ? (index = 0) : index++;
}
let auto = document.querySelector(".auto");

auto.addEventListener("click", () => {
  let interval = setInterval(change, 500);

  document.querySelector(".red").addEventListener("click", () => {});
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      clearInterval(interval);
    });
  });
});
