console.log('Starting notes.....');
const fs = require('fs');


var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('note-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('note-data.json',JSON.stringify(notes));
};

var addNotes = (title,body) => {
var notes = fetchNotes();
var note = {
  title,
  body
}
try {
  var notesString = fetchNotes();
  notes = JSON.parse(notesString);
} catch (e) {

};
var duplicateNotes = notes.filter((note) => note.title === title);
if(duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;
}
};

var getAll = () => {
  console.log("Getting all notes");
};

var readNote = (title) => {
  var noteFetched = fetchNotes();
  var note = noteFetched.filter((note) => note.title === title);
  return note[0];
};

var logNote = (note) => {
  console.log('-------------------------------');
  console.log(`Title : ${note.title}`);
  console.log(`Body : ${note.body}`);
};

var removeNote = (title) => {
  var fetchNotesData = fetchNotes();
  //var fetchNotesDataString = JSON.stringify(fetchNotesData);
  var removedData = fetchNotesData.filter((note) => note.title !== title);
  saveNotes(removedData);
  return fetchNotesData.length !== removedData.length;
};
module.exports = {
  addNotes,
  getAll,
  readNote,
  removeNote,
  logNote
};
