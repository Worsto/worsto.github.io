// Слайдер

let sliderButtons = document.querySelectorAll(".slider-radio");
let sliderInformation = document.querySelectorAll(".slider-item");
let sliderBackward = document.querySelector(".slider-backward");
let sliderForward = document.querySelector(".slider-forward");
let sliderBg = document.querySelector(".slider");
function slideKiller(array1, array2, bgBox) {
    for (let i = 0; i < array1.length; i++) {
        array1[i].classList.remove("current");
        array2[i].classList.remove("slide-current");
        let classCount = i + 1;
        bgBox.classList.remove("slider-" + classCount);
    }
};

for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        if (!sliderButtons[i].classList.contains("current")) {
            slideKiller(sliderButtons, sliderInformation, sliderBg);
            let classCount = i + 1;
            sliderBg.classList.add("slider-" + classCount);
            sliderButtons[i].classList.add("current");
            sliderInformation[i].classList.add("slide-current");
        }
    });
};

sliderBackward.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let i = 0; i < sliderInformation.length; i++) {
        if (sliderInformation[i].classList.contains("slide-current")) {
            if (i = 0) {
                slideKiller(sliderButtons, sliderInformation, sliderBg);
                let arrCounter = sliderInformation.length - 1;
                sliderBg.classList.add("slider-" + sliderInformation.length);
                sliderButtons[arrCounter].classList.add("current");
                sliderInformation[arrCounter].classList.add("slide-current");
            } else {       
                slideKiller(sliderButtons, sliderInformation, sliderBg);
                let classCount = i - 1;
                sliderBg.classList.add("slider-" + i);
                sliderButtons[classCount].classList.add("current");
                sliderInformation[classCount].classList.add("slide-current");
            }
        }
    }
})

// Табы

let tabsButtons = document.querySelectorAll(".tabs-button");
let tabsInformation = document.querySelectorAll(".tabs-information");

for (let i = 0; i < tabsButtons.length; i++) {
    tabsButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        if (!tabsButtons[i].classList.contains("tabs-button-current")) {
            for (let i = 0; i < tabsButtons.length; i++) {
                tabsButtons[i].classList.remove("tabs-button-current");
                tabsInformation[i].classList.remove("tabs-box-current");
            }
        }
        tabsButtons[i].classList.add("tabs-button-current");
        tabsInformation[i].classList.add("tabs-box-current");
    });
}