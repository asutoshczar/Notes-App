// const validator = require("validator");
const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const { addNote, removeNote, listNotes, readNote } = require("./note.js");

// console.log(getNotes());
// // console.log(validator.isEmail("example.com"));
// // console.log(validator.isURL("https://google.com"));

// console.log(chalk.green.bgRed.bold.inverse("Success!"));

// console.log(process.argv[2]);

// const command = process.argv[2];

// console.log(process.argv);

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note");
// }

// yargs.version("1.1.0");

// Customize your version

// Add Notes, Remove Notes, Read Nodes, List

// Create Add Command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

// Create Remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string,",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

// Create list command

yargs.command({
  command: "list",
  describe: "List a note",
  handler() {
    listNotes();
  },
});

// Create read command

yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    readNote(argv.title);
  },
});

// console.log(yargs.argv);

yargs.parse();
