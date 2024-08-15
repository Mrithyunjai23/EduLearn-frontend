
import './App.css';
import Admin from './dash/Adminrstd';
import CoursesPage from './Admindashboard/Courses';
import AdminLogin from './Admin/AdminLogin';
import AdminSignup from './Admin/AdminSignup';
import StudentSignIn from './Student/StudentSignIn';
import StudentSignUp from './Student/StudentSignUp';
import AdminDashboard from './Admindashboard/AdminDashboard';
import Coursesdet from './Admindashboard/Coursesdet';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import StudentDetails from './Admindashboard/StudentDetails';
import InstitutionDetails from './Admindashboard/InstitutionDetails';
import AboutUs from './Stddash/Stddasboard';
import Coursesstd from './Stddash/CoursesStd';
import MyCoursesstd from './Stddash/Mycouse';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin/>}/>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/AdminSignup" element={<AdminSignup/>}/>
          <Route path="/StudentSignIn" element={<StudentSignIn/>}/>
          <Route path="/StudentSignUp" element={<StudentSignUp/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/CoursesPage" element={<CoursesPage/>}/>
          <Route path="/Coursesdet" element={<Coursesdet/>}/>
          <Route path="/StudentDetails" element={<StudentDetails/>}/>
          <Route path="/InstitutionDetails" element={<InstitutionDetails/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Coursesstd" element={<Coursesstd/>}/>
          <Route path="/My" element={<MyCoursesstd/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
