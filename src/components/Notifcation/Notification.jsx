import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const Notification = () => {
  return (
    <>
      <Navbar />
      <h1>Your Tutor Booking was Successful</h1>
      <h2>Please check on the My Course Page</h2>

      <Link to="/myCourse" type="submit" className="btn btn-primary mt-5">
        My Course
      </Link>
    </>
  );
};

export default Notification;
