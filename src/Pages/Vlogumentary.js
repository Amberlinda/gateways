import React from 'react'
import logo from "../assets/logo.png"
export const Vlogumentary = () => {
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
                <h1 class="title-new justify-content-center text-center">Vlogumentary
                </h1>
                </p>
            </div>
            <div class="col-md-11 ml-4">
                <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                    Are you a content creator that loves to vlog? Then, Vlogumentary is the event for you. This is your
                    chance to unleash your creative side and speak your mind. Participate in our uniquely themed fest
                    'Cognitive Escapade' and create a vlog for the topic we provide. The topic will be mailed to the
                    registered participants one day before the main event.



                </p>
                <p class="content-event-ind justify-content-center" style={{fontWeight:"600"}}>
                    Team Size: 3
                </p>
                <p class="content-event-ind justify-content-center">
                    Pre-requisites
                </p>
                <p class="content-event-ind justify-content-center">
                    Any device to capture videos (DSLR / mobile phone/GoPro)
                </p>

                <p class="content-event-ind justify-content-center">
                    Rounds
                </p>
                <p style={{ color: "#ffffff" }}>
                    Vlogging event will start at 07:00 AM and will continue till 01:30 PM, after which participants are expected to make their submissions. The video should be 4-5 minutes at most.


                <p style={{color: "#fff", fontSize: "1.5rem"}}>
                    Contact
                </p>
                <a href="tel:+918277527214">
                    <p style={{ color: "#ffffff" }}>Maglin :8277527214</p>
                </a>
                <a href="tel:+919782054838">
                    <p style={{ color: "#ffffff" }}>Krishna :9782054838</p>
                </a>
                </p>
               
                <button class="btn btn-lg" style={{backgroundColor: "#CCFF28"}}>Register Now</button>

            </div>
                </div>
            </div>

        </>
    )
}
