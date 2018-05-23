const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const argv = yargs
.options({
  a:{
    demand:true,
    alias:'address',
    description:'Address to fetch weather for',
    string:true
  }
})
.help()
.alias('help','h')
.argv;
// geocode.geocodeAddress(argv.address,(errorMessage,results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   }else {
//     console.log(JSON.stringify(results,undefined,2));
//   }
// });
weather.getWeather(19.1316889,72.9351934,(errorMessage,results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(results);
  }
});
//a6f04b310f721fcd473aa553a0815bc0
