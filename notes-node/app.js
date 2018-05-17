console.log("Starting App.js.....!!!!");
//require lets us loads in module functionality
const fs = require('fs');
const os = require('os');
//requiring external files
const notes = require('./notes.js');

var user = os.userInfo();
console.log(user);
Using Ec6 we can write like this also `Hello ${user.username} !`
fs.appendFile('greeting.txt','Hello World '+user.username+'You are '+notes.age,function (err) {
  if(err){
    console.log("Unable to create file");
  }

});

var res = notes.addNote();
//console.log(res);
console.log('Result:'+notes.add(7,-2));
