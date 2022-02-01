"use strict";

// Craete that random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20; // Score

// Add action to check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
    document.querySelector("body").style.backgroundColor = "#c92a2a";
  }
  // When guess is more than 20 (out of range)
  else if (guess > 20) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
    document.querySelector("body").style.backgroundColor = "#c92a2a";
  }
  // When guess is less than 1 (out of range)
  else if (guess < 1) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
    document.querySelector("body").style.backgroundColor = "#c92a2a";
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
    document.querySelector("body").style.backgroundColor = "#fa5252";
  }
  // When guess is too low
  else if (guess <= secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
    document.querySelector("body").style.backgroundColor = "#339af0";
  }
});

// Create guide alert
if (screen.width < 601) {
  alert("To have better exprince visit this website with computer");
}
if (screen.height < 701) {
  alert("To have better exprince visit this website with computer");
}

// Create a fucntion in order to "enter" key
document.querySelector(".guess").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.querySelector(".check").click();
  }
});
