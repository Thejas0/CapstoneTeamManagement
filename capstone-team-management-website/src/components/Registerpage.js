// src/components/LoginPage.js
import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom'; // Import useHistory


//const RegisterPage = () => {
  // Implement your login logic here
  //const {state , dispatch} = useContext(UserContext);
  //dispatch({type:"User",payload:false});
  //window.alert("Login Successful");
  //return (
    //<div>
      //<h2>Register Page</h2>
      //{/* Add your login form or authentication components */}
    //</div>
  //);
//};

const RegisterPage = () => {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate(); // Access the history object
  
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
      <div>
        <h2>Register Page</h2>
        <form onSubmit={handleLogin}>
          {/* Your login form inputs */}
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  

export default RegisterPage;
