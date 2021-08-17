// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!
let questionsArr; //holds the questions from the api
let categoryArr = []; //holds the category from the ap1
screengameover.style.display = "none"; //hides the gameover screen
screenquestions.style.display = "none"; //hides category screen
let score = 0; // starts the score at 0
let newScore; // global variable for holding the user's score
let category; // global variable for holding the category
let apiAnswer = ""; // global variable for the api answer starting as a empty string
let userAnswerElement = document.getElementById("useranswer"); // gv for holding the element representing the user's answer
let displayQuestion = document.createElement("h3"); //gv for displaying the question
let displayCategory = document.querySelector(".category"); //gv for displaying the category
let randomQuestion; // gv for the questions
let currentQuestion = ""; // gv for the current question starting as a empty string
let arrayOfQuestions; //gv for the array of questions
let newQuestion = document.querySelector(".nextquestion"); // gv for getting the next question
let newGame = document.querySelector(".newgame"); //selects the button next question
let getData;

//the fetch
let randomCategory = fetch(
  `https://jservice.io/api/category?id=${Math.floor(Math.random() * 10) + 1}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // puts the questions in an array
    //data.clues is the array of questions
    getData = data;
    arrayOfQuestions = data.clues;
    questionsArr = Math.floor(Math.random() * arrayOfQuestions.length); //taking the index and randomizing it
    randomQuestion = arrayOfQuestions[questionsArr]; // taking a single question out of the mix of both
    randomQuestion[Math.floor(Math.random() * data.length)]; // gets a  single question from the random array
    apiAnswer = randomQuestion.answer.toString().toLowerCase(); // pulling from the random array and giving whatever it decided to give
    console.log(apiAnswer); //answer from the api
    currentQuestion = randomQuestion.question;
    displayQuestion.append(currentQuestion);

    category = data.title; //gets the category
    displayCategory.innerHTML = category; //displays it on the page

    let submit = document.querySelector(".submit"); //event listener for my submit button
    submit.addEventListener("click", submitButton);
  });
console.log(questionsArr);
console.log(categoryArr);

// shows the first question
function startGame() {
  document.querySelector("#startscreen").style.display = "none"; // hide start game screen
  document.querySelector("#screenquestions").style.display = null; //show the question screen
  displayQuestion.innerHTML = currentQuestion; //displays current question on the page
  document.body.append(displayQuestion);
  displayCategory.innerHTML = category;
}
let startscreen = document.querySelector(".startgame");
startscreen.addEventListener("click", startGame);

//checks the answer and displays appropriate message
function submitButton() {
  document.querySelector("#screenquestions").style.display = "none"; //hide the question after clicking submit and show the correct message and the next question button
  if (userAnswerElement.value.toString().toLowerCase() === apiAnswer) {
    //check if the answer is correct
    document.querySelector("#startscreen").style.display = "none"; //hide the start screen
    userAnswerElement.value = ""; // make user answer a empty string
    newScore = score + 1; // give 1 point
    let p = document.querySelector(".score");
    p.innerHTML = `score ${newScore}`; //displys score in the header
    let h2 = document.createElement("h2");
    h2.innerHTML = `Correct! your score is ${newScore}`;
    document.body.append(h2); //70-74 display a correct message and display the point onto the page
    newQuestion.addEventListener("click", nextQuestion); // get a new question
    document.querySelector("#screenquestions").style.display = null; //show the next question
  } else {
    newScore = 0;
    screengameover.style.display = null; //show game over screen
    setTimeout(startGame, 1000);
    window.location.reload();
    newGame.addEventListener("click", startGame()); //call start game to start a new game when new game is clicked
    console.log(newGame);
  }
}

//advances the game to the next question
function nextQuestion() {
  document.querySelector("#startscreen").style.display = "none"; // hide the start  screen

  arrayOfQuestions = Object.keys(getData.clues); // turned array to object with key value pair
  questionsArr = Math.floor(Math.random() * arrayOfQuestions.length); //randomizing the array
  randomQuestion = getData.clues[arrayOfQuestions[questionsArr]]; //randomizing the clues array of questions and the questions array
  randomQuestion[Math.floor(Math.random() * getData.length)]; //pulling the question
  currentQuestion = randomQuestion.question; // assign it to the current  question
  apiAnswer = randomQuestion.answer.toLowerCase().toString(); //assigning the answer and displaying it
  displayQuestion.innerHTML = currentQuestion;
}

//DIRECTIONS:MINIMUM VIABLE PRODUCT Use fetch to pull questions from the jservice api, Present a single question to the userAllow the user to respond to the questionDetermine if the user's answer was correct  awards one (1) point and continues the game An incorrect answer resets the game and resets the score to zero (0)Keep track of and display a user's score.
