import React, { useState, useEffect } from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import { useAuthState, useAuthDispatch } from "../../context/store";
import CardPayment from "../../components/Card/CardPayment";

const Payment = () => {
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);

  const setPayment = () => {
    const pay = localStorage.getItem("userPay");
    setData(JSON.parse(pay));
    // console.log(pay);
  };

  const handlePayment = () => {
    // e.preventDefault();
    let dataPayment = {
      name,
      email,
      phone,
      address,
      state,
    };

    if (data === null) {
      setData(dataPayment);
      localStorage.setItem("userPay", JSON.stringify([dataPayment]));
    }
    // else {
    //   localStorage.setItem("userPay", JSON.stringify(...dataPayment));
    //   // setData(...data, dataPayment);
    // }

    // if (data === null) {
    //   setData(dataPayment);
    //   localStorage.setItem("userPay", JSON.stringify(data));
    // } else {
    //   localStorage.setItem("userPay", JSON.stringify(data.concat(dataPayment)));
    //   setIsipesan(data.concat(dataPayment));
    // }
  };

  useEffect(() => {
    setPayment();
    // console.log(dataPayment);
  });

  if (state.items.length === 0) {
    return (
      <>
        <Navbar />
        <h1>Data Masih Kosong</h1>
      </>
    );
  } else {
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
            <div key={state.items[1].id}>
              <CardPayment gambar={state.items[1].photo} author={state.items[1].author} study={state.items[1].study} time={state.items[1].time} tombolhapus={() => delCourse(dispatch, state.items)} />
            </div>
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
              <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail" className="form-label">
                E-mail :
              </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your e-mail" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label for="exampleInputContact" className="form-label">
                Contact :
              </label>
              <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} />
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
          <Link to="/myCourse" type="submit" className="btn btn-primary mt-5" onClick={() => handlePayment()}>
            Chekout
          </Link>
        </div>
      </>
    );
  }
};

export default Payment;
