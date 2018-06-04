const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config =  require('../config');
const validator = require('validator');
// const ToDo = require()
function UserModel() {

}

const userSchema = mongoose.Schema({
  email : {
    type : String,
    required : true,
    unique : true,
    minlength : 1,
    trim : true,
    validate : {
        validator : validator.isEmail,
        message : '{VALUE} is not a valid Email'
      }
    },
  password : {type : String , required : true, minlength : 6},
  token : [{
    access : {
      type : String,
      required :true
    },
    token : {
      type : String,
      required :true
    }
  }]
});

const User = mongoose.model("User",userSchema);

UserModel.prototype.signupModel = (email,password,callback) => {

    User.find({email : email}).then((user,err) => {
      if(user.length >= 1){
        callback('User alreay exists!!!!!....Create a new user');
      }
      else{
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
      }
      callback(err);
    })
};

//
// UserModel.prototype.loginModel = (email,password,callback) => {
//   User.find({ email : email})
//   .then((result,err) => {
//     if(err){
//       callback(err);
//     }else {
//         callback(null,{
//         result : result
//       });
//     }
//   });
// }


UserModel.prototype.loginModel = (email,password,callback) => {
  User.findOne({ email : email})
  .then((result,err) => {
    if(err){
      callback(err);
    }else if(result){
      bcrypt.compare(password,result.password,(error,result1) => {
        console.log(result1);
        if(error){
          callback(error);
        }
        if(result1){
          console.log("hello");
          const token = jwt.sign({
            email : email,
          },config.secret,{
            expiresIn : "1h"
          })
          callback(null,token);
        }else {
          callback(error)
        }
      })
    }
  });
};

//
// UserModel.prototype.authenticateModel = (token,email,password,callback) => {
//   try{
//       var decode = jwt.verify(token,config.secret);
//       callback(null,decode);
//   }catch(error){
//     callback(error);
//   }
//
// }
//















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
