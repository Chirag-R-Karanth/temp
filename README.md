# Chirag R Karanth — Dual-Realm Personal Website

A multi-page personal website inspired by the duality of Star Wars, featuring a professional "Light Side" and a cyberpunk "Dark Side" (Blacklight Mode).

## 🌌 Overview

This project is a fully functional, framework-free personal website that serves as a professional portfolio and a creative outlet. The site shifts between two parallel realms:

- **Light Side**: Professionalism, Engineering, Sports, Photography, and Personal Growth.
- **Dark Side (Blacklight Mode)**: Late-night coding, chaos, obsession, and curiosity.

The mascot—a chibi-style character—acts as the portal between these two worlds.

## ✨ Key Features

### 🦉 Interactive Mascot System
- **Custom Chibi Mascot**: A unique identity for the site, replacing traditional realistic avatars.
- **Global Eye Tracking**: The mascot's eyes smoothly track the cursor across the screen using interpolation for a lifelike feel.
- **Theme Switcher**: Clicking the mascot triggers a high-speed journey between realms.

### 🚀 Hyperspace Transition
- **Canvas-based Animation**: A 1-second "hyperspace jump" sequence featuring radial flashes, star streaks, and warp zooms.
- **Context-Aware Switching**: Transitions maintain the user's current page context (e.g., switching from `skills.html` to `bl_skills.html`).

### 🌗 Parallel Realms
- **Light Side**: Warm peach tones (#FFE7D1), minimalist layouts, and modern typography.
- **Dark Side**: Deep blacks (#050505), neon red accents (#FF2E2E), glitch effects, and "scrawl" style parodies of professional content.
- **Dark Side Doodles**: Interactive sketches on the `blacklight.html` page that mock the professional version of Chirag.

## 🛠️ Technology Stack
- **HTML5**: Semantic structure for accessibility and SEO.
- **CSS3**: Custom properties, glassmorphism, and cyberpunk animations (glitch/glow).
- **Vanilla JavaScript**: Custom eye-tracking logic and hyperspace animation (No frameworks).

## 📂 Project Structure
```text
/assets
    /mascot     # SVG assets for mascot and eyes
    /icons      # Social and navigation icons
/css
    style.css      # Light side styles
    blacklight.css # Dark side styles
    shared.css     # Common layouts and mascot logic
/js
    eye_tracking.js # Cursor following logic
    hyperspace.js   # Canvas warp animation
    toggle.js       # Realm switching logic
index.html          # Professional home
blacklight.html     # Cyberpunk home
...                 # 18+ individual realm pages
```

## 🚀 Getting Started
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Click the mascot in the bottom-right corner to initiate your first hyperspace jump.

## 🎨 Design Philosophy
The website isn't just about a color change; it's about a personality shift. While the Light Side is polished and organized, the Dark Side represents the "3 AM Neovim" version of Chirag—obsessive, experimental, and slightly chaotic.

---
*Created by Chirag R Karanth*
