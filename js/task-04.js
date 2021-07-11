const refs = {
    value: document.querySelector('#value'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    counterValue: 0,
};

refs.decrement.addEventListener('click', () => refs.value.textContent = refs.counterValue -= 1);
refs.increment.addEventListener('click', () => refs.value.textContent = refs.counterValue += 1);