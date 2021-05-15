//When Start button is clicked, timers starts
//Every question has 4 options
//When a question is answered, right/wrong is displayed on the bottom
//When a question is answere, next questions appears
//Every wrong answer, time is deducted by 10 seconds
//Game over when all questions are answered or timers reaches 0
//Time should stop once all questions are answered
//Save Initials and Score.

var startBtn = document.createElement("input")
submitBtn.className = "submit-btn";
submitBtn.addClass - "hide";
submitBtn.setAttributes("type", "submit")
submitBtn.setAttributes("value", "submit")

var startButton = document.createElement("button");
startButton = document.querySelector("#start-button");
startButton.className = "start-btn";
startButton.textContent = "Click to start";

var answers = [];
var score = 0;

var timeLeft = 45;
timer.textContent = "Time Left:" + timeLeft;


var currentQuestion = 0;
var questionsArray = [{
        number: 1,
        question: "Commonly used data types DO NOT include:",
        answers: [{
                text: "Strings",
                correct: false
            },
            {
                text: "Booleans",
                correct: false
            },
            {
                text: "Alerts",
                correct: true
            },
            {
                text: "Numbers",
                correct: false
            }
        ]
    },
    {
        number: 2,
        question: "Arrays in JavaScript can be used to store _______.",
        answers: [{
                text: "numbers and strings'",
                correct: false
            },
            {
                text: "other arrays",
                correct: false
            },
            {
                text: "booleans",
                correct: false
            },
            {
                text: "all of the above",
                correct: true
            }
        ]
    },
    {
        number: 3,
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: [{
                text: "quotes",
                correct: false
            },
            {
                text: "curly brackets",
                correct: true
            },
            {
                text: "parenthesis",
                correct: false
            },
            {
                text: "square brackets",
                correct: false
            }
        ]
    },

        {
            number: 4,
            question: "A very helpful tool used during development and debugging for printing content to the debuggers is:",
            answers: [{
                    text: "Java Script",
                    correct: false
                },
                {
                    text: "Terminal/Bash",
                    correct: false
                },
                {
                    text: "for loops",
                    correct: false
                },
                {
                    text: "console.log",
                    correct: true
                }
            ]    
    
        },{
            number: 5,
            question: "String values must be enclosed within _______ when being assigned to variables",
            answers: [{
                    text: "commas",
                    correct: true
                },
                {
                    text: "curly brackets",
                    correct: false
                },
                {
                    text: "parenthesis",
                    correct: false
                },
                {
                    text: "quotes",
                    correct: false
                }
            ]
        },
  ];


  function createQuestion() {
    if (currentQuestion < questionsArray.length) {
        startButton.remove();
        buttonA = document.querySelector("#buttonA").removeAttribute("hide");
        buttonB = document.querySelector("#buttonB").removeAttribute("hide");
        buttonC = document.querySelector("#buttonC").removeAttribute("hide");
        buttonD = document.querySelector("#buttonD").removeAttribute("hide");

        answers = [];
        displayQuestion.textContent = questionsArray[currentQuestion].number + ". " + questionsArray[currentQuestion].question
        answers.push(questionsArray[currentQuestion].answers);

        var buttonA = document.querySelector("#buttonA");
        buttonA.className = "btn";
        buttonA.textContent = "A) " + answers[0][0].text;
        buttonA.value = answers[0][0].correct

        var buttonB = document.querySelector("#buttonB");
        buttonB.className = "btn";
        buttonB.textContent = "B) " + answers[0][1].text;
        buttonB.value = answers[0][1].correct

        var buttonC = document.querySelector("#buttonC");
        buttonC.className = "btn";
        buttonC.textContent = "C) " + answers[0][2].text;
        buttonC.value = answers[0][2].correct;

        var buttonD = document.querySelector("#buttonD");
        buttonD.className = "btn";
        buttonD.textContent = "D) " + answers[0][3].text;
        buttonD.value = answers[0][3].correct;
        currentQuestion++
    } else if (currentQuestion >= questionsArray.length) {
        saveScore();
    }
};

function saveScore() {
    feedBack.remove();
    displayQuestion.remove();
    buttonA.remove();
    buttonB.remove();
    buttonC.remove();
    buttonD.remove();
    submitBtn.removeAttribute("hide")


function checkAnswerA(event) {
    if (
        buttonA.value === "true") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Correct!";
        score = score + 30;
        createQuestion();

    } else if (
        buttonA.value === "false") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Incorrect!";
        timeLeft = timeLeft - 8;
        createQuestion();
    }
}

function checkAnswerB(event) {
    if (
        buttonB.value === "true") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Correct!";
        score = score + 5;
        createQuestion();

    } else if (
        buttonB.value === "false") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Incorrect!";
        timeLeft = timeLeft - 2;
        createQuestion();
    }
}

function checkAnswerC(event) {
    if (
        buttonC.value === "true") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Correct!";
        score = score + 5;
        createQuestion();

    } else if (
        buttonC.value === "false") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Incorrect!";
        timeLeft = timeLeft - 2;
        createQuestion();
    }
}

function checkAnswerD(event) {
    if (
        buttonD.value === "true") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Correct!";
        score = score + 5;
        createQuestion();

    } else if (
        buttonD.value === "false") {
        var feedBack = document.querySelector("#question-feedback")
        feedBack.textContent = "Incorrect!";
        timeLeft = timeLeft - 2;
        createQuestion();
    }
}



startButton.addEventListener("click", runTimer);
startButton.addEventListener("click", createQuestion);

buttonA.addEventListener("click", checkAnswerA);
buttonB.addEventListener("click", checkAnswerB);
buttonC.addEventListener("click", checkAnswerC);
buttonD.addEventListener("click", checkAnswerD);
