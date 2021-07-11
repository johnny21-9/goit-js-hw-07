const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    const value = event.currentTarget.value;
    console.log(value);
    if (value === '') {
        spanRef.textContent = 'незнакомец';
    } else {
        spanRef.textContent = value;
    }
}