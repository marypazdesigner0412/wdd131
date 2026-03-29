const today = new Date();

document.getElementById("currentyear").innerHTML = `©${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML =
    `Last Modified: ${document.lastModified}`;

const temperature = 40; // °F  (<= 50)
const windSpeed = 10;   // mph (>= 5)

document.getElementById("windChill").innerHTML =
    `${calculateWindChill(temperature, windSpeed)}`;

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuButton.innerHTML = navMenu.classList.contains("show") ? "✕" : "☰";
});

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed >= 5) {
        const windChill =
            35.74 +
            (0.6215 * temperature) -
            (35.75 * Math.pow(windSpeed, 0.16)) +
            (0.4275 * temperature * Math.pow(windSpeed, 0.16));

        return Math.round(windChill);
    }
    return "N/A";
}