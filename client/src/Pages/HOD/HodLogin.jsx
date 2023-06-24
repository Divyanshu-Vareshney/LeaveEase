import React from "react";
import "./Hod.css";
import HodSignin from "../../components/HodSignin";


const HodLogin = () => {

  return (
    <section className="hod-container">
      <div className="content-container">
        <div className="outlet-container">
          <HodSignin/>
        </div>
      </div>
      <div className="image-container">image</div>
    </section>
  );
};

export default HodLogin;