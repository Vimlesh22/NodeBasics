const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/students");

var db = mongoose.connection;
db.once('open',() => {
  console.log('Connected to database');
});
db.on('error',console.error.bind(console,'connection error'));

var Schema = mongoose.Schema;
var employees = new Schema({
  name : String,
  username : {type:String,required:true,unquie:true,minLength:1},
  city : String,
  mobile : Number,
  other : {
    designation : String,
    email : {type:String,required:true}
  }
});
var Employees = mongoose.model('employees',employees)
module.exports = Employees;
