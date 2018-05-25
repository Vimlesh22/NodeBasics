console.log("Starting App.js.....!!!!");
//require lets us loads in module functionality
const fs = require('fs');

//working with array using lodash module funtinality _.uniq
const _ = require('lodash');
var array = ['Mike',1,'Andrew',1,2,3,4];
var filteredArray = _.uniq(array);
console.log(filteredArray);

const os = require('os');
var user = os.userInfo();
console.log(user);

//Using Ec6 we can write like this also `Hello ${user.username} !`
//requiring external files
const notes = require('./notes.js');
fs.appendFile('greeting.txt','Hello World '+user.username+'You are '+notes.age,function (err) {
  if(err){
    console.log("Unable to create file");
  }

});

var res = notes.addNote();
//console.log(res);
console.log('Result:'+notes.add(7,-2));
