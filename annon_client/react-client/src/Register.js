import './/css/Register.css';
import { useEffect } from 'react';


import { useState } from 'react';

function Register() {
  const [errText, setErrText] = useState('');

  const signUp = () => {
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;




    if(!username){ 
      setErrText("No username!");
      return;
    }

    if(username.length > 15){
      setErrText("Username cannot be longer than 15 characters ");
      return
    }

    if (password.length <= 10) {
      setErrText("Password must be longer than 10 characters!");
      return;
    }

    setErrText('');

    fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      if (response.ok) {
        alert('Successfully  Registered!')
      } else {
        setErrText("Username already taken!");
      }
    })
    .catch(error => {
      console.error('Error signing up user:', error);
    });
  };

  return (
    <body>
      <div className="register-container"> 
        <div className="register-wrapper">
          <h1>AnnonChat</h1> 
          <p>Username:</p>
          <input type="text" id="username-input" autoComplete='off'/>
          <p>Password:</p>
          <input type="password" id="password-input"/>
          <button type="button" id="submit" onClick={signUp}>Sign Up</button>
          <p id="register_error">{errText}</p>
        </div>
      </div>
    </body>
  );
}

export default Register;
