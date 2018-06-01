const User = require('../model/userModel');
function AuthService() {

};
AuthService.prototype.authenticateService = function (email,password,callback) {
  User.find({email : email}).then

};
