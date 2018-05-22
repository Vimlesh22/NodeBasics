const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
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
var myCallback = (errorMessage,results) => {
  if (errorMessage) {
    console.log(errorMessage);
  }else {
    console.log(JSON.stringify(results,undefined,2));
  }
}
geocode.geocodeAddress(argv.address,myCallback);
