let imageElement = document.getElementById("image");
let warningelement = document.getElementById("warningMessage");
let originalImageWidth = 200;
let incre = "Too big.Decrease the size of the image";
let decr = "Can't Visible.Increase the size of the element";
let spanelement = document.getElementById("imageWidth");
imageElement.style.width = originalImageWidth + "px";

function incrementButton() {
    originalImageWidth = originalImageWidth + 5
    imageElement.style.width = originalImageWidth + "px"
    spanelement.textContent = imageElement.style.width
    if (originalImageWidth > 300) {
        warningelement.textContent = incre
    } else {
        warningelement.textContent = ""
    }
}

function decrementButton() {
    originalImageWidth = originalImageWidth - 5
    imageElement.style.width = originalImageWidth + "px"
    spanelement.textContent = imageElement.style.width
    if (originalImageWidth < 100) {
        warningelement.textContent = decr
    } else {
        warningelement.textContent = ""
    }
}