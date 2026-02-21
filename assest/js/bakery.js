const bakeryData = [
    {
        "id": 1,
        "title": "Chocolate Croissant",
        "description": "Flaky, buttery pastry with rich chocolate filling, perfect with coffee.",
        "image": "assest/img/baker1.jpg",
        "price": 3.99,
        "ingredients": "Flour, butter, chocolate, sugar, yeast, milk, eggs",
        "nutrition": {
            "Calories": "310 per piece",
            "Carbs": "35g",
            "Fat": "18g",
            "Protein": "6g",
            "Sugar": "12g",
            "Fiber": "2g"
        }
    },
    {
        "id": 2,
        "title": "Blueberry Muffin",
        "description": "Soft, moist muffin packed with juicy blueberries and a light crumb topping.",
        "image": "assest/img/baker2.jpg",
        "price": 2.99,
        "ingredients": "Flour, blueberries, sugar, eggs, butter, milk, baking powder",
        "nutrition": {
            "Calories": "380 per piece",
            "Carbs": "55g",
            "Fat": "15g",
            "Protein": "5g",
            "Sugar": "28g",
            "Fiber": "2g"
        }
    },
    {
        "id": 3,
        "title": "Cinnamon Roll",
        "description": "Sweet, fluffy roll with cinnamon sugar filling and cream cheese icing.",
        "image": "assest/img/baker3.jpg",
        "price": 4.50,
        "ingredients": "Flour, butter, cinnamon, sugar, yeast, cream cheese, milk",
        "nutrition": {
            "Calories": "420 per piece",
            "Carbs": "60g",
            "Fat": "18g",
            "Protein": "6g",
            "Sugar": "32g",
            "Fiber": "2g"
        }
    },
    {
        "id": 4,
        "title": "Almond Biscotti",
        "description": "Twice-baked Italian cookies with crunchy almonds, perfect for dipping.",
        "image": "assest/img/baker4.jpg",
        "price": 2.25,
        "ingredients": "Flour, almonds, sugar, eggs, butter, vanilla extract",
        "nutrition": {
            "Calories": "150 per piece",
            "Carbs": "20g",
            "Fat": "7g",
            "Protein": "3g",
            "Sugar": "10g",
            "Fiber": "1g"
        }
    },
    {
        "id": 5,
        "title": "Red Velvet Cupcake",
        "description": "Classic red velvet cake with cream cheese frosting, in perfect cupcake form.",
        "image": "assest/img/baker5.jpg",
        "price": 3.75,
        "ingredients": "Flour, cocoa, buttermilk, eggs, sugar, cream cheese, food coloring",
        "nutrition": {
            "Calories": "350 per piece",
            "Carbs": "45g",
            "Fat": "18g",
            "Protein": "4g",
            "Sugar": "30g",
            "Fiber": "1g"
        }
    },
    {
        "id": 6,
        "title": "Sourdough Bread",
        "description": "Artisan bread with tangy flavor and perfect crust, made with natural starter.",
        "image": "assest/img/baker6.jpg",
        "price": 6.99,
        "ingredients": "Flour, water, salt, sourdough starter",
        "nutrition": {
            "Calories": "160 per slice",
            "Carbs": "30g",
            "Fat": "1g",
            "Protein": "6g",
            "Sugar": "0g",
            "Fiber": "2g"
        }
    }
];

const sweetsContainer = document.getElementById('sweetsContainer');
const nutritionModal = document.getElementById('nutritionModal');
const closeModal = document.getElementById('closeModal');
const modalSweetTitle = document.getElementById('modalSweetTitle');
const modalIngredients = document.getElementById('modalIngredients');
const nutritionFacts = document.getElementById('nutritionFacts');

function createSweetCards() {
    bakeryData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'sweet-card';
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="sweet-image">
            <div class="sweet-content">
                <h3 class="sweet-title">${item.title}</h3>
                <p class="sweet-description">${item.description}</p>
                <p class="sweet-price">$${item.price.toFixed(2)} <span class="price-per">per ${item.title.includes('Bread') ? 'loaf' : 'piece'}</span></p>
                <button class="btn-nu btn-nutrition" onclick="showNutritionInfo(${item.id})">Nutrition Info</button>
            </div>
        `;
        
        sweetsContainer.appendChild(card);
    });
}

function showNutritionInfo(id) {
    const item = bakeryData.find(item => item.id === id);
    if (item) {
        modalSweetTitle.textContent = item.title;
        modalIngredients.textContent = item.ingredients;
        
        nutritionFacts.innerHTML = '';
        
        for (const [key, value] of Object.entries(item.nutrition)) {
            const nutritionItem = document.createElement('div');
            nutritionItem.className = 'nutrition-item';
            nutritionItem.innerHTML = `<strong>${key}:</strong> ${value}`;
            nutritionFacts.appendChild(nutritionItem);
        }
        
        nutritionModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

closeModal.addEventListener('click', () => {
    nutritionModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

nutritionModal.addEventListener('click', (e) => {
    if (e.target === nutritionModal) {
        nutritionModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

window.onload = createSweetCards;