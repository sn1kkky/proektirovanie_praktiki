'use strict';

document.addEventListener('DOMContentLoaded', function() {
    let numberOfBlocks = prompt("Введите количество блоков:");

    numberOfBlocks = parseInt(numberOfBlocks);

    if (!isNaN(numberOfBlocks) && numberOfBlocks > 0) {
        for (let i = 0; i < numberOfBlocks; i++) {
            let block = document.createElement('div');
            block.className = 'block';
            block.textContent = `Блок ${i + 1}`;

            document.body.appendChild(block);
        }
    } else {
        alert("Пожалуйста, введите корректное число.");
    }
});