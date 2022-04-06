//navigation
const button = document.querySelector('.navigation__button');
const nav = document.querySelector('.navigation__nav');
const bg = document.querySelector('.navigation__bg');

button.addEventListener('click', () => {
  bg.classList.toggle('opened');
  nav.classList.toggle('opened');
  button.classList.toggle('opened');
});

//popup
const btns = document.querySelectorAll('.card__cta a');
const close = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const backdrop = document.querySelector('.popup__bg');

btns.forEach(btn => btn.addEventListener('click', () => {
  popup.classList.add('opened');
}));

close.addEventListener('click', () => {
  popup.classList.remove('opened');
});

backdrop.addEventListener('click', () => {
  popup.classList.remove('opened');
});