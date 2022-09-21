import React from "react";
import { Link } from "react-router-dom";

const CardTutorCourse = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h1>List of Students Taking Your Class</h1>
          </div>
        </div>
        <hr />
        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-3 g-5 ">
            <div className="col">
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title d-flex">Nama Siswa :</h5>
                      <h5 className="card-title d-flex">E-mail :</h5>
                      <h5 className="card-title d-flex">Kontak :</h5>
                      <h5 className="card-title d-flex">Mata Pelajaran :</h5>
                      <h5 className="card-title d-flex">Jam :</h5>
                      <h5 className="card-title d-flex">Alamat : </h5>
                      <hr />

                      <div>
                        <Link to="" type="button" className="btn warna-button btn-secondary text-center ">
                          WA
                        </Link>
                      </div>
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

export default CardTutorCourse;
