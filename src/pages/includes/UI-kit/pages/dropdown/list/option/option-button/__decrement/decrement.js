const drop = document.querySelectorAll('.dropdown') // all dropdown on page

for (let i = 0; i < drop.length; i++) {
  let btns = document.querySelectorAll(`div[data-id="${i + 1}"] .option-button__decrement`), // btns in current doprdown
      cntrs = document.querySelectorAll(`div[data-id="${i + 1}"] .option-button__counter`), // counters in current dropdown
      selectionField = document.querySelector(`div[data-id="${i + 1}"] .dropdown__selection`) // selection filed in current dropdown

  for (let k = 0; k < btns.length; k++) {
    btns[k].addEventListener('click', () => {
      counterDecrement(cntrs[k], btns[k])
      if (i == 0){
        guestSelectionText(cntrs, selectionField)
      }
      if (i == 1) {
        roomSelectionText(cntrs, selectionField)
      }
    })
  }
}


function roomSelectionText (cntrs = 0, selectionField = '') {
  let selectionText = '',
      rooms = '',
      beds = '',
      bathrooms = '',
      sumCntrs = sumCountersValue(cntrs) 

  for (let i = 0; i < cntrs.length; i++) {
    switch (i) {
      case 0:
        switch (Number(cntrs[i].innerHTML)) {
          case 1:
            rooms = `${cntrs[i].innerHTML} спальня,`
            break
          case 2:
          case 3:
          case 4:
            rooms = `${cntrs[i].innerHTML} спальни,`
            break
          default:
            rooms = ''
          }
        break
      case 1:
        switch (Number(cntrs[i].innerHTML)) {
          case 1:
            beds = `${cntrs[i].innerHTML} кровать,`
            break
          case 2:
          case 3:
          case 4:
            beds = `${cntrs[i].innerHTML} кровати,`
            break
          default:
            beds = ''
          }
        break
      case 2:
        switch (Number(cntrs[i].innerHTML)) {
          case 1:
            bathrooms = `${cntrs[i].innerHTML} ванная комната`
            break
          case 2:
          case 3:
          case 4:
            bathrooms = `${cntrs[i].innerHTML} ванные комнаты`
            break
          default:
            bathrooms = ''
          }
        break
    }
  }

  selectionText = (sumCntrs == 0) ? 'Удобство номера' : `${rooms} ${beds} ${bathrooms}`

  selectionField.innerHTML = selectionText
} 

function guestSelectionText (cntrs = 0, selectionField = '') {
  let selectionText = '',
      guests = '',
      infants = '',
      sumCntrs = sumCountersValue(cntrs) 
  for (i = 0; i < cntrs.length; i++) {
    if (i == 0 || i == 1) {
      sumValue = sumCountersValue([cntrs[0], cntrs[1]])
      switch (sumValue) {
        case 1:
          guests = `${sumValue} гость`
          break
        case 2:
        case 3:
        case 4:
          guests = `${sumValue} гостя`
          break
        case 5:
          guests = `${sumValue} гостей`
          break
      }
    } else {
      switch (Number(cntrs[i].innerHTML)) {
        case 1:
          infants = `, ${cntrs[i].innerHTML} младенец`
          break
        case 2:
        case 3:
        case 4:
          infants = `, ${cntrs[i].innerHTML} младенеца`
          break
        case 5:
          infants = `, ${cntrs[i].innerHTML} младенецев`
          break
      }
    }
  }

  selectionText = (sumCntrs == 0) ? 'Сколько гостей' : `${guests} ${infants}`

  selectionField.innerHTML = selectionText
}

function counterDecrement (cntrs, btns) {
  counter = Number(cntrs.innerHTML) - 1
    
  if (cntrs.innerHTML != 0) {
    cntrs.innerHTML = counter
  } else {
    btns.classList.remove('option-button__decrement_active')
  }
}

function sumCountersValue (cntrs) {
  let sum = 0
  for (cnt of cntrs) {
    sum += Number(cnt.innerHTML)
  }
  return sum
}