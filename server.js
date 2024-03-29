const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 40951

const server = app.listen(port,  function () {
    console.log('Navigate to silo.sice.indiana.edu:'+port);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// Create a connection to DB

// Handle requests to specific endpoints

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});
