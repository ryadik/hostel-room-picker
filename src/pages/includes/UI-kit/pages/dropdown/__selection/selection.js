const btnsDecrement = document.querySelectorAll('.option-button__decrement')
const btnsIncrement = document.querySelectorAll('.option-button__increment')
const selectionText = document.querySelector('.dropdown__selection')

// menu (List) - open and close
document.querySelector('.dropdown__selection').addEventListener('click', function () {
  document.querySelector('.dropdown').classList.toggle('dropdown_active')
  document.querySelector('.list').classList.toggle('list_active')
})

for (let i = 0; i < btnsDecrement.length; i++) {
  btnsDecrement[i].addEventListener('click', () => {
    setTimeout(() => {
      selectionText.innerHTML = localStorage.getItem('selectionText')
    }, 100)
  })
  clearTimeout()
}

for (let i = 0; i < btnsIncrement.length; i++) {
  btnsIncrement[i].addEventListener('click', () => {
    setTimeout(() => {
      selectionText.innerHTML = localStorage.getItem('selectionText')
    }, 100)
  })
  clearTimeout()
}

function setSelectionText() {
  
  // clearInterval()
}


