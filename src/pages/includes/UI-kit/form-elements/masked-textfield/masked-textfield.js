$('.masked-textfield__input').datepicker({
  classes: 'masked-textfield__calendar',
  clearButton: true, // clear button
  todayButton: true,

  // nav buttons icons
  prevHtml: '<span class="icon-arrow_back"></span>',
  nextHtml: '<span class="icon-arrow_forward"></span>',

  // titles text
  navTitles: {
    days: ' MM yyyy',
  },
});

const btnApply = document.querySelector('.masked-textfield__calendar span[data-action="today"]');

btnApply.addEventListener('click', () => {
  $('.masked-textfield__input').data('datepicker').hide();
});
