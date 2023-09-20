const body = document.body;
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerID = null;

startButton.addEventListener('click', () => {
  timerID = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(timerID);
  startButton.disabled = false;
  stopButton.disabled = true;
});
stopButton.disabled = true;
