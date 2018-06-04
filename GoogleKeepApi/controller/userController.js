const userService = require('../service/userService');

function UserController() {

}

UserController.prototype.signup = (req,res,next) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(password);
  userService.signupService(email,password,(err,result) => {
    if(err){
      res.status(500).json({
        error : err
      });
    }else {
      res.status(200).json(result);
    }
  });
}

UserController.prototype.getUser = (req,res,next) => {
  userService.getUserService((err,result) => {
    if(err){
      res.status(500).json({
        error : err
      })
    }else {
      res.status(200).json({result :result});
    }
  });
}

UserController.prototype.login = (req,res,next) => {
  var email = req.body.email;
  var password = req.body.password;
  userService.loginService(email,password,(err,result) => {
    if(err){
      res.status(500).json({
        error : err
      })
    }if(result) {
      res.status(200).json({
        message :'Logged In Successfull!!!!!!',
        token : result
      })
    }else{
    res.status(401).json({
      message : "Login failed!!!!"
    })
  }
  });
}

module.exports = new UserController();
