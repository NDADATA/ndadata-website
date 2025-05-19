// script.js - NDA DATA

// Message de bienvenue dans la console
console.log("Bienvenue sur le site de NDA DATA !");

// Exemple d'interaction simple : animation au scroll (si tu ajoutes une classe .fade-in dans ton HTML)
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});
