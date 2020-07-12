const drop = document.querySelectorAll('.dropdown')

for (let i = 0; i < drop.length; i++) {
  let btnApply = document.querySelector(`div[data-id="${i + 1}"] .list-button__apply`)

  btnApply.addEventListener('click', () => {
    document.querySelector(`div[data-id="${i + 1}"]`).classList.remove('dropdown_active')
    document.querySelector(`div[data-id="${i + 1}"] .list`).classList.remove('list_active')
  })
}