import { makeNoteItem } from "../data/makeNoteItem.js";
import { calculateActive, calculateArchive, getNotes } from "../data/notes.js";
import { unachiveNoteItem } from "../utils/updateArchiveNote.js";

export const renderSummaryTable = () => {
  const activeTask = document.querySelector('.category__active--task');
  const archiveTask = document.querySelector('.category__archive--task');
  const activeIdea = document.querySelector('.category__active--idea');
  const archiveIdea = document.querySelector('.category__archive--idea');
  const activeThought = document.querySelector('.category__active--thought');
  const archiveThought = document.querySelector('.category__archive--thought');

  activeTask.innerHTML = calculateActive('Task');
  archiveTask.innerHTML = calculateArchive('Task');
  activeIdea.innerHTML = calculateActive('Idea');
  archiveIdea.innerHTML = calculateArchive('Idea');
  activeThought.innerHTML = calculateActive('Random Thought');
  archiveThought.innerHTML = calculateArchive('Random Thought');

  const renderArchiveTable = () => {
    const archiveList = document.querySelectorAll(`.archive__list`);

    Array.from(archiveList).map(body => {
      body.innerHTML = '';
    })

    getNotes().map(note => {
      if (note.archived) {
        Array.from(archiveList).map(body => {
          body.id === note.category ?
            body.innerHTML += makeNoteItem(note) : false
        })
      }
    });
  }

  renderArchiveTable();
  addUnarchiveBtn();

}

const addUnarchiveBtn = () => {
  const archiveItems = document.querySelectorAll('.archive__list .note__item');

  archiveItems.forEach(note => {
    const archiveId = +note.classList[1];
    const unarchiveBtn = note.querySelector('.unarchiveBtn');

    unarchiveBtn.addEventListener('click', () => unachiveNoteItem(archiveId));
  })
}

