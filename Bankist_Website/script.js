'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//// BTN SCROLL
btnScrollTo.addEventListener('click', function (e) {
  // the section-1 position
  //const sect1Coords = section1.getBoundingClientRect();
  //console.log(sect1Coords);

  // Position element clicked
  //console.log(e.target.getBoundingClientRect());

  // CURRENT SCROLL (X-Y)
  //console.log(window.pageXOffset, window.pageYOffset);

  // Get current height - Width of the viewport
  // console.log(document.documentElement.clientHeight, document.documentElement.clientWidth);

  // SCROLLING - OLD WAY
  // window.scrollTo({
  //   left: sect1Coords.left + window.pageXOffset,
  //   top: sect1Coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // }
  // );

  // SCROLLING - MODERNE WAY
  section1.scrollIntoView({ behavior: 'smooth' });

});


//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//// NAV LINKS
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }


});
