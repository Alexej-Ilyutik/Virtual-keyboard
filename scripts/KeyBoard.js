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

  init(selector) {
    this.render();
    document.querySelector(selector).after(this.mainDiv);
    this.initListeners();
  }

  render() {
    this.keyBoardSchema.forEach((row) => {
      let div = document.createElement('div');
      div.className = 'row';
      row.forEach((btnConfig) => {
        let btn = new Button(btnConfig);
        this.btns[btnConfig.code] = btn;
        div.append(btn.getDomElement(this.state));
      });
      this.mainDiv.className = 'main__keyboard';
      this.mainDiv.append(div);
    });
  }

  reRender() {
    this.mainDiv.innerHTML = '';
    this.render();
  }

  initListeners() {
    this.mainDiv.addEventListener('click', (e) => {
      const btnCode = e.target.dataset.code;
      if (
        btnCode === 'ShiftLeft' ||
        btnCode === 'ShiftRight' ||
        btnCode === 'CapsLock'
      ) {
        this.state.toggleShiftPressed(btnCode);
        this.reRender();
        // if (this.state.hasShiftPressed()) {
        //   this.print(this.mainInput, 'en', 'shift');
        // } else {
        //   this.print(this.mainInput, 'en', 'small');
        // }
      }
    });
  }

  print(area, lang, size) {
    this.mainDiv.addEventListener('click', (e) => {
      const btnCode = e.target.dataset.code;
      if (btnCode === 'Backspace') {
        area.value = area.value.slice(0, -1);
      } else if (btnCode === 'Tab') {
        area.value += '    ';
      } else if (btnCode === 'Delete') {
        area.value = area.value.slice(1);
      } else if (btnCode === 'Enter') {
        area.value += '\n';
      } else if (
        btnCode === 'ShiftLeft' ||
        btnCode === 'ShiftRight' ||
        btnCode === 'CapsLock'
      ) {
        area.value += '';
      } else {
        this.keyBoardSchema.forEach((row) => {
          row.forEach((el) => {
            let language = el[lang];
            if (el.code == btnCode) area.value += language[size];
          });
        });
      }
    });
  }
}
