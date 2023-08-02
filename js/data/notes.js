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

const dateRegEx = /^(0?[1-9]|1[012])[ /](0?[1-9]|[12][0-9]|3[01])[ /](19|20)?[0-9]{2}$/;
export const findDates = (value) => {
  let text = value.split(' ');
  const dates = text.map((str) => str.replace(',', '')).filter((str) => str.match(dateRegEx));
  return dates.join(', ');
};

export const getNotes = () => notes;

export const addNewNote = (newNote) => (notes = [...notes, newNote]);
export const makeNewNoteObj = (form, noteId) => ({
  id: noteId || Date.now(),
  img: categoryIcon.filter((img) => img.imgName === form.elements[1].value)[0]?.imgUrl || ' ',
  name: form.elements[0].value,
  creationDate: new Date().toLocaleDateString('en-CA'),
  category: form.elements[1].value,
  content: form.elements[2].value,
  dates: findDates(form.elements[2].value),
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

(() =>
  notes.map(
    (note) =>
      (note.img = categoryIcon.filter((imgObj) => imgObj.imgName === note.category)[0]?.imgUrl || ' '),
  ))();