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

    User.find({email : email}).then((user) => {
      if(user.length >= 1){
        callback('User alreay exists!!!!!....Create a new user');
      }
      else {
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
    }else {
      console.log(result.password);
      console.log(password);
      bcrypt.compare(password,result.password,(err,result1) => {
        if(err){
          callback(err);
        }else if (result1 === false) {
            callback(err)
        }else {
          callback(null,result1)
        }

      })
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
