const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/students');
var ToDo = mongoose.model('ToDo',{
  text:{
    type:String,
    required :true,
    minLength: 1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null

  }
});

// var newToDo = new ToDo({
//   text:'Cook dinner'
// });
// newToDo.save().then((doc) =>{
// console.log('Saved ToDo',doc);
// },(e) => {
//   console.log('unable to save data');
// });

var newToDo = new ToDo({
  text:'',
  completed:true,
  completedAt:2018
});
newToDo.save().then((doc) => {
  console.log('data saved:',doc);
},(e) => {
  console.log('unable to save data');
})
