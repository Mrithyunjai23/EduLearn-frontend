import React, { useState } from 'react';
import './AdminSignup.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminSignup = () => {
    const Navigate=useNavigate();
    const next = () =>{
        Navigate('/AdminLogin');
    }
    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        confirmpass: '',
        admincode: '',
        address: '',
      });
          
      const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const { email,password,confirmpass,admincode,address } = signupData;
        if ( email,password,confirmpass,admincode,address) {
          try {
            await axios.post('http://localhost:8080/api/auth', signupData);
            alert('User Created');
            next();
          } catch (error) {
            alert('Error creating user');
          }
        } else {
          alert('Please fill all the fields');
        }
      };
    return (
        <div className="body6">
        <div className="signup-container">
            <div className="signup-b0x">
                <h2>Admin Sign Up</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="signup-username" > email</label>
                        <input type="text" id="signup-username" name="email" required onChange={handleSignupChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="signup-password">Password</label>
                        <input type="password" id="signup-password" name="password" required onChange={handleSignupChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirmpass" required onChange={handleSignupChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="org-name">Admin Code</label>
                        <input type="text" id="org-name" name="admincode" required onChange={handleSignupChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" required onChange={handleSignupChange}/>
                    </div>
                    <button type="submit" className="signup-btn" onClick={handleSignupSubmit}>Sign Up</button>
                </form>
                <div className="additional-info">
                    <p>By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AdminSignup;
