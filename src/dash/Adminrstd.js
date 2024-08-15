import React from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const Navigate=useNavigate();
    const next = () =>{
        Navigate('/AdminLogin')
    
    }
    const next1 = () =>{
        Navigate('/StudentSignIn')
    }
    
    return (
        <div className="body1">
        <div className="container">
            <header className="heade">
                <h1 className="heading">EduLearn</h1>
                <p className="slogan">Knowledge is Wealth</p>
                <p className="info">
                    Welcome to EduLearn! We provide top-notch educational resources and tools to help you excel in your learning journey. We're here to support your educational needs with ease and efficiency.
                </p>
            </header>
            <div className="cen">
                <div className="top">
                    <button className="Adm" onClick={next}>Admin</button>
                    <button className="Adm" onClick={next1}>Student</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Admin;
