'use strict';

let price = prompt("Введите стоимость товара:");
let money = prompt("Введите ваше кол-во денег:");

price = +(price);
money = +(money);

if (isNaN(price) || isNaN(money) || price < 0 || money < 0) { // isNaN проверяет ввели мы числа или нет
  alert("Ошибка");
} else if (price === money) {
  alert("Успешно");
} else if (price > money) {
  let raznica = price - money;
  alert(`У вас не хватает ${raznica} р.`);
} else {
  let sdacha = money - price;
  alert(`Ваша сдача ${sdacha} р.`);
}