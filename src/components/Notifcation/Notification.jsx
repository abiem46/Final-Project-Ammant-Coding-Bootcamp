import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import "./Notification.css";

const Notification = () => {
  return (
    <>
      <Navbar />
      <div className=" container mt-5 notif">
        <h1 className="mt-5">Your Tutor Booking was Successful</h1>
        <h2 className="mt-3 mb-5">Please check on the My Course Page</h2>

        <Link to="/myCourse" type="submit" className="btn btn-secondary mt-5 mb-5">
          My Course Page
        </Link>
      </div>
    </>
  );
};

export default Notification;
