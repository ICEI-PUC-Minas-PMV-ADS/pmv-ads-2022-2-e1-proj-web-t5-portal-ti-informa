const button = document.querySelector('#like');
const number = document.querySelector('#number');

button.addEventListener('click', () => {
  let likeValue = document.querySelector('#number').textContent;
  let newValue = Number(likeValue) + 1;
  button.classList.add('like');
  number.innerHTML = newValue;
})

const button02 = document.querySelector('#like02');
const number02 = document.querySelector('#number02');

button02.addEventListener('click', () => {
  let likeValue = document.querySelector('#number02').textContent;
  let newValue = Number(likeValue) + 1;
  button02.classList.add('like02');
  number02.innerHTML = newValue;
})
const button03 = document.querySelector('#like03');
const number03 = document.querySelector('#number03');

button03.addEventListener('click', () => {
  let likeValue = document.querySelector('#number03').textContent;
  let newValue = Number(likeValue) + 1;
  button03.classList.add('like03');
  number03.innerHTML = newValue;
})

const button04 = document.querySelector('#like04');
const number04 = document.querySelector('#number04');

button04.addEventListener('click', () => {
  let likeValue = document.querySelector('#number04').textContent;
  let newValue = Number(likeValue) + 1;
  button04.classList.add('like04');
  number04.innerHTML = newValue;
})

const button05 = document.querySelector('#like05');
const number05 = document.querySelector('#number05');

button05.addEventListener('click', () => {
  let likeValue = document.querySelector('#number05').textContent;
  let newValue = Number(likeValue) + 1;
  button05.classList.add('like05');
  number05.innerHTML = newValue;
})

const button06 = document.querySelector('#like06');
const number06 = document.querySelector('#number06');

button06.addEventListener('click', () => {
  let likeValue = document.querySelector('#number06').textContent;
  let newValue = Number(likeValue) + 1;
  button06.classList.add('like06');
  number06.innerHTML = newValue;
})