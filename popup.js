let timer;
let isRunning = false;

function startTimer(durationInMinutes) {
  let timerElement = document.getElementById("timer");
  let durationInSeconds = durationInMinutes * 60;
  let timerInterval = 1000; // Update every second

  timer = setInterval(function () {
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = durationInSeconds % 60;

    timerElement.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (durationInSeconds <= 0) {
      clearInterval(timer);
      timerElement.innerText = "Time is up!";
      isRunning = false;
    }

    durationInSeconds--;
  }, timerInterval);
}

document.getElementById("start").addEventListener("click", function () {
  if (!isRunning) {
    startTimer(25); // 25 minutes by default
    isRunning = true;
  }
});

document.getElementById("pause").addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timer);
  document.getElementById("timer").innerText = "25:00";
  isRunning = false;
});
