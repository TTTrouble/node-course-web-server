const express = require('express');
const hbs = require('hbs');

var port = process.env.PORT || 8081;
var app = express();



hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'The Home Page',
        welcomeMessage: 'This is my first website built from scratch!!'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'The About Page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'This is NOT what should happen'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});