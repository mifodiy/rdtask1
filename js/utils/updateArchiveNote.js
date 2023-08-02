import { archiveNote, unarchiveNote } from "../data/notes.js"
import { renderMainTable } from "../render/renderMainTable.js";
import { renderSummaryTable } from "../render/renderSummaryTable.js";

export const achiveNoteItem = (noteId) => {
  archiveNote(noteId);
  renderMainTable();
  renderSummaryTable();
}

export const unachiveNoteItem = (noteId) => {
  unarchiveNote(noteId);
  renderMainTable();
  renderSummaryTable();
}

document.querySelectorAll('.archive__list .note__item')