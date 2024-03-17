/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
window.addEventListener('keypress', onClearOutput);
refs.clearBtn.addEventListener('click', onClearOutput);

// todo 8
// !                      ВИЫВОД ТЕКСТА НА ЕКРАН, В ДАНОМ СЛУЧАЕ В ПАРАГРАФ
function onKeypress(event) {
  // console.log('event.key: ', event.key);
  // console.log('event.code: ', event.code);

  refs.output.textContent += event.key;
}

function onClearOutput(event) {
  if (event.key.nodeName === ! )
  refs.output.textContent = '';
}
