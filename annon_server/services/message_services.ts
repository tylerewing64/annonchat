import {Prisma, PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export const CHECK_IF_CONVO_EXIST = async(sender_username: string, recipient_username: string) => { 
    const conversations = await prisma.messageGroup.findMany({ 
        where: { 
            OR: [
                { userOne: sender_username, userTwo: recipient_username },
                { userOne: recipient_username, userTwo: sender_username }
            ]
        }
    });
      if(conversations.length === 0){
         return false
      }
      return true;
    
}


export const CREATE_CONVERSATION = async(sender_username: string, recipient_username: string) => { 
    try{ 
        const conversation = await prisma.messageGroup.create({ 
            data: { 
                userOne : sender_username, 
                userTwo: recipient_username
            }
        })
        return true;
    } catch(error){ 
        return false;
    }

}
export const GET_CONVERSATIONS = async(username: string) =>{
    const conversations = prisma.messageGroup.findMany({
        where : { 
            OR: [
                {userOne: username},
                {userTwo: username}
            ]
        }, 
        orderBy: {
            date_created: 'desc'
        }

        
    })
    return conversations;


}