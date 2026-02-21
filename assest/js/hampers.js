const hampersData = [
    {
        "id": 1,
        "title": "Festive Delight Hamper",
        "subtitle": "A Celebration in Every Bite",
        "description": "Perfect for Diwali, Eid and family gatherings",
        "image": "assest/img/gift1.jpg",
        "price": 29.99,
        "contents": "Gulab Jamun, Barfi, Ladoo, Jalebi (500g each)",
        "details": {
            "Serves": "8-10 people",
            "Packaging": "Premium gift box",
            "Shelf Life": "7 days",
            "Delivery": "Next day available",
            "Customization": "Available on request",
            "Occasion": "Festivals, Parties"
        }
    },
    {
        "id": 2,
        "title": "Premium Sweet Box",
        "subtitle": "Luxury Mithai Collection",
        "description": "Our finest selection of traditional sweets",
        "image": "assest/img/gift2.jpg",
        "price": 39.50,
        "contents": "Rasmalai, Rasgulla, Kalakand, Kaju Katli (400g each)",
        "details": {
            "Serves": "6-8 people",
            "Packaging": "Luxury wooden box",
            "Shelf Life": "5 days",
            "Delivery": "Same day available",
            "Customization": "Gold plating option",
            "Occasion": "Weddings, Corporate"
        }
    }
];
const sweetsContainer = document.getElementById('sweetsContainer');
const nutritionModal = document.getElementById('nutritionModal');
const closeModal = document.getElementById('closeModal');
const modalSweetTitle = document.getElementById('modalSweetTitle');
const modalSubTitle = document.getElementById('modalSubTitle');
const modalIngredients = document.getElementById('modalIngredients');
const nutritionFacts = document.getElementById('nutritionFacts');
function createHamperCards() {
    hampersData.forEach(hamper => {
        const card = document.createElement('div');
        card.className = 'sweet-card';
        
        card.innerHTML = `
            <img src="${hamper.image}" alt="${hamper.title}" class="sweet-image">
            <div class="sweet-content">
                <h3 class="sweet-title">${hamper.title}</h3>
                <p class="sweet-description">${hamper.description}</p>
                <p class="sweet-price">$${hamper.price.toFixed(2)}</p>
                <button class="btn-nu btn-nutrition" onclick="showHamperDetails(${hamper.id})">Hamper Details</button>
            </div>
        `;
        
        sweetsContainer.appendChild(card);
    });
}

function showHamperDetails(id) {
    const hamper = hampersData.find(item => item.id === id);
    if (hamper) {
        modalSweetTitle.textContent = hamper.title;
        modalSubTitle.textContent = hamper.subtitle;
        modalIngredients.textContent = hamper.contents;
        
        nutritionFacts.innerHTML = '';
        
        for (const [key, value] of Object.entries(hamper.details)) {
            const detailItem = document.createElement('div');
            detailItem.className = 'nutrition-item';
            detailItem.innerHTML = `<strong>${key}:</strong> ${value}`;
            nutritionFacts.appendChild(detailItem);
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

window.onload = createHamperCards;