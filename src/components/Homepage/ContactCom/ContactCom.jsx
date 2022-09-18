import React from "react";
import Regis from "../../../components/AllAbout/Regis";

function ContactCom() {
  return (
    <>
      <section id="contact">
        <div className="contact">
          <div>
            <h1 className="section-title">
              Contact <span>Info</span>
            </h1>
          </div>
          <div className="contact-items">
            <div className="contact-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
              </div>
              <div className="contact-info">
                <h1>Phone</h1>
                <h4>
                  <a href="tel:83114576921">+62 83114576921</a>
                </h4>
                <h4>
                  <a href="tel:7765096153">+62 7765096153</a>
                </h4>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
              </div>
              <div className="contact-info">
                <h1>Email</h1>
                <h4>
                  <a href="mailto: virginanita_27@yahoo.co.id">ksbsmart123@gmail.com</a>
                </h4>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
              </div>
              <div className="contact-info">
                <h1>Address</h1>
                <h4>
                  <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.457421907711!2d20.486353716222904!3d54.71916848028964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x284054d2fac2875d!2z0JHQuNGC0YDQuNC60YEyNA!5e0!3m2!1sru!2sru!4v1536590497258">
                    Taliwang, KSB
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <Regis />
    </>
  );
}

export default ContactCom;
