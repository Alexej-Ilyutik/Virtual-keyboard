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
kbd.printClick(mainInput);

// mainKeyboard.addEventListener('click', (e) => {
//       console.log(e.target);
//       // let val = arrKey.find((el) => el.code === e.target.dataset.code);
//       let val = arrKey[0][0].code;
//       console.log(val);
//       mainInput.value += 'x';
//     });
