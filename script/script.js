const scrollToTop = document.querySelector('.scrollToTop');
scrollToTop.addEventListener('click',() => {
    window.scrollTo({top:0});
});

window.addEventListener('scroll',() => {
    window.pageYOffset > 20 
    ? (scrollToTop.style.display = 'block') 
    : (scrollToTop.style.display = 'none');
});

const navbarResponsive = document.querySelector('.header__nav');
const icon = document.querySelector('.fa-bars');
icon.addEventListener('click', () => {
    if(navbarResponsive.className === "header__nav"){
        navbarResponsive.className += " responsive"; 
    }else{
        navbarResponsive.className = "header__nav";
    }
});

const links = document.querySelectorAll('.header__ul');
links.forEach((link) => 
    link.addEventListener('click', () =>
        navbarResponsive.classList.remove('responsive')
    )
);