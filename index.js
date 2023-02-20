// import express from 'express';
// import exphbs from 'express-handlebars';

// index.js
const XLSX = require('xlsx');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Define the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/Public/home.html');
});

// Define the add-user route
app.get('/add-user', (req, res) => {
  res.sendFile(__dirname+'/Public/add-user.html');
});

// Define the assign-task route
app.get('/assign-task', (req, res) => {
  res.sendFile(__dirname+'/Public/assign-task.html');
});


app.post('/add-user', (req, res) => {
  const { name, email, mobile } = req.body;
  const query = `INSERT INTO users (name, email, mobile) VALUES ('${name}', '${email}', '${mobile}')`;

  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send('User added successfully');
  });
});

app.post('/assign-task', function (req, res) {
  const { name, task} = req.body;
  const query = `INSERT INTO tasks (name, task_name) VALUES ('${name}', '${task}')`;

  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send('task added successfully');
  });
});


// Start the server and listen on a specific port
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


// Create a database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'task_app'
});



// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});
