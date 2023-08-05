let notes = [
  {
    id: 1,
    img: '',
    name: `Go to shop`,
    creationDate: '2023-07-26',
    category: 'Task',
    content: 'Buy bread, juice',
    dates: '30/7/2023',
    archived: false,
  },
  {
    id: 2,
    img: '',
    name: `Go to cinema`,
    creationDate: '2023-07-26',
    category: 'Task',
    content: 'Oppenheimer',
    dates: '29/7/2023',
    archived: false,
  },
  {
    id: 3,
    img: '',
    name: `Create new feature`,
    creationDate: '2023-07-26',
    category: 'Idea',
    content: 'new feature',
    dates: '27/7/2023',
    archived: true,
  },
  {
    id: 4,
    img: '',
    name: `Create new feature2`,
    creationDate: '2023-07-26',
    category: 'Idea',
    content: 'new feature2',
    dates: '28/7/2023',
    archived: false,
  },
  {
    id: 5,
    img: '',
    name: `Some thought`,
    creationDate: '2023-07-26',
    category: 'Random Thought',
    content: 'Some thought',
    dates: '27/7/2023',
    archived: true,
  },
  {
    id: 6,
    img: '',
    name: `Some thought2`,
    creationDate: '2023-07-26',
    category: 'Random Thought',
    content: 'Some thought2',
    dates: '28/7/2023',
    archived: false,
  }

]

const categoryIcon = [
  {
    imgName: 'Task',
    imgUrl: 'image/cart.svg',
  },
  {
    imgName: 'Idea',
    imgUrl: 'image/lightbulb.svg',
  },
  {
    imgName: 'Random Thought',
    imgUrl: 'image/bookmark.svg',
  },
];

export let isUpdate = false, updateId;

export const changeUpdateStatus = (status) => {
  isUpdate = status;
}

export const changeUpdateId = (id) => {
  updateId = id;
}

const dateRegex = /(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/g;
export const findDates = (value) => {
  const dates = value.match(dateRegex);
  if (!dates) return '';
  return dates.join(', ');
};

export const getNotes = () => notes;

export const addNewNote = (newNote) => (notes = [...notes, newNote]);
export const makeNewNoteObj = (noteItem, noteId) => ({
  id: noteId || Date.now(),
  img: categoryIcon.filter((img) => img.imgName === noteItem.category)[0]?.imgUrl || ' ',
  name: noteItem.name,
  creationDate: new Date().toLocaleDateString('en-CA'),
  category: noteItem.category,
  content: noteItem.content,
  dates: findDates(noteItem.content),
  archived: false,
});

export const calculateActive = (category) => {
  return notes.reduce((acc, note) => 
  (note.category === category && note.archived === false ? acc + 1 : acc), 0)
}

export const calculateArchive = (category) => {
  return notes.reduce((acc, note) => 
  (note.category === category && note.archived === true ? acc + 1 : acc), 0)
}

export const delNote = (noteId) => {
  notes = [...notes.filter(el => el.id !== noteId)];
}

export const archiveNote = (noteId) => {
  notes.map(note => {
    note.id === noteId ? note.archived = true : false
  })
}

export const unarchiveNote = (noteId) => {
  notes.map(note => {
    note.id === noteId ? note.archived = false : false
  })
}

export const updateNote = (noteId, newNote) => {
  
  notes.map((note) => {
    if (note.id === noteId) {
      const dates = findDates(newNote.content) ? `${note.dates}, ${findDates(newNote.content)}` : note.dates;
      const img = categoryIcon.filter((imgObj) => imgObj.imgName === newNote.category)[0]?.imgUrl || ' ';
      Object.assign(note, newNote, {dates, img});
    }
  });
}

(() =>
  notes.map(
    (note) =>
      (note.img = categoryIcon.filter((imgObj) => imgObj.imgName === note.category)[0]?.imgUrl || ' '),
  ))();