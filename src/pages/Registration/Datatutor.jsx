import React from "react";
import { useState } from "react";

const Datatutor = () => {
  let [dataLengkap, setDataLengkap] = useState();

  return (
    <form>
      <h1>Lengkapi Data Anda</h1>
      <div>
        <label htmlFor="">Tuliskan pengalaman anda</label>
        <input type="text" className="form-control" placeholder="Masukkan Nama Anda" onChange={(e) => setDataLengkap(e.target.value)} />
      </div>

      <br />
      <br />
      <button type="submit" className="btn btn-dark btn-lg btn-block nt-5">
        Submit
      </button>
      <br />
      <br />
    </form>
  );
};

export default Datatutor;
