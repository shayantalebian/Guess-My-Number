"use strict";

// Craete that random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

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
    document.querySelector(".message").textContent = "📈 Too high!";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too Low!";
  }
});
