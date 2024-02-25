function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const newColor = document.querySelector(".color");
const newChangeColor = document.querySelector(".change-color");
newChangeColor.addEventListener("click", function () {
    let randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    newColor.textContent = randomColor;
})