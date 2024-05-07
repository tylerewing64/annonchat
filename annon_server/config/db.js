//Connect to azure database 
//SQL SERVER CREDENTIALS
const db ={ 
    "user": "annochat",
    "password": "Letmein1!",
    "server": "annonchat.database.windows.net",
    "database": "annonchat",
    options: {
        encrypt: true, // Use encryption
        enableArithAbort: true // Enable ArithAbort
      }
};




module.exports = { 
    db
}