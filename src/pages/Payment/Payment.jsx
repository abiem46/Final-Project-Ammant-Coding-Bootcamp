import React, { useState, useEffect } from "react";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import { useAuthState, useAuthDispatch } from "../../context/store";
import CardPayment from "../../components/Card/CardPayment";
import { delCourse, payment } from "../../context/Action";
import axios from "axios";
import Swal from "sweetalert2";

const Payment = () => {
  const navigate = useNavigate();
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const userLogin = localStorage.getItem("userLogin");
  const dataLogin = JSON.parse(userLogin);

  const handlePayment = () => {
    // e.preventDefault();
    let dataPayment = {
      name: dataLogin.name,
      email: dataLogin.email,
      phone: dataLogin.phone,
      address: address,
    };

    const dataPembelian = {
      datatutor: state.items,
      dataPayment,
    };
    axios.put(`https://6323201ea624bced3087ce24.mockapi.io/register/${Number(dataLogin.id)}`, { ...dataLogin, dataPembelian }).then((result) => {
      console.log(result.status);
      if (result.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "Booking Berhasil",
          icon: "success",
          button: "Aww yiss!",
        }).then((result) => {
          console.log(result);
        });
      } else {
        alert("tidak berhasil update");
      }
    });
    payment(dispatch, dataPembelian);
    navigate("/notif");
  };

  useEffect(() => {
    console.log(state);
  }, [data]);

  if (!state.items.id) {
    return (
      <>
        <Navbar />
        <h1>Data Masih Kosong</h1>
      </>
    );
  } else if (state.items.id) {
    return (
      <>
        <Navbar />
        <div>
          <h1 className="mt-3" style={{ color: "rgb(56, 58, 63)" }}>
            Booked Tutor
          </h1>
        </div>

        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-3 g-5 ">
            {/* <div key={state.items[1].id}>
              <CardPayment gambar={state.items[1].photo} author={state.items[1].author} study={state.items[1].study} time={state.items[1].time} tombolhapus={() => delCourse(dispatch, state.items)} />
            </div> */}
            <CardPayment
              gambar={state.items.datalengkap.foto}
              author={state.items.datalengkap.nama}
              study={state.items.datalengkap.pelajaran}
              time={state.items.datalengkap.jam}
              day={state.items.datalengkap.hari}
              tombolhapus={() => delCourse(dispatch, state.items)}
            />
          </div>
        </div>
        <div className="container con-pay">
          <hr />
          <h2 className="text-center" style={{ color: "rgb(56, 58, 63)" }}>
            Payment
          </h2>
          <hr />
          <form className="mt-3">
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Name :
              </label>
              <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your full name" value={dataLogin.name} disabled />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail" className="form-label">
                E-mail :
              </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your e-mail" value={dataLogin.email} disabled />
            </div>
            <div className="mb-3">
              <label for="exampleInputContact" className="form-label">
                Contact :
              </label>
              <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder="Enter your phone number +62" value={dataLogin.phone} disabled />
            </div>
            <div className="mb-3">
              <label for="exampleInputAdress" className="form-label">
                Address :
              </label>
              <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="emailHelp" placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} />
            </div>
          </form>
          <hr />
          <h2 className="mt-5" style={{ color: "rgb(56, 58, 63)" }}>
            Please Select Payment Method
          </h2>
          <hr />
          <div className="container d-flex method-pay">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label con-pay" for="flexRadioDefault1">
                Bank Transfer
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label className="form-check-label con-pay " for="flexRadioDefault2">
                Debit/Credit Card
              </label>
            </div>
          </div>
          <button className="btn btn-primary mt-5" onClick={handlePayment}>
            Chekout
          </button>
        </div>
      </>
    );
  }
};

export default Payment;
