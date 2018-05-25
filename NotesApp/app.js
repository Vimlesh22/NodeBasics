const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const titleOption = {
  describe: 'Title of a Note',
  demand : true,
  alias : 't'
};
const bodyOption = {
  describe:'Body of a note',
  demand:true,
  alias:'b'
};
const argv = yargs
.command('add','Adding an Note',{
  title:titleOption,
  body:bodyOption
})
.command('list','listing all the notes available')
.command('read','Reads an individual note',{
  title:titleOption
})
.command('remove','Remove a note',{
  title:titleOption
})
.help()
.argv;
var command = process.argv[2];
if(command === 'add'){
  var note = notes.addNotes(argv.title,argv.body);
  if(_.isObject(note)){
    console.log('Note Has been Created!!!!!');
    notes.logNote(note);
  }else {
    console.log('Note Contains Duplicate title....So Cant create a note!!');

  }
}
else if (command === 'list') {
var allNotes = notes.getAll();
console.log(`Printing ${allNotes.length} note(s).`);
allNotes.forEach((note) => notes.logNote(note));
}

else if(command === 'read'){
  var note = notes.readNote(argv.title);
  if(note){
    console.log('Note Found!!!!!');
    console.log('-------------------------------');
    notes.logNote(note);
  }else {
    console.log('Note Not Found');
  }
}

else if (command === 'remove') {
var remove = notes.removeNote(argv.title);
var message = remove ? 'Note Removed' : 'Note Cant be removed';
console.log(message);
}
else {
  console.log('Command not recognized!!');
}
