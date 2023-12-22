const data = {
    "manualMode": false,
    "default": {
        "transitionTime": 500,
        "transitionType": "fade",
        "backgroundColor": "#FFFFFF"
    },
    "slides": [
        {
            "type": "image",
            "source": "bild1.jpg",
            "displayTime": 10000,
            "background": "#000000",
            "imageMode": "cover"
        },
        {
            "type": "image",
            "source": "bild4.jpg",
            "displayTime": 10000,
            "background": "#FFFFFF",
            "imageMode": "cover"
        },
        {
            "type": "image",
            "source": "bild2.jpg",
            "displayTime": 13000,
            "background": "#FFFFFF",
            "imageMode": "cover"
        },
        {
            "type": "image",
            "source": "bild3.jpg",
            "displayTime": 18000,
            "background": "#DDDDDD",
            "imageMode": "cover"
        }
    ]
}

const slideContainer = document.getElementById('slide-container');
let manualMode = false;
let slides = [];
let currentSlideIndex = 0;

// Laden der JSON-Daten
// fetch('slides.json')
//     .then(response => response.json())
//     .then(data => {
slides = data.slides;
manualMode = data.manualMode;
setupSlide();

// });

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

    if (manualMode) {
        element.onclick = nextSlide;
        slideContainer.onclick = nextSlide;
    } else {
        setTimeout(nextSlide, slide.displayTime || defaultSettings.displayTime);
    }
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    setupSlide();
}

