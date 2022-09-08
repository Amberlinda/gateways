import React from 'react'
import logo from "../assets/logo.png"
import {useNavigate} from "react-router-dom";
import HomeNavbar from "../Components/HomeNavbar";
export const GeekOfiesta = () => {
    let navigate = useNavigate();
    return (
        <>
            <HomeNavbar/>
            <div class="container-fluid"style={{ backgroundColor: "#18181F", height: "100vh", width: "100vw" }}>

                <div class="row align-items-center" style={{  height: "90vh" }}>
                    <div class="col-md-12">
                        <p class="justify-content-center text-center">
                            <h1 class="title-new justify-content-center text-center">Geek ‘O’ Fiesta
                            </h1>
                        </p>
                    </div>
                    <div class="col-md-11 ml-4">
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Are you someone who can handle stress effortlessly? Can you multitask without succumbing to
                            pressure? Are you the one who brings up the team's motivation when everyone's low? Do you have what
                            it takes to be the best manager? Then Geek ' o ' Fiesta is the event for you!

                        </p>
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Event Type: Individual
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Pre-requisites
                        </p>
                        <p>
                            <ul style={{color: "#fff;"}}>
                                <li>
                                    Sound reasoning, logical and management skills
                                </li>

                            </ul>
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Rounds
                        </p>
                        <p style={{ color: "#ffffff" }}>
                            There will be 3 rounds in total. The top five scorers after round 2 will qualify for the final round. Winners will be determined based on the points of three rounds.


                            <p style={{color: "#fff", fontSize: "1.5rem;"}}>
                                Contact
                            </p>
                            <a href="tel:+918825221586">
                                <p style={{ color: "#ffffff" }}>Yash :8825221586</p>
                            </a>
                            <a href="tel:+916362435596">
                                <p style={{ color: "#ffffff" }}>Vaishnavi :6362435596</p>
                            </a>
                        </p>
                        
                        <button class="btn btn-lg" style={{backgroundColor: "#CCFF28"}}
                        onClick={e=>{
                            navigate("/user-dashboard")
                          }}>Register Now</button>

                    </div>
                </div>
            </div>
        </>
    )
}
