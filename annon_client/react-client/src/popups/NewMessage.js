import React, {useRef, useState} from 'react'

function NewMessage({SET_TOGGLE_NEW_MSG,fetchConversations }) {
  const [displayErrorText, setDisplayErrorText] = useState(false);
  const createConversations = async() => { 
    const response = await fetch(`http://localhost:8080/api/conversation`, { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            sender_username: "tyler", 
            receipient_username: usernameInputValue.current.value
        })
    })

    if(response.status === 200){ 
      SET_TOGGLE_NEW_MSG(null);
      return fetchConversations();
    }
    return setDisplayErrorText(true);

    
}

  const usernameInputValue = useRef(null)
  return (
    <div className='z-index-10 center-using-transform width-300px chat-bg '>
      <div className='flex-across flex-space-between color-black padding-5px'>
        <div className=''>New Message</div>
        <div className = "cursor-pointer" onClick={() => SET_TOGGLE_NEW_MSG(null)}>❌</div>
      </div>
      <div> 
        
        <input type = 'text' className='width-95-percent margin-top-10px padding-5px' placeholder='@Username' ref={usernameInputValue} onChange={() =>setDisplayErrorText(false)}/>
        <button type = "button" className= ' width-95-percent margin-top-10px padding-5px color-white chat-bg text-align-center cursor-pointer' onClick={()=> createConversations()}>Start Chat</button>
        {displayErrorText && <p className='color-red text-align-center'>Chat already exists with this user</p>}

      </div>
    </div>
  )
}

export default NewMessage