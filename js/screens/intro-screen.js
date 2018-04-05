import {getElementFromHtml, printScreen} from '../utils.js';
import greetingScreen from './greeting-screen';

const template = `  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>`;


const templateNode = getElementFromHtml(template);

// console.log(templateNode.querySelector(`h1.intro__asterisk`));

const per = templateNode.querySelector(`h1.intro__asterisk`);

// per.addEventListener(`click`, () => `ok`);
per.addEventListener(`click`, () => {
  printScreen(greetingScreen);
});

// templateNode.querySelector(`.main-play`).addEventListener(`click`, function () {
//   printScreen(artistScreen);
// });

// const intro__asterisk = document.querySelector(`intro__asterisk`);
// intro__asterisk.addEventListener(`click`, () => `ok`);

// // const results = [resultFailScreen, resultTimeoutScreen, resultWinScreen];
// const answers = templateNode.querySelectorAll(`input[name="answer"]`);
// let sendButton = templateNode.querySelector(`.genre-answer-send`);
//
// for (let i = 0; i < answers.length; i) {
//   answers[i].addEventListener(`change`, function () {
//     let checkedNum = document.querySelectorAll(`input[name="answer"]:checked`).length;
//     if (checkedNum > 0 && sendButton.disabled) {
//       sendButton.disabled = false;
//     }
//     else if (checkedNum === 0) {
//       sendButton.disabled = true;
//     }
//   });
// }
//
// sendButton.addEventListener(`click`, function () {
//   printScreen(results[Math.floor(Math.random() * 3)]);
// });
export default templateNode;
