let currentGuess = ["", "", "", ""];

function generateUniqueNumber() {
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let num = "";
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * digits.length);
    num += digits[index];
    digits.splice(index, 1);
  }
  return num.split("");
}

let secretNumber = generateUniqueNumber();
let attempt = 0;

function updateDisplay() {
  // Update the display for the current guess
  for (let i = 0; i < 4; i++) {
    document.getElementById(`A${i + 1}`).innerText = currentGuess[i];
  }
}

function input(digit) {
  // Input a digit into the current guess
  let filledDigits = currentGuess.filter((x) => x).length;
  if (filledDigits < 4) {
    currentGuess[filledDigits] = digit;
    updateDisplay();
  }
}

function checkGuess() {
  // Execute the guess
  let guess = currentGuess.join("");
  if (guess.length < 4) {
    alert("Incomplete number, please enter 4 digits.");
    return;
  }

  let feedback = [];
  for (let i = 0; i < 4; i++) {
    if (guess[i] === secretNumber[i]) {
      feedback.push("green"); // Correct digit and position
    } else if (secretNumber.includes(guess[i])) {
      feedback.push("yellow"); // Correct digit, wrong position
    } else {
      feedback.push("gray"); // Incorrect digit
    }
  }

  // Update feedback colors
  for (let i = 0; i < 4; i++) {
    document.getElementById(`A${i + 1}`).style.backgroundColor = feedback[i];
  }

  if (feedback.every((color) => color === "green")) {
    alert("Congratulations! You found the secret number. Try again !");
    location.reload();
  } else {
    alert("Try again!");
    currentGuess = ["", "", "", ""];
    attempt++;
    if (attempt >= 6) {
      alert("Game Over! The number was " + secretNumber);
    }
  }
}
