document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });
});