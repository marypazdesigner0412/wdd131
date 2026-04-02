const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = new Date(document.lastModified).toLocaleString();
}