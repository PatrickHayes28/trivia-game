// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!

// the start game button will have to load the first question after i fetch the data from jservice api
//I want the questions and answers in an array and remove them from the array after they are used

function fetch("https://jservice.io/api/category"){
  method: "GET";
}
 .then(response => response.json())
 .then(data)

// shows the first question 
function startGame() {

}

addEventListener("click", event);
//the submit button should submit the answer
//then answer should be checked if it's correct and then display a message if they are correct,
function checkAnswer(){
  let isCorrect = answer === apiAnswer;
function submitButton() {
  if (isCorrect === true) {
    return;
  } else {
    return newGame();
  }
}
}


addEventListener("click", event);
//then award the point and the game continues
function updateScore() {}

//in the event of a wrong answer the game should end and start new game button should start the game over
 //and reset the score to 0
function newGame() {
 
}

addEventListener("click", event);

//DIRECTIONS:MINIMUM VIABLE PRODUCTUse fetch to pull questions from the jservice api, Present a single question to the userAllow the user to respond to the questionDetermine if the user's answer was correct  awards one (1) point and continues the game An incorrect answer resets the game and resets the score to zero (0)Keep track of and display a user's score.

//my psudo code I want to use buttons to advance through the game. i want to put the questions in an array and use a method for removing used questions from the game so i have no repeats. I want the "correct" message to appear in the middle between the question and answer boxes and i want the user's score to appear above the answer box.

//stretch goals are extra goals that are not required
//1. I'd like the page to look like jeopardy (blue background and white text)

//2. I'd like to display the user's name above the answer box so i need a way to ask for their name and then display their name onto the page

// 3. I want the "correct message" to appear in green and if i have time add a game over message in red

//4. i want to add a hover effect on the buttons that is a message instructing the user on what they do

//5. add the rules for the game before starting
