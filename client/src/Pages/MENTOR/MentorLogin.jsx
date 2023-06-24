import React from "react";
import "./Mentor.css";

import MentorSignin from "../../components/MentorSignin";


const WardenLogin = () => {

  return (
    <section className="hod-container">
      <div className="content-container">
        <div className="outlet-container">
          <MentorSignin/>
        </div>
      </div>
      <div className="image-container">image</div>
    </section>
  );
};

export default WardenLogin;