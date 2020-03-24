var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
require('dotenv').config()

var app = express();
var PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.static(path.join(__dirname, './app/public/assets')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}`);
});