import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import logo from "../img/logo1.png";
import achiever1 from "../img/girl.jpeg";
import achiever2 from "../img/jae.jpeg";
import achiever3 from "../img/john.jpeg";
import whyEduh1 from "../img/self place.png";
import whyEduh2 from "../img/freecourses.png";
import whyEduh3 from "../img/getuni.png";
import whyEduh4 from "../img/certificate.png";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Stddashboard = () => {
    const Navigate=useNavigate();
    const next = () =>{
        Navigate('/')
    }
    return (
        <div className="asb">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" style={{ height: '100px' }} />
                    <h2 className="Ed">EduLearn</h2>
                </div>
                <div className="nav-link">
                    <a href="/AboutUs">About us</a>
                    <a href="/Coursesstd">Courses</a>
                    <a href="/My">MyCourses</a>
                    <button className="logout-btn" onClick={next}>Logout</button>
                </div>
            </nav>
            <div className="whyeduh">
                    <h3 className='bha'>Why EduLearn?</h3>
                    <div className="why-eduh-sections">
                        <div className="why-eduh-section">
                            <img src={whyEduh1} alt="Self-paced Learning" />
                            <p className='bha'>Self-paced Learning</p>
                        </div>
                        <div className="why-eduh-section">
                            <img src={whyEduh2} alt="Free Courses" />
                            <p  className='bha'>Access to Free Courses</p>
                        </div>
                        <div className="why-eduh-section">
                            <img src={whyEduh3} alt="University Collaboration" />
                            <p  className='bha'>Collaboration with Top Universities</p>
                        </div>
                        <div className="why-eduh-section">
                            <img src={whyEduh4} alt="Certification" />
                            <p  className='bha'>Certifications for Completed Courses</p>
                        </div>
                    </div>
                    <p>EduLearn offers a comprehensive platform for students to excel in their studies with expert resources and guidance.</p>
                </div>

            <section className="achievers">
                <h2>Hear from Our Achievers</h2>
                <div className="achievers-grid">
                    <div className="achiever">
                        <img src={achiever1} alt="Achiever 1" />
                        <div className="achiever-details">
                            <h3>Zara</h3>
                            <p className="role">Software Engineer</p>
                            <p className="review">EduLearn has transformed my learning experience and provided me with the resources I needed to succeed in my career.</p>
                        </div>
                    </div>
                    <div className="achiever">
                        <img src={achiever2} alt="Achiever 2" />
                        <div className="achiever-details">
                            <h3>Jae</h3>
                            <p className="role">Data Scientist</p>
                            <p className="review">The courses and guidance from EduH were instrumental in helping me achieve my career goals.</p>
                        </div>
                    </div>
                    <div className="achiever">
                        <img src={achiever3} alt="Achiever 3" />
                        <div className="achiever-details">
                            <h3>John</h3>
                            <p className="role">Product Manager</p>
                            <p className="review">Thanks to EduLearn, I was able to gain the skills and knowledge needed to excel in my field.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-us">
                <h2>Contact Us</h2>
                <p>If you have any questions or feedback, feel free to reach out to us!</p>
                <div className="contact-info">
                    <p>Email: contact@eduh.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 EduH Street, Learning City, LC 45678</p>
                </div>
                <div className="social-media">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Stddashboard;
