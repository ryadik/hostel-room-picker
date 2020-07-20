const btnOpen = document.querySelector('.expandable-checkbox-list .expand-more');
const listItems = document.querySelector('.expandable-checkbox-list .list');
const btnOpenIcon = document.querySelector('.expandable-checkbox-list .button-open');

btnOpen.addEventListener('click', () => {
  listItems.classList.toggle('list_closed');
  btnOpenIcon.classList.toggle('button-open_active');
});
