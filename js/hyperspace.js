// js/hyperspace.js

window.hyperspaceJump = function(targetUrl) {
    // Create canvas if it doesn't exist
    let canvas = document.getElementById('hyperspace-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'hyperspace-canvas';
        document.body.appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Animation state
    const stars = [];
    const numStars = 500;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width - centerX,
            y: Math.random() * canvas.height - centerY,
            z: Math.random() * canvas.width,
            pz: Math.random() * canvas.width
        });
    }

    let animationId;
    let speed = 2;
    let warp = false;
    let startTime = performance.now();
    const duration = 1200; // ~1.2 seconds

    // Initial dimming
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    overlay.style.zIndex = '9998';
    overlay.style.pointerEvents = 'none';
    overlay.style.transition = 'background-color 0.4s ease';
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        canvas.style.opacity = '1';
    }, 10);

    function animate(time) {
        const elapsed = time - startTime;

        // Sequence steps
        if (elapsed > 300) {
            warp = true;
            speed += 2;
        }

        if (elapsed > duration) {
            cancelAnimationFrame(animationId);
            window.location.href = targetUrl;
            return;
        }

        // Clear with slight trail
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < numStars; i++) {
            let star = stars[i];
            
            star.z -= speed;
            if (star.z <= 0) {
                star.z = canvas.width;
                star.x = Math.random() * canvas.width - centerX;
                star.y = Math.random() * canvas.height - centerY;
                star.pz = canvas.width;
            }

            const sx = star.x / star.z * canvas.width + centerX;
            const sy = star.y / star.z * canvas.height + centerY;

            const px = star.x / star.pz * canvas.width + centerX;
            const py = star.y / star.pz * canvas.height + centerY;

            star.pz = star.z;

            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(sx, sy);
            
            ctx.lineWidth = warp ? 3 : 1;
            ctx.lineCap = "round";
            
            const intensity = Math.min(255, 255 - (star.z / canvas.width) * 255);
            ctx.strokeStyle = `rgba(255, 255, 255, ${intensity / 255})`;
            ctx.stroke();
        }
        
        // Radial Flash
        if (elapsed > duration - 400) {
            const flashAlpha = Math.min(1, (elapsed - (duration - 400)) / 200);
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${flashAlpha})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Final screen turn black
        if (elapsed > duration - 100) {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
};
