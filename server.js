var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');

 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8091;
var router = express.Router();
 
// database
const config = require('./config/database');
mongoose.connect(config.database,{ useMongoClient: true });
global.db = mongoose.connection;

//check db error
db.on('error', function(err) {
    console.log(err);
    process.exit();
});

//check connection
db.once('open', function() {
    console.log('connection to mongodb');
});

var product = require('./model/product.model');

/* this section handle all api */

var routes = require("./routes/app.route.js");
routes(app);


app.use(cors());
app.listen(port);
console.log('REST API is runnning at ' + port);