document.getElementById("validationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById("name");
    const yearInput = document.getElementById("birthYear");
    const nameError = document.getElementById("nameError");
    const yearError = document.getElementById("yearError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    yearError.textContent = "";
    nameInput.classList.remove("error");
    yearInput.classList.remove("error");

    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Имя не может быть пустым";
        nameInput.classList.add("error");
        isValid = false;
    } else if (nameInput.value.trim().length < 2) {
        nameError.textContent = "Имя должно содержать минимум 2 символа";
        nameInput.classList.add("error");
        isValid = false;
    }

    const birthYear = yearInput.value.trim();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (birthYear === "") {
        yearError.textContent = "Год рождения не может быть пустым";
        yearInput.classList.add("error");
        isValid = false;
    } else if (birthYear.length !== 4 || isNaN(birthYear)) {
        yearError.textContent = "Год рождения должен состоять из 4 цифр";
        yearInput.classList.add("error");
        isValid = false;
    } else if (age < 18) {
        yearError.textContent = "Тебе 18 то нет";
        yearInput.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Одобрено!";
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }
});

document.getElementById("birthYear").addEventListener("input", function(event) {
    this.value = this.value.replace(/\D/g, '');
});