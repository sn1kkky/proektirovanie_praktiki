'use strict';

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 8 };

let users = [vasya, petya, masha];

function getAverageAge(users) {
  let totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

console.log(getAverageAge(users));