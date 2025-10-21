// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Accordion functionality
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('show');

    // Close all accordions
    document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('show');
    });

    // Reset all toggle icons
    document.querySelectorAll('.toggle-icon').forEach(icon => {
        icon.textContent = '+';
    });

    // Open clicked accordion if it wasn't open
    if (!isOpen) {
        content.classList.add('show');
        button.querySelector('.toggle-icon').textContent = '-';
    }
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Form submission handlers
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;

    if (email) {
        alert(`¡Gracias por suscribirte! Recibirás las últimas noticias en ${email}`);
        event.target.reset();
    } else {
        alert('Por favor ingresa un email válido');
    }
}

function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !phone || !email || !message) {
        alert('Por favor completa todos los campos');
        return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hola Dr. Borjas, me contacto desde su sitio web.%0A%0A*Nombre:* ${name}%0A*Teléfono:* ${phone}%0A*Email:* ${email}%0A*Mensaje:* ${message}`;

    // WhatsApp URL
    const whatsappURL = `https://wa.me/584246197263?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form
    event.target.reset();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize accordions - open first two by default
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-content');
    if (accordions.length >= 2) {
        accordions[0].classList.add('show');
        accordions[1].classList.add('show');

        // Update toggle icons
        const headers = document.querySelectorAll('.accordion-header');
        if (headers.length >= 2) {
            headers[0].querySelector('.toggle-icon').textContent = '-';
            headers[1].querySelector('.toggle-icon').textContent = '-';
        }
    }
});