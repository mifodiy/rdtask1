export const makeNoteItem = (note) => {
  return `<li class="note__item ${note.id}">
  <div class="note__name">
    <img class="note__img" src="${note.img}" alt="${note.category}">
    <span>${note.name}</span>
  </div>
  <div class="note__created">${note.creationDate}</div>
  <div class="note__category">${note.category}</div>
  <div class="note__content">${note.content}</div>
  <div class="note__dates">${note.dates}</div>
  ${note.archived ? 
    `<button class="unarchiveBtn">Unarchive</button>` :
    `<div class="note__icons">
      <img class="note__edit" src="image/edit.svg" alt="edit">
      <img class="note__archive" src="image/archive.svg" alt="archive">
      <img class="note__delete" src="image/trash.svg" alt="delete">
    </div>`
    }
</li>`
}

