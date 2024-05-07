const express = require('express');
const sql = require('mssql');
const { db } = require('./config/db.js');
const app = express();
const port = 8080; 
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

app.use(cors());
//Connect to the databse;
sql.connect(db, err => { 
  if(err){ 
    throw err

  }
  console.log('Connection to azure databse successful!')
})



const user_route = require('./routes/user_route.js');
app.use('/', user_route);



// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
