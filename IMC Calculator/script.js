const btnSubimt = document.querySelector(".btn-submit");
const inputs = document.querySelectorAll(".input");
const msgDetails = document.querySelector(".details");

function calc() {
  console.log("chama calc");
  const [inputName, altura, peso] = inputs;
  let alturaValor = altura.value;
  let pesoValor = peso.value;

  if (inputName.value !== "" && alturaValor !== "" && pesoValor !== "") {
    const result = (pesoValor / (alturaValor * alturaValor)).toFixed(2);

    console.log(result);

    let classificacao = "";

    if (result < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (result < 25) {
      classificacao = "peso ideal. Parabéns!!!";
    } else if (result < 30) {
      classificacao = "levemente acima do peso.";
    } else if (result < 35) {
      classificacao = "com obesidade grau I.";
    } else if (result < 40) {
      classificacao = "com obesidade grau II.";
    } else {
      classificacao = "com obesidade grau III. Cuidado!!";
    }

    msgDetails.textContent = `${inputName.value} seu IMC é ${result} e você está ${classificacao}`;
  } else {
    alert("preencha todos os campos");
  }
}

btnSubimt.addEventListener("click", function (e) {
  e.preventDefault();
  calc();
});