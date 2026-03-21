import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/evangadi.png";
import style from "./landing.module.css";
import landingLogo from "../../../assets/landing.jpg";

function Landing() {
  return (
    <div>
      <header className={style.header}>
        <div className={`container ${style.header2}`}>
          <div>
            <img className={style.logo} src={logo} alt="Logo" />
          </div>
          <div>
            <Link className={style.btn_link} to="/register">
              Sign In
            </Link>
          </div>
        </div>
      </header>

      <section className={`container ${style.landing}`}>
        <div className="row align-items-center">
          {/* LEFT SIDE (TEXT) */}
          <div className="col-md-6">
            <h1>Evangadi Forum</h1>
            <p>
              Welcome to Evangadi Forum—your premier tech community for global
              networking and learning. Join us to connect with peers,
              collaborate on projects, and enhance your professional growth.
              Explore the features that can elevate your tech journey today.
            </p>
            <Link
              className={`${style.btn_link} ${style["lower-btn"]}`}
              to="/register"
            >
              Join Now
            </Link>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="col-md-6 d-none d-md-block">
            <div className={style.img_container}>
              <img src={landingLogo} alt="landing" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
