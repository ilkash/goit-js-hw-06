const input = document.querySelector("#name-input")
const span = document.querySelector("#name-output")

input.addEventListener('input', onInputAdd)
function onInputAdd(event) {
    span.textContent = event.currentTarget.value;
  
}