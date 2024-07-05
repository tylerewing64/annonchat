import {React, useRef} from 'react'

function Chat() {
    const senderTextBoxInput = useRef(null)
    const generateSenderChat = (input) => { 

        const html = `
            
                   ${input}
                  


        `;
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = html;
        messageDiv.className = 'secondary-color-bg border-radius-10px padding-10px color-white width-50-percent margin-50-percent-left margin-bottom-10px margin-top-10px';
        const chatBox = document.getElementById('chat');
        chatBox.append(messageDiv);
        

        
        
    }



    
  return (
    <div className=' flex-across center-flex flex-column '>
        <div className = "test color-white"><h1>Annon Chat</h1></div>
        <div className='flex-basis-90-vh width-100-percent overflow-y' > 
            <div className='width-400px margin-50-percent-left' id ="chat">

            {/* 
            {arr.map( element => (
                    <div className ="secondary-color-bg border-radius-10px padding-10px color-white width-50-percent margin-50-percent-left margin-bottom-10px">
                    This is a test
                    </div>

            ))}
           
            */}
         </div>

        </div>
       
        <div className='secondary-color-bg border-radius-10px flex-across center-flex padding-10px margin-top-10px width-400px   flex-start'>
            <input type = "text" placeholder='Send Message' className='width-90-percent' id = "chat_input" ref ={senderTextBoxInput} autoComplete='none'/>
            <span class="material-symbols-outlined color-white cursor-pointer " onClick={() => generateSenderChat(senderTextBoxInput.current.value)}>send</span>
        </div>
    </div>
  )
}

export default Chat