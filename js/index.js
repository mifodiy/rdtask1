import { renderMainTable } from "./render/renderMainTable.js";
import createNote from "./utils/createNote.js";
import { closePopup, openPopup } from "./utils/showPopup.js";


renderMainTable();

const createBtn = document.querySelector('.btn-create');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');

createBtn.addEventListener('click', () => openPopup(popup));

closePopupBtn.addEventListener('click', closePopup(popup))

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
});



