import { addNewNote, makeNewNoteObj } from "../data/notes.js";
import { closePopup } from "./showPopup.js";


export default function createNote(noteItem) {
  const popup = document.querySelector('.popup');
  const form = document.querySelector('.popup__form');

  const newNote = makeNewNoteObj(noteItem);
  addNewNote(newNote);
  closePopup(popup);
  form.reset();

}