'use strict';

function printEvenNumbers() {
  let a = parseInt(prompt("начальное число (a):", ""));
  let b = parseInt(prompt("конечное число (b):", ""));

  if (isNaN(a) || isNaN(b)) {
    alert("введите числовые значения.");
    return;
  }

  let result = "";
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      result += i + " ";
    }
  }
  
  if (result) {
    alert("Четные числа: " + result);
  } else {
    alert("Четных чисел нет.");
  }
}

printEvenNumbers();
