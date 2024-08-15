import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Doughnut } from 'react-chartjs-2';
import { FaHome, FaBook, FaUserGraduate, FaUniversity, FaSignOutAlt, FaCog, FaBars } from 'react-icons/fa';
import './AdminDashboard.css';
import logo1 from "../img/logo1.png";
import { useNavigate } from 'react-router-dom';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    ArcElement, 
    Tooltip, 
    Legend 
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);

const AdminDashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [topInstitutions, setTopInstitutions] = useState([]);
    const [topAchievers, setTopAchievers] = useState([]);
    const navigate = useNavigate();

    const handleSidebarToggle = () => {
        setShowSidebar(!showSidebar);
    };

    const openSettings = () => {
        console.log('Open settings');
    };

    const next = () => {
        navigate('/');
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/topins/top')
            .then(response => setTopInstitutions(response.data))
            .catch(error => console.error('Error fetching institutions:', error));

        axios.get('http://localhost:8080/api/topach/top')
            .then(response => setTopAchievers(response.data))
            .catch(error => console.error('Error fetching achievers:', error));
    }, []);

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Website Visits',
                data: [65, 59, 80, 81, 56, 55, 40, 70, 85, 50, 95, 100],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    const doughnutData = {
        labels: ['City A', 'City B', 'City C', 'City D', 'City E', 'City F'],
        datasets: [
            {
                label: 'Students Location',
                data: [120, 100, 80, 60, 140, 130],
                backgroundColor: ['blue', 'red', 'brown', 'green', 'orange', 'yellow'],
                borderColor: ['white'],
                borderWidth: 3,
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div className="d4shb0ard-c0ntain3r">
            <nav className={`s1de-bar ${showSidebar ? 'v1sible' : 'h1dden'}`}>
                <div className="s1de-bar-l0g0">
                    <img src={logo1} alt="Logo" className="s1de-bar-l0g0-img" />
                </div>
                <ul className="n4v-l1nks">
                    <li><a href="/AdminDashboard"><FaHome className="ic0n" /> Home</a></li>
                    <li><a href="/CoursesPage"><FaBook className="ic0n" /> Courses</a></li>
                    <li><a href="/StudentDetails"><FaUserGraduate className="ic0n" /> Student Details</a></li>
                    <li><a href="/InstitutionDetails"><FaUniversity className="ic0n" /> Institutions</a></li>
                </ul>
                <div className="s1de-bar-f00t3r">
                    <button className="s3tt1ngs-btn" onClick={openSettings}><FaCog className="ic0n" /> Settings</button>
                    <button className="l0g0ut-btn" onClick={next}><FaSignOutAlt className="ic0n" /> Logout</button>
                </div>
            </nav>
            <div className={`m4in-c0nt3nt ${showSidebar ? '3xp4nded' : 'c0ntract3d'}`}>
                <button className="s1de-bar-t0ggl3" onClick={handleSidebarToggle}><FaBars /></button>
                <header className="h3ad3r">
                    <h1>EduLearn</h1>
                </header>
                <main className="alt-m4in-c0ntent" >
                    <section className="alt-ch4rts-s3ct10n" >
                        <div className="l1ne-ch4rt" >
                            <h2>Website Visits Over Time</h2>
                            <Line data={lineData} options={lineOptions} />
                        </div>
                        <div className="d0ughnu7-ch4rt">
                            <h2>Students Location Distribution</h2>
                            <Doughnut data={doughnutData} options={doughnutOptions} />
                        </div>
                    </section>
                    <section className="alt-l1sts-s3ct10n">
                        <div className="inst1tut10ns">
                            <h2>Top Institutions</h2>
                            <ul className="inst1tut10ns-l1st">
                                {topInstitutions.map((institution, index) => (
                                    <li key={index} className="inst1tut10n-1t3m">
                                        <span className="inst1tut10n-n4m3">{institution.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="t0p-p3rf0rm3rs">
                            <h2>Top Achievers</h2>
                            <ul className="ach13v3rs-l1st">
                                {topAchievers.map((achiever, index) => (
                                    <li key={index} className="ach13v3r-1t3m">
                                        <span className="ach13v3r-n4m3">{achiever.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </main>
                <footer className="f00t3r">
                    <p>&copy; {new Date().getFullYear()} EduLearn. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default AdminDashboard;
