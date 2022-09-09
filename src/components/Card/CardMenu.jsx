import React from "react";
import IconSD from "../../assets/IconSD.png";
import IconSMP from "../../assets/IconSMP.png";
import IconSMA from "../../assets/IconSMA.png";
import { Link } from "react-router-dom";
import "./CardMenu.css";

const CardMenu = () => {
  return (
    <>
      <div className="mt-5 container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card-logo">
              <img src={IconSD} className="card-img-top img-logo" alt="photo1" style={{ height: "18rem", width: "16rem" }} />
            </div>
            <Link to="/course/listTutorSD" type="button" className="btn warna-button btn-dark mt-5 mb-5">
              Tutor SD
            </Link>
          </div>

          <div className="col">
            <div className="card-logo">
              <img src={IconSMP} className="card-img-top img-logo" alt="photo4" style={{ height: "18rem", width: "16rem" }} />
            </div>
            <Link to="/course/listTutorSMP" type="button" className="btn warna-button btn-dark mt-5 mb-5">
              Tutor SMP
            </Link>
          </div>

          <div className="col">
            <div className="card-logo">
              <img src={IconSMA} className="card-img-top img-logo" alt="photo15" style={{ height: "18rem", width: "16rem" }} />
            </div>
            <Link to="/course/listTutorSMA" type="button" className="btn warna-button btn-dark mt-5 mb-5">
              Tutor SMA
            </Link>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default CardMenu;
