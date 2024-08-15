import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InstitutionDetails.css';
import logo1 from "../img/logo1.png"; 
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InstitutionDetails = () => {
    const Navigate = useNavigate();
    const next = () => {
        Navigate('/');
    }

    const [institutions, setInstitutions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/ins')
            .then(response => setInstitutions(response.data))
            .catch(error => console.error('Error fetching institutions:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredInstitutions = institutions.filter(institution =>
        institution.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="b0dy">
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
            
            <div className="c0nt41ner">
                <h1>Institution Details</h1>
                <input
                    type="text"
                    id="s34rchB4r"
                    className="se1"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <div className="accord1on-container">
                    {filteredInstitutions.map(institution => (
                        <Accordion key={institution.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${institution.id}-content`}
                                id={`panel${institution.id}-header`}
                            >
                                <h3 className="accord1on-title">{institution.name}</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p><strong>Location:</strong> {institution.location}</p>
                                <p><strong>Courses Offered:</strong> {institution.coursesOffered}</p>
                                <p><strong>Students Enrolled:</strong> {institution.studentsEnrolled}</p>
                                <a href={institution.link} target="_blank" rel="noopener noreferrer" className="accord1on-link">View More</a>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
            <footer className="footer">
                <div className="footer-bottom">
                    <p>&copy; 2024 EduLearn. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default InstitutionDetails;
