//variables
var quizContainer = document.getElementById("quiz");
var resultContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var timeEL = document.getElementById("timer");
var correctAnswerResponse = "Correct! lets go to the next question";
var wrongAnswerResponse = "Wrong! Time penalty... Next Question!";
var correct = 0;
var incorrect = 0;
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
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
];



//----------------function declaration----------------------------------//
/*This function will set the timer and be called from the Build quiz function.*/
function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--
        timeEL.textContent = `Timer: ${secondsLeft}`;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);

            //function call to end game
            console.log("times up");
            //showResults();
        }
    }, 1000);
};


function showQuestion(i) {

    var dispalyQuestion = myQuestions[i].question;
    var displayAnswers = [myQuestions[i].answers.a, myQuestions[i].answers.b, myQuestions[i].answers.c, myQuestions[i].answers.d]
    var answerOne = document.getElementById(`a`);
    var answerTwo = document.getElementById(`b`);
    var answerThree = document.getElementById(`c`);
    var answerFour = document.getElementById(`d`);

    quizContainer.textContent = dispalyQuestion;
    answerOne.textContent = displayAnswers[0];
    answerTwo.textContent = displayAnswers[1];
    answerThree.textContent = displayAnswers[2];
    answerFour.textContent = displayAnswers[3];


    //return i++;
}

function checkAnswer(answer) {
    var answerDisplay = document.getElementById(`question-result`);
    if (answer === myQuestions[i].correctAnswer) {
        console.log(i);
        i++;
        answerDisplay.textContent = correctAnswerResponse;

    } else {
        answerDisplay.textContent = wrongAnswerResponse;
        i++;
        console.log(i);
        showQuestion(i);
    }
    return i;
}



//function to build quiz
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("functionTest");
    let i = 0;
    //start timer - week 4 - activit 9
    setTime();

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