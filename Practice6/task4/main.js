'use strict';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    console.log('Имя:', name);
    console.log('Email:', email);

    alert('Проверьте почту!');
    });
});
