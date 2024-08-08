import {React, useRef, useState, useEffect} from 'react';
import socket from './socketConfig/socket';

import CryptoJS from 'crypto-js';


function Chat({currentReceipient, user}) {
    const senderTextBoxInput = useRef(null)
    const chat = useRef(null);
    const [chatData, setChatData] = useState([]); //chatData is a array of objects containing the chat messages
    const secretKey = 'encrypted_key';

    useEffect(() => {
      const handleMessage = (msg, sender) => {
        console.log(currentReceipient, sender);
        if (currentReceipient === sender) {
          generateSenderChatEl(decryptString(msg), sender);
        }
      };
    
      socket.on("receiveMessage", handleMessage);
    
      // Cleanup function to remove the event listener
      return () => {
        socket.off("receiveMessage", handleMessage);
      };
    }, [currentReceipient]);
    


  //Checks if chatData is null if it is create new object. If its not update state without changing prev state.
    const generateSenderChatEl = (input, username) => { 
        setChatData(prevState => ([
          ...prevState,{username : [input, username]}]));
        
    }

    const sendMessageSocket = (input) => { 
      socket.emit("message", input, currentReceipient);
      
    }
  
    
    //Takes string and encrypts it 
    const encryptString = (input) => { 
      const encryptedMessage = CryptoJS.AES.encrypt(input, secretKey).toString();
      return  encryptedMessage;
    }

    const decryptString = (input) => { 
      const bytes = CryptoJS.AES.decrypt(input, secretKey);
      const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedMessage;
    }

  //Ran every time you click send button 
    const sendChat = (input) => { 
      const encryptedMessage = encryptString(input);
      sendMessageSocket(encryptedMessage);
      generateSenderChatEl(input, user.username);
      senderTextBoxInput.current.value = "";

    }
    //
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
  {console.log(chatData, currentReceipient)}
    <div className=' flex-across center-flex flex-column '>
        <div className = "test color-white"><h1>{currentReceipient}</h1></div>
          <div className='flex-basis-90-vh width-100-percent overflow-y' >
            <div className= 'width-half margin-30-percent-left' ref ={chat}> 
             
              {chatData && ( 
                chatData.map(chat => ( 
                  <>
                  {chat.username[1] === currentReceipient 
                  ?
                   <div className = "background-color-green border-radius-10px padding-10px color-white margin-30-percent-right margin-bottom-10px margin-top-10px wrap-text">
                    <>{chat.username[0]}</>
                  </div> 
                  :
                  <div className = "secondary-color-bg border-radius-10px padding-10px color-white width-30-percent margin-50-percent-left margin-bottom-10px margin-top-10px wrap-text">
                   <>{chat.username[0]}</>
                  </div>

                   }
                  </>
                )))}
               
           </div>

        </div>
       
        <div className='secondary-color-bg border-radius-10px flex-across center-flex padding-10px margin-top-10px width-400px   flex-start'>
            <input type = "text" placeholder='Send Message' className='width-90-percent' id = "chat_input" ref ={senderTextBoxInput} autoComplete='none' onChange = {() => userTypingSocket()} onKeyDown={handleKeyPress} />
            <span class="material-symbols-outlined color-white cursor-pointer" onClick={() => sendChat(senderTextBoxInput.current.value)}>send</span>
        </div>
    </div>
    </>
  )
}

export default Chat