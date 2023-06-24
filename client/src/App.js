import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Pages/Homepage/Home';
import StudentSignup from "./components/studentSignup";
import StudentSignin from "./components/studentSignin";
import StudentLogin from "./Pages/StudentLogin/studentLogin";
import MentorLogin from "./Pages/MENTOR/MentorLogin";

import HodLogin from "./Pages/HOD/HodLogin";
import WardenLogin from "./Pages/WARDEN/WardenLogin";
function App() {
  return (
    <div>

        <Navbar />
        <main className="main-container">
        <Routes><Route path="/" element={<Home/>}></Route></Routes>
        <Routes>
        <Route path="/student" element={<StudentLogin/>}>
          <Route index element={<StudentSignup/>}/>
          <Route path="sign-in" element={<StudentSignin/>}/>
          </Route></Routes>
          <Routes><Route path="/Hod" element={<HodLogin/>}></Route></Routes>
          <Routes><Route path="/Warden" element={<WardenLogin/>}></Route></Routes>
          <Routes><Route path="/Mentor" element={<MentorLogin/>}></Route></Routes>
          
        
          
        </main>
    </div>
  );
}

export default App;
