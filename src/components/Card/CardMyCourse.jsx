import axios from "axios";
import React, { useState, useEffect } from "react";
import CardTutor from "./CardTutor";

const CardMyCourse = () => {
  const [pemesanan, setPemesanan] = useState([]);
  const userLogin = localStorage.getItem("userLogin");
  const dataLogin = JSON.parse(userLogin);

  const fetchdata = async () => {
    const data = await axios.get(`https://6323201ea624bced3087ce24.mockapi.io/register/`);
    const datatutor = data.data.filter((user) => {
      return user.name === dataLogin.name;
    });
    setPemesanan(datatutor);
    console.log("ini data1", datatutor);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const openInNewTab = (url) => {
    window.open(`https://wa.me/${url}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="text">My Course</h1>
        </div>
      </div>
      <hr />
      {pemesanan.map((list) => (
        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-3 g-5 ">
            <div className="col" key={list.id}>
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={list.dataPembelian.datatutor.datalengkap.foto} className="img-fluid rounded-start" alt="foto tutor" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "black" }}>
                        {list.dataPembelian.datatutor.datalengkap.nama}
                      </h5>
                      <h6 className="card-title" style={{ color: "black" }}>
                        {list.dataPembelian.datatutor.datalengkap.pelajaran}
                      </h6>
                      <hr />
                      <p className="card-text">
                        <small className="card-text" style={{ color: "black" }}>
                          Jadwal
                        </small>
                        <br />
                        <small className="text-muted">Hari :{list.dataPembelian.datatutor.datalengkap.hari}</small>
                        <br />
                        <small className="text-muted">Jam :{list.dataPembelian.datatutor.datalengkap.jam}</small>
                      </p>
                      <div>
                        <button onClick={openInNewTab(list.dataPembelian.datatutor.datalengkap.phone)} type="button" className="btn warna-button btn-secondary text-center ">
                          Contact Tutor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardMyCourse;
