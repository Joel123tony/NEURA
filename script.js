// Advertisements

let currentIndex = 0;

function showSlide(index) {
    const slides = document.getElementById('slides');
    if (!slides) return;

    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const firstSlide = slides.children[0];
    const slideGap = parseFloat(getComputedStyle(slides).gap) || 0;
    const slideWidth = firstSlide.getBoundingClientRect().width;
    slides.style.transform = `translateX(-${currentIndex * (slideWidth + slideGap)}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
window.addEventListener('resize', () => showSlide(currentIndex));

//phone

