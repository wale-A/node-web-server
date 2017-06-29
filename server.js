 const express = require('express');
 const hbs = require('hbs');
 const fs = require('fs');
 const os = require('os');

 var app = express();

 hbs.registerPartials(__dirname + '/views/partials');
 app.set('view engine', 'hbs');
 app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + os.EOL, (err) => {
        if (err){
            console.log('error occurred while writing to log file');
        }
    });
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs', {
        pageTitle: 'maintenance'
    });
})

 hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
 });
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

 app.get('/', (request, response) => {
    //response.send('<h1>hello express !</h1>');
    response.render('home.hbs', {
        pageTitle: 'home page',
        welcomeMessage: 'welcome to the home page for this server',
    });
 });

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'about page',
    });
});

 app.listen(3000, () => {
     console.log('server is up on port 3000');
 });