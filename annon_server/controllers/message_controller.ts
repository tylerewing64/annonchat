import { Request, Response } from 'express';
import { CHECK_IF_CONVO_EXIST, CREATE_CONVERSATION, GET_CONVERSATIONS } from '../services/message_services';
import { create } from 'domain';

const createConversation = async(req: Request, res :Response) => { 
    let {sender_username, receipient_username} = req.body; 
    //Convert IDS TO Number

    const existance = await CHECK_IF_CONVO_EXIST(sender_username, receipient_username); 
    if(existance){ 
        return res.status(403).send("Conversation already exists");
    }
    const new_convo = await CREATE_CONVERSATION(sender_username, receipient_username); 
    if(new_convo){ 
        return res.status(200).send('Succesfully Created New Conversation!');
    }
}

const getConversation = async(req: Request, res: Response) => { 
    let {username} = req.query; 

    if(typeof username === "string"){ 
        const conversations =  await GET_CONVERSATIONS(username); 
        if(typeof conversations ==="object"){ 
            return res.status(200).json(conversations);
        }
        return res.status(500).send("Error getting conversations")
    }
}

module.exports ={ 
    createConversation, 
    getConversation

}