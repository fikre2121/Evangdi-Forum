import React, { useState } from "react";
import logo from "../../../assets/evangadi.png";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../utilty/AuthProvider";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      {/* HEADER */}
      <header className={styles.header}>
        <nav className="navbar shadow-sm">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Logo */}
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={logo} alt="Logo" className={styles.logo} />
            </Link>

            {/* Hamburger */}
            <button
              className="btn d-lg-none"
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Desktop links */}
            <div className="d-none d-lg-flex align-items-center">
              <Link className="nav-link mx-2" to="/home">
                Home
              </Link>
              <Link className="nav-link mx-2" to="/how">
                How It Works
              </Link>
              <button onClick={logout} className="btn btn-outline-danger ms-2">
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* SIDEBAR */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <Link className="nav-link" to="/" onClick={() => setSidebarOpen(false)}>
          Home
        </Link>
        <Link
          className="nav-link"
          to="/how"
          onClick={() => setSidebarOpen(false)}
        >
          How It Works
        </Link>
        <button onClick={logout} className="btn btn-outline-danger mt-3 w-100">
          Logout
        </button>
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
