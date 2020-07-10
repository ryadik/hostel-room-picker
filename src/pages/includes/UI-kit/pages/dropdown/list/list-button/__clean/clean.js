const btnClean = document.querySelector('.list-button__clean')
const btnsDecrement = document.querySelectorAll('.option-button__decrement')
const btnsIncrement = document.querySelectorAll('.option-button__increment')
const counters = document.querySelectorAll('.option-button__counter')
const selectionText = document.querySelector('.dropdown__selection')

for (let i = 0; i < btnsDecrement.length; i++) {
  btnsDecrement[i].addEventListener('click', () => {
    setTimeout(() => {
      if (localStorage.getItem('sumCountersValue') == 0) {
        btnClean.classList.remove('list-button__clean_active')
      }
    }, 100)
  })
  clearTimeout()
}
for (let i = 0; i < btnsIncrement.length; i++) {
  btnsIncrement[i].addEventListener('click', () => {
    setTimeout(() => {
      if (localStorage.getItem('sumCountersValue') > 0) {
        btnClean.classList.add('list-button__clean_active')
      }
    }, 100)
  })
  clearTimeout()
}

btnClean.addEventListener('click', () => {
  for (let i = 0; i < counters.length; i++) {
    counters[i].innerHTML = 0
  }
  removeActive()
  localStorage.clear()
  selectionText.innerHTML = 'Сколько гостей'
})

function removeActive () {
  for (let i = 0; i < btnsDecrement.length; i++) {
    btnsDecrement[i].classList.remove('option-button__decrement_active')
  }
  btnClean.classList.remove('list-button__clean_active')
}