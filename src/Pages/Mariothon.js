import React from 'react'
import logo from "../assets/logo.png"
import HomeNavbar from "../Components/HomeNavbar";
import {useNavigate} from "react-router-dom";

export const Mariothon = () => {
    let navigate = useNavigate();
    return (
        <>
        <div style={{ overflowX:"hidden" }}>
            <HomeNavbar/>
            <div class="container-fluid" style={{ backgroundColor: "#18181F", height: "100vh", width: "100vw",overflowX:"hidden" }}>

                <div class="row align-items-center"  style={{  height: "90vh" }}>
                    <div class="col-md-12">
                        <p class="justify-content-center text-center">
                            <h1 class="title-new justify-content-center text-center">Mariothon
                            </h1>
                        </p>
                    </div>
                    <div class="col-md-11 ml-4">
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Mariothon is where your crazy idea becomes a reality. Brilliant ideas start with curious minds, and
                            when
                            those brilliant ideas compete with each other, the world wins. Participate in our IoT-based
                            hackathon to
                            win exclusive prizes!
                        </p>
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Team Size: Upto 4
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Pre-requisites
                        </p>
                        <p>
                            <ul style={{ color: "#ffffff" }}>
                                <li>
                                    1. Knowledge of Arduino language.
                                </li>
                                <li>
                                    2. Any programming to implement AI concepts.
                                </li>
                                <li>
                                    3. WIZnet Pico Board will be provided at the venue.
                                </li>
                            </ul>
                        </p>
                        {/* <p class="content-event-ind justify-content-center">
                            Rounds
                        </p> */}
                        <p style={{ color: "#ffffff" }}>
                        <p class="content-event-ind justify-content-center">   Problem Statements </p>
                            <p style={{ color: "#ffffff" }}>
                                The overall theme is Smart City. The problem statement should be from one of the following
                                sub-domains:<br/><br/>  
                                {/* <p style={{ color: "#ffffff" }}>
                                    ??? Healthcare
                                </p>
                                <p style={{ color: "#ffffff" }}>
                                    ??? Transportation and Logistics
                                </p>
                                <p style={{ color: "#ffffff" }}>
                                    ??? Environmental Issues
                                </p> */}
                               <p style={{color: "#fff", fontSize: "1.5rem"}}>
                                    Round 1
                                </p> 
                                <p style={{ color: "#ffffff" }}>
                                    Prepare a document for your proposed idea from any one of the given sub domains by 13th sept.
                                    <br/>
                                    ??? Healthcare<br/>
                                    ??? Transportation & Logistics<br/>
                                    ??? Environmental Issues<br/>
                                    <br/>
                                    Mail your submission to <a href="mailto:gateways.hackathon@gmail.com" >gateways.hackathon@gmail.com </a>
                                    Include your college name and names of the team members.
                                    <br/>
                                    Format of document<br/>
                                    ??? Introduction <br/>
                                    ??? Idea proposal<br/>
                                    ??? System diagram representation<br/>
                                    ??? Approach towards the problem<br/>
                                    ??? Components<br/>
                                    ??? Future enhancements
                                    {/* Participants are required to mail an abstract proposal with PPT within September 18th to gateways
                                    mail-id. The selected teams will progress to round 2, which will be held on 23rd September offline
                                    at CHRIST. */}
                                </p>
                                <p style={{color: "#fff", fontSize: "1.5rem"}}>
                                    Round 2
                                </p>
                                <p style={{ color: "#ffffff" }}>
                                    6 hours for the implementation of the abstract will be provided. Prototype submission will be
                                    evaluated at the end of the hackathon.
                                </p>
                                <p style={{color: "#fff", fontSize: "1.5rem"}}>
                                    Contact
                                </p>
                                <a href="tel:+918147188916">
                                    <p style={{ color: "#ffffff" }}>Sinchana :8147188916</p>
                                </a>
                                <a href="tel:+918088101019">
                                    <p style={{ color: "#ffffff" }}>Arjun :8088101019</p>
                                </a>
                            </p>
                        </p>
                        <button class="btn btn-lg" style={{backgroundColor: "#CCFF28"}}
                        onClick={e=>{
                            navigate("/user-dashboard")
                          }}>Register Now</button>

                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
