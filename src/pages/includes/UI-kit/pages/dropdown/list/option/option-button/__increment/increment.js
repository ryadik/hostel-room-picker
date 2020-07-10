const btnsIncrement = document.querySelectorAll('.option-button__increment')
const btnsDecrement = document.querySelectorAll('.option-button__decrement')
const counters = document.querySelectorAll('.option-button__counter')


for (let i = 0; i < btnsIncrement.length; i++) {
  btnsIncrement[i].addEventListener('click', () => {
    btnsDecrement[i].classList.add('option-button__decrement_active')
    counter = Number(counters[i].innerHTML) + 1
    counters[i].innerHTML = counter
  })

  btnsIncrement[i].addEventListener('click', () => {
    let sumCountersValue = 0

    for (cnt of counters) {
      sumCountersValue += Number(cnt.innerHTML)
    }
    let selectionText = ''

    if (sumCountersValue > 1 && sumCountersValue < 5) {
      selectionText = `${sumCountersValue} гостя`
    } else if (sumCountersValue > 5) {
      selectionText = `${sumCountersValue} гостей`
    } else {
      switch (sumCountersValue) {
        case 0:
          selectionText = 'Сколько гостей'
          break
        case 1:
          selectionText = `${sumCountersValue} гость`
          break
        case 5:
          selectionText = `${sumCountersValue} гостей`
          break
      }
    }
    localStorage.setItem('selectionText', selectionText)
    localStorage.setItem('sumCountersValue', sumCountersValue)

  })
}
