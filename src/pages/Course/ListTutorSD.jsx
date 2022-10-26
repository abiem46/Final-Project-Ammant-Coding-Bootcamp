import React, { useState, useEffect } from "react";
import Navbar from "../../components/Layout/Navbar";
import CardMenu from "../../components/Card/CardMenu";
import CardTutor from "../../components/Card/CardTutor";
import { useAuthDispatch, useAuthState } from "../../context/store";
import axios from "axios";
import Swal from "sweetalert2";

function ListTutorSD() {
  const dispatch = useAuthDispatch();
  const state = useAuthState();
  const [dataTutor, setDataTutor] = useState([]);

  const fetchProduct = async () => {
    const data = await axios.get("https://6323201ea624bced3087ce24.mockapi.io/register");
    const datatutor = data.data.filter((user) => {
      return user.role === "tutor" && user.pendidikan === "SD";
    });
    const data1 = datatutor.filter((user) => {
      return user.datalengkap;
    });

    setDataTutor(data1);

    // const data1 = datatutor.map((item) => {
    //   const container = {};

    //   container.nama = item.datalengkap.nama;
    //   container.hari = item.datalengkap.hari;
    //   container.pelajaran = item.datalengkap.pelajaran;
    //   container.jam = item.datalengkap.jam;
    //   container.foto = item.datalengkap.foto;
    //   container.kelas = item.datalengkap.kelas;
    //   container.pendidikan = item.datalengkap.pendidikan;
    //   container.id = [item.name];

    //   return container;
    // });

    console.log("ini user", data1);
    // console.log(data);
  };
  useEffect(() => {
    fetchProduct();
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
            <CardTutor
              listFull={list}
              key={list.id}
              gambar={list.datalengkap.foto}
              author={list.datalengkap.nama}
              study={list.datalengkap.pelajaran}
              time={list.datalengkap.jam}
              day={list.datalengkap.hari}
              kelas={list.datalengkap.kelas}
              jenjang={list.datalengkap.pendidikan}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default ListTutorSD;
