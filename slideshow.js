const slideContainer = document.getElementById('slide-container');
let slides = [];
let currentSlideIndex = 0;

// Laden der JSON-Daten
fetch('slides.json')
    .then(response => response.json())
    .then(data => {
        slides = data.slides;
        setupSlide();
    });

function setupSlide() {
    const slide = slides[currentSlideIndex];
    const defaultSettings = slides.default || {};

    slideContainer.style.backgroundColor = slide.background || defaultSettings.backgroundColor;
    slideContainer.innerHTML = '';

    let element;
    switch (slide.type) {
        case 'image':
            element = document.createElement('img');
            element.src = slide.source;
            slideContainer.style.backgroundImage = `url(${slide.source})`;
            slideContainer.style.backgroundSize = slide.imageMode || 'cover';
            break;
        case 'video':
            element = document.createElement('video');
            element.src = slide.source;
            element.autoplay = true;
            element.onended = nextSlide;
            slideContainer.appendChild(element);
            break;
        case 'iframe':
            element = document.createElement('iframe');
            element.src = slide.source;
            slideContainer.appendChild(element);
            break;
        case 'html':
            slideContainer.innerHTML = slide.content;
            break;
    }

    setTimeout(nextSlide, slide.displayTime || defaultSettings.displayTime);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    setupSlide();
}

