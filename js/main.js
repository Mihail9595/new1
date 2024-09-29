const menuBtn = document.querySelector('.menu_btn');
const menuClose = document.querySelector('.menu_close');
const menuList = document.querySelector('.menu_list');
const menuShodow = document.querySelector('.menu--close');

menuBtn.addEventListener('click',()=>{
    menuList.classList.toggle('menu_list-open')
    menuShodow.classList.toggle('menu--open')
});


menuClose.addEventListener('click',()=> {
    menuList.classList.remove('menu_list-open')
    menuShodow.classList.remove('menu--open')
});
