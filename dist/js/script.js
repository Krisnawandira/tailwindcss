// navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const FixNav = header.offsetTop;

    if(window.pageYOffset > FixNav) {
        header.classList.add('navbar-fix');1
    } else {
        header.classList.remove('navbar-fix');
    }
}



// burger  
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
 burger.classList.toggle('burger-active');
 navMenu.classList.toggle('hidden');
});