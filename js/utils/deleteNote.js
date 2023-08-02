import { delNote } from "../data/notes.js"
import { renderMainTable } from "../render/renderMainTable.js";
import { renderSummaryTable } from "../render/renderSummaryTable.js";

export const deleteNote = (noteId) => {
  delNote(noteId);
  renderMainTable();
  renderSummaryTable();
}