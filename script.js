// Nutrition Database
const NUTRITION_DB = {
    'pizza': { name: 'Pizza', category: 'Prepared Dish', calories: 285, protein: 12.2, carbs: 35.6, fat: 10.4 },
    'burger': { name: 'Hamburger', category: 'Prepared Dish', calories: 250, protein: 17, carbs: 30, fat: 10 },
    'salad': { name: 'Green Salad', category: 'Vegetable Dish', calories: 100, protein: 5, carbs: 15, fat: 3 },
    'sandwich': { name: 'Sandwich', category: 'Prepared Dish', calories: 350, protein: 15, carbs: 40, fat: 12 },
    'apple': { name: 'Apple', category: 'Fruit', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
    'banana': { name: 'Banana', category: 'Fruit', calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
    'orange': { name: 'Orange', category: 'Fruit', calories: 62, protein: 1.2, carbs: 15, fat: 0.2 },
    'broccoli': { name: 'Broccoli', category: 'Vegetable', calories: 55, protein: 4, carbs: 11, fat: 0.6 },
    'carrot': { name: 'Carrot', category: 'Vegetable', calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
    'chicken': { name: 'Grilled Chicken', category: 'Protein', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    'fish': { name: 'Grilled Fish', category: 'Protein', calories: 180, protein: 22, carbs: 0, fat: 8 },
    'cake': { name: 'Cake Slice', category: 'Dessert', calories: 300, protein: 4, carbs: 45, fat: 15 },
    'ice cream': { name: 'Ice Cream', category: 'Dessert', calories: 250, protein: 5, carbs: 30, fat: 12 }
};

function analyzeFood() {
    const foodInput = document.getElementById("foodInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    if (NUTRITION_DB[foodInput]) {
        const food = NUTRITION_DB[foodInput];
        resultDiv.innerHTML = `
            <h3>🍲 ${food.name}</h3>
            <p><strong>Category:</strong> ${food.category}</p>
            <p><strong>Calories:</strong> ${food.calories} kcal</p>
            <p><strong>Protein:</strong> ${food.protein}g</p>
            <p><strong>Carbs:</strong> ${food.carbs}g</p>
            <p><strong>Fats:</strong> ${food.fat}g</p>
        `;
    } else {
        resultDiv.innerHTML = "<p style='color:red;'>❌ Food not found in database.</p>";
    }
}
