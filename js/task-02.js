const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
  

const ings = ingredients.map(value => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = value;
  ingredientEl.classList.add('item');
  return ingredientEl;
})

ingredientsEl.append(...ings);






// ingredients.forEach(ingredient => {
//   console.log(ingredientsEl);
  
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add('item');
//   ingredientsEl.appendChild(ingredientEl);
// })

// for (let ingredient of ingredients) {
//   console.log(ingredientsEl);
  
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add('item');
//   ingredientsEl.appendChild(ingredientEl);
// };