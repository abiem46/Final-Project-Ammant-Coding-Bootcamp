import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import "./Homepage.css";
import CardTeam from "../About/CardTeam";
import Navbar from "../../components/Layout/Navbar";
import AboutCom from "../../components/Homepage/AboutCom/AboutCom";
import CourseCom from "../../components/Homepage/CourseCom/CourseCom";
import ContactCom from "../../components/Homepage/ContactCom/ContactCom";
import Carousel from "react-bootstrap/Carousel";
import Foto1 from "../../assets/foto1.png";
import Foto2 from "../../assets/Lo.png";
import Foto3 from "../../assets/ME.png";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="welcome">
        {/* Carousel Awal */}

        <Carousel className="mt-5 carousel" variant="dark">
          <Carousel.Item>
            <img className=" w-100" src={Foto1} alt="First slide" />
            <Carousel.Caption>
              <h2>AMAN</h2>
              <p>Aplikasi KSB Smart menjamin data pengguna tetap amman</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100" src={Foto2} alt="Second slide" />
            <Carousel.Caption>
              <h2>Terpercaya</h2>
              <p>hampir 85% warga NTB menggunakan aplikasi KSB SMart</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100" src={Foto3} alt="Third slide" />
            <Carousel.Caption>
              <h2>Sistem Pembelajaran</h2>
              <p>KSB Smart sudah memakai 2 metode pembelajaran yaitu via remote dan tatap muka</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* Carousel Akhir */}
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

        {/* <Avatar src={Foto1} /> */}
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