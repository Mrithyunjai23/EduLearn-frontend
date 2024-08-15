import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentDetails.css';
import logo1 from "../img/logo1.png"; 
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
    const navigate = useNavigate();
    const next = () => {
        navigate('/');
    }

    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/students/${id}`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => console.error('Error deleting student:', error));
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="student-page-1">
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
            <div className="student-container-10">
                <h1>Student Details</h1>
                <input
                    type="text"
                    className="search-bar-11"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <div className="student-cards-12">
                    {filteredStudents.map(student => (
                        <div className="student-card-13" key={student.id}>
                            <h2>{student.name}</h2>
                            <p><strong>Courses Joined:</strong> {student.courses}</p>
                            <p><strong>Degree:</strong> {student.degree}</p>
                            <p><strong>Year of Study:</strong> {student.year}</p>
                            <p><strong>Institution:</strong> {student.institution}</p>
                            <div className="card-actions-14">
                                <button onClick={() => handleDelete(student.id)}>Delete</button>
                            </div>
                        </div>
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

export default StudentDetails;
