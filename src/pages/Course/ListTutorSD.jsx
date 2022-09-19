import React, { useState, useEffect } from "react";
import Navbar from "../../components/Layout/Navbar";
import CardMenu from "../../components/Card/CardMenu";
import CardTutor from "../../components/Card/CardTutor";
import { useAuthDispatch, useAuthState } from "../../context/store";
import { addCourse } from "../../context/Action";
import { Link } from "react-router-dom";

function ListTutorSD() {
  const dispatch = useAuthDispatch();
  const state = useAuthState();
  const [dataTutor, setDataTutor] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch("https://6323201ea624bced3087ce24.mockapi.io/tutorSD");
    const result = await response.json();
    setDataTutor(result);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    setDataTutor(dataTutor);
  }, [state]);

  return (
    <>
      <Navbar />
      <CardMenu />
      <h1>Tutor Sekolah Dasar</h1>
      <div className="mt-5 container">
        <div className="row row-cols-1 row-cols-md-3 g-5 ">
          {dataTutor.map((list) => (
            <CardTutor key={list.id} gambar={list.photo} author={list.author} study={list.study} time={list.time} tombol={() => addCourse(dispatch, list)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListTutorSD;
