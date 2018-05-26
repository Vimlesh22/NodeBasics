const Employees = require('./employees');
const express = require('express');
var app = express();
var employee1 =  new Employees({
  name : 'Vimlesh Kumar',
  username :'vim22',
  city : 'mumbai',
  mobile : 7798177837,
  other : {
    designation : 'Full Stack Developer',
    email : 'kumarvimlesh007@gmail.com',
    }
});

//adding data to data base
employee1.save((err,employ) => {
  if(err){
    console.log('error occured');
  }else {
    console.log(employ);
  }
});

//Fetching data from database
Employees.find((err,data)=>{
  if (err) {
    console.log(err);
  }else {
    console.log(data);
  }
});

//Updating data to the database
Employees.update({name:'Vimlesh Kumar'},{name:'Siddhesh Kubal'},(err,data) =>{
  if(err){
    console.log(err);
  }else {
    console.log(data);
  }
});

//delete data to the database
Employees.remove({name:'Siddhesh Kubal'},(err)=>{
  console.log(err);
});
