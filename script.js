let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;


const tickSound = new Audio("tick.mp3");

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  tickSound.play(); 
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);

}

function pause() {
  clearInterval(timer);
  timer = null;
  tickSound.pause()
}

let lapCounter = 0;
const lapsContainer = document.getElementById("laps");

function recordLap() {
  if (timer === null) return; // Only record if timer is running

  lapCounter++;
  const lapTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const li = document.createElement("li");
  li.innerText = `Lap ${lapCounter}: ${lapTime}`;
  lapsContainer.appendChild(li);
}

function reset() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  lapsContainer.innerHTML = ""; // Clear lap times
  lapCounter = 0;
}


