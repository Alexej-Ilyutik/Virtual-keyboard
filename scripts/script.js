import arrKey from './arr.js';
import KeyBoard from './KeyBoard.js';

document.body.insertAdjacentHTML(
  'afterbegin',
  `<div class="wrapper">
      <header class="header">
        <h1>RSS Virtual Keyboard</h1>
      </header>
      <main class="main">
      <div class="main__container">
       <textarea class="main__input" id="input" rows="9" cols="77" autofocus></textarea>
       <div class="main__description">
       <p class="description">Клавиатура создана в операционной системе Windows</p>
       <p class="description">Для переключения языка комбинация: левыe alt + shift</p></div>
       </div>
      </main>
      <footer class="footer">
        <div class="footer__link">
          <img src="./assets/github.svg" alt="GitHub" />
          <a href="https://github.com/Alexej-Ilyutik" target="_blank">
            Alexej Ilyutik
          </a>
        </div>
        <p>2022</p>
      </footer>
    </div>`
);

const mainKeyboard = document.querySelector('.main__keyboard');
const mainInput = document.querySelector('.main__input');

const kbd = new KeyBoard(arrKey);
kbd.init('.main__input');
kbd.print(mainInput, 'en', 'small');

function addPressColor(event) {
  document
    .querySelector(`.main__keyboard .key[data-code="${event.code}"]`)
    .classList.add('active');
}

function addClickColor(event) {
  if (event.target.closest('.key')) {
    event.target.closest('.key').classList.add('active');
  }
}

function removePressColor(event) {
  document
    .querySelector(`.main__keyboard .key[data-code="${event.code}"]`)
    .classList.remove('active');
}

function removeClickColor(event) {
  if (event.target.closest('.key')) {
    event.target.closest('.key').classList.remove('active');
  }
}

document.addEventListener('keydown', addPressColor);
document.addEventListener('mousedown', addClickColor);
document.addEventListener('keyup', removePressColor);
document.addEventListener('mouseup', removeClickColor);

document.addEventListener('click', (e)=>{
  console.log(e.target.getAttribute('data-code'));
});

// function changeLanguage(func, ...args) {
//   let arrChars = [];

//   document.addEventListener('keydown', function (event) {
//     if (event.repeat) return;
//     arrChars.push(event.code);
//   });

//   document.addEventListener('keyup', function (event) {
//     if (arrChars.length == 0) return;

//     let runFunc = true;
//     for (let arg of args) {
//       if (!arrChars.includes(arg)) {
//         runFunc = false;
//         break;
//       }
//     }
//     if (runFunc) func(a, b, c);

//     arrChars.length = 0;
//   });
// }

// changeLanguage(kbd.print(mainInput, 'ru', 'small'), ['AltLeft', 'ShiftLeft']);
