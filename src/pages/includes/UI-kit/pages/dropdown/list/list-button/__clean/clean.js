const drop = document.querySelectorAll('.dropdown'); // all dropdown on page

for (let i = 0; i < drop.length; i++) {
  const btnClean = document.querySelector(`div[data-id="${i + 1}"] .list-button__clean`);
  const cntrs = document.querySelectorAll(`div[data-id="${i + 1}"] .option-button__counter`); // counters in current dropdown
  const selectionField = document.querySelector(`div[data-id="${i + 1}"] .dropdown__selection`);
  console.log(cntrs);
  btnClean.addEventListener('click', () => {
    deleteCntrsValue(cntrs);
    btnClean.classList.remove('list-button__clean_active');
    selectionField.value = '';
  });
}

function deleteCntrsValue(cntrs) {
  for (cnt of cntrs) {
    cnt.innerHTML = 0;
  }
}
