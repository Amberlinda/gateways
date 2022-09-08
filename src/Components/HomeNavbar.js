import React from "react";
import { Link,useNavigate } from "react-router-dom";
import image from "../assets/logo.png";



const HomeNavbar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark navbar-custom"
        style={{backgroundColor: '#1a233a'}}

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
              <a class="nav-link" href="/" style={{color: '#ffffff',fontWeight:"800"}}>
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#events" style={{color: '#ffffff',fontWeight:"800"}}>
                Events <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{color: '#ffffff',fontWeight:"800"}}>
                Brochure <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{color: '#ffffff',fontWeight:"800"}}
               onClick={e=>{
                navigate("/schedule")
              }}>
                Schedule <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#about" style={{color: '#ffffff',fontWeight:"800"}}
               onClick={e=>{
                navigate("/")
              }}>
                About Us <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#contact" style={{color: '#ffffff',fontWeight:"800"}}>
                Contact <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{backgroundColor: "#CCFF28", color: "#000", fontWeight:"800"}}
            onClick={e=>{
              navigate("/login")
            }}
          >
            <Link style={{color:"#000000"}} to="/login">Login</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavbar;
