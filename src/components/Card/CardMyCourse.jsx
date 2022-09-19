import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../../context/store";

const CardMyCourse = () => {
  const [pemesanan, setPemesanan] = useState([]);
  const state = useAuthState();

  useEffect(() => {
    let data = localStorage.getItem("userPay");

    setPemesanan(JSON.parse(data));
    console.log(state);
  }, []);

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
          {state.items.map((list) => (
            <>
              <div className="col">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={list.photo} className="img-fluid rounded-start" alt="foto tutor" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: "black" }}>
                          {list.author}
                        </h5>
                        <h6 className="card-title" style={{ color: "black" }}>
                          {list.study}
                        </h6>
                        <hr />
                        <p className="card-text">
                          <small className="card-text" style={{ color: "black" }}>
                            Jadwal
                          </small>
                          <br />
                          <small className="text-muted">Hari :{list.day}</small>
                          <br />
                          <small className="text-muted">Jam :{list.time}</small>
                        </p>
                        <div>
                          <Link to="" type="button" className="btn warna-button btn-secondary text-center ">
                            WA
                          </Link>
                        </div>
                        <div className="mt-3">
                          <Link to="" type="button" className="btn warna-button btn-secondary text-center ">
                            Zoom
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardMyCourse;
