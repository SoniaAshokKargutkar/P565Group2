const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const nodemailer = require('nodemailer');

const app = express();
const port = 40951

const server = app.listen(port,  function () {
    console.log('Navigate to silo.sice.indiana.edu:'+port);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a connection to DB
const con = mysql.createConnection({
    host: "db.soic.indiana.edu",
    port: "40953",
    user: "lalovett",
    password: "my+sql=p565f19_lalovett",
    database: "p565f19_lalovett"
});

// Set up SMTP
let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: "connecthourofficial@gmail.com",
        pass: "P565Group2"
    }
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySql");
});

// Handle requests to specific endpoints

app.get('/', function(req, res) {
    res.render('homepage.html');
});

app.post('/register', function(req, res) {
    let user_info = JSON.parse(req.body);

    // Validate password if frontend does not
    // Query db to see if username already exists
    con.connect(function(err) {
        if (err) throw err;
        con.query("", function(err, result, fields) {
            if (err) throw err;
            // Process result of query
            success = true; // this will be changed once i know what the query gives
            if (success) {
                // If creation was successful, prompt them to verify email
                    const message = {
                        from: "<connecthourofficial@gmail.com>",
                        to: user_info.email,
                        subject: "Verify your Email Address",
                        text: "Thank you for registering! To verify your account, click this link: LINK"
                    }

                    transport.sendMail(message, function(err, info) {
                        if (err) throw err;
                        console.log(info);
                    });
            } else {
                res.statusCode(400).send("Error in account creation");
            }
        });
    });
});

app.post('/login', function(req, res) {
    let login_info = JSON.parse(req.body);

    // Query db to see if username/password match
    con.connect(function(err) {
        if (err) throw err;
        con.query("", function(err, result, fields) {
            if (err) throw err;
            if (result) { // If successful, send them the appropriate page (dashboard?)
                res.render("dashboard.html");
            } else { // else status code 401 (unauthorized)
                res.status(401).send("Incorrect username/password");
            }
        });
    });
});