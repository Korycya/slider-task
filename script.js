// Знаходимо елементи на сторінці
const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

// Функція debounce
function debounce(func, delay = 100) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Функція для зміни розміру зображення
function updateImageSize(event) {
  const value = event.target.value;
  // Змінюємо ширину картинки у відсотках від 1% до 100%
  sliderImage.style.width = `${value}%`;
}

// Обгортаємо функцію в debounce
const debouncedUpdateImageSize = debounce(updateImageSize, 100);

// Вішаємо слухач події "input" на слайдер
sliderInput.addEventListener('input', debouncedUpdateImageSize);