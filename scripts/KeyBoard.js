import Button from './Button.js';
import State from './State.js';

export default class KeyBoard {
  constructor(keyBoardSchema) {
    this.keyBoardSchema = keyBoardSchema;
    this.btns = [];
    this.lang = 'ru';
    this.capsLock = false;
    this.mainDiv = document.createElement('div');
    this.mainInput = document.querySelector('.main__input');
  }

  init(selector) {
    let localLang;
    if (localStorage.getItem('lang') === null) {
      localLang = 'en';
    } else {
      localLang = localStorage.getItem('lang');
    }
    this.render(localLang, 'small');
    this.renderLanguage('AltLeft', 'ShiftLeft');
    this.renderCapsLk();
    document.querySelector(selector).after(this.mainDiv);
    this.addAnimation();
    this.print();
  }

  render(lang, size) {
    this.mainDiv.innerHTML = '';
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
          btnCode === 'ControlLeft' ||
          btnCode === 'MetaLeft' ||
          btnCode === 'AltLeft' ||
          btnCode === 'AltRight' ||
          btnCode === 'ControlRight' ||
          btnCode === 'CapsLock'
        ) {
          this.mainInput.value += '';
        } else {
          this.mainInput.value += e.target.innerHTML;
        }
      }
    });
  }

  renderCapsLk() {
    document.addEventListener('click', (e) => {
      const btnCode = e.target.dataset.code;
      if (btnCode === 'CapsLock' && this.capsLock === false) {
        this.capsLock = true;
        this.render('en', 'shift');
      } else if (btnCode === 'CapsLock' && this.capsLock === true) {
        this.capsLock = false;
        this.render('en', 'small');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'CapsLock' && this.capsLock === false) {
        this.capsLock = true;
        this.render('en', 'shift');
      } else if (e.code === 'CapsLock' && this.capsLock === true) {
        this.capsLock = false;
        this.render('en', 'small');
      }
    });
  }

  renderLanguage(...args) {
    let arrChars = [];

    document.addEventListener('keydown', (event) => {
      if (event.repeat) return;
      arrChars.push(event.code);
    });

    document.addEventListener('keyup', () => {
      if (arrChars.length == 0) return;

      let runFunc = true;
      for (let arg of args) {
        if (!arrChars.includes(arg)) {
          runFunc = false;
          break;
        }
      }
      if (runFunc && this.lang === 'en' && this.capsLock === true) {
        this.lang = 'ru';
        localStorage.setItem('lang', 'en');
        this.render(localStorage.getItem('lang'), 'shift');
      } else if (runFunc && this.lang === 'ru' && this.capsLock === true) {
        this.lang = 'en';
        localStorage.setItem('lang', 'ru');
        this.render(localStorage.getItem('lang'), 'shift');
      } else if (runFunc && this.lang === 'en' && this.capsLock === false) {
        this.lang = 'ru';
        localStorage.setItem('lang', 'en');
        this.render(localStorage.getItem('lang'), 'small');
      } else if (runFunc && this.lang === 'ru' && this.capsLock === false) {
        this.lang = 'en';
        localStorage.setItem('lang', 'ru');
        this.render(localStorage.getItem('lang'), 'small');
      }
      arrChars.length = 0;
    });
  }
}
