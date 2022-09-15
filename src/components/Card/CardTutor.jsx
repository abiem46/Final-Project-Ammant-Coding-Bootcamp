import React, { useState, useEffect } from "react";
import "./CardTutor.css";
import { Link } from "react-router-dom";

const CardTutor = () => {
  const [dataTutor, setDataTutor] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://soft-leeward-oregano.glitch.me/tutor")
      .then((response) => response.json())
      .then((data) => setDataTutor(data));
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(dataTutor);
  }, [dataTutor]);

  if (loading) {
    return <h1>Data Sedang Loading</h1>;
  } else {
    return (
      <>
        {dataTutor.map((tutor) => {
          return (
            <>
              <div className="mt-5 container">
                <div className="row row-cols-1 row-cols-md-3 g-5 ">
                  <div className="col">
                    <div className="card mb-3" style={{ objectFit: "cover" }}>
                      <div className="row g-0">
                        <div className="col-md-4" key={tutor.id}>
                          <img src={tutor.photo} className="img-fluid rounded-start" alt="foto tutor" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{tutor.author}</h5>
                            <h6 className="card-title">{tutor.study}</h6>
                            <hr />
                            <p className="card-text">
                              <small className="card-text">Jadwal</small>
                              <br />
                              <small className="text-muted">Hari : {tutor.day}</small>
                              <br />
                              <small className="text-muted">Jam : {tutor.time} WITA</small>
                            </p>
                            <Link to="/payment" type="button" class="btn warna-button btn-secondary text-center ">
                              Booking
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
};

export default CardTutor;
