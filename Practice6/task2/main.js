'use strict';
const init = () => {

let liList = document.querySelectorAll('li');
    for(let i of liList){
        i.classList.add('list-item');
        console.log(i.className);
    }
}

document.addEventListener("DOMContentLoaded", init);