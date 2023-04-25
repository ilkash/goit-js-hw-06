const input = document.querySelector("#name-input")
const span = document.querySelector("#name-output")

input.addEventListener('input', onInputAdd)
function onInputAdd(event) {
    if (event.currentTarget.value) {
        span.textContent = event.currentTarget.value;
    } else {
        span.textContent = 'Anonymous'
    }
   
    
}
