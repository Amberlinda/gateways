import React from 'react'
import logo from "../assets/logo.png"
import {useNavigate} from "react-router-dom";
import HomeNavbar from "../Components/HomeNavbar";
export const Lostinages = () => {
    let navigate = useNavigate();
    return (
        <>
           <div style={{ overflowX:"hidden" }}>
            <HomeNavbar/>
            <div class="container-fluid" style={{backgroundColor: "#18181F", height: "100vh",width: "100vw;"}}>

                <div class="row align-items-center" style={{height: "90vh"}}>
                    <div class="col-md-12">
                        <p class="justify-content-center text-center">
                            <h1 class="title-new justify-content-center text-center">Lost in Ages
                            </h1>
                        </p>
                    </div>
                    <div class="col-md-11 ml-4">
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            A treasure lost in ages, searched by many. If you have to ask, you’ll never know. If you know, you
                            need only ask. Hunt and make her yours.


                        </p>
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Team Size: 5
                        </p>

                        <p class="content-event-ind justify-content-center">
                            Rounds
                        </p>
                        <p style={{ color: "#ffffff" }}>
                        Random clues will be provided by various volunteers for the first four rounds. The selected students from the first four rounds will be given a series of puzzles. The first team to crack the code wins the hunt.

                            <p style={{color: "#fff", fontSize: "1.5rem"}}>
                                Contact
                            </p>
                            <a href="tel:+917378158913">
                                <p style={{ color: "#ffffff" }}>Harshita :7378158913</p>
                            </a>
                            <a href="tel:+919903602942">
                                <p style={{ color: "#ffffff" }}>Aditya Gope :9903602942</p>
                            </a>
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
