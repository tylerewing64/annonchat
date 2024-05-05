import './/css/App.css';

function App() {
  return (
    <body>
    <div className = "login-container"> 
    <div className = "login-wrapper">
      <h1>AnnonChat</h1> 
      <p>Username:</p>
      <input type = "text" id = "username-input"/>
      <p>Password:</p>
      <input type = "password" id = "password-input"/>
      <button type ="button" id ="submit">Login🔒</button>
      <a href ="#">Forgot password?</a>
    </div>
    </div>
    </body>
  );
}

export default App;
