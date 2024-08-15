import React from 'react';
import './StudentSignUp.css';
import { useNavigate } from 'react-router-dom';
const StudentSignUp = () => {
    const Navigate=useNavigate();
    const next = () =>{
        Navigate('/AboutUs')
    }
    return (
        <div className="body2">
        <div className="signup-container">
            <div className="signup-box">
                <h2>Student Sign Up</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id="degree" name="degree" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="current-year">Current Year of Study</label>
                        <input type="text" id="current-year" name="current-year" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="institution">Institution Name</label>
                        <input type="text" id="institution" name="institution" required />
                    </div>
                    <button type="submit" className="signup-btn" onClick={next}>Sign Up</button>
                    <div className="additional-info">
                    <p>By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
                </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default StudentSignUp;
