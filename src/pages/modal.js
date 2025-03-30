document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input[required]");
    const saveButton = form.querySelector(".checkout__save");
    const modal = document.querySelector(".backdrop");
    const closeButton = modal.querySelector(".checkout__modal-close"); // Шукаємо кнопку в modal, а не в form!

    function checkInputs() {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
        if (allFilled) {
            saveButton.style.backgroundColor = "black";
            saveButton.style.color = "white";
        } else {
            saveButton.style.backgroundColor = "";
            saveButton.style.color = "";
        }
    }

    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
        if (allFilled) {
            modal.classList.remove("is-hidden");
        }
    });

    // Закриття при кліку на затемнений фон
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("is-hidden");
        }
    });

    // Закриття при кліку на кнопку (крестик)
    closeButton.addEventListener("click", function() {
        modal.classList.add("is-hidden");
    });
});