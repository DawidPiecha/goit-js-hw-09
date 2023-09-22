import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButton = document.querySelector('button[data-start]');
const secondsCounter = document.querySelector('span[data-seconds]');
const minutesCounter = document.querySelector('span[data-minutes]');
const hoursCounter = document.querySelector('span[data-hours]');
const daysCounter = document.querySelector('span[data-days]');

startButton.disabled = true;
let correctDate = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateChosenByUser = selectedDates[0];
    if (dateChosenByUser < new Date()) {
      startButton.disabled = true;
      resetCountdown();
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
      correctDate = dateChosenByUser;
      Notiflix.Notify.success('Your data is correct!');
    }
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function resetCountdown() {
  clearInterval(intervalId);
  intervalId = null;
  daysCounter.textContent = '00';
  hoursCounter.textContent = '00';
  minutesCounter.textContent = '00';
  secondsCounter.textContent = '00';
}

function calcRemainingTime() {
  if (!correctDate) {
    return;
  }

  const timeDifference = correctDate - new Date();
  if (timeDifference <= 0) {
    resetCountdown();
    startButton.disabled = true;
    Notiflix.Notify.failure('Time is up!');
    return;
  }
  const timeConverter = convertMs(timeDifference);
  daysCounter.textContent = addLeadingZero(timeConverter.days);
  hoursCounter.textContent = addLeadingZero(timeConverter.hours);
  minutesCounter.textContent = addLeadingZero(timeConverter.minutes);
  secondsCounter.textContent = addLeadingZero(timeConverter.seconds);
}

startButton.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(calcRemainingTime, 1000);
  }
  startButton.disabled = true;
  calcRemainingTime();
});
