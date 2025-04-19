document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mesajınız gönderildi! Teşekkürler.");
});
const slides = document.querySelectorAll(".slides img");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // 3 saniyede bir otomatik değişim
showSlide(currentIndex);







