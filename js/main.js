let template = document.querySelectorAll(`template`);
const main = document.querySelector(`main.central`);

let indexTemplate = (param) => {
  main.innerHTML = ``;
  main.appendChild(template[param].content.cloneNode(true));
}
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;

let ind = 0;

let test = (e) => {

  if (e.altKey && (e.keyCode === KEY_ARROW_LEFT || e.keyCode === KEY_ARROW_RIGHT)) {
    if (ind > 0 && e.keyCode === KEY_ARROW_LEFT) {
      indexTemplate(--ind);
    }
    if (ind < template.length - 1 && e.keyCode === KEY_ARROW_RIGHT) {
      indexTemplate(++ind);
    }
  }
};
window.addEventListener(`keydown`, test);
