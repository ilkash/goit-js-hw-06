const ulEl = document.querySelector('#categories')
const item = ulEl.querySelectorAll('.item')
const lengthCategories = item.length
console.log(`Number of categories:${lengthCategories}`)
console.log('')
item.forEach((el, i, arr) => {
    const title = el.querySelector('h2')  
      const lengthLi = el.querySelectorAll('li')
    console.log(`Category: ${title.textContent}`)
    console.log(`Element: ${lengthLi.length}`)
     console.log('')
})
