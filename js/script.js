"use strict";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
  } else if (guess > 20) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
  } else if (guess < 1) {
    document.querySelector(".message").textContent = "⛔ Not valid!";
  }
});
