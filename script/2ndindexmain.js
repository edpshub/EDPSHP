document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carousel = document.querySelector('.card-carousel');
    const cards = document.querySelectorAll('.card');

    if (!carousel || cards.length === 0) return;

    // --- Configuration ---
    // If cards are few, duplicate them to create a full circle effect where sides are visible
    // We want at least 8 cards to form a nice cylinder
    // 8 cards = 45 degrees per card. Visual neighbors are +/- 45 deg.

    // Safety check to prevent infinite loops if 0 cards
    if (cards.length > 0 && cards.length < 8) {
        const originalCards = Array.from(cards);
        let currentCount = cards.length;

        while (currentCount < 8) {
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                // Remove ID to prevent duplicates in DOM
                clone.removeAttribute('id');
                carousel.appendChild(clone);
            });
            currentCount *= 2;
        }
    }

    // Re-select all cards after cloning
    const allCards = document.querySelectorAll('.card');
    const totalCards = allCards.length;
    // 360 degrees divided by number of cards
    const theta = 360 / totalCards;
    let radius = 0;

    // Current rotation angle of the carousel
    let currentRotation = 0;

    // --- Initialization ---
    function init() {
        const cardWidth = parseFloat(getComputedStyle(allCards[0]).width);
        // Calculate radius to arrange cards in a circle with some spacing
        // r = (w / 2) / tan(PI / n)
        // Adjust gap factor to ensure visibility. 
        // With 8 cards, 45 deg. 
        const gapFactor = 1.1;
        radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / totalCards)) * gapFactor;

        // Apply initial transform to each card
        allCards.forEach((card, index) => {
            const angle = theta * index;
            // Rotate card to its angle, then push it out by radius
            card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
            // Assign index for tracking
            card.dataset.index = index;
        });

        updateCarousel();
    }

    // --- Interaction Logic ---
    let isDragging = false;
    let startX = 0;
    let initialRotation = 0;

    // Scroll / Wheel
    carouselContainer.addEventListener('wheel', (e) => {
        // Only capture if target is a card or within a specific proximity
        // This allows the user to scroll the PAGE when their mouse is not strictly on a card
        const isOverCard = e.target.closest('.card');

        if (!isOverCard) {
            // Allow default page scroll behavior
            return;
        }

        e.preventDefault();
        // Rotate based on scroll direction
        const delta = e.deltaY * 0.2; // Sensitivity
        currentRotation -= delta;
        updateCarousel();
    }, { passive: false });

    // Drag (Mouse & Touch)
    const startDrag = (e) => {
        isDragging = true;
        startX = getClientX(e);
        initialRotation = currentRotation;
        carousel.style.transition = 'none'; // Disable transition for immediate follow
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        const x = getClientX(e);
        const diff = x - startX;
        // Sensitivity factor for dragging
        currentRotation = initialRotation + (diff * 0.5);
        carousel.style.transform = `translateZ(${-radius}px) rotateY(${currentRotation}deg)`;
    };

    const endDrag = () => {
        isDragging = false;
        // Snap to nearest card? Optional. For now, let it float or maybe add momentum?
        // Let's snap to nearest card for cleaner UI
        snapToNearest();
        carousel.style.transition = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)';
    };

    carouselContainer.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', endDrag);

    carouselContainer.addEventListener('touchstart', startDrag);
    window.addEventListener('touchmove', onDrag);
    window.addEventListener('touchend', endDrag);


    function getClientX(e) {
        return e.touches ? e.touches[0].clientX : e.clientX;
    }

    function snapToNearest() {
        const segment = theta;
        // round currentRotation to nearest multiple of theta
        const nearest = Math.round(currentRotation / segment) * segment;
        currentRotation = nearest;
        updateCarousel();
    }

    function updateCarousel() {
        // Rotate the entire carousel container
        // We translateZ backwards by radius so the front card is at Z=0 (screen plane)
        carousel.style.transform = `translateZ(${-radius}px) rotateY(${currentRotation}deg)`;

        // Update active class based on rotation
        // Normalize rotation to 0-360 range for checking
        let normalizedRotation = (-currentRotation) % 360;
        if (normalizedRotation < 0) normalizedRotation += 360;

        // Which card index is closest to 0 (front)?
        // index * theta is the card's angle. 
        // We want |(index * theta) - normalizedRotation| to be minimal (handling wrap around)

        let minDiff = 360;
        let activeIndex = -1;

        allCards.forEach((card, index) => {
            card.classList.remove('active');

            const cardAngle = theta * index;
            let diff = Math.abs(cardAngle - normalizedRotation);
            // Handle wrap around (e.g. 350 vs 10 is diff 20, not 340)
            if (diff > 180) diff = 360 - diff;

            if (diff < minDiff) {
                minDiff = diff;
                activeIndex = index;
            }
        });

        if (activeIndex !== -1) {
            allCards[activeIndex].classList.add('active');
        }
    }

    // Handle Resize
    window.addEventListener('resize', init);

    // Initial call
    // Wait for images to load or timeout slightly to ensure width is calculated
    setTimeout(init, 100);
});
