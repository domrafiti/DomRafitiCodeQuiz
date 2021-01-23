//variables
var quizContainer = document.getElementById("quiz");
var resultContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var timeEL = document.getElementById("timer");
var score = 0;
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

function showQuestion() {
    let i = 0;
    document.getElementById(`quiz`).innerHTML = myQuestions[i].question;

    document.getElementById(`answers`).innerHTML = myQuestions[i].answers.a;
    document.createElement('div#answerB');

    for (i = 0; i < myQuestions.length; i++) {
        const question = myQuestions[i].question;
        const answerA = myQuestions[i].answers.a;
        const answerB = myQuestions[i].answers.b;
        const answerC = myQuestions[i].answers.c;
        const answerD = myQuestions[i].answers.d;
        console.log(question);
        console.log(answerA);
        console.log(answerB);
        console.log(answerC);
        console.log(answerD);

    }
}



//function to build quiz
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("functionTest");
    let i = 0;
    //start timer - week 4 - activit 9
    setTime();

    showQuestion();

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