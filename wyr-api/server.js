const express = require('express');

// import routes
const indexRouter = require('./routes/index');

const app = express();

// make routes available
app.use('/', indexRouter);

// start server
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port);
});
