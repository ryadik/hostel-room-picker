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