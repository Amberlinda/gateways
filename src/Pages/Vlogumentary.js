import React from 'react'
import logo from "../assets/logo.png"
import HomeNavbar from "../Components/HomeNavbar";
export const Vlogumentary = () => {
    return (
        <>
            <HomeNavbar/>
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
