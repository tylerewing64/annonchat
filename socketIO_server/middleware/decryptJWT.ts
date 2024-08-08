const jwt = require('jsonwebtoken');
const secretKey = "MyLittleSecret";

export const extractJwtPayload = (token: string) => { 
    try{ 
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err) { 
        return null;
    }
}