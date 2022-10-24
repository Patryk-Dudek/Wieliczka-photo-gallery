const THUMBNAILS = document.querySelectorAll(".thumbnail > img");
const POPUP = document.querySelector(".popup");
const POPUP_IMG = document.querySelector(".popup > img")
const BUTTON_CLOSE = document.querySelector(".popup__button--close");
const BUTTON_LEFT = document.querySelector(".popup__button--left");
const BUTTON_RIGHT = document.querySelector(".popup__button--right");

let currentImg;

const closePopup = () => {
    POPUP.classList.add("fadeOut");
    setTimeout(() => {
        POPUP.classList.add("hidden");
    }, 300)
}

const showPreviousImg = () => {
    if (currentImg === 0) {
        currentImg = THUMBNAILS.length - 1;
    } else {
        currentImg--;
    }
    POPUP_IMG.src = THUMBNAILS[currentImg].src;
}

const showNextImg = () => {
    if (currentImg === THUMBNAILS.length - 1) {
        currentImg = 0;
    } else {
        currentImg++;
    }
    POPUP_IMG.src = THUMBNAILS[currentImg].src;
}

THUMBNAILS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (event) => {
        POPUP.classList.remove("fadeOut");
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = event.target.src
        currentImg = index;
    });
});

BUTTON_CLOSE.addEventListener("click", closePopup);

BUTTON_LEFT.addEventListener("click", showPreviousImg);

BUTTON_RIGHT.addEventListener("click", showNextImg);

document.addEventListener("keydown", (event) => {
    console.log(event)
    if (event.code == "ArrowRight") {
        showNextImg();
    }
    if (event.code == "ArrowLeft") {
        showPreviousImg();
    }
    if (event.code == "Escape") {
        closePopup();
    }
})