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
let moves = 0;
//funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//generar la jugada aleatoria: ordenador
function generarJugadaAleatoria() {
  let moveComputer = "";
  let number = getRandomNumber(9);
  if (number <= 3) {
    moveComputer = "piedra";
  } else if (number <= 6) {
    moveComputer = "papel";
  } else {
    moveComputer = "tijera";
  }
  return moveComputer;
}
//obtener la jugada de la usuaria
function obtenerJugadaUsuaria() {
  return optionSelect.value;
}
//comprarar jugadas y ver quien gana
function playGame() {
  let moveComputer = generarJugadaAleatoria();
  let movePlayer = obtenerJugadaUsuaria();
  console.log(`jugada computadora ${moveComputer}`);
  console.log(`jugada usuaria ${movePlayer}`);
  moves++; //aumentar el numero de jugadas
  console.log(moves);
  if (moveComputer === movePlayer) {
    winner.innerHTML = "Empate!";
  } else if (movePlayer === "piedra") {
    if (moveComputer === "papel") {
      winner.innerHTML = "Perdiste :(";
      computerWin++;
    } else if (moveComputer === "tijera") {
      winner.innerHTML = "Has ganado! :)";
      humanWin++;
    }
  } else if (movePlayer === "tijera") {
    if (moveComputer === "piedra") {
      winner.innerHTML = "Perdiste :(";
      computerWin++;
    } else if (moveComputer === "papel") {
      winner.innerHTML = "Has ganado! :)";
      humanWin++;
    }
  } else if (movePlayer === "papel") {
    if (moveComputer === "tijera") {
      winner.innerHTML = "Perdiste :(";
      computerWin++;
    } else if (moveComputer === "piedra") {
      winner.innerHTML = "Has ganado! :)";
      humanWin++;
    }
  }
  computer.innerHTML = "Ordenador: " + computerWin;
  human.innerHTML = "Jugador:  " + humanWin;
}
//mostrar resultados: texto y puntuación
function gameOver() {
  if (moves === 10) {
    if (humanWin > computerWin) {
      winner.innerHTML = "Has ganado el juego";
    } else if (humanWin < computerWin) {
      winner.innerHTML = "Has perdido el juego";
    } else {
      winner.innerHTML = "Empate";
    }
    button.classList.add("hidden");
    reset.classList.remove("hidden");
  }
}
//handler
function handlerPlay(event) {
  event.preventDefault();
  playGame();
  gameOver();
}

function handleClickReload(event) {
  event.preventDefault();
  button.classList.remove("collapse");
  reset.classList.add("collapse");
  event.preventDefault();
  humanWin = 0;
  computerWin = 0;
  moves = 0;
  winner.innerHTML = "Vamos a jugar!";
  computer.innerHTML = "Computadora:" + computerWin;
  human.innerHTML = "Jugadora:" + humanWin;
}

//listeners
button.addEventListener("click", handlerPlay);
reset.addEventListener("click", handleClickReload);
