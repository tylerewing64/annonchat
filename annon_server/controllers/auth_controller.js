const db = require('../config/db.js');
const crypto = require('crypto');


const { Request, NVarChar } = require('mssql');


const register = (req, res) => { 
    
    const { username, password } = req.body;
   
    LowerCaseUsername = username.toLowerCase();
    //Hash password
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    

    // Using parameterized query
    query = `INSERT INTO users(username, password) VALUES(@username, @password);`;
    
    // Assuming you are using the mssql package
    const request = new Request();
    request.input('username', NVarChar(15), LowerCaseUsername);
    request.input('password', NVarChar(100), hashedPassword);
    
    request.query(query, (err, result) => {
        if (err) {
            
            return res.status(500).send('Error: Username already taken');
        }
        // Handle successful insertion
        res.status(200).send('Success: User inserted successfully.');
    });

}

const login = (req, res) => { 
    



}


module.exports ={ 
register, 
login
}