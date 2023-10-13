// src/components/LoginPage.js
import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import { useState } from 'react';
import './Loginpage.css';
//const LoginPage = () => {
  // Implement your login logic here
  //const {state , dispatch} = useContext(UserContext);
  //dispatch({type:"User",payload:false});
  //window.alert("Login Successful");
  //return (
    //<div>
      //<h2>Login Page</h2>
      //{/* Add your login form or authentication components */}
    //</div>
  //);
//};

const LoginPage = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate(); // Access the history object

   // Define state for the username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate a login request (replace with your actual login logic)
    //const loginResult = await loginUser(username, password);

    //if (loginResult.success) {
      // Update the user state if login is successful
      dispatch({ type: "User", payload: true });

      // Redirect to the home page
      navigate('/');
    //} else {
      // Handle login failure, display an error message, etc.
    //}
  };

  return (
    // <div>
    //   <h2>Login Page</h2>
    //   <form onSubmit={handleLogin}>
    //     {/* Your login form inputs */}
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  
   <div  className="coverp">
     <h2>Login Page</h2>
     
      <div style={{ height: '20px', }}></div>
      <form onSubmit={handleLogin}>
      <input type="text" placeholder='Username' required 
                    onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <br/>

                    <input type="password" placeholder='password' name="password" required 
                    onChange={(e) => setPassword(e.target.value)} />
        {/* <div >
          <input className='input'
            type="text"
            placeholder='UserName'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </div>
      <div style={{ height: '10px', }}></div> */}

        {/* <div>
          <input className='input'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
      <div style={{ height: '20px', }}></div>

        <button className ="login-btn" type="submit">Login</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  



  );
};

export default LoginPage;
