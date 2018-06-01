const User = require('../model/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

exports.signupService = (email,password,callback) => {
  User.signupModel(email,password,(err,result) => {
    if(err){
      callback(err);
    }else {
      callback(null,result);
    }
  })
};

exports.getUserService = (callback) => {
  User.getUserModel((err,result) => {
    if(err){
      callback(err)
    }else {
      callback(null,result)
    }
  });
};

exports.loginService = (email,password,callback) => {
  User.loginModel(email,password,(err,result) => {
    if(err){
      callback(err)
    }else {
      callback(null,result)
    }
  });
};
