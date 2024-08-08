import React,{useState, useEffect} from 'react'
import NewMessage from './popups/NewMessage';

function ChatNavigation({setCurrentReceipient, setDisplayMinChatNav, SET_TOGGLE_NEW_MSG, TOGGLE_NEW_MSG, fetchConversations, conversations, user }) {
   



    useEffect(()=>{ 
        fetchConversations();
    },[])

   


    const toggle_popup = () => { 
        if(TOGGLE_NEW_MSG === true){ 
            SET_TOGGLE_NEW_MSG(null)
        }else { 
            SET_TOGGLE_NEW_MSG(true);
        }
        
    }

    const minimizeChatNavigation = () => { 
        setDisplayMinChatNav(false);
       
    }

  return (
    <div className='flex-column flex-across flex-space-between height-full minimize-chat width-300px  '>
        <div className='nav-bar-control flex-across flex-space-between padding-10px height-top'>
        <span class="material-symbols-outlined color-black cursor-pointer hover-green " onClick = {() => minimizeChatNavigation()}>menu</span>
        <span class="material-symbols-outlined color-black  cursor-pointer " onClick={() => toggle_popup()}>sms</span>
        </div>

        <div className ="messages-tab  height-middle ">
            <ul className='color-white'>
                {/*User one can either be your or the receipeint thus check to see which one it is */}
                {conversations && conversations.map(conversation => (
                <li className = "hover-grey padding-10px cursor-pointer " onClick = {() => setCurrentReceipient(conversation.userOne === user.username ? conversation.userTwo : conversation.userOne ) }>@{conversation.userOne === user.username ? conversation.userTwo : conversation.userOne }</li> 
                ))}
            </ul>
        </div>

        <div className='account-tab padding-10px flex-across '>
            <img src = "https://static-00.iconduck.com/assets.00/avatar-icon-2048x2048-ilrgk6vk.png" className='img-height-50px'></img>
            <div className='color-white margin-left-10px'>{user.username}</div>
        </div>
    </div>
    
  )
}

export default ChatNavigation