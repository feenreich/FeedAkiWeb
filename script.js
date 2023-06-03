// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the player's guess
function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess)) {
    document.getElementById("result").textContent = "Invalid input. Please enter a number.";
  } else if (guess < 1 || guess > 100) {
    document.getElementById("result").textContent = "Please enter a number between 1 and 100.";
  } else if (guess < targetNumber) {
    document.getElementById("result").textContent = "Too low. Guess higher!";
  } else if (guess > targetNumber) {
    document.getElementById("result").textContent = "Too high. Guess lower!";
  } else {
    document.getElementById("result").textContent = "Congratulations! You guessed the number!";
  }
}
