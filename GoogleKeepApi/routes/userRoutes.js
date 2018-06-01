const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authController = require("../controller/authController");

// router.use(authController.jwt_token_filter);

router.get('/getUser',userController.getUser);
router.post('/signup' , userController.signup);
router.post('/login' , userController.login);
//router.post('/authentication',authController.authenticate);

module.exports = router;
