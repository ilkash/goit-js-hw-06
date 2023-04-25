const formEl = document.querySelector('.login-form')
    
formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    const {
        email,
        password 
    } = event.currentTarget.elements;
    console.log(email.value, password.value)
    if (email.value == '' || password.value == ''){
        alert('заповніть всі поля')
    } else {
        const userData = { email:email.value, password:password.value }
        
        console.log(userData)
           formEl.reset()
    }
 
});

