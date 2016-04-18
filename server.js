// require dependencies
// --------------------
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();


// set the location for our public and view folders
// ------------------------------------------------
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');


// config stuff for body-parser
// ----------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// set up controllers
// ------------------
app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/index.html');
})


// start the server!
// -----------------
var server = app.listen(3000, function(){
  console.log('The server is listening on port ' + server.address().port);
})
