'use strict';

function findMin() {
    let a = parseFloat(prompt("первое число (a):", ""));
    let b = parseFloat(prompt("второе число (b):", ""));
  
    let min = a < b ? a : b;
  
    alert("Меньшее число: " + min);
  }
findMin();
  