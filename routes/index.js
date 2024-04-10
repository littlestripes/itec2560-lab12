const express = require('express');
const router = express.Router();

// index route
// req => request object
// res => response object
// next => callback for errors
// << order is important >>
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Feedback app',
        author: 'Elijah Kamali'
    });
});

// and for the feedback form
router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form');
});

// and to handle feedback submissions
router.post('/submit-feedback', function(req, res, next) {
    // get form data from the query fields in the URL
    const formData = req.body;

    // TODO: save data to a database
    res.render('thank_you', {
        name: formData['name'],
        email: formData['email'],
        message: formData['comments'],
        currentStudent: formData['current-student']
    });
});

// expose routes
module.exports = router;
