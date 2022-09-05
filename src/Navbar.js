import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ children }) {
  let navigate = useNavigate();

  return (
    <div className="">
      <div
        className="border-bottom border-dark"
        style={{
          fontFamily: "KrossNeueGrotesk-Thin",
          position: "fixed",
          top: "0",
          width: "100%",
          fontWeight:"bold",
          zIndex: "1",
        }}
      >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  {/* </div> */}
{/* </nav> */}
        {/* <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
             
            >
              <span class="navbar-toggler-icon bg-light"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="me-auto mb-2 mb-lg-0"></div>
              <ul class="navbar-nav d-flex px-4" >
                <li className="nav-item px-2">
                  <a
                    className={"nav-link"}
                    href="#"
                    onClick={(e) => {
                      navigate("/");
                    }}
                    style={{color:"white"}}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      navigate("/");
                    }}
                    style={{color:"white"}}
                  >
                   Broucher
                  </a>
                </li>

                <li className="nav-item  px-2">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      navigate("/");
                    }}
                    style={{color:"white"}}
                  >
                    Schedule
                  </a>
                </li>
                <li className="nav-item  px-2">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      navigate("/");
                    }}
                    style={{color:"white"}}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item  px-2 bg-login-btn">
                  <a className="nav-link" href="#"
                   onClick={e=>{
                    navigate("/login")
                  }}
                  style={{color:"black"}}
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div     
      >
        {children}
      </div>
      {/* <footer className="bg-christ">
        <div className="p-4 text-center">CHRIST (Deemed To Be University)</div>
      </footer> */}
    </div>
  );
}
