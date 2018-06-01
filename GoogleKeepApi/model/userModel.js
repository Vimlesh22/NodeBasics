const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const ToDo = require()
function UserModel() {

}

const userSchema = mongoose.Schema({
  email : {type : String,required : true,unique : true},
  password : {type : String , required :true}
});

const User = mongoose.model("User",userSchema);

UserModel.prototype.signupModel = (email,password,callback) => {
  bcrypt.hash(password,10,(err,hash) => {
    if(err){
      callback(err)
    }else{
      var user = new User({
        email : email,
        password : hash
      });
      user.save()
      .then((result,err) => {
        if(err){
          callback(err)
        }else{
          callback(null,result)
        }
      });
    }
  });
};


UserModel.prototype.loginModel = (email,password,callback) => {
  User.find({ email : email})
  .then((result,err) => {
    if(err){
      callback(err);
    }else {
        callback(null,{
        result : result
      });
    }
  });
}

UserModel.prototype.getUserModel = (callback) => {
  User.find()
  .then((result,err) => {
    if(err){
      callback(err)
    }else {
        callback(null,result);
    }
  });
}

module.exports = new UserModel();
