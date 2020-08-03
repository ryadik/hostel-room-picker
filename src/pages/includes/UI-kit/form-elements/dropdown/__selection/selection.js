const btnsDecrement = document.querySelectorAll('.option-button__decrement');
const btnsIncrement = document.querySelectorAll('.option-button__increment');
const selectionText = document.querySelectorAll('.dropdown__selection');

// menu (List) - open and close
for (let i = 0; i < selectionText.length; i++) {
  btnOpenId = selectionText[i].data;
  if (selectionText[i].dataset.id == (i + 1)) {
    selectionText[i].addEventListener('click', () => {
      document.querySelector(`div[data-id="${i + 1}"]`).classList.toggle('dropdown_active');
      document.querySelector(`div[data-id="${i + 1}"] .list`).classList.toggle('list_active');
    });
  }
}

// for (let i = 0; i < btnsDecrement.length; i++) {
//   btnsDecrement[i].addEventListener('click', () => {
//     setTimeout(() => {
//       selectionText.innerHTML = localStorage.getItem('selectionText')
//     }, 100)
//   })
//   clearTimeout()
// }

// for (let i = 0; )

for (let i = 0; i < btnsIncrement.length; i++) {
  btnsIncrement[i].addEventListener('click', () => {
    setTimeout(() => {
      selectionText.innerHTML = localStorage.getItem('selectionText');
    }, 100);
  });
  clearTimeout();
}
