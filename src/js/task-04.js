const spam = document.querySelector("#value")
const subButton = document.querySelector('[data-action="decrement"]')
const addButton = document.querySelector('[data-action="increment"]')
 let counterValue = 0
subButton.addEventListener("click", (event) => {
   counterValue -= 1
  spam.textContent = counterValue
})

addButton.addEventListener("click", (event) => {
counterValue += 1
  spam.textContent = counterValue
})