import React from "react";
import "../About/about.css";
import ME from "../../assets/ME.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container card-about">
        <div className="col-6">
          <h2>About Us</h2>
          <br />
          <span className="line">Let's Study Sciences!</span>
          <p>
            KSB-Smart merupakan plaform pembelajaran online untuk memudahkan kamu belajar dimana saja, kapan saja sesuai kebutuhan. Pembelajaran yang di terapkan oleh KSB-Smart bisa melalui daring maupun luring. Ayoo belajar bersama kami
            dan daftarkan dirimu!
          </p>
        </div>
        <img src={ME} alt="about-img" />
      </div>
    </div>
  );
};
export default About;
