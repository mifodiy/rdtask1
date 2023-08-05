import { getNotes, changeUpdateId, changeUpdateStatus } from "../data/notes.js";
import { openPopup } from "./showPopup.js";

export const editNote = (noteId) => {
  const form = document.querySelector('.popup__form');
  const popup = document.querySelector('.popup');
  const addBtn = form.querySelector('.popup__btn');
  const { name, category, content } = getNotes().filter(el => el.id === noteId)[0];

  openPopup(popup);
  form.elements[0].value = name;
  form.elements[1].value = category;
  form.elements[2].value = content;

  changeUpdateStatus(true);
  changeUpdateId(noteId);
  addBtn.innerText = "Confirm";

}