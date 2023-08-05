import { updateNote, changeUpdateStatus, isUpdate, updateId } from "./data/notes.js";
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
const noteName = form.querySelector('.popup__input');
const noteCategory = form.querySelector('.popup__select');
const noteContent = form.querySelector('.popup__textarea');
const addBtn = form.querySelector('.popup__btn');


createBtn.addEventListener('click', () => {
  openPopup(popup);
  addBtn.innerText = "Add note";
});

closePopupBtn.addEventListener('click', () => closePopup(popup))

popup.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == popup) {
    closePopup(popup);
  }
})

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const noteItem = { name: noteName.value, category: noteCategory.value, content: noteContent.value };
  
  if (!isUpdate) {
    createNote(noteItem);
  } else {
    changeUpdateStatus(false);
    updateNote(updateId, noteItem);
    form.reset();
    closePopup(popup);
  }
  renderMainTable();
  renderSummaryTable();
})

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    item.nextElementSibling.classList.toggle('close');
  })
})

