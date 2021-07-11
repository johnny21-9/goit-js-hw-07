const inputRef = document.querySelector('input');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let boxCollection = [];
let amount;

function randColor(max) {
    let red = Math.floor(Math.random() * max);
    let green = Math.floor(Math.random() * max);
    let blue = Math.floor(Math.random() * max);

    let randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}

inputRef.addEventListener('change', () => {
    amount = inputRef.value;
});

function createBoxes(amount) {
    for (let i = 1; i <= amount; i++) {
        const box = document.createElement('div');
        let boxSide = 30 + i * 10 - 10;
        box.style.width = `${boxSide}px`;
        box.style.height = `${boxSide}px`;
        box.style.backgroundColor = randColor(256);
        boxCollection.push(box);
    }
}

renderRef.addEventListener('click', () => {
    createBoxes(amount); //создаем боксы в памяти
    boxesRef.innerHTML = ''; //при повторном нажатии на "Создать" блоки не добавляются к предыдущим, а рендерится их новое количество
    boxesRef.append(...boxCollection); //рендерим боксы
    boxCollection = []; //очищаем массив
});

destroyRef.addEventListener('click', () => {
    boxesRef.innerHTML = '';
    inputRef.value = ''; //очищаем поле ввода
});