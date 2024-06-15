import React from 'react'

function Chat() {
  return (
    <div className=' flex-across center-flex flex-column '>
        <div className='flex-basis-90-vh'> test</div>
       
        <div className='secondary-color-bg border-radius-10px flex-across center-flex padding-10px width-400px  flex-start'>
            <input type = "text" placeholder='Send Message' className='width-90-percent'/>
            <span class="material-symbols-outlined color-white cursor-pointer ">send</span>
        </div>
    </div>
  )
}

export default Chat