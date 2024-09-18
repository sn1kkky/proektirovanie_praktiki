'use strict';
const init = () => {

    console.log(document.querySelector('div'));
    console.log(document.querySelector('ul'));
    console.log(document.querySelectorAll('li')[1]);
    
}

document.addEventListener("DOMContentLoaded", init);