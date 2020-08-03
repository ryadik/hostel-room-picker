import  noUiSlider from 'nouislider'

let slider = document.querySelector('.range-slider')
let showValues = document.querySelector('.slider__values')

noUiSlider.create(slider, {
  start: [5000, 10000],
  step: 100,
  connect: true,
  range: {
    'min': 0,
    'max': 15000
  }
})

slider.noUiSlider.on('update', function (values) {
  showValues.innerHTML = `${Number(values[0])}₽ - ${Number(values[1])}₽`
})
