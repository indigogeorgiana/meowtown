var express = require('express')
var exphbs = require('express-handlebars');
var path = require('path') 

var app = express();

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// serve the files in /static
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//

var catsObj = {
 cats: [
  {id: 1, name: 'fluffy'},
  {id: 2, name: 'tick'}
 ]
}

app.get('/', function (req, res) {
 res.redirect('/cats') // what is this doing?
})

app.get('/cats', function(req, res) {
 res.render('cats-index', catsObj)
})

app.get('/cats/new', function(req, res) {
 res.render('cats-new')
})

app.get('/cats/:id', function (req, res){
  console.log(req.params); // try going to /cats/1
})

app.post('/cats', function (req, res) {
  console.log(req.body);
})

module.exports = app;
