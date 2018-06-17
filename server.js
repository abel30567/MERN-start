const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
/* 
// publish to server, uncomment the section below to serve the front-end after running 'npm run build'
const path = require('path'); 



app.use(express.static(path.join(_dirname, 'client/build')));
app.get('/', function(req,res) {
    res.sendFile(path.join(_dirname, 'build', 'index.html'));
}); 
*/
// Connect MongoDB

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/MyMERNAPP");
mongoose.connection
    .once('open', () => console.log('MongoDB is activated'))
    .on('error', err => console.error(err))

// Middleware
app.use(express.static(__dirname + '/assets'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Routes

var mainRoutes = require('./routes/main');

app.use(mainRoutes);

const PORT = 3001;

app.listen(PORT, function(err) {
    if (err) {
        throw err;
    }
    console.log('The server is running in ' + PORT);
});