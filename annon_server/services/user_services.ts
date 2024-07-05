
import {Prisma, PrismaClient} from '@prisma/client'
import { createHash } from 'crypto';

const prisma = new PrismaClient();


//Hashes Password 
export const hashPassword = (password : string) => { 
    let hash = createHash('sha256');
    hash.update(password);
    return hash.digest('hex');

}

//Creates Credentials and stores them in the database
export const createCredentials = async(username: string, password : string) => { 
        const user = await prisma.user.create({ 
            data: { 
                username: username, 
                password: password,

            }
        })
    return user;
}

//Creates Encryption key
export const createEncryptionKey = (userID: string) => { 

}