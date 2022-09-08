import React from 'react'
import logo from "../assets/logo.png"
export const Lensamoment = () => {
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
                            <h1 class="title-new justify-content-center text-center">Lens a Moment
                            </h1>
                        </p>
                    </div>
                    <div class="col-md-11 ml-4">
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Photography is not just an art. It is the culmination of patience, hand, eye coordination, and one’s
                            perspective. Can you freeze the perfect moment through your lens? If yes, here is an excellent
                            opportunity for you. Click, caption, and win it!
                        </p>
                        <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                            Type of Event: Individual event
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Pre-requisites
                        </p>
                        <p class="content-event-ind justify-content-center">
                            Any device to capture pictures (DSLR / mobile phone)
                        </p>

                        <p class="content-event-ind justify-content-center">
                            Rounds
                        </p>
                        <p  style={{ color: "#ffffff" }}>
                            Information about the event will be posted on the GATEWAYS website at 11 AM.


                            <p style={{color: "#fff", fontSize: "1.5rem"}}>
                                Contact
                            </p>
                            <a href="tel:+919113582917">
                                <p  style={{ color: "#ffffff" }}>Harshita JP :9113582917</p>
                            </a>
                            <a href="tel:+918127347519">
                                <p  style={{ color: "#ffffff" }}>Aakash :8127347519</p>
                            </a>
                        </p>
                        <button class="btn btn-lg" style={{backgroundColor: "#CCFF28"}}>Register Now</button>

                    </div>
                </div>
            </div>

        </>
    )
}
