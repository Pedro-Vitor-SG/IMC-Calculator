const ligar = document.querySelector("#ligar");
const desligar = document.querySelector("#desligar");
const lampada = document.querySelector("#lampada");

ligar.addEventListener("click", () => {
  console.log("ligada");
  lampada.src = "imgs/ligada.jpg";
});

desligar.addEventListener("click", () => {
  console.log("desligada");
  lampada.src = "imgs/desligada.jpg";
});

lampada.addEventListener("dblclick", () => {
  const novaLampada = document.querySelector("#nova-lampada");
  console.log("click duplo");
  lampada.classList.add("lampada-quebrada");

  if (lampada.classList.contains("lampada-quebrada")) {
    ligar.style.display = "none";
    desligar.style.display = "none";
    novaLampada.style.display = "block";

    novaLampada.addEventListener("click", () => {
      lampada.src = "imgs/desligada.jpg";
      ligar.style.display = "block";
      desligar.style.display = "block";
      novaLampada.style.display = "none";
    });
  }
  lampada.src = "imgs/quebrada.jpg";
});
