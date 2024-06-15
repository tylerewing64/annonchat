import React from 'react'

function ChatNavigation() {
  return (
    <div className='flex-column flex-across flex-space-between height-full '>
        <div className='nav-bar-control flex-across flex-space-between padding-10px height-top'>
            
            <span class="material-symbols-outlined color-black">minimize</span>
            
         
                <span class="material-symbols-outlined color-black">sms</span>
          
        </div>

        <div className ="messages-tab padding-10px height-middle">
            <ul className='color-white'>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
                <li className = "hover-grey">Jill</li>
                <li className = "hover-grey">John</li>
                <li className = "hover-grey">Max</li>
              
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