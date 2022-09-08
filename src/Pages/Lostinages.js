import React from 'react'
import logo from "../assets/logo.png"
export const Lostinages = () => {
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
                            Every clue will act as a round and will be conducted entirely in-campus. Different clues will be
                            provided to the teams from the start venue. The team members must identify the location from the
                            provided clue, and upon reaching that location the volunteers present there will provide another
                            clue.

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

                        <button class="btn btn-lg" style={{backgroundColor: "#CCFF28"}}>Register Now</button>

                    </div>
                </div>
            </div>
        </>
    )
}
