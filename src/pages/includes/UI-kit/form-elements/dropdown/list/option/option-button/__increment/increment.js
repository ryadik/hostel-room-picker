import SetSelectionText from '@models/SetSelectionText.js'

const btnsIncr = document.querySelectorAll('.option-button__increment')

btnsIncr.forEach((btn, i, arr)  => {
  btn.addEventListener('click', (e) => {
    // change counters values

    const curCounter =  e.target.parentElement.querySelector('.option-button__counter'),
          curDropDown = e.target.offsetParent;

    curCounter.innerHTML = +curCounter.innerHTML + 1

    // set selection text

    const curDropCounters = getCountersVulues(curDropDown.querySelectorAll('.option-button__counter')),
          selectionText = new SetSelectionText(...curDropCounters),
          curInput = curDropDown.querySelector('.dropdown__selection');

    if (+curDropDown.dataset.id === 1) {
      curInput.value = selectionText.generateGuestsText()
    } else if (+curDropDown.dataset.id === 2) {
      curInput.value = selectionText.generateRoomsText()
    }
  })
})


function getCountersVulues (elems) {
  const valuesArray = []

  elems.forEach(elem => {
    valuesArray.push(+elem.innerHTML)
  })

  return valuesArray
}
