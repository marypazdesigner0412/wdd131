// 1. The Data Array
const parts = [
    {
        name: "12V Heavy Duty Starter",
        category: "starters",
        description: "High-torque starter motor for diesel engines.",
        image: "images/heavy_duty.webp" 
    },
    {
        name: "High Output Alternator",
        category: "alternators",
        description: "160 Amp alternator for reliable vehicle power.",
        image: "images/alternator_160.webp"
    },
    {
        name: "O2 Oxygen Sensor",
        category: "sensors",
        description: "Precision sensor for improved fuel efficiency.",
        image: "images/sensor_oxigen.webp"
    }
];

// 2. The Global Display Function
function displayParts(filteredParts) {
    const container = document.querySelector("#catalog-container");
    if (!container) return; // Stop if container is missing

    container.innerHTML = ""; // Clear old cards

    filteredParts.forEach(part => {
        const partCard = `
            <div class="part-card">
                <img src="${part.image}" alt="${part.name}" loading="lazy">
                <div class="card-info">
                    <h3>${part.name}</h3>
                    <p class="category">${part.category.toUpperCase()}</p>
                    <p class="desc">${part.description}</p>
                    <a href="contact.html" class="inquire-btn">Inquire Now</a>
                </div>
            </div>
        `;
        container.innerHTML += partCard;
    });
    console.log("Displayed " + filteredParts.length + " parts.");
}

// 3. Initialization and Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    // Initial load
    displayParts(parts);

    // Button Listeners
    const allBtn = document.querySelector("#all");
    const starterBtn = document.querySelector("#starters");
    const alternatorBtn = document.querySelector("#alternators");

    if (allBtn) {
        allBtn.addEventListener("click", () => displayParts(parts));
    }

    if (starterBtn) {
        starterBtn.addEventListener("click", () => {
            const starters = parts.filter(p => p.category === "starters");
            displayParts(starters);
        });
    }

    if (alternatorBtn) {
        alternatorBtn.addEventListener("click", () => {
            const alternators = parts.filter(p => p.category === "alternators");
            displayParts(alternators);
        });
    }
});