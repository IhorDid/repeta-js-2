/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */
// Todo 9
// !                МОДАЛКА
const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
// !               ВЕШАЕМ КЛАСС
function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}
// !                  УБИРАЕМ КЛАСС
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}
// !                   ЕСЛИ КЛИКНУЛИ НЕ ПО БЕКДРОПУ
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
}
// ! МОЖНА ЗАПИСАТЬ ЕСТЬ НАЖИМАЕМ НА ESCAPE
// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     onCloseModal();
//   }
// }
//         ! МОЖНА  ESCAPE С ПОМОЩЬЮ ПЕРЕМЕННЫХ
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
