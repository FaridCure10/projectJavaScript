const scrollToTop = document.querySelector('.scrollToTop');
scrollToTop.addEventListener('click',() => {
    window.scrollTo({top:0});
});

window.addEventListener('scroll',() => {
    window.pageYOffset > 100 
    ? (scrollToTop.style.display = 'block') 
    : (scrollToTop.style.display = 'none');
});