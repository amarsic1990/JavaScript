'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = () => {
  // document.querySelector('.hidden').style.display = 'unset';
  /**
   * UKLANJANJE KLASE IZ HTMLa
   * classList --> lista klasa
   * s remove uklanjamo klasu...........
   */
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

// ovo je kada kliknemo negdje sa strane
// ovde u event listeneru ne pozivamo funkciju samo je dodajemo
overlay.addEventListener('click', closeModal);

// na ciloj stranici udaramo ovaj event (DOCUMENT)
// ovde gledamo u event objekt koji se kreira se okine event handler
// ne mozemo ESCAPE uvijek okidati
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log(e);
    closeModal();
  }
});
