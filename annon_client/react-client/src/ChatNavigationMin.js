import React from 'react'

function ChatNavigationMin({setDisplayMinChatNav}) {

    const maximizeChatNav = () => { 
        setDisplayMinChatNav(true)
    }
  return (
  
        <div className='flex-column flex-across flex-space-between height-full minimize-chat  flex-basis-300px'>
            <div className='nav-bar-control flex-across flex-space-between padding-10px height-top'>
                <span class="material-symbols-outlined color-black  cursor-pointer hover-green" onClick = {() => maximizeChatNav()} >menu</span>
            </div>
    
         
            
        </div>
  )
}

export default ChatNavigationMin
