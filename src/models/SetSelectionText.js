export default class SetSelectionText {

  constructor(firstValue = 0, secondValue = 0, thirdValue = 0, id) {
    this.id = id
    this.firstValue = firstValue
    this.secondValue = secondValue
    this.thirdValue = thirdValue
  }

  generateGuestsText() {
    let text = ''
    // add parents to text

    if ((this.firstValue + this.secondValue + this.thirdValue) === 0) {
      return ''
    } else {
      this.firstValue += this.secondValue

      if (this.firstValue === 1) {
        text = `${this.firstValue} гость`
      } else if (this.firstValue > 1 && this.firstValue < 5) {
        text = `${this.firstValue} гостя`
      } else if (this.firstValue > 4 && this.firstValue < 21) {
        text = `${this.firstValue} гостей`
      }

      // add kids to text if exist

      if (this.thirdValue && this.firstValue > 0) {
        if (this.thirdValue === 1) {
          text += `, ${this.thirdValue} младенец`
        } else if (this.thirdValue > 1 && this.thirdValue < 5) {
          text += `, ${this.thirdValue} младенца`
        } else if (this.thirdValue > 4 && this.thirdValue < 21) {
          text += `, ${this.thirdValue} младенцев`
        }
      }

      return text
    }
  }

  generateRoomsText() {
    let text = ''
    // add rooms to text

    if ((this.firstValue + this.secondValue + this.thirdValue) === 0) {
      return ''
    } else {
      if (this.firstValue === 1) {
        text = `${this.firstValue} комната`
      } else if (this.firstValue > 1 && this.firstValue < 5) {
        text = `${this.firstValue} комнаты`
      } else if (this.firstValue > 4 && this.firstValue < 21) {
        text = `${this.firstValue} комнат`
      }

      // add beds to text if exist

      if (this.secondValue && this.firstValue > 0) {
        if (this.secondValue === 1) {
          text += `, ${this.secondValue} кровать`
        } else if (this.secondValue > 1 && this.secondValue < 5) {
          text += `, ${this.secondValue} кровати`
        } else if (this.secondValue > 4 && this.secondValue < 21) {
          text += `, ${this.secondValue} кроватей`
        }
      }

      // add bathrooms to text if exist

      if (this.thirdValue && this.firstValue > 0) {
        if (this.thirdValue === 1) {
          text += `, ${this.thirdValue} ванная комната`
        } else if (this.thirdValue > 1 && this.thirdValue < 5) {
          text += `, ${this.thirdValue} ванных комнаты`
        } else if (this.thirdValue > 4 && this.thirdValue < 21) {
          text += `, ${this.thirdValue} ванных комнат`
        }
      }

      return text
    }
  }

  pasteText() {

  }
}

