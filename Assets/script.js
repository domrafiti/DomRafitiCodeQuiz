//variables
var question = document.getElementById('question');
var resultContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var timeEL = document.getElementById("timer");
var answerOne = document.getElementById(`a`);
var answerTwo = document.getElementById(`b`);
var answerThree = document.getElementById(`c`);
var answerFour = document.getElementById(`d`);
var answerDisplay = document.getElementById(`question-result`);
var correctAnswerResponse = "Correct! lets go to the next question";
var wrongAnswerResponse = "Wrong! Time penalty... Next Question!";
var nextButton = "Next";
var hightScore = "High Score";
var emptyString = "";
var correct = localStorage.getItem("correct");
var incorrect = localStorage.getItem("incorrect");
var totalScore = localStorage.getItem("high score");
var i = 0;
var secondsLeft = 15;
var myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Martin Douglas",
            b: "Andy Sandberg",
            c: "Brendan Eich",
            d: "Dan Kaltenbaugh"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct way to reference 'JS' or 'Java Script'?",
        answers: {
            a: "Java Script",
            b: "JavaScript",
            c: "java script",
            d: "javaScript"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        answers: {
            a: "Boolean",
            b: "String",
            c: "Object",
            d: "Dan Kaltenbaugh",
        },
        correctAnswer: "d"
    },
    {
        question: "What kind of language is JavaScript?",
        answers: {
            a: "scripting",
            b: "foreign",
            c: "false",
            d: "Dan Kaltenbaugh",
        },
        correctAnswer: "a"
    },
    {
        question: "To make JavaScript work you must include what in your HTML file?",
        answers: {
            a: "head tag",
            b: "Dan Kaltenbaugh",
            c: "java tag",
            d: "script tag",
        },
        correctAnswer: "d"
    },
    {
        question: "What does DOM stand for?",
        answers: {
            a: "Dan Kaltenbaugh",
            b: "Doesnt Open Much",
            c: "Document Object Model",
            d: "Donuts and Oreos Matter",
        },
        correctAnswer: "c"
    },
];

//----------------function declaration----------------------------------//
/*This function will set the timer and be called from the Build quiz function.*/
function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            secondsLeft = 0;

            //function call to end game
            console.log("times up");
            gameOver();
        }

        timeEL.textContent = `Timer: ${secondsLeft}`;

    }, 1000);
};

/*function to display the question (or next question) and to clear the answer response */
function showQuestion(i) {

    var dispalyQuestion = myQuestions[i].question;
    var displayAnswers = [myQuestions[i].answers.a, myQuestions[i].answers.b, myQuestions[i].answers.c, myQuestions[i].answers.d]

    question.textContent = dispalyQuestion;
    answerOne.textContent = displayAnswers[0];
    answerTwo.textContent = displayAnswers[1];
    answerThree.textContent = displayAnswers[2];
    answerFour.textContent = displayAnswers[3];

    if (i > 0) {
        answerDisplay.textContent = emptyString;
    }
};

function checkAnswer(answer) {

    submitButton.textContent = nextButton;

    //if else statement that is comparing the selection against the correct answer, tallying the correct/incorrect score and displaying the next question
    if (answer === myQuestions[i].correctAnswer) {
        answerDisplay.textContent = correctAnswerResponse;
        correct++;
        localStorage.setItem("correct", correct);
        console.log(i, correct);
    } else {
        answerDisplay.textContent = wrongAnswerResponse;
        incorrect++;
        localStorage.setItem("incorrect", incorrect);

        //check to see if there is less than 5 seconds remaining.
        if (secondsLeft <= 5) {
            gameOver();
        }
        //time penalty
        secondsLeft = secondsLeft - 5;
        console.log(i, incorrect);
    }

    //adding to variable 'i' to help advance to next question
    i++;

    //call gameOver function if questions are all answered
    if (i >= myQuestions.length) {
        gameOver();
    }

    return i, correct;
};

function gameOver() {
    /*--- clearing the screen ---*/

    question.textContent = emptyString;
    answerOne.textContent = emptyString;
    answerTwo.textContent = emptyString;
    answerThree.textContent = emptyString;
    answerFour.textContent = emptyString;
    answerDisplay.textContent = emptyString;

    //Results Displays
    question.textContent = `Thanks for playing! Your score:`;
    answerOne.textContent = `Correct Answers: ${correct}`;
    answerTwo.textContent = `Incorrect Answers: ${incorrect}`;
    answerFour.textContent = `Click the button to log your score on the High Score list`;

    //submitButton.textContent = hightScore;
    submitButton.innerHTML = '<a href="./highscores.html">Submit High Score</a>';

    submitButton.addEventListener("click", function () {
        localStorage.setItem("high score", correct);

        localStorage.setItem("correct", 0);
        localStorage.setItem("incorrect", 0);
    });


};

function resetGame() {
    // question.textContent = emptyString;
    // answerOne.textContent = emptyString;
    // answerTwo.textContent = emptyString;
    // answerThree.textContent = emptyString;
    // answerFour.textContent = emptyString;
    // answerDisplay.textContent = emptyString;

    localStorage.setItem("correct", 0);
    localStorage.setItem("incorrect", 0);

    location.reload();
};



//function to build quiz
submitButton.addEventListener("click", function (event) {
    //event.preventDefault();
    //console.log("functionTest");
    //start timer - week 4 - activit 9
    if (i === 0) {
        setTime();
    };

    showQuestion(i);




    //add in button for answer selection

    //select in array and present question and answer 

    //store selection - immediate evlauation of right or wrong answer
});


    //function to show results

        //on click

        //review array/object

        //compare against selection

        //present message about correct / incorrect

        //return result to tabulate score

    //function to store score in local memory - week 4 - activity 26

//function calls 