import React from "react";
import IconSD from "../../assets/IconSD.png";
import IconSMP from "../../assets/IconSMP.png";
import IconSMA from "../../assets/IconSMA.png";
import { Link } from "react-router-dom";

const CardMenu = () => {
  return (
    <>
      <div className="mt-5 container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card">
              <img src={IconSD} className="card-img-top" alt="photo1" />
            </div>
            <Link to="/course/listTutorSD" type="button" class="btn warna-button">
              Tutor SD
            </Link>
          </div>

          <div className="col">
            <div className="card">
              <img src={IconSMP} className="card-img-top" alt="photo4" />
            </div>
            <Link to="/course/listTutorSMP" type="button" class="btn warna-button">
              Tutor SMP
            </Link>
          </div>

          <div className="col">
            <div className="card">
              <img src={IconSMA} className="card-img-top" alt="photo15" />
            </div>
            <Link to="/course/listTutorSMA" type="button" class="btn warna-button">
              Tutor SMA
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMenu;
