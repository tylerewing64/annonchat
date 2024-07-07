import React from 'react'

function ChatNavigation({setDisplayMinChatNav}) {


    const Myfunction = () => { 

    }

    const minimizeChatNavigation = () => { 
        setDisplayMinChatNav(false);
       
    }

  return (
    <div className='flex-column flex-across flex-space-between height-full minimize-chat width-300px  '>
        <div className='nav-bar-control flex-across flex-space-between padding-10px height-top'>
        <span class="material-symbols-outlined color-black cursor-pointer hover-green " onClick = {() => minimizeChatNavigation()}>menu</span>
        <span class="material-symbols-outlined color-black  cursor-pointer " onClick={() => Myfunction()}>sms</span>
        
            
         
              
          
        </div>

        <div className ="messages-tab  height-middle ">
            <ul className='color-white'>
                <li className = "hover-grey padding-10px cursor-pointer">@Jevonte</li>
                <li className = "hover-grey padding-10px cursor-pointer">@Toookah</li>
                <li className = "hover-grey padding-10px cursor-pointer">@Max</li>
                <li className = "hover-grey padding-10px cursor-pointer">@Jill</li>
            
              
            </ul>
        </div>

        <div className='account-tab padding-10px flex-across '>
            <img src = "https://static-00.iconduck.com/assets.00/avatar-icon-2048x2048-ilrgk6vk.png" className='img-height-50px'></img>
            <div className='color-white margin-left-10px'>Tyler Ewing</div>
        </div>
    </div>
    
  )
}

export default ChatNavigation