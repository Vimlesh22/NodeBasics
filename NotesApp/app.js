console.log('Starting appjs....');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:',command);
console.log('Process',process.argv);
console.log('yargs',argv);

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
notes.getAll();
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
