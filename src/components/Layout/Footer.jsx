import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section id="footer">
      <div className="footer container-fluid mt-3">
        <div className="brand">
          <h2 className="describe">
            <span className="span">KSB</span> SMART{" "}
          </h2>
        </div>
        <h3 className="describe">Your Complete Learning Solutions</h3>
        <div className="container d-flex  social-icon">
          <div className="social-item">
            <a href="https://www.facebook.com/profile.php?id=100085780662677">
              <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
            </a>
          </div>

          <div className="social-item">
            <a href="https://www.instagram.com/ksbsmart/">
              <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" />
            </a>
          </div>

          <div className="social-item">
            <a href="https://www.youtube.com/c/AbiemHoudini46">
              <img src="https://img.icons8.com/bubbles/50/000000/youtube.png" />
            </a>
          </div>
        </div>
        <p className="describe">Copyright © {year} KSB-Smart</p>
      </div>
    </section>
  );
};

export default Footer;
