import React from 'react'
import logo from "../assets/logo.png"
import {useNavigate} from "react-router-dom";
import HomeNavbar from "../Components/HomeNavbar";

export const Battlestars = () => {
    let navigate = useNavigate();
    return (
        <>
         <div style={{ overflowX: "hidden" }}>
            <HomeNavbar/>
            <div class="container-fluid" style={{ backgroundColor: "#18181F", height: "100vh", width: "100vw" }}>

                <div class="row align-items-center" style={{ height: "90vh" }}>
                    <div class="col-md-12">
                        <p class="justify-content-center text-center">
                            <h1 class="title-new justify-content-center text-center">Battle Stars
                            </h1>
                        </p>
                    </div>
                    <div class="col-md-11 ml-4">
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Skills win games, but teamwork and strategies win championships. Get a team and become champions
                            through our gaming event!



                        </p>
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Team Size: 5
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Pre-requisites
                        </p>
                        <p class="justify-content-center" style={{ color: "#ffffff" }}>
                            1. Players are to carry their own laptops with games installed (Valorant and CS 1.6).
                        </p>
                        <p class="justify-content-center" style={{ color: "#ffffff" }}>
                            2. Players can carry their peripherals if required.
                        </p>
                        <p class="justify-content-center" style={{ color: "#ffffff" }}>
                            3.Participants are expected to be familiar with the games.
                        </p>
                        <p class="justify-content-center" style={{ color: "#ffffff" }}>
                            4. Players are to report 30 minutes before.
                        </p>


                        <p class="content-event-ind justify-content-center">
                            Rounds
                        </p>
                        <p style={{ color: "#ffffff" }}>
                            The match type will be announced on the spot. Each team is expected to compete with other teams and
                            the winners of each match will again compete with each other. This will be repeated till the final
                            winner is determined.

                            <p style={{ color: "#fff", fontSize: "1.5rem" }}>
                                Contact
                            </p>
                            <a href="tel:+919004261825">
                                <p style={{ color: "#ffffff" }}>Yash Pathak :9004261825</p>
                            </a>
                            <a href="tel:+917899224696">
                                <p style={{ color: "#ffffff" }}>Smith :7899224696</p>
                            </a>
                        </p>

                        <button class="btn btn-lg" style={{backgroundColor: "#CCFF28"}}
                        onClick={e=>{
                            navigate("/user-dashboard")
                          }}>Register Now</button>
                    </div>
                </div>
            </div >
            </div>
        </>
    )
}
