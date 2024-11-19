let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let startButton = document.getElementById("start").querySelector("button");
let pauseButton = document.getElementById("Pause").querySelector("button");
let resetButton = document.getElementById("reset").querySelector("button");

// Initialize variables
let seconds = 0,
    minutes = 0,
    hours = 0;
let timerInterval;
let isRunning = false;

// Function to update the stopwatch display
function updateDisplay() {
    hr.innerText = String(hours).padStart(2, "0") + " :";
    min.innerText = String(minutes).padStart(2, "0") + " :";
    sec.innerText = String(seconds).padStart(2, "0");
}

// Function to start the stopwatch
function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}

// Function to pause the stopwatch
function pauseStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

// Attach event listeners to buttons
startButton.addEventListener("click", startStopwatch);
pauseButton.addEventListener("click", pauseStopwatch);
resetButton.addEventListener("click", resetStopwatch);

// Initialize display
updateDisplay();
