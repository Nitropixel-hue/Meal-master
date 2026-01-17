const meals = [
  "Grilled chicken with rice and vegetables",
  "Jollof rice with fried plantain",
  "Pasta with tomato sauce",
  "Beans and fried yam",
  "Vegetable stir-fry with noodles"
];

const button = document.getElementById("generateBtn");
const result = document.getElementById("mealResult");

button.addEventListener("click", () => {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  result.textContent = randomMeal;
});
