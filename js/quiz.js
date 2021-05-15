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