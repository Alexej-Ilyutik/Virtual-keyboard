import arrKey from './arr.js';

console.log(arrKey[0].en[0][0]);

document.body.insertAdjacentHTML(
  'afterbegin',
  `<div class="wrapper">
      <header class="header">
        <h1>RSS Virtual Keyboard</h1>
      </header>
      <main class="main"></main>
      <footer class="footer">
        <div class="footer__link">
          <img src="assets/github.svg" alt="GitHub" />
          <a href="https://github.com/Alexej-Ilyutik" target="_blank">
            Alexej Ilyutik
          </a>
        </div>
        <p>2022</p>
      </footer>
    </div>`
);

const main = document.querySelector('.main');

console.log(main);
