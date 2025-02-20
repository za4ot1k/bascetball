document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("passwordInput");
    const videoContainer = document.getElementById("videoContainer");

    input.addEventListener("input", function () {
        if (input.value === "1111") {
            videoContainer.style.display = "block"; // Показуємо відео
        }
    });
});