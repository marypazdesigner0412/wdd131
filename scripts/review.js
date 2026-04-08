document.addEventListener("DOMContentLoaded", () => {
    // 1. Handle the Review Counter
    // Retrieve the current count from localStorage, default to 0
    let reviewCount = Number(window.localStorage.getItem("review-counter-ls")) || 0;

    // Increment the count because the user just landed here from a submission
    reviewCount++;

    // Store the updated count back to localStorage
    window.localStorage.setItem("review-counter-ls", reviewCount);

    // Display the count in the span
    const displayElement = document.getElementById("submission-count");
    if (displayElement) {
        displayElement.textContent = reviewCount;
    }

    // 2. Handle Footer Metadata
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = `Last Modification: ${document.lastModified}`;
    }
});