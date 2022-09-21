import React from "react";
import "../About/about.css";
import ME from "../../assets/ME.png";
import Navbar from "../../components/Layout/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about" id="about">
        <h2 className="umi text-center">About Us</h2>
        <div className="container card-about">
          <div className="gina col-6">
            <br />
            <span className="line">Let's Study Sciences!</span>
            <p className="ikbal">
              KSB-Smart merupakan plaform pembelajaran online untuk memudahkan kamu belajar dimana saja, kapan saja sesuai kebutuhan. Pembelajaran yang di terapkan oleh KSB-Smart bisa melalui daring maupun luring. Ayoo belajar bersama kami
              dan daftarkan dirimu!
            </p>
          </div>
          <img src={ME} alt="about-img" />
        </div>
      </div>
    </>
  );
};
export default About;
