import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../components/Layout/Navbar";

function Datatutor() {
  const [nama, setNama] = useState();
  const [pelajaran, setPelajaran] = useState();
  const [pendidikan, setPendidikan] = useState();
  const [kelas, setKelas] = useState("");
  const [jam, setJam] = useState();
  const [hari, setHari] = useState();
  const [foto, setFoto] = useState();
  const [tentang, setTentang] = useState();
  const userLogin = localStorage.getItem("userLogin");
  const dataLogin = JSON.parse(userLogin);
  const datalengkap = {
    nama: dataLogin.name,
    pelajaran: pelajaran,
    jam: jam,
    hari: hari,
    tentang: tentang,
    pendidikan: dataLogin.pendidikan,
    foto: foto,
    kelas: kelas,
  };

  const isiData = (e) => {
    e.preventDefault();

    axios.put(`https://6323201ea624bced3087ce24.mockapi.io/register/${Number(dataLogin.id)}`, { ...dataLogin, datalengkap }).then((result) => {
      console.log(result.status);
      if (result.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "Data berhasil update",
          icon: "success",
          button: "Aww yiss!",
        }).then((result) => {
          console.log(result);
        });
      } else {
        alert("tidak berhasil update");
      }
    });
  };
  useEffect(() => {
    console.log(dataLogin.pendidikan);
  }, [dataLogin]);

  if (dataLogin.pendidikan === "SD") {
    return (
      <>
        <Navbar />
        <form>
          <h1>Lengkapi Data Anda</h1>
          <div>
            <label htmlFor="">Nama</label>
            <input type="text" className="form-control" placeholder="Masukkan Nama Anda" value={dataLogin.name} disabled />
          </div>

          <label htmlFor="">Pelajaran</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setPelajaran(e.target.value)}>
            <option selected>Pilih Pelajaran</option>
            <option value="IPA">IPA</option>
            <option value="Matematika">Matematika</option>
          </select>
          <div>
            <label htmlFor="">Jenjang Pendidikan</label>
            <input type="text" className="form-control" placeholder="Masukkan Jenjang Pendidikan" value={dataLogin.pendidikan} disabled />
          </div>
          <label htmlFor="">Kelas</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setKelas(e.target.value)}>
            <option selected>Pilih Kelas</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <label htmlFor="">Hari</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setHari(e.target.value)}>
            <option selected>Pilih Hari</option>
            <option value="Senin">Senin</option>
            <option value="Selasa">Selasa</option>
            <option value="Rabu">Rabu</option>
            <option value="Kamis">Kamis</option>
          </select>

          <div>
            <label htmlFor="">Jam</label>
            <input type="text" className="form-control" placeholder="Masukkan Jam" onChange={(e) => setJam(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Foto Profil</label>
            <input type="text" className="form-control" placeholder="Update foto profil anda" onChange={(e) => setFoto(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Tentang</label>
            <input type="text" className="form-control" placeholder="Deskripsikan tentang anda" onChange={(e) => setTentang(e.target.value)} />
          </div>

          <br />
          <br />
          <button type="submit" className="btn btn-dark btn-lg btn-block nt-5" onClick={isiData}>
            Submit
          </button>
          <br />
          <br />
        </form>
      </>
    );
  } else if (dataLogin.pendidikan === "SMP") {
    return (
      <>
        <Navbar />
        <form>
          <h1>Lengkapi Data Anda</h1>
          <div>
            <label htmlFor="">Nama</label>
            <input type="text" className="form-control" placeholder="Masukkan Nama Anda" value={dataLogin.name} disabled />
          </div>

          <label htmlFor="">Pelajaran</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setPelajaran(e.target.value)}>
            <option selected>Pilih Pelajaran</option>
            <option value="Fisika">Fisika</option>
            <option value="Kimia">Kimia</option>
            <option value="Matematika">Matematika</option>
            <option value="Bahasa Inggris">Bahasa Inggris</option>
            <option value="Biologi">Biologi</option>
          </select>
          <div>
            <label htmlFor="">Jenjang Pendidikan</label>
            <input type="text" className="form-control" placeholder="Masukkan Jenjang Pendidikan" value={dataLogin.pendidikan} disabled />
          </div>
          <label htmlFor="">Kelas</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setKelas(e.target.value)}>
            <option selected>Pilih Kelas</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <label htmlFor="">Hari</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setHari(e.target.value)}>
            <option selected>Pilih Hari</option>
            <option value="Senin">Senin</option>
            <option value="Selasa">Selasa</option>
            <option value="Rabu">Rabu</option>
            <option value="Kamis">Kamis</option>
          </select>

          <div>
            <label htmlFor="">Jam</label>
            <input type="text" className="form-control" placeholder="Masukkan Jam" onChange={(e) => setJam(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Foto Profil</label>
            <input type="text" className="form-control" placeholder="Update foto profil anda" onChange={(e) => setFoto(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Tentang</label>
            <input type="text" className="form-control" placeholder="Deskripsikan tentang anda" onChange={(e) => setTentang(e.target.value)} />
          </div>

          <br />
          <br />
          <button type="submit" className="btn btn-dark btn-lg btn-block nt-5" onClick={isiData}>
            Submit
          </button>
          <br />
          <br />
        </form>
      </>
    );
  } else if (dataLogin.pendidikan === "SMA") {
    return (
      <>
        <Navbar />
        <form>
          <h1>Lengkapi Data Anda</h1>
          <div>
            <label htmlFor="">Nama</label>
            <input type="text" className="form-control" placeholder="Masukkan Nama Anda" value={dataLogin.name} disabled />
          </div>

          <label htmlFor="">Pelajaran</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setPelajaran(e.target.value)}>
            <option selected>Pilih Pelajaran</option>
            <option value="Fisika">Fisika</option>
            <option value="Kimia">Kimia</option>
            <option value="Matematika">Matematika</option>
            <option value="Bahasa Inggris">Bahasa Inggris</option>
            <option value="Biologi">Biologi</option>
          </select>
          <div>
            <label htmlFor="">Jenjang Pendidikan</label>
            <input type="text" className="form-control" placeholder="Masukkan Jenjang Pendidikan" value={dataLogin.pendidikan} disabled />
          </div>
          <label htmlFor="">Kelas</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setKelas(e.target.value)}>
            <option selected>Pilih Kelas</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <label htmlFor="">Hari</label>
          <select class="form-select" aria-label="Default select example" onChange={(e) => setHari(e.target.value)}>
            <option selected>Pilih Hari</option>
            <option value="Senin">Senin</option>
            <option value="Selasa">Selasa</option>
            <option value="Rabu">Rabu</option>
            <option value="Kamis">Kamis</option>
          </select>

          <div>
            <label htmlFor="">Jam</label>
            <input type="text" className="form-control" placeholder="Masukkan Jam" onChange={(e) => setJam(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Foto Profil</label>
            <input type="text" className="form-control" placeholder="Update foto profil anda" onChange={(e) => setFoto(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Tentang</label>
            <input type="text" className="form-control" placeholder="Deskripsikan tentang anda" onChange={(e) => setTentang(e.target.value)} />
          </div>

          <br />
          <br />
          <button type="submit" className="btn btn-dark btn-lg btn-block nt-5" onClick={isiData}>
            Submit
          </button>
          <br />
          <br />
        </form>
      </>
    );
  }
}

export default Datatutor;
