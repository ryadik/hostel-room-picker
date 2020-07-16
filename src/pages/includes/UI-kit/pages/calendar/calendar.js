import 'air-datepicker'

$.fn.datepicker.language['ru']['today'] = 'применить'

$('.calendar').datepicker({
  minDate: new Date(), // min sellection date - is current
  range: true, // multiple date selection
  multipleDatesSeparator: ' - ', // separator
  clearButton: true, // clear button
  todayButton: true,

  //nav buttons icons
  prevHtml: '<span class="icon-arrow_back"></span>',
  nextHtml: '<span class="icon-arrow_forward"></span>',

  // titles text
  navTitles: {
    days: ' MM yyyy'
  }
})

