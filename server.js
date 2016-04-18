// require dependencies
// --------------------
require('dotenv').config();
var GooglePlaces     = require('google-places'),
    express    = require('express'),
    bodyParser = require('body-parser'),
    cors       = require('cors'),
    app        = express();

var places = new GooglePlaces(process.env.GOOGLE_API_KEY_SERVER);

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
  res.sendFile(__dirname + '/public/views/index.html');
})

app.post('/location', function(req, res, next){
  console.log(req.body.place);
  places.search({ keyword: req.body.place }, function(err, data){
    if (err) console.log(err);

    console.log(data);
  })
  res.send('hiiiii');
})


// start the server!
// -----------------
var server = app.listen(3000, function(){
  console.log('The server is listening on port ' + server.address().port);
})
