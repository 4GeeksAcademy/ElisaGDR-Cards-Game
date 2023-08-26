/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.querySelector("#card-number");
  let randomNumber = Math.floor(Math.random() * numbers.length);
  card.innerHTML = numbers[randomNumber];

  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  let randomSuit = suits[randomSuitIndex];

  let cardSuits = document.querySelectorAll(".icono");
  cardSuits.forEach(function(cardSuit) {
    cardSuit.innerHTML = randomSuit;
    if (cardSuit.classList.contains("down")) {
      cardSuit.style.transform = "rotate(180deg)";
    }
    if (randomSuit === "♦" || randomSuit === "♥") {
      cardSuit.style.color = "red";
    } else {
      cardSuit.style.color = "black";
    }
  });

  let button = document.querySelector(".btn");
  button.addEventListener("click", function() {
    location.reload();
  });
};

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let suits = ["♦", "♥", "♠", "♣"];
