const containerCounter = document.querySelector('span');
let currentValue = sessionStorage.getItem('currentDigit') || 0;
containerCounter.textContent = currentValue;

document.addEventListener('click', () => {
    currentValue++;
    containerCounter.textContent = currentValue;
    sessionStorage.setItem('currentDigit', currentValue);
});
