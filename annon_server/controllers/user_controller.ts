import { Request, Response } from 'express';
import { hashPassword, createCredentials, createEncryptionKey, getUserData_W_UNAME_PWORD } from '../services/user_services';
import { createToken } from '../services/authentication_service';
import { hash } from 'crypto';
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
            res.status(500).json('Error: Username Already In Use');
            return;
        })
    }else { 
        res.status(502).json('Error: Missing username or password');
        return;
    }
};


export const login = async ( req: Request, res: Response) => {
   
    const {username, password} = req.headers; 
    //To check if login credentials was sent in the request http headers
    if(username  && password){ 
        //Check the data type of the login credentials
        if( typeof username === "string" && typeof password === "string"){
            const hashedPw = hashPassword(password);
            //Get the userdata using login credentials
            await getUserData_W_UNAME_PWORD(username, hashedPw)
            .then(resolve => { 
                //Check If length of the returned results is 0, if true that means no user matches the credentials entered.
                if(resolve.length === 0){ 
                    res.status(404).json('Wrong Email or Password');
                    return;
                }else {
                //Send data to auth service to generate JWT
                const payloadObj = {id: resolve[0].id, username: resolve[0].username, role: resolve[0].role || "null" }
                const token  = createToken(payloadObj);
                res.status(200).json({token : token});
                }
            })
        }else { 
            res.status(501).json('Wrong data type');
            return;
        }
    }else { 
        res.status(502).json('No username or password');
        return;
    }

}