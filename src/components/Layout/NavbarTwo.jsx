import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Dropdown from "react-bootstrap/Dropdown";

const NavbarTwo = () => {
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

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Menu</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/myCourse">My Course</Dropdown.Item>
                    <Dropdown.Item href="/login">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavbarTwo;
