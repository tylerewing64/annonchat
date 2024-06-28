import {React, useState, useEffect} from 'react'
import ChatNavigation from './ChatNavigation';
import ChatNavigationMin from './ChatNavigationMin';
import Chat from './Chat';
import "../src/css/reusables.css";
function ChatPage() {

  const [displayMinChatNav, setDisplayMinChatNav] = useState(false)
  return (<>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>
    <div className='flex-across color-theme-chat '>
        <div className='right-side  color-theme-nav z-index-10  ' >
          {/*Keep the Chat Navigation minimized when user first visits site */}
          {displayMinChatNav 
          ? 
            <ChatNavigation setDisplayMinChatNav ={setDisplayMinChatNav} /> 
          :
            <ChatNavigationMin setDisplayMinChatNav ={setDisplayMinChatNav} />  
          }
           
        </div>
        <div className = "main-section width-100-percent height-full color-theme-chat "><Chat /></div>
    
    </div >
    </>
  )
}

export default ChatPage