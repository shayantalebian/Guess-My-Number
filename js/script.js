"use strict";

// Craete that random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20; // Score

// Add action to check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
  } else if (guess > 20) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
  } else if (guess < 1) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess <= secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Create guide alert
function message() {
  alert("To have better exprince visit this website with your laptop ");
}
