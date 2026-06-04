// js/eye_tracking.js

document.addEventListener('DOMContentLoaded', () => {
    const mascot = document.querySelector('.mascot');
    if (!mascot) return;

    const pupils = document.querySelectorAll('.pupil');
    const eyeSockets = document.querySelectorAll('.eye');

    let mouseX = 0;
    let mouseY = 0;

    // Current and Target positions for pupils
    const pupilStates = Array.from(pupils).map(() => ({
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0
    }));

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        eyeSockets.forEach((eye, index) => {
            const rect = eye.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            const dx = mouseX - eyeCenterX;
            const dy = mouseY - eyeCenterY;
            const angle = Math.atan2(dy, dx);

            // Max distance the pupil can move from center (constrained to eye socket)
            const maxDistance = rect.width / 4;
            const distance = Math.min(Math.sqrt(dx * dx + dy * dy) / 10, maxDistance);

            pupilStates[index].targetX = Math.cos(angle) * distance;
            pupilStates[index].targetY = Math.sin(angle) * distance;
        });
    });

    function animate() {
        pupilStates.forEach((state, index) => {
            // Smooth interpolation
            state.currentX += (state.targetX - state.currentX) * 0.15;
            state.currentY += (state.targetY - state.currentY) * 0.15;

            pupils[index].style.transform = `translate(calc(-50% + ${state.currentX}px), calc(-50% + ${state.currentY}px))`;
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Hover Interaction: mascot scale and glow handled in CSS,
    // but we can add more JS-based interactions if needed.
    mascot.addEventListener('mouseenter', () => {
        mascot.classList.add('active');
    });
    mascot.addEventListener('mouseleave', () => {
        mascot.classList.remove('active');
    });
});
