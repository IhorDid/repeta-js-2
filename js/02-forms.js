/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */
// todo 7
// !                 СБОР ДАННИХ ФОРМИ М ПОМОЩЬЮ FormData
const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // * ссылка на елемент прослушивания, тоесть form
  const formData = new FormData(event.currentTarget);

  console.log(formData);
  // !                     ПЕРЕБИРАЕМ ФОРМУ
  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
