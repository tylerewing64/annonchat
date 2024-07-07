import './/css/Register.css';
import { useEffect, useState, useRef } from 'react';



function Register() {
  const [errText, setErrText] = useState('');
  const [errTextColor, setErrTextColor] = useState('color-red');
  const username = useRef(null);
  const password = useRef(null);

  const signUp = (username, password) => {
    setErrText('');
    if(checkUsernameRules(username) && checkPasswordRules(password)){ 
      registerUser(username, password);
    }
    
  };

  const checkUsernameRules = (username) => { 
    if(!username.current.value){ 
      setErrText("No username!");
      return;
    }  
  
    if(username.current.value.length > 15){
      setErrText("Username cannot be longer than 15 characters");
      return
    }

    return true;

  }

  const checkPasswordRules = (password) => { 
    if (password.current.value.length <= 10) {
      setErrText("Password must be longer than 10 characters!");
      return;
    }
    return true;
  }

  const registerUser = async(username, password) => { 
    username = username.current.value;
    password = password.current.value;
    await fetch('http://localhost:8080/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(async(response) => {
      let data = await response.json();
      if (!response.ok) {
        setErrText(data);
      }else if(response.ok){
        setErrTextColor('color-green wrap-text');
        setErrText(`Success! Please store your encryption key: ${data.encryptionKey}` );
        console.log(data.encryptionKey);
      }
    })
    .catch(error => {
      console.error('Error signing up user:', error);
    });
  }

  const isEmpty = (event) => { 
    if(!event.target.value){ 
      setErrText('');
    }
  }


  return (
    <body className='color-theme-nav height-full'>
      <div className="register-container center-flex text-align-center width-100-percent "> 
        <div className="flex-across flex-column border padding-10px width-300px ">
          <h2 className='color-white font-size-25px'>New User</h2> 
          <p className='margin-top-10px'>Username:</p>
          <input  className='margin-top-10px hover-grey' type="text" id="username-input" autoComplete='off' ref={username} onChange={(e) => isEmpty(e)}/>
          <p>Password:</p>
          <input className='margin-top-10px hover-grey' type="password" id="password-input" ref={password} onChange={(e) => isEmpty(e)}/>
          <button type="button" id="submit" className = "margin-top-10px cursor-pointer hover-bg-green padding-10px"onClick={() => signUp(username, password)}>Sign Up</button>
          <p className= {errTextColor}>{errText}</p>
          <p className='text-align-center width-100-percent cursor-pointer'><a href = "/">Login?</a></p>
        </div>
      </div>
    </body>
  );
}

export default Register;
