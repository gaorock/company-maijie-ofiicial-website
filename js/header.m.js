const navButton = document.querySelector('.nav-button');
const closeNavButton = document.querySelector('#close');
const navMenu = document.querySelector('.dropdown');
const cover = document.querySelector('.dropdown .cover');
const multi = document.querySelectorAll('.multi');
const button = document.querySelectorAll('.multi>a');
const expends = document.querySelectorAll('.multi .expend')

cover.addEventListener('click', closeNav)
closeNavButton.addEventListener('click', closeNav)
navButton.addEventListener('click', openNav)

let isNavOpen = false;
let currentExpend = null;


function openNav () {
  isNavOpen = true;
  navMenu.classList.add('open');
}

function closeNav () {
  if (currentExpend !== null) multi[currentExpend].classList.remove('active');
  isNavOpen = false;
  currentExpend = null;
  navMenu.classList.remove('open');
}

button.forEach((el, idx) => el.addEventListener('click', () => openExpend(idx)));

function openExpend (idx) {
  if (currentExpend === null) {
    multi[idx].classList.add('active');
    currentExpend = idx;
  } else {
    if (currentExpend === idx) {
      multi[idx].classList.remove('active');
      currentExpend = null;
    } else {
      multi[currentExpend].classList.remove('active');
      multi[idx].classList.add('active');
      currentExpend = idx;
    }
  }
}