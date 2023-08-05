import { makeNoteItem } from "../data/makeNoteItem.js";
import { getNotes } from "../data/notes.js";
import { deleteNote } from "../utils/deleteNote.js";
import { editNote } from "../utils/editNote.js";
import { achiveNoteItem } from "../utils/updateArchiveNote.js";

export const renderMainTable = () => {
  const notesList = document.querySelector('.note__list');

  notesList.innerHTML = '';

  getNotes().map(note => {
    if (!note.archived) {
      notesList.innerHTML += makeNoteItem(note);
    }
  });
  addNotesBtn(notesList);
}

export const addNotesBtn = (noteList) => {
  const noteItems = noteList.querySelectorAll('.note__item');

  noteItems.forEach(note => {
    const noteId = +note.classList[1];
    const editBtn = note.querySelector('.note__edit');
    const archiveBtn = note.querySelector('.note__archive');
    const delBtn = note.querySelector('.note__delete');

    editBtn.addEventListener('click', () => editNote(noteId));
    delBtn.addEventListener('click', () => deleteNote(noteId));
    archiveBtn.addEventListener('click', () => achiveNoteItem(noteId));
  })
}