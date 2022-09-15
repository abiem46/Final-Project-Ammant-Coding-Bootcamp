import { Alert } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import "../Login/Login.css";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Flage, setFlage] = useState(false);
  const [Login, setLogin] = useState(true);

  function handleSubmit(e) {
    console.log("ini kepanggil");
    e.preventDefault();
    if (!Email || !Password) {
      setFlage(true);
    } else {
      setFlage(false);

      let loginUser = {
        email: Email,
        password: Password,
      };
      localStorage.setItem("loginUser", JSON.stringify(loginUser));

      console.log("save in local storage");
      setLogin(!Login);
    }
  }

  function handleClick() {
    setLogin(!Login);
  }
  useEffect(() => {
    console.log(Email, Password);
  }, [Email, Password]);

  return (
    <>
      <div>
        <div className="container-user">
          <form>
            <h1>Login</h1>

            <div>
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" placeholder="masukkan Email anda" onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" placeholder="masukkan Password anda" onChange={(event) => setPassword(event.target.value)} />
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
              <a href="/register">
                <span>Register</span>
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

export default Login;
