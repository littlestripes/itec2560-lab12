const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// import the routes
const indexRouter = require('./routes/index');

const app = express();

// enable POST body parser
app.use(bodyParser.urlencoded({ extended: false }));

// serve static data
const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation));

// use Handlebars and templates in ./views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// make routes available to app
app.use('/', indexRouter);

// start server
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port);
});
