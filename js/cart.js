let toCartButtons = document.querySelectorAll(".goods-action .button-deal");
let cartPopup = document.querySelector(".modal-cart");
let cartClose = cartPopup.querySelector(".modal-close-button");
let keepBuying = cartPopup.querySelector(".keep-buying-button");

for (let i = 0; i < toCartButtons.length; i++) {
    toCartButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-active");
        keepBuying.focus();
    });
}

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-active");
});

keepBuying.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-active");
});