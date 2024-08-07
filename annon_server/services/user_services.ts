
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
export const createCredentials = async(username: string, password : string, key: string) => { 
        const user = await prisma.user.create({ 
            data: { 
                username: username, 
                password: password,
                key: key

            }
        })
    return user;
}

//Creates Encryption key User Case A002
export const createEncryptionKey = (username: string) => { 
    let hash = createHash('sha256');
    hash.update(username[0]+username[1]+username[2]);
    return hash.digest('hex');
    //return createHash('sha256').update(userID.slice(0,-2)).digest('hex');


}


export const getUserData_W_UNAME_PWORD = async(username: string, password: string) => { 
    const userData = await prisma.user.findMany({ 
        where: {username : username, password : password}
    })
    return userData;
}



