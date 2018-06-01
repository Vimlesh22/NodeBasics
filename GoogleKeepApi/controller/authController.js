// function AuthController() {
//
// }
// AuthController.prototype.jwt_token_filter = function (req,res,next) {
// // console.log(req.url.indexOf("login"));
// if(!req.headers.authorization && ( req.url.indexOf("login") === -1 && req.url.indexOf("signup") === -1 )){
//   // jwt.encode(req.headers.authorization,"fddfsdfds");
//   return res.send({
//     message : "No Token Provided"
//   })
// }
//
// next();
// };
//
// module.exports = new AuthController();
const authService = require('../service/authService');

function AuthController(){

}

AuthController.prototype.authenticate = (req,res,next) => {
  var email = req.body.email;
  var password = req.body.password;
  authService.authenticateService(email,password,(err,result) => {
    if(err){
      res.status(500).json({
        message : 'Failed to call service method'
      })
    }else {
      res.status(200).json({
        user : result
      })
    }
  })
   next();
};
module.exports = new AuthController();
