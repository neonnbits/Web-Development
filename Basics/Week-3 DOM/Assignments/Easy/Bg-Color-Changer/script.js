function randomColorGenerator(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function getContrastColor(bgColor) {
    let r = parseInt(bgColor.substr(1, 2), 16);
    let g = parseInt(bgColor.substr(3, 2), 16);
    let b = parseInt(bgColor.substr(5, 2), 16);
    
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;
    console.log(brightness);
    return brightness > 128 ? "black" : "white"; // Dark background -> White text, Light background -> Black text
}

function main(){
    let root = document.getElementById("root");
    let mainCard = document.getElementById("main-card");
    let colorPicker = document.getElementById("color-picker");

    for (let i = 0; i < 6; i++) {
        let colorCard = document.createElement("div");
        let cardInfo = document.createElement("p");
        colorCard.classList.add("color-card");
        let color = randomColorGenerator();
        cardInfo.innerText = color;
        colorCard.style.backgroundColor = color;
        colorCard.style.color = getContrastColor(color);
        colorCard.onclick = () => {
            document.querySelectorAll(".color-card").forEach((e) => e.classList.remove("selected"));
            root.style.backgroundColor = color;
            colorCard.classList.add("selected");
        }
        colorCard.appendChild(cardInfo);
        colorPicker.addEventListener("input", function() {
            root.style.backgroundColor = colorPicker.value;
        })
        mainCard.appendChild(colorCard);
    }
}

document.addEventListener('DOMContentLoaded', main);