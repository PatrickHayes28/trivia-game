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
let randomQuestion; // gv for the question
let currentQuestion = ""; // gv for the current question starting as a empty string
let arrayOfQuestions; //gv for the array of questions
let newQuestion = document.querySelector(".nextgame"); // gv for getting the next question

//the fetch
let randomCategory = fetch(
  `https://jservice.io/api/category?id=${Math.floor(Math.random() * 10) + 1}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // puts the questions in an array
    //data.clues is the array of questions
    arrayOfQuestions = data.clues;
    questionsArr = Math.floor(Math.random() * arrayOfQuestions.length); //taking the index and randomizing it
    randomQuestion = arrayOfQuestions[questionsArr]; // taking a single question out of the mix of both
    randomQuestion[Math.floor(Math.random() * data.length)]; // gets a  single question from the random array
    apiAnswer = randomQuestion.answer.toString().toLowerCase(); // pulling from the random array and giving whatever it decided to give
    console.log(apiAnswer); //answer from api
    console.log(randomQuestion); // question from api
    currentQuestion = randomQuestion.question;
    displayQuestion.append(currentQuestion);

    category = data.title; //gets the category
    displayCategory.innerHTML = category; //displays it on the page

    let submit = document.querySelector(".submit");
    submit.addEventListener("click", submitButton);
  });
console.log(questionsArr);
console.log(categoryArr);

// shows the first question
function startGame() {
  document.querySelector("#startscreen").style.display = "none"; // 1. hide start game screen
  document.querySelector("#screenquestions").style.display = null; //show the question screen
  displayQuestion.innerHTML = currentQuestion; //displays it on the page
  document.body.append(displayQuestion);
  console.log(category);
  displayCategory.innerHTML = category;
}
let startscreen = document.querySelector("#startscreen");
startscreen.addEventListener("click", startGame);

//checks the answer and displays appropriate message

function submitButton(e) {
  e.preventDefault();
  document.querySelector("#screenquestions").style.display = "none"; //hide the question after clicking submit
  //console.log(userAnswer);
  console.log(apiAnswer);
  if (userAnswerElement.value.toString().toLowerCase() === apiAnswer) {
    document.querySelector("#startscreen").style.display = "none";
    userAnswerElement.value = "";
    newScore = score + 1;
    let p = document.querySelector(".score");
    p.innerHTML = `score ${newScore}`;
    let h2 = document.createElement("h2");
    h2.innerHTML = `Correct! your score is ${newScore}`;
    document.body.append(h2);
    newQuestion.addEventListener("click", nextQuestion);
    document.querySelector("#screenquestions").style.display = null;
  } else {
    newScore = 0;
    screengameover.style.display = null;
    startGame();
  }
}

//advances the game to the next question
function nextQuestion() {
  document.querySelector("#startscreen").style.display = "none";
  let nextQuestion = randomQuestion.question;
  displayQuestion.innerHTML = nextQuestion; //this gets a random question
  apiAnswer = nextQuestion;
  console.log("it works");
}

//DIRECTIONS:MINIMUM VIABLE PRODUCT Use fetch to pull questions from the jservice api, Present a single question to the userAllow the user to respond to the questionDetermine if the user's answer was correct  awards one (1) point and continues the game An incorrect answer resets the game and resets the score to zero (0)Keep track of and display a user's score.

//my psudo code I want to use buttons to advance through the game. i want to put the questions in an array and use a method for removing used questions from the game so i have no repeats. I want the "correct" message to appear in the middle between the question and answer boxes and i want the user's score to appear above the answer box.

//stretch goals are extra goals that are not required
//1. I'd like the page to look like jeopardy (blue background and white text)

//2. I'd like to display the user's name above the answer box so i need a way to ask for their name and then display their name onto the page

// 3. I want the "correct message" to appear in green and if i have time add a game over message in red

//4. i want to add a hover effect on the buttons that is a message instructing the user on what they do

//5. add the rules for the game before starting
