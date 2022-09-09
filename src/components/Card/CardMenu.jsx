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
              <div className="card-body">
                <h5 className="card-title">Tutor SD</h5>
              </div>
            </div>
            <Link to="/course/listTutorSD" type="button" class="btn warna-button">
              SD
            </Link>
          </div>

          <div className="col">
            <div className="card">
              <img src={IconSMP} className="card-img-top" alt="photo4" />
              <div className="card-body">
                <h5 className="card-title">Tutor SMP</h5>
              </div>
            </div>
            <Link to="/course/listTutorSMP" type="button" class="btn warna-button">
              SMP
            </Link>
          </div>

          <div className="col">
            <div className="card">
              <img src={IconSMA} className="card-img-top" alt="photo15" />
              <div className="card-body">
                <h5 className="card-title">Tutor SMA</h5>
              </div>
            </div>
            <Link to="/course/listTutorSMA" type="button" class="btn warna-button">
              SMA
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMenu;
