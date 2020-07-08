let $ = require('jquery');
window.$ = window.jQuery = $;
// require('./lib/item-quantity-dropdown.min.js');
// require('./lib/item-quantity-dropdown.min.css');

// require('./../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js')
// require('./../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css')

// count = $('.counter')

// $(document).ready(() => {
//   $('.iqdropdown').iqDropdown({
//     // selectionText: 'гость',
//     // textPlural: 'гостей',
//       minItems: 1,
//       maxItems: 5,
//       selectionText: fr(),
//       textPlural: fr(),
//       onChange: function(id, count, totalItems) {
//         console.log(id, count, totalItems);
//       },
//       beforeDecrement: function(id, itemCount) {
//         if (count >= 0 && count <= 4) {
//           return $('.iqdropdown-selection').text(`${count} гостя`)
//         }
//         return true
//       },
//       beforeIncrement: function(id, itemCount) {
//         if (count >= 0 && count <= 4) {
//           return $('.iqdropdown-selection').text(`${count} гостя`)
//         }
//         return true
//       }
//     });
// });

// function fr () {
//   if (count >= 0 && count <= 4) {
//     return $('.iqdropdown-selection').text(`${count} гостя`)
//   } else {
//     return 'гостей'
//   }
// }
