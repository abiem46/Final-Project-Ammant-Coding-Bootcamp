import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
import CardTutor from "./CardTutor";

const CardMyClass = () => {
  const [pembeli, setPembeli] = useState([]);
  const [detail, setDetail] = useState([]);
  const userLogin = localStorage.getItem("userLogin");
  const dataLogin = JSON.parse(userLogin);

  const fetchProduct = async () => {
    const data = await axios.get("https://6323201ea624bced3087ce24.mockapi.io/register");
    const data1 = data?.data.filter((user) => {
      // console.log("ini id", dataLogin.id);
      if (user.dataPembelian.datatutor.id === dataLogin.id) {
        // return data;
      }
      console.log("ini data", user.dataPembelian);
    });
    console.log(data1);

    // const datatutor = data.data.filter((user) => {
    //   return user.dataPembelian;
    // });

    // const data1 = datatutor.filter((user) => {
    //   return user.dataPembelian.datatutor;
    // });
    // const data2 = data1.map((user) => {
    //   return user.dataPembelian.datatutor;
    // });
    // const data3 = data2.map((user) => {
    //   return user.datalengkap;
    // });
    // const data5 = data2.find((user) => {
    //   return user.datalengkap;
    // });

    // const data1 = datatutor.filter((user) => {
    //   return user.datalengkap;
    // });

    // // setPembeli(data1);
    // setPembeli(data1);
    // setDetail(data3);
  };

  useEffect(() => {
    fetchProduct();
    // setPembeli(pembeli);
    // setDetail(detail);
  }, []);
  const openInNewTab = (url) => {
    window.open(`https://wa.me/${url}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {pembeli.length && detail.length && (
        <>
          <Navbar />
          <div className="row">
            <div className="col-12">
              <h1 className="text">My Class</h1>
            </div>
          </div>
          <hr />

          <div className="mt-5 container">
            <div className="row row-cols-1 row-cols-md-3 g-5 ">
              {pembeli?.map((pembeli) => (
                <div className="col" key={pembeli.id}>
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={detail[0].foto} className="img-fluid rounded-start" alt="foto tutor" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title" style={{ color: "black" }}>
                            {pembeli.dataPembelian.dataPayment.name}
                          </h5>
                          <h6 className="card-title" style={{ color: "black" }}>
                            <span>
                              {detail[0].pelajaran} Kelas {detail[0].kelas} {detail[0].pendidikan}
                            </span>
                          </h6>
                          <p className="card-title" style={{ color: "black" }}>
                            <span>Alamat : {pembeli.dataPembelian.dataPayment.address}</span>
                          </p>
                          <p className="card-title" style={{ color: "black" }}>
                            <span>Email : {pembeli.dataPembelian.dataPayment.email}</span>
                          </p>
                          <hr />
                          <p className="card-text">
                            <small className="card-text" style={{ color: "black" }}>
                              Jadwal
                            </small>
                            <br />
                            <small className="text-muted">Hari :{detail[0].hari}</small>
                            <br />
                            <small className="text-muted">Jam :{detail[0].jam}</small>
                          </p>
                          <div>
                            <button onClick={() => openInNewTab(pembeli.dataPembelian.dataPayment.phone)} type="button" className="btn warna-button btn-secondary text-center ">
                              Contact Student
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardMyClass;
