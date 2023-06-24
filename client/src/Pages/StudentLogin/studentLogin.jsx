import React from "react";
import "./studentLogin.css";
import { Outlet, Link, useLocation } from "react-router-dom";


const StudentLogin = () => {
  const location=useLocation();
  return (
    <section className="hod-container">
      <div className="content-container">
        <header className="content-header">
        <div className='logo'></div>
          {location.pathname==="/student/sign-in"?(
            <p>Dont Have Account?<Link className="link" to="/student">Sign Up</Link></p>
          ):(         <p>
            Already Have an Account ?<Link className="link" to="/student/sign-in">Sign in</Link>
           </p>)}

        </header>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
      <div className="image-container">image</div>
    </section>
  );
};

export default StudentLogin;
