export const getElementFromHtml = (html) => {
  let template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content.cloneNode(true);
};
export const printScreen = (screen) => {
  const mainView = document.querySelector(`.central`);
  mainView.innerHTML = ``;
  mainView.appendChild(screen);
};
