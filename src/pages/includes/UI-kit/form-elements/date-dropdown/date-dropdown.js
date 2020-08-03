const inputFirst = document.querySelector('.date-dropdown__first');
const inputSecond = document.querySelector('.date-dropdown__second');

$('.date-dropdown__input').datepicker({
  classes: 'date-dropdown__calendar',
  clearButton: true, // clear button
  todayButton: true,

  // nav buttons icons
  prevHtml: '<span class="icon-arrow_back"></span>',
  nextHtml: '<span class="icon-arrow_forward"></span>',

  // titles text
  navTitles: {
    days: ' MM yyyy',
  },

  onSelect: (fd) => {
    const dates = fd.split(',');
    inputFirst.value = dates[0];
    inputSecond.value = (dates[1]) ? dates[1] : '';
  },
});

inputSecond.addEventListener('click', () => {
  $('.date-dropdown__input').data('datepicker').show();
});

const btnApply = document.querySelector('.date-dropdown__calendar span[data-action="today"]');

btnApply.addEventListener('click', () => {
  $('.date-dropdown__input').data('datepicker').hide();
});
