import React, { useEffect, useState } from 'react';
import './CoursesPage.css';
import { useNavigate } from 'react-router-dom';
import logo1 from "../img/logo1.png";
const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const imageBasePath = '../img/'; // Adjust according to your setup

    useEffect(() => {
        fetch('http://localhost:8080/api/courses')
            .then((response) => response.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error('Error fetching courses:', error));
    }, []);

    const navigate = useNavigate();

    const next = () => {
        navigate('/');
    };

    return (
        <div className="a1b2c3">

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

            <div className="e1f2g3">
                <h2>Our Courses</h2>
                <div className="h4i5j6">
                    {courses.map((course) => (
                        <div key={course.id} className="k7l8m9">
                            <img
                                src={`${imageBasePath}${course.image}`}
                                alt={course.title}
                                className="n0o1p2"
                            />
                            <div className="q3r4s5">
                                <h3>
                                    <a href="/Coursesdet">{course.title}</a>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="t6u7v8">
                <p>&copy; 2024 EduLearn. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CoursesPage;
