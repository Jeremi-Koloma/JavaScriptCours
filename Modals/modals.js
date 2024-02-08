'use strict';

// Get the modals btns
const btnsModal = document.querySelectorAll('.show-modal');

// btn close Modal
const btnCloseModal = document.querySelector('.close-modal');

// Get the modal and overlay class
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

// function to display the modal
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// function to close the modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Loop all the btns list
for (let i = 0; i < btnsModal.length; i++) {
    btnsModal[i].addEventListener('click', openModal, false);
};

// CloseModal on btn click
btnCloseModal.addEventListener('click', closeModal, false);

// Close the modal on overlay click
overlay.addEventListener('click', closeModal, false);

// Close the modal on Escape pressed
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
}, false);
