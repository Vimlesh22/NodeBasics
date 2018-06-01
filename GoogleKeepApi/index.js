const express = require('express');
const bodyParser= require('body-parser');
const morgan = require('morgan');

const model = require("./model");
const api_route = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 3030;

model.createConnection();

app.use("/api" , bodyParser.json());
app.use("/api" , bodyParser.urlencoded({
  extended:true
}));
app.use(morgan('dev'));
app.use("/api",api_route);

app.listen(PORT, () => {
  console.log('listening on port '+ PORT);

})
