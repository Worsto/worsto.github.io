// menu
var navMain = document.querySelector('.top-bar');
var navToggle = document.querySelector('.top-bar__toggle');

navMain.classList.remove('top-bar--nojs');
navMain.classList.add('top-bar--closed');
navMain.classList.remove('top-bar--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('top-bar--closed')) {
    navMain.classList.remove('top-bar--closed');
    navMain.classList.add('top-bar--opened');
  } else {
    navMain.classList.add('top-bar--closed');
    navMain.classList.remove('top-bar--opened');
  }
});

// modal
let toCartButtons = document.querySelectorAll(".featured__button, .catalog-item__button, .catalog-video__button");
let cartPopup = document.querySelector(".modal-cart");
let cartClose = cartPopup.querySelector(".modal-cart__button");
let sizeSelection = cartPopup.querySelector(".size__button")

for (let i = 0; i < toCartButtons.length; i++) {
    toCartButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal--active");
        sizeSelection.focus();
    });
}

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal--active");
});
