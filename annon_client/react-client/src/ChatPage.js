import {React, useState, useEffect} from 'react'
import ChatNavigation from './ChatNavigation'
import "../src/css/reusables.css";
function ChatPage() {
  return (<>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>

    <div className='flex-across color-theme-chat'>
        <div className='right-side flex-basis-300px color-theme-nav '>
            <ChatNavigation/>
        </div>
        <div className = "main-section">Test</div>
    
    </div >
    </>
  )
}

export default ChatPage