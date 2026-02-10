const no = document.querySelector("#no");
const yes = document.querySelector("#yes");
const container = document.querySelector("button");
const imageReplace = document.querySelector(".image-replace"); 
const imageHolder= document.querySelector(".image-holder");
const text = document.querySelector("p"); 
const happy = document.querySelector(".image-happy");
const buttonContainer = document.querySelector(".button-container");
const body = document.querySelector("body");

const img = "assets/flowers\ falling.gif";
const sizeIncrement = 150; 

no.addEventListener("click", () => {

    // Get current dimensions using offset. Includes padding, border, vertical scroll bar 
    let currentWidth = no.offsetWidth;
    let currentHeight = no.offsetHeight; 
    
    // Calculate new dimensions
    let newWidth = currentWidth + sizeIncrement; 
    let newHeight = currentHeight + sizeIncrement / 2;
    
    // Apply the new dimensions
    no.style.width = newWidth + "px";
    no.style.height = newHeight + "px";

    let currentFontSize = parseFloat(window.getComputedStyle(no).fontSize);
    no.style.fontSize = (currentFontSize + 10) + "px";
    
    no.textContent = "WHY????";
    imageReplace.style.display = "flex";
    imageHolder.style.display = "none";

    text.textContent = "WHYYYYYYYYYYYYYY????!!!";

    console.log(`Button resized to: ${newWidth}px width, ${newHeight}px height`);
});

yes.addEventListener("click", () => {

    text.textContent = "YAAAAAAAAAAY!!! ❤️";
    happy.style.display = "flex";
    imageHolder.style.display = "none";
    imageReplace.style.display = "none";
    body.style.backgroundImage = "none";
    body.style.backgroundImage = `url('${img}')`;
    buttonContainer.style.display = "none";

});
