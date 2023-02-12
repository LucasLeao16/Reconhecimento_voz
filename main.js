"use strict";
const menorvalor = 1;
const maiorvalor = 1000;
const sorteado = sorteador();
const valorBox = document.querySelector(".box");
const RespostaEl = document.querySelector("#resposta");
const menorElS = document.querySelector("#menor-numero");
menorElS.textContent = menorvalor;
const maiorEl = document.querySelector("#maior-numero");
maiorEl.textContent = maiorvalor;
console.log(sorteado);
function sorteador() {
  return parseInt(Math.random() * maiorvalor + 1);
}
function validador(tentativa) {
  const numero = +tentativa;
  if (Number.isNaN(numero)) {
    RespostaEl.textContent = "Valor Invalido";
  } else if (numero < menorvalor || numero > maiorvalor) {
    RespostaEl.textContent = "O numero esta fora do escopo";
  } else if (numero === sorteado) {
    document.body.innerHTML = `
     <h1>Você Acertou 🎉🎉🎉🎉</h1>
     <h1>O numero secreto era ${sorteado}</h1>
     <button id = "jogar-novamente" class ="btn-jogar"> Jogar Novamente</button>
    `;
  } else if (numero > sorteado) {
    RespostaEl.textContent = "O numero é menor 📉";
  } else if (numero < sorteado) {
    RespostaEl.textContent = "O numero é maior 📈";
  }
}
document.body.addEventListener("click", function (e) {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
