import { Alert } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import "../Login/Login.css";
import { useCheckLogin } from "../../helper/getLocalStorage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../components/Layout/Navbar";
import { Link } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [Flage, setFlage] = useState(false);
  // const [Login, setLogin] = useState(true);
  const [userRegister, setUserRegister] = useState(null);

  const { userData } = useCheckLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let dataUser = null;
    if (userRegister) {
      dataUser = userRegister.find((user) => {
        return Email === user.email && Password === user.password;
      });
    }
    if (dataUser) {
      Swal.fire({
        icon: "success",
        title: "Successfully Login Your Account",
        text: `Success Login for Account ${dataUser.email}`,
      });
      localStorage.setItem("userLogin", JSON.stringify(dataUser));
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The data cannot be empty or the data you entered is wrong!",
      });
    }
    // console.log("ini kepanggil");
    // e.preventDefault();

    // if (!Email || !Password) {
    //   setFlage(true);
    // } else {
    //   setFlage(false);

    //   let loginUser = {
    //     email: Email,
    //     password: Password,
    //   };
    //   localStorage.setItem("loginUser", JSON.stringify(loginUser));

    //   console.log("save in local storage");
    //   setLogin(!Login);
    // }
  }

  useEffect(() => {
    fetch("https://6323201ea624bced3087ce24.mockapi.io/register", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setUserRegister(data));
  }, [Email, Password, userData]);

  return (
    <>
      <Navbar />
      <div>
        <div className="container-user">
          <form>
            <h1>Login</h1>

            <div>
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" placeholder="Masukkan Email Anda" onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" placeholder="Masukkan Password Anda" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <br />
            <br />
            <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-dark btn-lg btn-block nt-5">
              Login
            </button>
            <br />
            <br />

            <p>
              Don't have an account ?
              <Link to="/register">
                <span>Register</span>
              </Link>
            </p>

            {/* {Flage && (
              <Alert color="primary" variant="danfer">
                please fill Every field
              </Alert>
            )} */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
