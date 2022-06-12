const siemas = document.querySelectorAll(".siema img");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup__close");
const popup_img = document.querySelector(".popup__img");
const arrow_left = document.querySelector(".popup__arrow--left");
const arrow_right = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImg = () => {
    if (currentImgIndex === siemas.length - 1) {
        currentImgIndex = 0;
} else {
    currentImgIndex = currentImgIndex + 1;
}
popup_img.src = siemas[currentImgIndex].src;
};

const showPreviousImg = () => {
    if (currentImgIndex === 0) {
        currentImgIndex = siemas.length - 1;
    } else {
        currentImgIndex = currentImgIndex - 1;
    }
    popup_img.src = siemas[currentImgIndex].src;
};

siemas.forEach((siema, index) => {
    siema.addEventListener("click", (e) => {
        popup.classList.remove("hidden");
        popup_img.src = e.target.src;
        currentImgIndex = index;
    });
});

popup_close.addEventListener("click", () => {
    popup.classList.add("hidden")
});

arrow_right.addEventListener("click", showNextImg);

arrow_left.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        showNextImg();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        showPreviousImg();
    }
});