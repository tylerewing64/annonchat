import {React, useState, useEffect} from 'react'
import socket from './socketConfig/socket';
import ChatNavigation from './ChatNavigation';
import ChatNavigationMin from './ChatNavigationMin';
import Chat from './Chat';
import "../src/css/reusables.css";
import NewMessage from './popups/NewMessage'; 
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode'

function ChatPage() {

  const [displayMinChatNav, setDisplayMinChatNav] = useState(false)
  const [auth, setAuth] = useState(false);
  const [TOGGLE_NEW_MSG, SET_TOGGLE_NEW_MSG] = useState(null);
  const [conversations, setConversations] = useState();
  const [currentReceipient, setCurrentReceipient] = useState();
  const [user, setUser] = useState({});

///EDIT THIS TO BE DYNAMIC IT SHOULD DECRYPT JSON WEB TOKEN AND GET THE USERNAME THAT WAY

//get user data from jwt token
const decryptJwtPayload = () => { 
  setUser(jwtDecode(Cookies.get('token')))
  console.log(user)
}

const fetchConversations = async() => { 
  const response = await fetch(`http://localhost:8080/api/conversation?username=${user.username}`)
  const data = await response.json();
  setConversations(data)

}

 
  useEffect(()=> {
    //If authenticated render the page
    if(Cookies.get('token')){ 
      decryptJwtPayload();
      setAuth(true);
      INIT_socket();

    }else { 
      window.location.href = '/'
    }
  },[setAuth])

    const INIT_socket = () => { 
      socket.emit('connection', Cookies.get('token'));
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
            <ChatNavigation setDisplayMinChatNav ={setDisplayMinChatNav} TOGGLE_NEW_MSG = {TOGGLE_NEW_MSG} SET_TOGGLE_NEW_MSG={SET_TOGGLE_NEW_MSG} fetchConversations={fetchConversations} conversations={conversations} user ={user}
            setCurrentReceipient = {setCurrentReceipient} /> 
          :
            <ChatNavigationMin setDisplayMinChatNav ={setDisplayMinChatNav} />  
          }
           
        </div>
        {TOGGLE_NEW_MSG ? <NewMessage  SET_TOGGLE_NEW_MSG={SET_TOGGLE_NEW_MSG}  fetchConversations={fetchConversations} /> : null}
        <div className = "main-section width-100-percent height-full color-theme-chat cursor-pointer "><Chat   currentReceipient = {currentReceipient} user = {user}/></div>
    
    </div >
    )}
  
    </>
    
  )
  
}

export default ChatPage