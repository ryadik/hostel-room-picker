import 'air-datepicker'

$.fn.datepicker.language['ru']['today'] = 'применить'

$('.calendar').datepicker({
  clearButton: true, // clear button
  todayButton: true,

  //nav buttons icons
  prevHtml: '<span class="icon-arrow_back"></span>',
  nextHtml: '<span class="icon-arrow_forward"></span>',

  autoClose: true,

  // titles text
  navTitles: {
    days: ' MM yyyy'
  },
})

const btnsApply = [...document.querySelectorAll('span[data-action="today"]')]

btnsApply.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    let datepicker = $(`.calendar[data-id=${index}]`).datepicker().data('datepicker')
    datepicker.hide()
  })
})