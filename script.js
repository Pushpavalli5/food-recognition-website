// Nutrition Database with Updated Image Paths
const NUTRITION_DB = {
    'pizza': {
        name: 'Pizza',
        category: 'Prepared Dish',
        calories: 285,
        protein: 12.2,
        carbs: 35.6,
        fat: 10.4,
        details: 'Cheesy Italian dish with various toppings',
        image: 'pizza.jpg'  // Remove 'images/' if images are in the main folder
    },
    'burger': {
        name: 'Hamburger',
        category: 'Prepared Dish',
        calories: 250,
        protein: 17,
        carbs: 30,
        fat: 10,
        details: 'Classic sandwich with meat patty',
        image: 'burger.jpg'
    },
    'salad': {
        name: 'Green Salad',
        category: 'Vegetable Dish',
        calories: 100,
        protein: 5,
        carbs: 15,
        fat: 3,
        details: 'Healthy mix of fresh vegetables',
        image: 'salad.jpg'
    },
    'apple': {
        name: 'Apple',
        category: 'Fruit',
        calories: 95,
        protein: 0.5,
        carbs: 25,
        fat: 0.3,
        details: 'Crisp, sweet fruit rich in fiber',
        image: 'apple.jpg'
    }
};

// Function to simulate food analysis
function analyzeFood() {
    const fileInput = document.getElementById("foodImageInput");
    const resultDiv = document.getElementById("result");

    if (fileInput.files.length === 0) {
        resultDiv.innerHTML = "<p style='color:red;'>Please upload an image first.</p>";
        return;
    }

    resultDiv.innerHTML = "<p>Analyzing food image...</p>";

    setTimeout(() => {
        let detectedFood = 'pizza';  // Replace this with AI detection logic
        let foodData = NUTRITION_DB[detectedFood];

        if (foodData) {
            resultDiv.innerHTML = `
                <p><strong>Food Detected:</strong> ${foodData.name}</p>
                <p><strong>Category:</strong> ${foodData.category}</p>
                <p><strong>Calories:</strong> ${foodData.calories} kcal</p>
                <p><strong>Protein:</strong> ${foodData.protein}g</p>
                <p><strong>Carbs:</strong> ${foodData.carbs}g</p>
                <p><strong>Fats:</strong> ${foodData.fat}g</p>
                <p><strong>Details:</strong> ${foodData.details}</p>
                <img src="${foodData.image}" alt="${foodData.name}">
            `;
        } else {
            resultDiv.innerHTML = "<p style='color:red;'>Food not recognized.</p>";
        }
    }, 2000);
}
