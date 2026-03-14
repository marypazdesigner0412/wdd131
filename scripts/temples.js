const hamButton = document.querySelector('#hamburger');
const nav = document.querySelector('.nav-list');

hamButton.addEventListener('click', () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;