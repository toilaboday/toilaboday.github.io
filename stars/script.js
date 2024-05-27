// script.js
document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 50; // Number of stars

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 2; // Size between 2px and 5px
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight/2;

        star.classList.add('star');
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.backgroundColor = getRandomColor();
        star.dataset.info = `Star ${i + 1} information`;

        // Ensure stars do not overlay the moon
        if (!isOverlappingMoon(x, y, size)) {
            starsContainer.appendChild(star);
            blinkStar(star);
        }
    }
});

function getRandomColor() {
    const colors = ['#FFFFFF', '#FFD700', '#FF69B4', '#00FF00', '#00BFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function isOverlappingMoon(x, y, size) {
    const moon = document.getElementById('moon');
    const moonRect = moon.getBoundingClientRect();
    const starRect = {
        left: x,
        top: y,
        right: x + size,
        bottom: y + size,
    };
    return !(starRect.right < moonRect.left || starRect.left > moonRect.right || starRect.bottom < moonRect.top || starRect.top > moonRect.bottom);
}

function blinkStar(star) {
    setTimeout(() => {
        if (!star.matches(':hover')) {
            star.style.opacity = 0.2 + Math.random() * 0.8;
        }
        blinkStar(star);
    }, 1000 + Math.random() * 3000);
}
