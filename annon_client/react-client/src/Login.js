import {React, useState,useRef, useEffect} from 'react'
import socket from './socketConfig/socket';
import Cookies from 'js-cookie';

export default function Login() {
    const [errText, setErrText] = useState('');
    const username = useRef(null);
    const password = useRef(null);

    useEffect(() => { 
      Cookies.remove('token');
      socket.disconnect();
    },[])

  
    const login = (username, password) => {
      setErrText('');
      if(checkUsernameRules(username) && checkPasswordRules(password)){ 
        loginUser(username, password);
      }
      
    };
  
    const checkUsernameRules = (username) => { 
      if(!username.current.value){ 
        setErrText("No username!");
        return;
      } 
      return true;
  
    }
  
    const checkPasswordRules = (password) => { 
      if (!password.current.value ) {
        setErrText("No Password!");
        return;
      }
      return true;
    }
  
    const loginUser = async(username, password) => { 
      username = username.current.value;
      password = password.current.value;
      await fetch('http://localhost:8080/api/user', {
        headers: {
          'Content-Type': 'application/json',
          'username' : username,
          'password': password
        }
      })
      .then(async(response) => {
        let data = await response.json();
        if (!response.ok) {
          setErrText(data);
        }else if (response.ok){ 
          Cookies.set('token', data?.token , {expires: 1/24});
          window.location.href = '/chat'
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
              <h2 className='color-white font-size-25px'>Login</h2> 
              <p className='margin-top-10px'>Username:</p>
              <input  className='margin-top-10px hover-grey' type="text" id="username-input" autoComplete='off' ref={username} onChange={(e) => isEmpty(e)}/>
              <p>Password:</p>
              <input className='margin-top-10px hover-grey' type="password" id="password-input" ref={password} onChange={(e) => isEmpty(e)}/>
              <button type="button" id="submit" className = "margin-top-10px cursor-pointer hover-bg-green padding-10px"onClick={() => login(username, password)}>Login</button>
              <p className='color-red'>{errText}</p>
              <p className='text-align-center width-100-percent cursor-pointer'><a href='/register'>Sign Up?</a></p>
            </div>
          </div>
        </body>
      );
}
