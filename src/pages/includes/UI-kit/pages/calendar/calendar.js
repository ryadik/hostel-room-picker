import * as dhx from 'dhx-calendar'


let ru = {
  // short names of months
  monthsShort: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек"],
  // full names of months             
  months: ["Январь", "Февраль", "Март", "Апрель", "Мая", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  // short names of days
  daysShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  // full names of days
  days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскреснье"]
}
dhx.i18n.setLocale("calendar", ru);
let calendar = new dhx.Calendar("calendar", {css: "dhx_widget--bordered", range: true, width: '320px'});

// $('.dxi-chevron-left').addClass('fas fa-arrow-left')
document.querySelector('.dhx_calendar-action__prev').innerHTML ="<span class='icon-arrow_back'></span>"
document.querySelector('.dhx_calendar-action__next').innerHTML ="<span class='icon-arrow_forward'></span>"