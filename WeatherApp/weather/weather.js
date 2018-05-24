const request = require('request');
var getWeather = (latitude,longitude,callback) => {
  request({
    url:`https://api.darksky.net/forecast/a6f04b310f721fcd473aa553a0815bc0/${latitude},${longitude}`,
    json:true
  },(error,response,body) => {
    if (error) {
      callback('Unable to connect to forecast.io servers ');
    }
    else if (response.statusCode === 400) {
      callback('Unable to fetch weather');

    }else if (response.statusCode === 200) {
      callback(undefined,{
        temperature : body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
