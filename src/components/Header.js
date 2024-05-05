import React from "react";
import { auth } from "./Firebase";

const Header = ({ title }) => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.clear();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-3">
              <a className="nav-link " href="/about">
                About
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-light" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
