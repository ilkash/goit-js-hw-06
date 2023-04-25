function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnColor = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const span = document.querySelector('.color')
btnColor.addEventListener('click', onClickButtonColor)
function onClickButtonColor(event) {
  const color = getRandomHexColor()
  bodyEl.style.backgroundColor = color
  span.textContent = getRandomHexColor()
}