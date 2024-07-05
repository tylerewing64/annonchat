
import {PrismaClient} from '@prisma/client'
import { createHash } from 'crypto';

//Hashes Password 

export const hashPassword = (password : string) => { 
    let hash = createHash('sha256');
    hash.update(password);
    return hash.digest('hex');

}

//Creates Credentials and stores them in the database
export const createCredentials = async(username: string, password : string) => { 

}

//Creates Encryption key User Case A002
export const createEncryptionKey = (userID: string) => { 
    let hash = createHash('sha256');
    hash.update('us');
    return hash.digest('hex');
    //return createHash('sha256').update(userID.slice(0,-2)).digest('hex');


}