const menu = document.getElementById("header__nav__mobile__wrapper")
const menuOpener = document.getElementById("header__nav__mobile__menu__opener")
const menuCloser = document.getElementById("header__nav__mobile__menu__closer")
const menuOverlay = document.querySelector("#header__nav__mobile__wrapper .header__nav__mobile__overlay")

menuOpener.addEventListener("click", () => {
  menu.style.left = "0";
  menu.style.opacity = "1";
  menu.style.pointerEvents = "all";
})
menuCloser.addEventListener("click", () => {
  menu.style.left = "";
  menu.style.opacity = "";
  menu.style.pointerEvents = "";
})
menuOverlay.addEventListener("click", () => {
  menu.style.left = "";
  menu.style.opacity = "";
  menu.style.pointerEvents = "";
})