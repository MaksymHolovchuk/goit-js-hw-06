const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');
const food = ingredients.map(ingredient => {
    const foodList = document.createElement('li');
    foodList.textContent = ingredient;
    return foodList;
});
ingredientsList.append(...food);