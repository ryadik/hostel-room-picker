import 'air-datepicker'

$.fn.datepicker.language['ru']['today'] = 'применить'

$('.calendar').datepicker({
  range: false, // multiple date selection
  multipleDatesSeparator: ' - ', // separator
  clearButton: true, // clear button
  todayButton: true,

  //nav buttons icons
  prevHtml: '<span class="icon-arrow_back"></span>',
  nextHtml: '<span class="icon-arrow_forward"></span>',

  // titles text
  navTitles: {
    days: ' MM yyyy'
  },
  autoClose: false
})
