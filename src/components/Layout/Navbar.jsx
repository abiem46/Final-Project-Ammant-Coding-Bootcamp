import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light container-fluid">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} className="card-img-top logo" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="d-flex">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active current-page" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link active current-page" href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/course" className="nav-link active current-page" href="#">
                    Course
                  </Link>
                </li>
                <button className="nav-item">
                  <Link to="/login" className="nav-link active current-page" href="#">
                    Login
                  </Link>
                </button>

                {/* <div className="nav-item dropdown current-page">
                  <Link to="#" className="nav-link dropdown-toggle current-page" role="button" data-bs-toggle="dropdown">
                    Menu
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/login" className="dropdown-item current-page">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="dropdown-item current-page">
                        Registrasi
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
