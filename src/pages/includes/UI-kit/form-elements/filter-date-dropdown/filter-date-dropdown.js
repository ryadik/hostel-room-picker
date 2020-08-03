$('.filter-date-dropdown__input').datepicker({
  classes: 'filter-date-dropdown__calendar',
  clearButton: true, // clear button
  todayButton: true,

  // nav buttons icons
  prevHtml: '<span class="icon-arrow_back"></span>',
  nextHtml: '<span class="icon-arrow_forward"></span>',

  // titles text
  navTitles: {
    days: ' MM yyyy',
  },

  dateFormat: 'd M',
});

const btnApply = document.querySelector('.filter-date-dropdown__calendar span[data-action="today"]');

btnApply.addEventListener('click', () => {
  $('.filter-date-dropdown__input').data('datepicker').hide();
});
