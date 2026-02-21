const sweetsData = [
    {
        "id": 1,
        "title": "Gulab Jamun",
        "description": "Soft, melt-in-your-mouth dumplings made of khoya, deep-fried and soaked in rose-scented sugar syrup.",
        "image": "assest/img/gulabjamun.jpg",
        "price": 12.99,
        "ingredients": "Khoya, flour, baking powder, cardamom, sugar, water, rose water, saffron",
        "nutrition": {
            "Calories": "150 per piece",
            "Carbs": "20g",
            "Fat": "7g",
            "Protein": "3g",
            "Sugar": "18g",
            "Fiber": "0.5g"
        }
    },
    {
        "id": 2,
        "title": "Rasmalai",
        "description": "Soft cottage cheese patties soaked in sweetened, thickened milk flavored with cardamom and saffron.",
        "image": "assest/img/Rasmalai.jpg",
        "price": 14.50,
        "ingredients": "Paneer, milk, sugar, cardamom, saffron, pistachios",
        "nutrition": {
            "Calories": "180 per piece",
            "Carbs": "22g",
            "Fat": "8g",
            "Protein": "5g",
            "Sugar": "20g",
            "Calcium": "15% DV"
        }
    },
    {
        "id": 3,
        "title": "Jalebi",
        "description": "Crispy, spiral-shaped sweets made from fermented batter, deep-fried and soaked in sugar syrup.",
        "image": "assest/img/jalebi.jpg",
        "price": 9.99,
        "ingredients": "Flour, yogurt, saffron, sugar, water, ghee",
        "nutrition": {
            "Calories": "120 per piece",
            "Carbs": "28g",
            "Fat": "2g",
            "Protein": "1g",
            "Sugar": "25g",
            "Sodium": "10mg"
        }
    },
    {
        "id": 4,
        "title": "Barfi",
        "description": "Rich, fudge-like sweet made from condensed milk and sugar, flavored with cardamom and garnished with nuts.",
        "image": "assest/img/barfi.jpg",
        "price": 11.75,
        "ingredients": "Khoya, sugar, ghee, cardamom, pistachios, almonds",
        "nutrition": {
            "Calories": "140 per piece",
            "Carbs": "18g",
            "Fat": "7g",
            "Protein": "3g",
            "Sugar": "16g",
            "Calcium": "8% DV"
        }
    },
    {
        "id": 5,
        "title": "Ladu",
        "description": "Round sweet balls made from flour, semolina or coconut, bound with sugar syrup and ghee.",
        "image": "assest/img/Ladu.jpg",
        "price": 10.25,
        "ingredients": "Besan, ghee, sugar, cardamom, nuts",
        "nutrition": {
            "Calories": "160 per piece",
            "Carbs": "20g",
            "Fat": "8g",
            "Protein": "3g",
            "Sugar": "18g",
            "Fiber": "1g"
        }
    },
    {
        "id": 6,
        "title": "Rasgulla",
        "description": "Spongy cottage cheese balls soaked in light sugar syrup, a classic Bengali sweet.",
        "image": "assest/img/rasgulla.jpg",
        "price": 13.99,
        "ingredients": "Paneer, sugar, water, cardamom, rose water",
        "nutrition": {
            "Calories": "130 per piece",
            "Carbs": "25g",
            "Fat": "2g",
            "Protein": "4g",
            "Sugar": "23g",
            "Calcium": "10% DV"
        }
    }
];


const sweetsContainer = document.getElementById('sweetsContainer');
const nutritionModal = document.getElementById('nutritionModal');
const closeModal = document.getElementById('closeModal');
const modalSweetTitle = document.getElementById('modalSweetTitle');
const modalIngredients = document.getElementById('modalIngredients');
const modalNutrition = document.getElementById('modalNutrition');
const nutritionFacts = document.getElementById('nutritionFacts');


function createSweetCards() {
    sweetsData.forEach(sweet => {
        const card = document.createElement('div');
        card.className = 'sweet-card';
        
        card.innerHTML = `
            <img src="${sweet.image}" alt="${sweet.title}" class="sweet-image">
            <div class="sweet-content">
                <h3 class="sweet-title">${sweet.title}</h3>
                <p class="sweet-description">${sweet.description}</p>
                <p class="sweet-price">$${sweet.price.toFixed(2)} <span class="price-per">per kg</span></p>
                <button class="btn-nu btn-nutrition" onclick="showNutritionInfo(${sweet.id})">Nutrition Info</button>
            </div>
        `;
        
        sweetsContainer.appendChild(card);
    });
}


function showNutritionInfo(id) {
    const sweet = sweetsData.find(item => item.id === id);
    if (sweet) {
        
        modalSweetTitle.textContent = sweet.title;
        modalIngredients.textContent = sweet.ingredients;
        
      
        nutritionFacts.innerHTML = '';
        

        for (const [key, value] of Object.entries(sweet.nutrition)) {
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