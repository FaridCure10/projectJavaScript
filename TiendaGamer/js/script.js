let btnMenu = document.querySelector('.header__toggle');
let optionsMenu = document.querySelector('.header_ul')

btnMenu.addEventListener('click', () => {
    optionsMenu.classList.toggle('active');
})