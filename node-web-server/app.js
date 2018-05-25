//requiring all the modules desideratum the project.
const fs = require('fs');
const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;
//registering partials and helper file with handlerbars
hbs.registerPartials(__dirname +'/views/partials');
hbs.registerHelper('getCurrentYear',() => {
  return new Date().getFullYear();
})
hbs.registerHelper('screamIt',(text) => {
  return text.toUpperCase();
});

//Logger using middleware
app.use((req,res,next) => {
  var now = new Date().toString();
  var log = `${now} :${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log',log + '\n',(err) => {
    if(err){
      console.log('Unable to create file server.log');
    }
  });
  next();
});
//maintenance using middleware
app.use((req,res,next) =>{
  res.render('maintenance.hbs');
});
//use middleware...__dirname stores path to the project directory publicly
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  // res.send('<h1>Hello world!</h1>');
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage:'Hello Vimlesh !!!!! How r You???????',

    })
});
app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle:'About Page',
  })
})

app.get('/bad',(req,res) =>{
  res.send({
    errorMessage :'Error :Unable to fetch the Data'})
})

app.listen(port,() =>{
  console.log(`Server is up on Port ${port}`);
});
