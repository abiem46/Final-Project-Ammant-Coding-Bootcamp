import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import "./Homepage.css";

function Homepage({ Foto1 }) {
  return (
    <>
      <div className="d-flex">
        <div className="title">
          <h1 className="">Dapatkan Guru Les Privat Terbaik Dalam Hitungan Detik</h1>
        </div>
        <div>
          <Avatar src={Foto1} />
        </div>
      </div>
    </>
  );
}

export default Homepage;
