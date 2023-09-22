import Notiflix from 'notiflix';
const promiseForm = document.querySelector('.form');
const submitButton = document.querySelector('.form button[type="submit"]');
const resetButton = document.querySelector('.reset');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

promiseForm.addEventListener('submit', event => {
  event.preventDefault();
  const delayData = Number(event.target.elements.delay.value);
  const stepData = Number(event.target.elements.step.value);
  const amountData = Number(event.target.elements.amount.value);

  submitButton.disabled = true;
  let promisesCount = 0;

  for (let i = 0; i < amountData; i++) {
    createPromise(i + 1, delayData + stepData * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
      .finally(() => {
        promisesCount++;
        if (promisesCount === amountData) {
          submitButton.disabled = false;
        }
      });
  }
});

resetButton.addEventListener('click', () => {
  location.reload();
});
