"use strict";

//variables

const optionSelect = document.querySelector(".js-optionSelect");
const button = document.querySelector(".js-button");
const winner = document.querySelector(".js-winner");
//funciones
function getRandomNumber() {
  return Math.ceil(Math.random() * 10);
}

//handler
function handlerPlay() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  /*cuando se seleccione una opción, se guarda en el botón */
  const selectValue = optionSelect.value;
  console.log(selectValue);
  /*lanza numero random*/
  /*si es menor que 3 el movimiento es piedra: pierde tijera gana papel*/
  if (randomNumber < 3 && selectValue === "tijera") {
    console.log("la máquina cogió piedra");
    winner.innerHTML = "Has perdido :(";
  } else if (randomNumber < 3 && selectValue === "papel") {
    console.log("la máquina cogió piedra");
    winner.innerHTML = "Punto para ti :)";
  } /*si es mayor o igual que 6 el movimiento es papel. pierde piedra y gana tijera*/ else if (
    randomNumber >= 6 &&
    selectValue === "piedra"
  ) {
    console.log("la máquina cogió papel");
    winner.innerHTML = "Has perdido! :(";
  } else if (randomNumber >= 6 && selectValue === "tijera") {
    console.log("la máquina cogió papel");
    winner.innerHTML = "Muy bien! punto!";
  } /*y sino el movimiento generado es tijera, pierde papel gana piedra*/ else if (
    randomNumber > 3 &&
    randomNumber < 6 &&
    selectValue === "papel"
  ) {
    console.log("la máquina cogió tijera");
    winner.innerHTML = "Has perdido :(";
  } else {
    winner.innerHTML = "Ganaste!";
  }
}
button.addEventListener("click", handlerPlay);

/*piedra gana a tijera */
/*tijera gana a papel*/
/*papel gana a piedra*/
