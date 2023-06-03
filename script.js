let questions = []; // Array to store the questions
let score = 0; // Variable to track the score
let rounds = 0; // Variable to track the number of rounds
let answer = 0;

// Function to read a file and parse questions and answers
function fetchQuestions() {
  fetch("problem.txt/")
  .then((res) => res.text())
  .then((text) => {
    const lines = text.split('\n');
    lines.forEach((line) => {
      const parts = line.trim().split(' ');
      const question = parts[0].trim();
      const answer = parseInt(parts[1]);

      console.log(line)
      if (question && !isNaN(answer)) {
        questions.push({ question, answer });
      }
    });
   })
  .catch((e) => console.error(e));
}

// Function to randomly select and display a question
function displayQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const questionElement = document.getElementById("question");

  questionElement.textContent = randomIndex + 38;
  //questions[randomIndex][0];
  //document.getElementById("title").textContent = '38';


  // Remove the answered question from the array
  // questions.splice(randomIndex, 1);
  answer = parseInt(questions[randomIndex][1]);
}

// Function to handle the user's answer
function answerQuestion(button) {
  const answer = parseInt(button.getAttribute("data-answer"));

  if (answer === 1 && button.id === "yesButton") {
    score += 10;
  } else if (answer === 0 && button.id === "noButton") {
    score += 10;
  }

  rounds++;

  if (rounds < 10) {
    displayQuestion();
  } else {
    // Display the final score
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Final Score: ${score}`;

    // Disable the buttons after 10 rounds
    document.getElementById("yesButton").disabled = true;
    document.getElementById("noButton").disabled = true;
  }
}

// Fetch the questions when the page loads
window.onload = fetchQuestions();
