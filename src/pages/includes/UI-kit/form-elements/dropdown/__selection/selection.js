const selectionText = document.querySelectorAll('.dropdown__selection');

// menu (List) - open and close

selectionText.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.target.offsetParent.classList.toggle('dropdown_active')
    e.target.offsetParent.lastChild.classList.toggle('list_active')
  })
})

