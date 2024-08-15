import React from 'react';
import './styles.css';
import logo1 from "../img/logo1.png"; 
import { useNavigate } from 'react-router-dom';

const Coursesdet = () => {
    const navigate = useNavigate(); // Corrected capitalization
    const next = () => {
        navigate('/');
    }

    return (
        <div className="a1s2">
        <nav className="nav-bar-2">
        <div className="logo-section-3">
            <img src={logo1} alt="Logo" className="logo-img-4" />
            <div className="edu-details-5">
                <h2 className="edu-title-6">EduLearn</h2>
            </div>
        </div>
        <div className="nav-links-8">
            <a href="/AdminDashboard">Home</a>
            <a href="/CoursesPage">Courses</a>
            <a href="/StudentDetails">Student Details</a>
            <a href="/InstitutionDetails">Institutions</a>
            <button className="logout-btn-9" onClick={next}>
                Logout
            </button>
        </div>
    </nav>
            <div className="i5c6">
                <h1 className="j7t8">DALL-E : Art Generation Insider Tips and Tricks</h1>
                <div className="k9c0">
                    <div className="l1c2">
                        <span>Course Name:</span>
                        <p className="m3f4">DALL-E : Art Generation Insider Tips and Tricks</p>
                    </div>
                    <div className="l1c2">
                        <span>Instructor:</span>
                        <p className="m3f4">Mark Styne</p>
                    </div>
                    <div className="l1c2">
                        <span>Duration:</span>
                        <p className="m3f4">20 days</p>
                    </div>
                    <div className="l1c2">
                        <span>Description:</span>
                        <p className="m3f4">OpenAI's AI art generator remains one of the best known, and it allows anyone to generate images of practically anything by writing a text description.</p>
                    </div>
                </div>
            </div>
            <footer classname="f00ter">
                <div className="f00ter-bottom">
                    <p>&copy; 2024 EduLearn. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Coursesdet;
