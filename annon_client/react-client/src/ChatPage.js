import {React, useState, useEffect} from 'react'
import socket from './socketConfig/socket';
import ChatNavigation from './ChatNavigation';
import ChatNavigationMin from './ChatNavigationMin';
import Chat from './Chat';
import "../src/css/reusables.css";
import NewMessage from './popups/NewMessage'; 
import Cookies from 'js-cookie'
function ChatPage() {

  const [displayMinChatNav, setDisplayMinChatNav] = useState(false)
  const [auth, setAuth] = useState(false);
  const [TOGGLE_NEW_MSG, SET_TOGGLE_NEW_MSG] = useState(null);
  const [conversations, setConversations] = useState();


///EDIT THIS TO BE DYNAMIC IT SHOULD DECRYPT JSON WEB TOKEN AND GET THE USERNAME THAT WAY
  let username = 'tyler';


const fetchConversations = async() => { 
  const response = await fetch(`http://localhost:8080/api/conversation?username=${username}`)
  const data = await response.json();
  setConversations(data)

}

  useEffect(()=> {
    
    if(Cookies.get('token')){ 
      setAuth(true);
      INIT_socket();

    }else { 
      window.location.href = '/'
    }
  },[setAuth])

    const INIT_socket = () => { 
      socket.emit('connection');
    }

  return (
  <>

    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>
    
    {auth &&( 
    <div className='flex-across color-theme-chat '>
      
        <div className='right-side  color-theme-nav z-index-10  ' >
          {/*Keep the Chat Navigation minimized when user first visits site */}
          {displayMinChatNav 
          ? 
            <ChatNavigation setDisplayMinChatNav ={setDisplayMinChatNav} TOGGLE_NEW_MSG = {TOGGLE_NEW_MSG} SET_TOGGLE_NEW_MSG={SET_TOGGLE_NEW_MSG} fetchConversations={fetchConversations} conversations={conversations} username={username} /> 
          :
            <ChatNavigationMin setDisplayMinChatNav ={setDisplayMinChatNav} />  
          }
           
        </div>
        {TOGGLE_NEW_MSG ? <NewMessage  SET_TOGGLE_NEW_MSG={SET_TOGGLE_NEW_MSG}  fetchConversations={fetchConversations} /> : null}
        <div className = "main-section width-100-percent height-full color-theme-chat cursor-pointer "><Chat /></div>
    
    </div >
    )}
  
    </>
    
  )
  
}

export default ChatPage