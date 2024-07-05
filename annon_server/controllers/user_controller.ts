import { Request, Response } from 'express';
import { hashPassword, createCredentials, createEncryptionKey } from '../services/user_services';


//Checks if username & password. Hashes password. Creates unique encryption key. Sends credentials to database.
export const register = async (req: Request, res: Response) => { 

    const { username, password } = req.body; 
    //Checks if username and password is present in request
    if(username && password){
        const hashedPw =  hashPassword(password);  
        const encryptionKey =  createEncryptionKey(username);  
        await createCredentials(username, hashedPw, encryptionKey
        ).then(resolved => {
            res.status(200).json({ encryptionKey });
         }
        ).catch(error => { 
            res.status(500).send('Error: Username Already In Use');
        })
    }else { 
        res.status(500).send('Missing username or password');
    }
};
