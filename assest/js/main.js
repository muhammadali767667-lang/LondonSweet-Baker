function init() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.getElementById('newsletterForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', init);


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    alert("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var map = L.map('map').setView([lat, lon], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup("You are here!").openPopup();
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}


// Contact Form Validation
(() => {
    'use strict'
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        let isValid = true;

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailEmptyMsg = document.getElementById('emailEmpty');
        const emailInvalidMsg = document.getElementById('emailInvalid');

        emailEmptyMsg.style.display = 'none';
        emailInvalidMsg.style.display = 'none';
        emailInput.classList.remove('is-invalid');

        if (emailValue === '') {
            emailEmptyMsg.style.display = 'block';
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            emailInvalidMsg.style.display = 'block';
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        const phoneInput = document.getElementById('phone');
        const phoneValue = phoneInput.value.trim();
        const phonePattern = /^03[0-9]{2}-[0-9]{7}$/;
        const phoneEmptyMsg = document.getElementById('phoneEmpty');
        const phoneInvalidMsg = document.getElementById('phoneInvalid');

        phoneEmptyMsg.style.display = 'none';
        phoneInvalidMsg.style.display = 'none';
        phoneInput.classList.remove('is-invalid');

        if (phoneValue === '') {
            phoneEmptyMsg.style.display = 'block';
            phoneInput.classList.add('is-invalid');
            isValid = false;
        } else if (!phonePattern.test(phoneValue)) {
            phoneInvalidMsg.style.display = 'block';
            phoneInput.classList.add('is-invalid');
            isValid = false;
        }

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
        }

        if (isValid && form.checkValidity()) {
            Swal.fire({
                icon: "success",
                title: "Form Submission",
                text: "Form submitted successfully!"
            });
            form.reset();
            form.classList.remove('was-validated');
        }
    }, false);
})();


const text = "London Bakery & Sweets";
const paragraph = "Experience the finest handcrafted bakery items\nand traditional sweets made with premium ingredients and time-honored recipes.";

let i = 0;
let j = 0;
const speed1 = 20;
const speed2 = 20;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed1);
    } else {
        setTimeout(typeParagraph, 500);
    }
}

function typeParagraph() {
    if (j < paragraph.length) {
        const char = paragraph.charAt(j);
        if (char === '\n') {
            document.getElementById("type").innerHTML += "<br>";
        } else {
            document.getElementById("type").innerHTML += char;
        }
        j++;
        setTimeout(typeParagraph, speed2);
    }
}

window.onload = typeWriter;


// Counter
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        const updateCount = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    });
});
