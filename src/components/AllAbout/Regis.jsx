import React from "react";
import { Link } from "react-router-dom";
import reg from "../../assets/regishere.png";

const Regis = () => {
  return (
    <div id="reg">
      <img src={reg} alt="img" />
      <h2>GET REGITERED WITH US FOR EXCITING INTERNSHIP OFFERS</h2>
      <p>Our team will contact you whenever we will be having openings matching to your profile.</p>
      <div className="reg-button">
        <Link to="/register" type="button" class="btn btn-primary btn-lg">
          Click Here To Register
        </Link>
      </div>
    </div>
  );
};

export default Regis;
