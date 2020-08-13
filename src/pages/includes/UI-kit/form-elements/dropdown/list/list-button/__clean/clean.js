const btnsClean = document.querySelectorAll('.list-button__clean')

btnsClean.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.offsetParent.querySelectorAll('.option-button__counter').forEach(item => {
      item.innerHTML = 0
    })
    e.target.offsetParent.firstChild.value = ''
    e.target.classList.remove('list-button__clean_active')
  })
})
