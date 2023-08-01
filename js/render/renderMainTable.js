import { makeNoteItem } from "../data/makeNoteItem.js";
import { getNotes } from "../data/notes.js";

export const renderMainTable = () => {
  const notesList = document.querySelector('.note__list');

  notesList.innerHTML = '';

  getNotes().map(note => {
    if (!note.archived) {
      notesList.innerHTML += makeNoteItem(note);
    }
  });
}