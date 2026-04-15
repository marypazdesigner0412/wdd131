document.addEventListener("DOMContentLoaded", () => {
    // 1. DOM Elements
    const welcomeDiv = document.querySelector("#welcome-message");
    const yearSpan = document.querySelector("#year");
    const lastMod = document.querySelector("#lastModified");

    // 2. LocalStorage & Conditional Branching
    // Check if the user has visited before
    const lastVisit = localStorage.getItem("visitCount") || 0;
    const newCount = parseInt(lastVisit) + 1;
    localStorage.setItem("visitCount", newCount);

    if (welcomeDiv) {
        if (newCount === 1) {
            // First time visit
            welcomeDiv.innerHTML = `<p>Welcome to <strong>Auto Partes Pepe</strong>! How can we help you today?</p>`;
        } else {
            // Returning visit using Template Literals
            welcomeDiv.innerHTML = `<p>Welcome back! This is your visit number ${newCount}. Ready for more parts?</p>`;
        }
    }

    const menuBtn = document.querySelector('#menu-button');
    const nav = document.querySelector('#nav-list');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // 3. Footer Dynamic Data
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;
});

