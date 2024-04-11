const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// make stylesheets available
const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port);
});
