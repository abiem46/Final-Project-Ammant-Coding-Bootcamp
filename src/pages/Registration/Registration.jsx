import { Alert } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../../components/Layout/Navbar";
// import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [Flage, setFlage] = useState(false);
  const [Login, setLogin] = useState(true);

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  useEffect(() => {
    console.log(Email, Password, Phone, Name, role);
  }, [Email, Password, Phone, Name, role]);

  const daftarUser = async (e) => {
    e.preventDefault();

    const data = {
      name: Name,
      email: Email,
      password: Password,
      phone: Phone,
      role: role,
    };

    await axios.post("https://6323201ea624bced3087ce24.mockapi.io/register", data).then((result) => {
      // console.log(result.status)
      if (result.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Successfully Register Your Account",
          text: `Success Register for Account ${result.email}`,
        });
        navigate("/login");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="container-user">
          <form onSubmit={daftarUser}>
            <h1>Registration</h1>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" className="form-control" placeholder="Masukkan Nama Anda" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" placeholder="Masukkan Email Anda" onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" placeholder="Masukkan Password Anda" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div>
              <label htmlFor="">Phone</label>
              <input type="phone" className="form-control" placeholder="Masukkan Nomor Telepon Anda" onChange={(event) => setPhone(event.target.value)} />
            </div>

            <label>
              <input type="radio" checked={role === "user"} name="user" value="user" onChange={handleRole} />
              User
            </label>
            <label>
              <input type="radio" checked={role === "tutor"} name="tutor" value="tutor" onChange={handleRole} />
              Tutor
            </label>

            {/* <button checked={role === "user"} name="user" value="user" onChange={handleRole}>
              Register as User
              
            </button>

            <button checked={role === "tutor"} name="tutor" value="tutor" onChange={handleRole}>
              Register as Tutor
            </button> */}

            <br />
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block nt-5">
              Registration
            </button>
            <br />
            <br />

            <p>
              Already registration?
              <a href="/login">
                <span>Login</span>
              </a>
            </p>

            {Flage && (
              <Alert color="primary" variant="danfer">
                please fill Every field
              </Alert>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
