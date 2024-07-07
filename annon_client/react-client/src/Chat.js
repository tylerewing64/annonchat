import {React, useRef, useState} from 'react';
import socket from './socketConfig/socket';

function Chat() {
    const senderTextBoxInput = useRef(null)
    const chat = useRef(null);
    const [chatData, setChatData] = useState(null); //chatData is a array of objects containing the chat messages

  //Checks if chatData is null if it is create new object. If its not updating state without changing prev state.
    const generateSenderChatEl = (input) => { 
      if(!chatData){ 
        setChatData([{"message": input}])
      }else {
        setChatData(prevState => ([
          ...prevState,{"message" : input}]));
        }
    }

    const sendMessageSocket = (input) => { 
      socket.emit("message", input)

    }

    const sendChat = (input) => { 
      sendMessageSocket(input); 
      generateSenderChatEl(input);
      senderTextBoxInput.current.value = "";

    }
    const userTypingSocket = () => { 
      let typing = "typing";
      socket.emit('typing', typing );
    }

    const handleKeyPress = (event)=> { 
      if(event.key === "Enter"){ 
        sendChat(senderTextBoxInput.current.value);
      }
    }

  return (
  <>
    <div className=' flex-across center-flex flex-column '>
        <div className = "test color-white"><h1>Annon Chat</h1></div>
          <div className='flex-basis-90-vh width-100-percent overflow-y' >
            <div className= 'width-half margin-50-percent-left' ref ={chat}> 
             
              {chatData && ( 
                chatData.map(chat => ( 
                  <div className = "secondary-color-bg border-radius-10px padding-10px color-white width-50-percent margin-50-percent-left margin-bottom-10px margin-top-10px wrap-text">
                    <>{chat.message}</>
                  </div>
                )))}
           </div>

        </div>
       
        <div className='secondary-color-bg border-radius-10px flex-across center-flex padding-10px margin-top-10px width-400px   flex-start'>
            <input type = "text" placeholder='Send Message' className='width-90-percent' id = "chat_input" ref ={senderTextBoxInput} autoComplete='none' onChange = {() => userTypingSocket()} />
            <span class="material-symbols-outlined color-white cursor-pointer" onClick={() => sendChat(senderTextBoxInput.current.value)}>send</span>
        </div>
    </div>
    </>
  )
}

export default Chat