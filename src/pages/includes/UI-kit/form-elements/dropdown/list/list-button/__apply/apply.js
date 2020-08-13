const btnsApply = document.querySelectorAll('.list-button__apply');

btnsApply.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.offsetParent.classList.toggle('dropdown_active')
    e.target.offsetParent.lastChild.classList.toggle('list_active')
  })
})
