import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <div className="container">
        <hr />
        <h2 className="text-center">Payment</h2>
        <hr />
        <form className="mt-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Name :
            </label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your full name" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail" className="form-label">
              E-mail :
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your e-mail" />
          </div>
          <div className="mb-3">
            <label for="exampleInputContact" className="form-label">
              Contact :
            </label>
            <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder="Enter your phone number" />
          </div>
          <div className="mb-3">
            <label for="exampleInputAdress" className="form-label">
              Address :
            </label>
            <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="emailHelp" placeholder="Enter your address" />
          </div>
        </form>

        <hr />
        <h2 className="mt-5">Please Select Payment Method</h2>
        <hr />
        <div className="container d-flex">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              Bank Transfer
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">
              Debit/Credit Card
            </label>
          </div>
        </div>

        <Link to="/notif" type="submit" className="btn btn-primary mt-5">
          Chekout
        </Link>
      </div>
    </>
  );
};

export default Payment;
