const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
.then((response) =>{
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find address')
  }
  var latitude = response.data.results[0].geometry.location.lat;
  var longitude = response.data.results[0].geometry.location.lng;
  var weather = `https://api.darksky.net/forecast/a6f04b310f721fcd473aa553a0815bc0/${latitude},${longitude}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weather)
}).then((response) => {
  var temperature =response.data.currently.temperature;
  var apparentTemperature =response.data.currently.apparentTemperature;
  console.log(`Its Currently ${temperature}. It fells like ${apparentTemperature}`);
})
.catch((e) =>{
  if(e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  }else {
    console.log(e.message);
  }
})
//a6f04b310f721fcd473aa553a0815bc0
