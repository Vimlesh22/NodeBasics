console.log("Starting notes.js");

module.exports.age = 25;
module.exports.addNote = (err) => {
  console.log('addNote');
  return 'New Note';
}
module.exports.add = (a,b) => {
  return a + b;
}
