// Advertisements

let currentIndex = 0;

function showSlide(index) {
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

//phone

