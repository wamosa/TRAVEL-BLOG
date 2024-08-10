const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // You can choose any port you like
// Enable CORS
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ' ',
  database: 'traveldb'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, phone } = req.body;
  
  // SQL query to insert contact form data
  const query = 'INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)';
  
  connection.query(query, [name, email, phone], (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(409).send('Duplicate entry detected. Please use a unique email and phone number.');
      } else {
        res.status(500).send('Email or phone number is already used');
      }
    } else {
      res.status(200).send('Contact information saved successfully.');
    }
  });
});
// Add this route to fetch contacts from the database
app.get('/contact', (req, res) => {
  const query = 'SELECT * FROM contacts';
  
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching data from the database');
    } else {
      res.status(200).json(results);
    }
  });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});