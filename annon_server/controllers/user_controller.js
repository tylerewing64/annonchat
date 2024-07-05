const db = require('../config/db.js');
const crypto = require('crypto');
import {hashPasword, createCredentials, createEncryptionKey} from '../services/user_services'

const { Request, NVarChar } = require('mssql');


const register = (req, res) => { 
    
    

}

const login = (req, res) => { 
    



}


module.exports ={ 
register, 
login
}