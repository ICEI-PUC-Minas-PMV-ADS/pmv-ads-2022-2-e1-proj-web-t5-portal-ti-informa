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
