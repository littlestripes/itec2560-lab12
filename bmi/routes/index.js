const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/calculate', function(req, res, next) {
    const { height, weight } = req.query;

    // not ideal to do the calculation in the router but ¯\_(ツ)_/¯
    const bmi = ( weight / ( height ** 2 ) ).toFixed(2);

    res.render('calculate', {
        bmi: bmi
    });
});

module.exports = router;
