// src/components/LoginPage.js
import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import './Registerpage.css'
import { useState } from 'react';
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
  const [selectedRole, setSelectedRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };
    return (
      // <div>
      //   <h2>Register Page</h2>
      //   <form onSubmit={handleLogin}>
      //     {/* Your login form inputs */}
      //     <button type="submit">Register</button>
      //   </form>
      // </div>


<div className="cover">
            <h2>Register</h2>
            <br />
            <br />
            <form  onSubmit={handleLogin}>
                    <input  type="text" placeholder='Fullname' required
                    onChange={(e) => setFullname(e.target.value)}/>
                    <br/>
                    <br/>
                    <input type="text" placeholder='Mobile Number' required 
                    onChange={(e) => setMobileNo(e.target.value)}/>
                    <br/>
                    <br/>

                    <input type="email" placeholder='email' name="email" required 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <br/>

                    <select className ='dropdown' id="role" value={selectedRole} onChange={handleRoleChange}>
                      <option value="" disabled>Role</option>
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                    </select>
                    <br/>
                    <br/>

                    <input type="text" placeholder='Username' required 
                    onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <br/>

                    <input type="password" placeholder='password' name="password" required 
                    onChange={(e) => setPassword(e.target.value)} />
                    <br/>
                    <br/>

                    <button className='register-btn' type="submit">Register</button>
            </form>
            
        </div>
    );
  };
  
  

export default RegisterPage;
