import React from 'react'
import logo from "../assets/logo.png"
import ctchrist from "../assets/ct1.png"
import HomeNavbar from "../Components/HomeNavbar";

export const AboutGateways = () => {
    return (
        <>
         <div style={{ overflowX: "hidden" }}>
            <HomeNavbar/>
            <div class="container-fluid" style={{ backgroundColor: "#18181F", height: "100vh", width: "100vw" }}>

                <div class="row align-items-center justify-content-center" style={{ height: "90vh" }}>
                    <div class="row align-items-center" style={{ backgroundImage: `url(${ctchrist})`, height: "50vh", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div class="col-md-12" >
                            <p class="justify-content-center text-center"  >
                                <h1 class="title-new justify-content-center text-center"  style={{color:"black"}}>About Gateways
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
            </div>
        </>
    )
}
