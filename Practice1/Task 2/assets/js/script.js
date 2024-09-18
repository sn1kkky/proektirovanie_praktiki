"use strict";

let lastName = prompt("Введите вашу фамилию:");
let firstName = prompt("Введите ваше имя:");
let middleName = prompt("Введите ваше отчество:");

alert("Фамилия: " + lastName);
alert("Имя: " + firstName);
alert("Отчество: " + middleName);

let isTrue = confirm("Верно ли введено ваше "+lastName+" "+firstName+" "+middleName);
alert("Ответ: " + isTrue);
alert(isTrue);
