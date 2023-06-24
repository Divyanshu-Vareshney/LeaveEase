import React from "react";
import "./Warden.css";

import WardenSignin from "../../components/WardenSignin";


const WardenLogin = () => {

  return (
    <section className="hod-container">
      <div className="content-container">
        <div className="outlet-container">
          <WardenSignin/>
        </div>
      </div>
      <div className="image-container">image</div>
    </section>
  );
};

export default WardenLogin;