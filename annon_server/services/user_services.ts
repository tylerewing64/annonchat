
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

//Creates Encryption key
export const createEncryptionKey = async(userID: string) => { 

}