const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients')
const arr = ingredients.map((el, i) => {
  const liel = document.createElement('li')
  liel.textContent = el
  liel.classList.add('item')
  return liel
})
ingredientsEl.append(...arr)