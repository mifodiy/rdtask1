import { calculateActive, calculateArchive } from "./data/notes.js";
import { renderMainTable } from "./render/renderMainTable.js";
import { renderSummaryTable } from "./render/renderSummaryTable.js";
import createNote from "./utils/createNote.js";
import { closePopup, openPopup } from "./utils/showPopup.js";


renderMainTable();
renderSummaryTable();

const createBtn = document.querySelector('.btn-create');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const categoryItems = document.querySelectorAll('.category__item');

createBtn.addEventListener('click', () => openPopup(popup));

closePopupBtn.addEventListener('click', () => closePopup(popup))

popup.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == popup) {
    closePopup(popup);
  }
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  createNote();
  renderMainTable();
  renderSummaryTable();
});

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    item.nextElementSibling.classList.toggle('close');
  })
})

