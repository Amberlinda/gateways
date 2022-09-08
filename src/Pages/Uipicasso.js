import React from 'react'
import logo from "../assets/logo.png"
export const Uipicasso = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom" style={{ backgroundColor: "#18181F" }}>
                <a class="navbar-brand" href="#"><img class="img-fluid" src={logo} width="200" height="100" alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" style={{ color: "#ffffff" }}>Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" style={{ color: "#ffffff" }}>Events <span
                                class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" style={{ color: "#ffffff" }}>Brochure <span
                                class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" style={{ color: "#ffffff" }}>About Us <span
                                class="sr-only">(current)</span></a>
                        </li>

                    </ul>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                        style={{ backgroundColor: "#CCFF28", color: "#000" }}>Login</button>
                </div>
            </nav>
            <div class="container-fluid" style={{ backgroundColor: "#18181F", height: "100vh", width: "100vw" }}>

                <div class="row align-items-center" style={{ height: "90vh" }}>
                    <div class="col-md-12">
                        <p class="justify-content-center text-center">
                            <h1 class="title-new justify-content-center text-center">UI Picasso
                            </h1>
                        </p>
                    </div>
                    <div class="col-md-11 ml-4">
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Do you like to create what you imagine? Come along; let’s add visual creativity to your UI & prove
                            that you are a Picasso!

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
                                    An account on Figma
                                </li>

                            </ul>
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Rounds
                        </p>
                        <p style={{ color: "#ffffff" }} >
                            There will be 2 rounds in total. Contestants with high scores after round 1 will be promoted to
                            round 2. Winners will be determined based on the points of both rounds.


                            <p style={{ color: "#fff", fontSize: "1.5rem" }}>
                                Contact
                            </p>
                            <a href="tel:+917259725954">
                                <p style={{ color: "#ffffff" }}>Nikhil :7259725954</p>
                            </a>
                            <a href="tel:+918805128897">
                                <p style={{ color: "#ffffff" }}>Dhanashree :8805128897</p>
                            </a>
                        </p>

                        <button class="btn btn-lg" style={{ backgroundColor: "#CCFF28" }}>Register Now</button>

                    </div>
                </div>
            </div>

        </>
    )
}
