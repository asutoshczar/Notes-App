const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added"));
  } else {
    console.log(chalk.bgRed("Note title taken"));
  }
};

const removeNote = (title) => {
  console.log(title);
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);
  if (newNotes.length === notes.length) {
    console.log(chalk.bgRed("No match found to remove"));
  } else {
    console.log(chalk.bgGreen("Note removed"));
    saveNotes(newNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.yellow(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red("No note found"));
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
