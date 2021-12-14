"use strict";

//variables
const optionSelect = document.querySelector(".js-optionSelect");
const button = document.querySelector(".js-button");
const winner = document.querySelector(".js-winner");
const human = document.querySelector(".js-human");
const computer = document.querySelector(".js-computer");
const reset = document.querySelector(".js-reset");
let humanWin = 0;
let computerWin = 0;
let clickNumber = 0;
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
  clickNumber++; //aumentar el numero de jugadas
  console.log(clickNumber);
  btnReset();
  if (clickNumber === 10) {
    reset.classList.remove("collapse");
  }
  /*lanza numero random*/
  /*si es menor que 3 el movimiento es piedra: pierde tijera gana papel*/
  if (randomNumber < 3 && selectValue === "tijera") {
    console.log("la máquina cogió piedra");
    winner.innerHTML = "Has perdido :(";
    computerWin += 1;
    computer.innerHTML = `Computadora: ${computerWin}`;
  } else if (randomNumber < 3 && selectValue === "papel") {
    console.log("la máquina cogió piedra");
    winner.innerHTML = "Punto para ti :)";
    humanWin += 1;
    human.innerHTML = `Jugadora: ${humanWin}`;
  } else if (randomNumber < 3 && selectValue === "piedra") {
    console.log("la máquina cogió piedra");
    winner.innerHTML = "¡Empate!";
    humanWin += 1;
    human.innerHTML = `Jugadora: ${humanWin}`;
    computerWin += 1;
    computer.innerHTML = `Computadora: ${computerWin}`;
  } /*si es mayor o igual que 6 el movimiento es papel. pierde piedra y gana tijera*/ else if (
    randomNumber >= 6 &&
    selectValue === "piedra"
  ) {
    console.log("la máquina cogió papel");
    winner.innerHTML = "Has perdido! :(";
    computerWin += 1;
    computer.innerHTML = `Computadora: ${computerWin}`;
  } else if (randomNumber >= 6 && selectValue === "tijera") {
    console.log("la máquina cogió papel");
    winner.innerHTML = "Muy bien! punto!";
    humanWin += 1;
    human.innerHTML = `Jugadora: ${humanWin}`;
  } else if (randomNumber >= 6 && selectValue === "papel") {
    console.log("la máquina cogió papel");
    winner.innerHTML = "¡Empate!";
    humanWin += 1;
    human.innerHTML = `Jugadora: ${humanWin}`;
    computerWin += 1;
    computer.innerHTML = `Computadora: ${computerWin}`;
  } /*y sino el movimiento generado es tijera, pierde papel gana piedra*/ else if (
    randomNumber > 3 &&
    randomNumber < 6 &&
    selectValue === "papel"
  ) {
    console.log("La máquina cogió tijera");
    winner.innerHTML = "Has perdido :(";
    computerWin += 1;
    computer.innerHTML = `Computadora: ${computerWin}`;
  } else if (randomNumber > 3 && randomNumber < 6 && selectValue === "tijera") {
    console.log("la máquina cogió tijera");
    winner.innerHTML = "¡Empate!";
    humanWin += 1;
    human.innerHTML = `Jugadora: ${humanWin}`;
    computerWin += 1;
    computer.innerHTML = `Computadora: ${computerWin}`;
  } else if (randomNumber > 3 && randomNumber < 6 && selectValue === "piedra") {
    console.log("la máquina cogió tijera");
    winner.innerHTML = "¡Ganaste!";
    humanWin += 1;
    human.innerHTML = `Jugadora: ${humanWin}`;
  } else if (selectValue === "selectPreview") {
    winner.innerHTML = "Tienes que escoger una opción";
  }
}

function btnReset() {
  //   reset.classList.add("collapse");

  if (clickNumber === 10) {
    if (humanWin > computerWin) {
      winner.innerHTML = "¡Has ganado a la máquina! :)";
    } else if (computerWin > humanWin) {
      winner.innerHTML = "Has perdido contra la máquina :(";
    } else {
      winner.innerHTML = "El ordenador y tú habéis empatado.";
    }
    button.classList.add("collapse");
    reset.classList.remove("collapse");
  }
}
function handleClickReload(event) {
  button.classList.remove("collapse");
  reset.classList.add("collapse");
  event.preventDefault();
  humanWin = 0;
  computerWin = 0;
  clickNumber = 0;
  winner.innerHTML = "Vamos a jugar!";
  computer.innerHTML = `Computadora: ${computerWin}`;
  human.innerHTML = `Jugadora: ${humanWin}`;
}
//listeners
button.addEventListener("click", handlerPlay);

//buttonreset
reset.addEventListener("click", handleClickReload);
