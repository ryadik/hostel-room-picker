const drop = document.querySelectorAll('.dropdown') // all dropdown on page

for (let i = 0; i < drop.length; i++) {
  let btns = document.querySelectorAll(`div[data-id="${i + 1}"] .option-button__decrement`) // btns in current doprdown
  let cntrs = document.querySelectorAll(`div[data-id="${i + 1}"] .option-button__counter`) // counters in current dropdown
  let selectionField = document.querySelector(`div[data-id="${i + 1}"] .dropdown__selection`) // selection filed in current dropdown

  // roomSelectionText(cntrs, selectionField) // 

  for (let k = 0; k < btns.length; k++) {
    btns[k].addEventListener('click', () => {
      counterDecrement(cntrs[k], btns[k])
      setSelectionText(drop[i + 1], cntrs)
      if (i == 1) {
        roomSelectionText(cntrs, selectionField)
      }
    })
  }
}


function roomSelectionText (cntrs = 0, selectionField = '') {
  let selectionText = ''
  let rooms = ''
  let beds = ''
  let bathrooms = ''
  let sumCntrs = sumCountersValue(cntrs) 

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
      default:
        false
    }
  }

  selectionText = (sumCntrs == 0) ? 'Удобство номера' : `${rooms} ${beds} ${bathrooms}`

  selectionField.innerHTML = selectionText
} 

function setSelectionText (id, cntr, element) {}

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

// для дропа комнат сделать проверску на айди и отдельный вызов аддевент