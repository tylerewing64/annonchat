import { User } from "@prisma/client";

const jwt = require('jsonwebtoken');

const secretKey = "MyLittleSecret";

interface UserPayload { 
    id: number, 
    username: string,
    role: string
}

//Creates JWT Token which is valid for 1hr
export const createToken = (payload: UserPayload) =>  { 
    const expiresIn = '1h';
    const token = jwt.sign(payload, secretKey, {expiresIn})
    return token;
}

//Extracts JWT payload from Token. If the token doesnt exist it returns null;
export const extractJwtPayload = (token: string) => { 
    try{ 
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err) { 
        return null;
    }
}