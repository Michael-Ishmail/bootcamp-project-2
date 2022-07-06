var path = require('path')

var authenticated = require('authentication path')

module.exports = function(app) {
    app.get('/', function(req, res) {
        if (req.user) {
            res.redirect('/home')
        } else {
            res.render('signup', {js: ['signup.js']})
        }
    })

    app.get('/login', function(req, res) {
        if (req.user) {
            res.redirect('/home')
        } else {
            res.render('login', {js: ['login.js']})
        }
    })


    // These will require authentication to access. Users will be automatically redirected to the login page if they are not logged in.
    app.get('/event/new', authenticated, function(req, res) {
            res.render('new-event', {js: ['new-event.js']})
        }
    )

    app.get('/user/:id', authenticated, function(req, res) {
        res.render('dashboard', {js: ['dashboard.js']})
    }
)

}