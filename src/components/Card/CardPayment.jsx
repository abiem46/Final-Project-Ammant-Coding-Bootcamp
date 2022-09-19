import React from "react";
import "./CardTutor.css";

const CardPayment = (props) => {
  return (
    <>
      <div className="col tutor">
        <div className="card-tutor mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={props.gambar} className="img-fluid rounded-start" alt="foto tutor" />
            </div>
            <div className="col-md-8">
              <div className="card-body-tutor">
                <h5 className="card-title">{props.author}</h5>
                <h6 className="card-title">{props.study}</h6>
                <hr />
                <p className="card-text">
                  <small className="card-text">Jadwal</small>
                  <br />
                  <small className="text-muted">Hari : {props.day}</small>
                  <br />
                  <small className="text-muted">Jam : {props.time} WITA</small>
                </p>

                <button to="/payment" type="button" className="btn warna-button btn-secondary text-center" onClick={props.tombolhapus}>
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPayment;
