// Current Year and Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const temp = 40; // °F
const wind = 10; // mph

function calculateWindChill(t, s) {
    return (35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))).toFixed(1);
}

const chillElement = document.getElementById("windChill");

if (temp <= 50 && wind > 3) {
    chillElement.textContent = `${calculateWindChill(temp, wind)}°F`;
} else {
    chillElement.textContent = "N/A";
}