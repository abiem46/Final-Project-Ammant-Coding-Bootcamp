import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import "./Homepage.css";
import CardTeam from "../About/CardTeam";
import Navbar from "../../components/Layout/Navbar";
import AboutCom from "../../components/Homepage/AboutCom/AboutCom";
import CourseCom from "../../components/Homepage/CourseCom/CourseCom";
import ContactCom from "../../components/Homepage/ContactCom/ContactCom";

function Homepage({ Foto1 }) {
  return (
    <>
      <Navbar />
      <div className="welcome">
        <div className="welcomeHeading">
          <h2>GET THE BEST</h2>
          <br />
          <h1>PRIVATE TUTOR</h1>
          <br />
          <h2>IN SECOND</h2>
          <br />
          <br />
          <p>"We help you in Earning during practical Learning"</p>
        </div>

        <Avatar src={Foto1} />
      </div>

      <hr />

      <AboutCom />

      <hr />
      <CourseCom />
      <hr />
      <CardTeam />
      <hr />
      <ContactCom />

      {/* dddd */}
      {/* <div className="d-flex">
        <div className="title">
          <h1 className="">Dapatkan Guru Les Privat Terbaik Dalam Hitungan Detik</h1>
        </div>
        <div>
          <Avatar src={Foto1} />
        </div>
      </div> */}
    </>
  );
}

export default Homepage;
