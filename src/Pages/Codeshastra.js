import React from 'react'
import logo from "../assets/logo.png"
import {useNavigate} from "react-router-dom";
import HomeNavbar from "../Components/HomeNavbar";

export const Codeshastra = () => {
    let navigate = useNavigate();
    return (
        <>
         <div style={{ overflowX: "hidden" }}>
            <HomeNavbar/>
            <div class="container-fluid" style={{ backgroundColor: "#18181F", height: "100vh", width: "100vw" }}>

                <div class="row align-items-center" style={{ height: "90vh" }}>
                    <div class="col-md-12">
                        <p class="justify-content-center text-center">
                            <h1 class="title-new justify-content-center text-center">Code Shashtra
                            </h1>
                        </p>
                    </div>
                    <div class="col-md-11 ml-4">
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Coding allows you to think about thinking, and while debugging, you learn. Join us at CodeShashtra,
                            sponsored by GeeksForGeeks, and make it work, make it right, and make it fast.
                        </p>
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Event Type: Individual
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Pre-requisites
                        </p>
                        <p>
                            <ul style={{ color: "#ffffff" }}>
                                <li>
                                    1. Programming knowledge (C and Python)
                                </li>
                                <li>
                                    2. Knowledge of the GCC compiler

                                </li>

                            </ul>
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Rounds
                        </p>
                        <p style={{ color: "#ffffff" }}>
                            There will be 3 rounds in total. Round 1 will be held online on 18th September on the GeeksforGeeks platform. Contestants with high scores after round 1 will be promoted to round 2.
                            Winners will be determined based on how quickly they solve round 3’s question.

                            <p style={{color: "#fff", fontSize: "1.5rem"}}>
                                Contact
                            </p>
                            <a href="tel:+916355380271">
                                <p style={{ color: "#ffffff" }}>Rohit :6355380271</p>
                            </a>
                            <a href="tel:+919834785463">
                                <p style={{ color: "#ffffff" }}>Gyan :9834785463</p>
                            </a>
                        </p>

                        <button class="btn btn-lg" style={{backgroundColor:"#CCFF28"}}
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
