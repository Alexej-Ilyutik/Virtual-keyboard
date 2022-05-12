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

const kbd = new KeyBoard(arrKey);

kbd.init('.main__input');
