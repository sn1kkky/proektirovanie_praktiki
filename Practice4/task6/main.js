'use strict';

const checkAge = () => (parseInt(prompt("Ваш возраст:", ""), 10) > 18) || confirm("А родители то разрешили?");

checkAge();
