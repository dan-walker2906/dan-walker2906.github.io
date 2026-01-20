# Darpan Parekh Portfolio - Professional Resume Design

A lightweight, high-performance portfolio website redesign for Darpan Parekh, Senior Software Engineer. This version utilizes modern glassmorphism aesthetics and is built using only vanilla HTML, CSS, and JavaScript for seamless deployment and easy maintenance.

## Features
- **Resume-First Layout**: Focused on professional experience and technical skills.
- **Glassmorphism UI**: Semi-transparent cards with backdrop blurs and subtle borders.
- **Responsive Animations**: Smooth scroll-reveal effects and interactive hover states.
- **Micro-interactions**: Animated timeline dots and interactive contact form feedback.
- **Mobile First**: Fully responsive design that adapts from smartphones to 4K displays.
- **SEO Optimized**: Semantic HTML tags and meta descriptions included.

## Prerequisites
No special software is required. You only need:
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (VS Code, Sublime Text, or Notepad) for making updates

## Installation & Setup
1. Download or clone this project repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same directory.
3. To customize the text:
    - Open `index.html` in your text editor.
    - Locate the sections for `Experience`, `Skills`, and `Projects`.
    - Edit the text within the `<li>`, `<h3>`, and `<p>` tags to match your latest achievements.
4. To change images:
    - Find the `background-image` style urls in the `Projects` section and replace them with your own Unsplash or local image links.

## How to Run Locally
Simply open the `index.html` file in your preferred web browser:
- Double-click `index.html` in your file explorer.
- **OR** right-click `index.html` and select "Open with..." and choose your browser.

## Deployment to GitHub Pages
Since this is a static site (No Build required), it is perfect for `dan-walker2906.github.io`:
1. Push these files to your GitHub repository.
2. Go to Repository **Settings** > **Pages**.
3. Under "Branch", select `main` (or your default branch) and the root folder `/`.
4. Click **Save**. Your site will be live at `https://dan-walker2906.github.io` within minutes.

## Project Structure
- `index.html`: Contains the content and structural layout.
- `style.css`: Defines the modern glassmorphism look and responsive grid systems.
- `script.js`: Handles scroll animations, mobile menu, and form interactions.

## Troubleshooting
- **Animations not working?** Ensure `script.js` is correctly linked at the bottom of `index.html`.
- **Icons missing?** Ensure you have an active internet connection to load FontAwesome from the CDN.
- **Layout looks weird on mobile?** Ensure the `<meta name="viewport">` tag is present in the head of your HTML.
