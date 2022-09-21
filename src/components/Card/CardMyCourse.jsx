import React, { useState, useEffect } from "react";
import { useAuthState } from "../../context/store";

const CardMyCourse = () => {
  const [pemesanan, setPemesanan] = useState([]);
  const state = useAuthState();

  useEffect(() => {
    console.log(state);
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
      {/* <pre>{state[0].tutor[0].author}</pre> */}

      {state.pembelian.length && (
        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-3 g-5 ">
            {state.pembelian.map((list) => (
              <>
                <div className="col" key={list.tutor.id}>
                  <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={list.tutor.photo} className="img-fluid rounded-start" alt="foto tutor" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title" style={{ color: "black" }}>
                            {list.tutor.author}
                          </h5>
                          <h6 className="card-title" style={{ color: "black" }}>
                            {list.tutor.study}
                          </h6>
                          <hr />
                          <p className="card-text">
                            <small className="card-text" style={{ color: "black" }}>
                              Jadwal
                            </small>
                            <br />
                            <small className="text-muted">Hari :{list.tutor.day}</small>
                            <br />
                            <small className="text-muted">Jam :{list.tutor.time}</small>
                          </p>
                          <div>
                            <button onClick={() => openInNewTab(list.pembeli.phone)} type="button" className="btn warna-button btn-secondary text-center ">
                              Contact Tutor
                            </button>
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
      )}
    </>
  );
};

export default CardMyCourse;
