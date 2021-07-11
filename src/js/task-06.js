const inputRef = document.querySelector('#validation-input');
const lengthRequired = inputRef.dataset.length;
console.log(lengthRequired)

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
    let currentLength = event.currentTarget.value.length;
    console.log(currentLength);

    if (currentLength != lengthRequired) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid')

    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
}

