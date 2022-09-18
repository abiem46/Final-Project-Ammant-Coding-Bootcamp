import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { useCheckLogin } from "../../helper/getLocalStorage";
import Dropdown from "react-bootstrap/Dropdown";
import Swal from "sweetalert2";

const Navbar = () => {
  const { userData } = useCheckLogin();
  const logout = () => {
    localStorage.removeItem("userLogin");
    Swal.fire({
      icon: "success",
      title: "Successfully Log Out",
      text: "Success Log Out for Account",
    });
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      {userData && (
        <nav className="navbar navbar-expand-lg navbar-light container-fluid">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={Logo} className="card-img-top logo" alt="logo" />
            </Link>
            {/* <button>Logout</button> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <form className="d-flex">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active current-page" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <HashLink to="/#about" className="nav-link active current-page" smooth>
                      About
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <Link to="/course" className="nav-link active current-page">
                      Course
                    </Link>
                  </li>
                  <li className="nav-item">
                    <HashLink to="/#contact" className="nav-link active current-page" smooth>
                      Contact
                    </HashLink>
                  </li>

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">Menu</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/myCourse">My Course</Dropdown.Item>
                      <Dropdown.Item href="/login" onClick={logout}>
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </form>
          </div>
        </nav>
      )}

      {!userData && (
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
                    <Link to="/login" className="nav-link active current-page">
                      Login
                    </Link>
                  </button>
                </ul>
              </div>
            </form>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
