import Button from './Button.js';
import State from './State.js';

export default class KeyBoard {
  constructor(keyBoardSchema) {
    this.keyBoardSchema = keyBoardSchema;
    this.btns = [];
    this.state = new State();
    this.mainDiv = document.createElement('div');
    this.mainInput = document.querySelector('.main__input');
  }

  init(selector, lang, size) {
    this.render(lang, size);
    document.querySelector(selector).after(this.mainDiv);
    this.addAnimation();
    this.print();
    // this.initListeners();
  }

  render(lang, size) {
    this.keyBoardSchema.forEach((row) => {
      let div = document.createElement('div');
      div.className = 'row';
      row.forEach((btnConfig) => {
        let btn = new Button(btnConfig);
        div.append(btn.getElement(btnConfig[lang][size]));
      });
      this.mainDiv.className = 'main__keyboard';
      this.mainDiv.append(div);
    });
  }

  addAnimation() {
    function addPressColor(event) {
      document
        .querySelector(`.main__keyboard .key[data-code="${event.code}"]`)
        .classList.add('active');
    }

    function addClickColor(event) {
      let keyTarget = event.target.classList;
      if (keyTarget.contains('key')) {
        keyTarget.add('active');
      }
    }

    function removePressColor(event) {
      document
        .querySelector(`.main__keyboard .key[data-code="${event.code}"]`)
        .classList.remove('active');
    }

    function removeClickColor(event) {
      let keyTarget = event.target.classList;
      if (keyTarget.contains('key')) {
        keyTarget.remove('active');
      }
    }

    document.addEventListener('keydown', addPressColor);
    document.addEventListener('mousedown', addClickColor);
    document.addEventListener('keyup', removePressColor);
    document.addEventListener('mouseup', removeClickColor);
  }

  print() {
    document.addEventListener('click', (e) => {
      let keyTarget = e.target.classList;
      if (keyTarget.contains('key')) {
        const btnCode = e.target.dataset.code;
        if (btnCode === 'Backspace') {
          this.mainInput.value = this.mainInput.value.slice(0, -1);
        } else if (btnCode === 'Tab') {
          this.mainInput.value += '    ';
        } else if (btnCode === 'Delete') {
          this.mainInput.value = this.mainInput.value.slice(1);
        } else if (btnCode === 'Enter') {
          this.mainInput.value += '\n';
        } else if (
          btnCode === 'ShiftLeft' ||
          btnCode === 'ShiftRight' ||
          btnCode === 'CapsLock'
        ) {
          this.mainInput.value += '';
        } else {
          this.mainInput.value += e.target.innerHTML;
        }
      }
    });
  }

}
