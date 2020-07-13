import 'dhx-calendar'

calendarContainer = document.querySelector('#calendar_container')

const calendar = new dhx.Calendar(calendarContainer,{
  range: true,
  css: "dhx_widget--bordered"
});