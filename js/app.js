//Documents Elements
// Looks for "text0". Assigns that to the variable called textField0.
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

//Internal Variables
let score = 0;

// Process (What is going to happen in what sequence?)

increaseScoreByOne();

// Controllers
function showScore(inputNumber) {
 return inputNumber * 100; // Output is a number.
}

function showStylizedScore(scoreInput) {
 return "Your score is: " + scoreInput * 100;
}

function increaseScoreByOne() {
 score++;
 updateScoreText(score);
}

// View
function updateScoreText(newText) {
 textField0.innerHTML = newText;
}
 function updateStatusText(newText) {
  textField1.innerHTML = newText;
 }
