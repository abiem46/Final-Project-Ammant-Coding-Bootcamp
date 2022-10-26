import React from "react";
import "./CardTutor.css";
import { Link, useNavigate } from "react-router-dom";
import { addCourse } from "../../context/Action";
import { useAuthDispatch, useAuthState } from "../../context/store";
import { useCheckLogin } from "../../helper/getLocalStorage";
import Swal from "sweetalert2";

const CardTutor = (props) => {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const { userData } = useCheckLogin();

  const paymentCourse = (e) => {
    e.preventDefault();
    addCourse(dispatch, props.listFull);
    navigate("/payment");
  };

  const loginUser = () => {
    Swal.fire({
      icon: "error",
      title: "Oppss",
      text: "Login First!!",
    });
    navigate("/login");
  };

  return (
    <>
      {userData && (
        <div className="col tutor">
          <div className="card-tutor mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={props.gambar} className="img-fluid rounded-start" alt="foto tutor" />
              </div>
              <div className="col-md-8">
                <div className="card-body-tutor">
                  <h5 className="card-title">{props.author}</h5>
                  <h6 className="card-title">
                    <span>
                      {props.study} Kelas {props.kelas} {props.jenjang}
                    </span>
                  </h6>
                  <hr />
                  <p className="card-text">
                    <small className="card-text">Jadwal</small>
                    <br />
                    <small className="text-muted">Hari : {props.day}</small>
                    <br />
                    <small className="text-muted">Jam : {props.time} WITA</small>
                  </p>
                  <button type="button" className="btn warna-button btn-secondary text-center " onClick={paymentCourse}>
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!userData && (
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
                  <button type="button" className="btn warna-button btn-secondary text-center " onClick={loginUser}>
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardTutor;
