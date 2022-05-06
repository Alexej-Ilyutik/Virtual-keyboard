import Button from './Button.js';
import State from './State.js';

export default class KeyBoard {
  constructor(keyBoardSchema) {
    this.keyBoardSchema = keyBoardSchema;
    this.btns = [];
    this.state = new State();
    this.mainDiv = document.createElement('div');
  }

  init(selector) {
    this.render();
    document.querySelector(selector).append(this.mainDiv);
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
      if (btnCode === 'ShiftLeft' || btnCode === 'ShiftRight') {
        this.state.toggleShiftPressed(btnCode);
        this.reRender();
      }
    });
  }
}
