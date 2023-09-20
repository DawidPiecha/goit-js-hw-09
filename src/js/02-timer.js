import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButton = document.querySelector('button[data-start]');

const secondsCounter = document.querySelector('span[data-seconds]');
const minutesCounter = document.querySelector('span[data-minutes]');
const hoursCounter = document.querySelector('span[data-hours]');
const daysCounter = document.querySelector('span[data-days}');

startButton.disabled = true;
let correctDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateChosenByUser = selectedDates[0];
    if (dateChosenByUser < new Date()) {
      startButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
      correctDate = dateChosenByUser;
      Notiflix.Notify.success(
        'Your data is correct! Please press START button'
      );
    }
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
