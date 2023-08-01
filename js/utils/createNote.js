import { addNewNote, makeNewNoteObj } from "../data/notes.js";
import { closePopup } from "./showPopup.js";


export default function createNote() {
  const popup = document.querySelector('.popup');
  const form = document.querySelector('.popup__form');

  const newNote = makeNewNoteObj(form);
  addNewNote(newNote);
  closePopup(popup);
  form.reset();

}