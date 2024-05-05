const express = require('express');
const sql = require('mssql');
const { config } = require('./config/db.js');
const app = express();
const port = 8080; // Set the port for your server

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//connect to azure database.
sql.connect(config, err => { 
  if(err){ 
    throw err

  }
  console.log('Connection to azure databse successful!')
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
