import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import "./Homepage.css";

function Homepage({ Foto1 }) {
  return (
    <>
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
