import React from "react";
import './navbar.css';
import LoginButton from "../login_button/LoginButton";

function NavBar() {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg bg">
  <div className="container-fluid">
    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <a className="navbar-brand" href="#">ScamBusiness</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <div className="smallSpacer"></div>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <div className="smallSpacer"></div>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <div className="smallSpacer"></div>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other details
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">About Us</a></li>
            <li><a className="dropdown-item" href="#">What is 3d printing?</a></li>
            <li><a className="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
        <div className="bigSpacer"></div>
        <div className="spacer"></div>
        <li>
            <LoginButton className="loginBtn" buttonName="Login"/>
        </li>
      </ul>
    </div>
  </div>
</nav>
<hr/>
</>
  );
}

export default NavBar;