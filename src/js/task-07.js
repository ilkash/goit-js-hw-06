const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

input.addEventListener('input', (event) => {

    const fontEl = event.target.value;
    span.style.fontSize = `${fontEl}px`
})