import React from 'react'
import logo from "../assets/logo.png"
import christ from "../assets/dchrist.jpg"

export const AboutGateways = () => {
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

                <div class="row align-items-center justify-content-center" style={{ height: "90vh" }}>
                    <div class="row align-items-center" style={{ backgroundImage: `url(${christ})`, height: "50vh", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div class="col-md-12" >
                            <p class="justify-content-center text-center"  >
                                <h1 class="title-new justify-content-center text-center">About Gateways
                                </h1>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-9 mt-3">
                        <p class="content-event-ind justify-content-center" style={{ fontWeight: "600" }}>
                            Gateways is the national technical fest held annually for over 25 years by the Department of Computer Science of Christ (Deemed to be University), Bangalore. Helmed by students of the post-graduate MCA (Master of Computer Applications) course, it aims to be at the forefront of innovation and collaboration, with new ideas and events being presented each year.<br /><br />

                            We invite colleges from all over India, with enthusiastic participation from all those who join us for this gathering of minds. An essential part of Gateways is its robust and dynamic theme which reflects both the trends of the present, as well as the history carried by the discipline.<br /><br />

                            The theme of “Back to the Future” signifies a harmonious amalgamation of the past and the future, of the old and new, of the then and the now. How do we implement current technology to solve the problems of yesteryear? How can the lessons learnt in the past help us with our current technological progress? These are questions we intend to explore and hopefully find answers for with this theme.<br /><br />

                            Bring together the past and the future of computing and technology, with Notepad coding and MS paint drawing. Look back to the beginning to get guidance on the next step. Take your mind on a journey of learning, of using technology like the previous generation would have, to tackle the problems of this one.

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
