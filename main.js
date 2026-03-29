// Theme management
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

function toggleTheme() {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

// Disclaimer modal
const disclaimerModal = document.getElementById("disclaimerModal");
const hasSeenDisclaimer = localStorage.getItem("disclaimerSeen");

if (!hasSeenDisclaimer) {
    disclaimerModal.classList.add("active");
}

function closeDisclaimer() {
    disclaimerModal.classList.remove("active");
    localStorage.setItem("disclaimerSeen", "true");
}

function openDisclaimer() {
    disclaimerModal.classList.add("active");
}

// Close modal when clicking outside
disclaimerModal.addEventListener("click", function (e) {
    if (e.target === disclaimerModal) {
        closeDisclaimer();
    }
});

// Private repo modal
const privateRepoModal =
    document.getElementById("privateRepoModal");

function openPrivateRepoModal() {
    privateRepoModal.classList.add("active");
}

function closePrivateRepoModal() {
    privateRepoModal.classList.remove("active");
}

// Close modal when clicking outside
privateRepoModal.addEventListener("click", function (e) {
    if (e.target === privateRepoModal) {
        closePrivateRepoModal();
    }
});
