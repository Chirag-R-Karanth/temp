// js/toggle.js

const lightToDarkMap = {
    'index.html': 'blacklight.html',
    'skills.html': 'bl_skills.html',
    'projects.html': 'bl_projects.html', // Wait, I didn't see projects in the list but it was in the code
    'resume.html': 'bl_resume.html',
    'finance.html': 'bl_finance.html',
    'contact.html': 'bl_contact.html',
    'blog.html': 'bl_blog.html',
    'photography.html': 'bl_photography.html',
    'cooking.html': 'bl_cooking.html',
    'sports.html': 'bl_sports.html'
};

const darkToLightMap = {
    'blacklight.html': 'index.html',
    'bl_skills.html': 'skills.html',
    'bl_projects.html': 'projects.html',
    'bl_resume.html': 'resume.html',
    'bl_finance.html': 'finance.html',
    'bl_contact.html': 'contact.html',
    'bl_blog.html': 'blog.html',
    'bl_photography.html': 'photography.html',
    'bl_cooking.html': 'cooking.html',
    'bl_sports.html': 'sports.html',
    'bl_doodles.html': 'blacklight.html'
};

document.addEventListener('DOMContentLoaded', () => {
    const mascot = document.querySelector('.mascot');
    if (!mascot) return;

    // Determine current side
    const isDark = document.body.classList.contains('dark-side');

    mascot.addEventListener('click', () => {
        let currentPath = window.location.pathname.split('/').pop();
        if (!currentPath) currentPath = 'index.html'; // Default

        let targetUrl = 'index.html';
        
        if (isDark) {
            targetUrl = darkToLightMap[currentPath] || 'index.html';
        } else {
            targetUrl = lightToDarkMap[currentPath] || 'blacklight.html';
        }

        // Trigger Hyperspace
        if (window.hyperspaceJump) {
            window.hyperspaceJump(targetUrl);
        } else {
            window.location.href = targetUrl;
        }
    });
});
