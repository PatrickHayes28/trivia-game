// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!
let questionsArr; //holds the questions from the api
let categoryArr = []; //holds the category from the ap1
screengameover.style.display = "none"; //hides the gameover screen
screenquestions.style.display = "none"; //hides category screen
let submit; //global variable for submit button event listener
let score = 0; // starts the score at 0
let newScore; // global variable for holding the user's score
let apiAnswer = ""; // global variable for the api answer starting as a empty string
let userAnswerElement = document.getElementById("useranswer"); // gv for holding the element representing the user's answer
let displayCategory = document.createElement("h3"); // global variable for holding the category
let displayQuestion = document.getElementById("questionspot"); //gv for displaying the question
let displayHeadline = document.querySelector(".headline"); //gv for displaying the hadline
let randomQuestion; // gv for the questions
let currentQuestion = ""; // gv for the current question starting as a empty string
let newQuestion = document.querySelector(".nextquestion"); // gv for getting the next question
let newGame = document.querySelector(".newgame"); //selects the button next question

//the fetch for the category
let randomCategory = fetch(`https://jservice.io/api/random`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let category = data[0].category_id; // gets the category id number in the api
    displayCategory = data[0].category.title; //gets the category and sets it to a h3 element
    console.log(data[0].category_title); // says undefined
    screenquestions.append(displayCategory); // displays the api category on screenquestions

    //2nd fetch for the questions
    let categoryQuestions = fetch(
      `https://jservice.io/api/clues?category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        categoryArr = data;
        questionsArr = Math.floor(Math.random() * categoryArr.length); //taking the index and randomizing it
        randomQuestion = categoryArr[questionsArr]; // taking a single question out of the mix of both
        randomQuestion[Math.floor(Math.random() * data.length)]; // gets a  single question from the random array
        apiAnswer = randomQuestion.answer.toString().toLowerCase(); // pulling from the random array and giving whatever it decided to give
        console.log(apiAnswer); //answer from the api
        currentQuestion = randomQuestion.question;
        displayQuestion.append(currentQuestion); // displays the question
        screenquestions.append(displayHeadline); // displays the headline "category" on the screenquestions

        submit = document.querySelector(".submit"); //event listener for my submit button
        submit.addEventListener("click", submitButton);
      });
  });

// shows the first question
function startGame() {
  document.querySelector("#startscreen").style.display = "none"; // hide start game screen
  //document.querySelector("#screenquestions").style.display = null; //show the question screen
  displayQuestion.innerHTML = currentQuestion; //displays current question on the page
  document.querySelector("#screenquestions").append(displayQuestion);
  document.querySelector("#screenquestions").style.display = "block";
}
let startscreen = document.querySelector(".startgame");
startscreen.addEventListener("click", startGame);

//checks the answer and displays appropriate message
function submitButton() {
  document.querySelector("#screenquestions").style.display = "none"; //hide the question after clicking submit and show the correct message and the next question button
  if (
    userAnswerElement.value.toString().toLowerCase() === apiAnswer.toLowerCase()
  ) {
    //check if the answer is correct
    document.querySelector("#startscreen").style.display = "none"; //hide the start screen
    userAnswerElement.value = ""; // make user answer a empty string
    newScore = score += 1; // give 1 point
    let p = document.querySelector(".score");
    p.innerHTML = `score ${newScore}`; //displays score in the header
    let h2 = document.createElement("h2");
    h2.id = "h2";
    h2.innerHTML = `Correct! your score is ${newScore}`;
    document.body.append(h2); //80-84 display a correct message and display the point onto the page
    newQuestion.addEventListener("click", nextQuestion); // get a new question
  } else {
    newScore = 0;
    document.querySelector("#screengameover").style.display = "initial"; //show the game over screen
    displayQuestion.style.display = "none";
    setTimeout(function () {
      window.location.reload(); //resets the game after 3 seconds
    }, 3000);
  }
}

//advances the game to the next question
function nextQuestion() {
  document.querySelector("#startscreen").style.display = "none"; // hide the start  screen
  document.querySelector("#screenquestions").style.display = "block";
  document.querySelector("#useranswer").value = "";
  let random = Math.floor(Math.random() * categoryArr.length);
  let currentQuestion = categoryArr[random].question;
  document.querySelector("#screenquestions").innerHTML = currentQuestion;
  apiAnswer = categoryArr[random].answer;

  console.log(apiAnswer);
}

//DIRECTIONS:MINIMUM VIABLE PRODUCT Use fetch to pull questions from the jservice api, Present a single question to the userAllow the user to respond to the questionDetermine if the user's answer was correct  awards one (1) point and continues the game An incorrect answer resets the game and resets the score to zero (0)Keep track of and display a user's score.
