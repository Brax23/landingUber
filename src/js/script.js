let hamburger = document.querySelector('.hamburger');
let menuElem = document.querySelector('.menu');
let menuItem = document.querySelector('.menu_item');

hamburger.onclick = function() {
    menuElem.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
};

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menuElem.classList.toggle('menu_active');
})
})
 