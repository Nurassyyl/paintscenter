const burgerBtn = document.querySelector(".burger");
const burgerBtnClose = document.querySelector(".burger-close");
const menu = document.querySelector(".nav-main-mobile");
const body = document.body;

burgerBtn.addEventListener('click', () => {
  menu.classList.add("active");
  body.classList.add("hidden");
})

burgerBtnClose.addEventListener('click', () => {
  menu.classList.remove("active");
  body.classList.remove("hidden");
})

// submenu

const menuLinkBtn = document.querySelector(".nav-main-mobile__btn");
const submenuCloseBtn = document.querySelector(".submenu-close__btn");
const subMenu = document.querySelector(".submenu-m");

menuLinkBtn.addEventListener('click', () => {
  subMenu.classList.add("active");
})

console.log(submenuCloseBtn);

submenuCloseBtn.addEventListener('click', () => {
  subMenu.classList.remove("active");
})