const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlayElem = document.querySelector('.menu__overlay');
    

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlayElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__percent-value'),
    lines = document.querySelectorAll('.skills__percent-download span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
        if (menu) {
        menu.classList.remove('active');
        }
    });
    });





    