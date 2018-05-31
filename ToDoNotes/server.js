const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const model = require('./model/connection')
const app = express();

const PORT = process.env.PORT || 3000 ;



app.use('/api',bodyParser.urlencoded({extended : true}));
app.use('/api',bodyParser.json());
app.use(morgan('dev'));
app.use('/api',routes);
app.listen(PORT, () => {
  model.createConnection();
  console.log('Listening on Port'+PORT);
});
