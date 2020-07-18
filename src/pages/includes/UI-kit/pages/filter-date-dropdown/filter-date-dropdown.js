$('filter-date-dropdown__input').datepicker({
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

const btnApply = document.querySelector('.date-dropdown__calendar span[data-action="today"]');

btnApply.addEventListener('click', () => {
  $('.date-dropdown__input').data('datepicker').hide();
});
