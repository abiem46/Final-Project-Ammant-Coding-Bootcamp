import React from "react";
import { Link } from "react-router-dom";
import reg from "../../assets/regishere.png";

const Regis = () => {
  return (
    <>
      <div id="reg ">
        <img src={reg} alt="img" />
        <h2>Generasi Cemerlang Selalu Membudayakan Belajar</h2>
        <h3>Dapatkan Tutor Favoritmu hanya di KSB-SMART </h3>
        <h5>Yuk Daftarkan Dirimu dibawah ini !!</h5>
        <div className="reg-button mt-5">
          <Link to="/register" type="button" className="btn btn-primary btn-lg">
            Click Here To Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Regis;
