var express = require('express')
var exphbs = require('express-handlebars');
var path = require('path') 

var app = express();

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// serve the files in /public
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//

var catsObj = {
 cats: [
  {id: 1, name: 'fluffy', image: 'http://www.knoxroad.com/wp-content/uploads/2009/05/cute-kitten.jpg'},
  {id: 2, name: 'tick', image: 'http://data.whicdn.com/images/11897865/blissfully-cute-baby-animals-cat-kitten-4_large.jpg'}
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
  //var cat = req.body
  //catsObj.cats.push(cat)

  res.render('cats-index', catsObj)
})

module.exports = app;
