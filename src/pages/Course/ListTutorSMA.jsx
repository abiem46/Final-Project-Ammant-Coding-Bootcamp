import React, { useState, useEffect } from "react";
import CardMenu from "../../components/Card/CardMenu";
import CardTutor from "../../components/Card/CardTutor";

function ListTutorSMA() {
  const [dataTutor, setDataTutor] = useState([]);

  useEffect(() => {
    fetch("https://6323201ea624bced3087ce24.mockapi.io/tutorSMA")
      .then((response) => response.json())
      .then((data) => setDataTutor(data));
  }, []);

  useEffect(() => {
    console.log(dataTutor);
  }, [dataTutor]);

  return (
    <>
      <CardMenu />
      <h1>Tutor Sekolah Menengah Atas</h1>
      <div className="mt-5 container">
        <div className="row row-cols-1 row-cols-md-3 g-5 ">
          {dataTutor.map((list) => (
            <CardTutor gambar={list.photo} author={list.author} study={list.study} time={list.time} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListTutorSMA;
