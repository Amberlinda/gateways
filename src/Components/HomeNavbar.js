import React from "react";
import image from "../assets/logo.png";

const HomeNavbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark navbar-custom"
        style={{backgroundColor: '#18181F'}}
      >
        <a class="navbar-brand" href="">
          <img
            class="img-fluid"
            src={image}
            width="200"
            height="100"
            alt=""
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/" style={{color: '#ffffff'}}>
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#events" style={{color: '#ffffff'}}>
                Events <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{color: '#ffffff'}}>
                Brochure <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#about" style={{color: '#ffffff'}}>
                About Us <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#contact" style={{color: '#ffffff'}}>
                Contact <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{backgroundColor: "#CCFF28", color: "#000", fontWeight:"800"}}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavbar;
