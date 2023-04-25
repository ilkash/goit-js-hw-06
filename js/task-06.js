const input = document.querySelector('#validation-input')
const lenght = input.getAttribute("data-length");
input.addEventListener('blur', onBlurInput)

function onBlurInput(event) {
     event.preventDefault();
    const username  = event.target.value;
    if (username.length == lenght ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    }
    else {
     input.classList.remove("valid");
    input.classList.add("invalid");
    }
}

