const config = require ('../config');
const jwt = require('jsonwebtoken');
function AuthController() {

}
AuthController.prototype.jwt_token_filter = function (req,res,next) {
if(!req.headers.authorization && ( req.url.indexOf("login") === -1 && req.url.indexOf("signup") === -1 )){
  var token = req.body.token || req.headers['x-access-token'];
  try{
  var encode = jwt.verify(token,config.secret);
  }catch(error)
  {
    res.send({
      error : error
    });
  }
}
next();
};

module.exports = new AuthController();
































// const authService = require('../service/authService');
//
//
//
// module.exports.authenticate = (req,res,next) => {
//   var email = req.body.email;
//   var password = req.body.password;
//   const token = req.body.token;
//   authService.authenticateService(token,email,password,(err,result) => {
//     if(err){
//       res.status(500).json({
//         message : 'Failed to call service method'
//       })
//     }else {
//       res.status(200).json({
//         user : result
//       })
//     }
//   })
//    next();
// };
