window.onscroll = function() {
    const block3 = document.getElementById('block3');
    const modal = document.getElementById('modal');
    const middleOfBlock3 = block3.offsetTop + block3.offsetHeight / 2;

    if (window.scrollY >= middleOfBlock3) {
        modal.style.display = 'block';
    }
};

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};