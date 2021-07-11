const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsRef = document.querySelector('#ingredients');

const ingredientList = ingredients.map(ingredient => {
  const ingredienRef = document.createElement('li');
  ingredienRef.textContent = ingredient;
  return ingredienRef;
});

ingredientsRef.append(...ingredientList);