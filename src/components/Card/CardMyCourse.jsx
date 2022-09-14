import React from "react";
import { Link } from "react-router-dom";

const CardMyCourse = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="text">My Course</h1>
        </div>
      </div>
      <hr />
      <div className="mt-5 container">
        <div className="row row-cols-1 row-cols-md-3 g-5 ">
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="" className="img-fluid rounded-start" alt="foto tutor" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Indah Permata Sari</h5>
                    <h6 className="card-title">Tutor Matematika SMA Kelas X</h6>
                    <hr />
                    <p className="card-text">
                      <small className="card-text">Jadwal</small>
                      <br />
                      <small className="text-muted">Hari : Senin, Selasa</small>
                      <br />
                      <small className="text-muted">Jam : 08.00-10.00 WITA</small>
                    </p>
                    <div>
                      <Link to="" type="button" class="btn warna-button btn-secondary text-center ">
                        WA
                      </Link>
                    </div>
                    <div className="mt-3">
                      <Link to="" type="button" class="btn warna-button btn-secondary text-center ">
                        Zoom
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="" className="img-fluid rounded-start" alt="foto tutor" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Indah Permata Sari</h5>
                    <h6 className="card-title">Tutor Matematika SMA Kelas X</h6>
                    <hr />
                    <p className="card-text">
                      <small className="card-text">Jadwal</small>
                      <br />
                      <small className="text-muted">Hari : Senin, Selasa</small>
                      <br />
                      <small className="text-muted">Jam : 08.00-10.00 WITA</small>
                    </p>
                    <div>
                      <Link to="" type="button" class="btn warna-button btn-secondary text-center ">
                        WA
                      </Link>
                    </div>
                    <div className="mt-3">
                      <Link to="" type="button" class="btn warna-button btn-secondary text-center ">
                        Zoom
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMyCourse;
