import { extractJwtPayload } from "../services/authentication_service";
import { Request, Response, NextFunction } from 'express';


//Verifies token and adds user data to the req object.
export const verifyToken = async(req: Request, res: Response, next: NextFunction) => { 
       const token = req.headers.authorization;

       if(!token){ 
        return res.status(405).json('Missing token');
       }

       const payload = extractJwtPayload(token);

       if(payload){ 

        (req as any).user = payload;
        next();

       } else { 
        return res.status(404).json("Token Expired or Does not exist");

       }
}