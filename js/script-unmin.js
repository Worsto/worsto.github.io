// Slider

if (document.querySelector(".slider")) {
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
            let classCountFix = i - 1;
            let firstSlidejumper = sliderInformation.length - 1;
            if (sliderInformation[i].classList.contains("slide-current")) {
                slideKiller(sliderButtons, sliderInformation, sliderBg);
                if (i !== 0) {
                    sliderBg.classList.add("slider-" + i);
                    sliderButtons[classCountFix].classList.add("current");
                    sliderInformation[classCountFix].classList.add("slide-current");
                } else {
                    sliderBg.classList.add("slider-" + sliderInformation.length);
                    sliderButtons[firstSlidejumper].classList.add("current");
                    sliderInformation[firstSlidejumper].classList.add("slide-current");
                    break;
                }
            }
        }
    });



    sliderForward.addEventListener("click", function (evt) {
        evt.preventDefault();
        for (let i = 0; i < sliderInformation.length; i++) {
            let firstSlidejumper = sliderInformation.length - 1;
            let nextSlideBg = i + 2;
            let nextSlide = i + 1;
            if (sliderInformation[i].classList.contains("slide-current")) {
                slideKiller(sliderButtons, sliderInformation, sliderBg);
                if (i !== firstSlidejumper) {
                    sliderBg.classList.add("slider-" + nextSlideBg);
                    sliderButtons[nextSlide].classList.add("current");
                    sliderInformation[nextSlide].classList.add("slide-current");
                    break;
                } else {
                    sliderBg.classList.add("slider-" + 1);
                    sliderButtons[0].classList.add("current");
                    sliderInformation[0].classList.add("slide-current");
                }
            }
        }
    });
}

// Tabs

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

// Write us

if (document.querySelector(".modal-write-us")) {
    let writeUsButton = document.querySelector(".write-us-button");
    let writeUsPopup = document.querySelector(".modal-write-us");
    let writeUsClose = writeUsPopup.querySelector(".modal-close-button");
    let writeUsForm = writeUsPopup.querySelector(".write-us-form");
    let writeUsName = writeUsPopup.querySelector(".popup-form-name");
    let writeUsEmail = writeUsPopup.querySelector(".popup-form-email");

    writeUsButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsPopup.classList.add("modal-active");
        writeUsName.focus();
    });

    writeUsClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-active");
        writeUsPopup.classList.remove("modal-error");
    });

    writeUsForm.addEventListener("submit", function (evt) {
        if (!writeUsName.value || !writeUsEmail.value) {
            evt.preventDefault();
            writeUsPopup.classList.remove("modal-error");
            writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
            writeUsPopup.classList.add("modal-error");
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (writeUsPopup.classList.contains("modal-active")) {
                evt.preventDefault();
                writeUsPopup.classList.remove("modal-active");
                writeUsPopup.classList.remove("modal-error");
            }
        }
    });
}
// Cart 

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

// Map 

if (document.querySelector(".modal-map")) {
    let mapLauncher = document.querySelector(".map-mini");
    let mapPopup = document.querySelector(".modal-map");
    let mapClose = mapPopup.querySelector(".modal-close-button");
    let pageBody = document.querySelector("body");

    function showFunc(button, popup) {
        button.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-active");
        });
    }

    function closeFunc(button, popup) {
        button.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-active");
        });
        
        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (popup.classList.contains("modal-active")) {
                    evt.preventDefault();
                    popup.classList.remove("modal-active");
                }
            }
        }); 
    }

    showFunc(mapLauncher, mapPopup);
    closeFunc(mapClose, mapPopup);
}

// Sort 

let sortButtons = document.querySelectorAll(".sort-button");
let sortArrows = document.querySelectorAll(".sort-arrow");

function sort(array, className) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            if (!array[i].classList.contains(className)) {
                for (let i = 0; i < array.length; i++) {
                    array[i].classList.remove(className);
                }
            }
            array[i].classList.add(className);
        });
    }
}

sort(sortButtons, "sort-category-current");
sort(sortArrows, "sort-arrow-current");