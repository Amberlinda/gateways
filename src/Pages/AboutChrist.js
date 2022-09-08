import React from 'react'
import logo from "../assets/logo.png"
import christ from "../assets/christ.jpg"
export const AboutChrist = () => {
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
            <div class="container-fluid" style={{ backgroundColor: "#18181F", height: "100vh", width: "100vw"}}>

                <div class="row align-items-center justify-content-center" style={{ height: "90vh"}}>
                    <div class="row align-items-center" style={{ backgroundImage: `url(${christ})`,height: "50vh",width:"100%",backgroundRepeat: "no-repeat",backgroundSize:"cover",overflowY:"hidden"}}>
                    <div class="col-md-12" >
                        <p class="justify-content-center text-center"  >
                            <h1 class="title-new justify-content-center text-center" style={{color:"black"}}>CHRIST (Deemed to be University)
                            </h1>
                        </p>
                    </div>
                    </div>
                    <div class="col-md-9 mt-3">
                        <p class="content-event-ind justify-content-center" style={{ fontWeight: "600" }}>
                            CHRIST (Deemed to be University) was born out of the educational vision of St Kuriakose Elias Chavara, an educationalist and social reformer of the nineteenth century in South India. He founded the first Catholic indigenous congregation, Carmelites of Mary Immaculate (CMI), in 1831 which administers CHRIST (Deemed to be University).<br/><br/>

                            Established in 1969 as Christ College, it undertook path-breaking initiatives in Indian higher education with the introduction of innovative and modern curricula, insistence on academic discipline, imparting of Holistic Education and adoption of global higher education practices with the support of creative and dedicated staff. The University Grants Commission (UGC) of India conferred Autonomy to Christ College in 2004 and identified it as an Institution with Potential for Excellence in 2006. In 2008 under Section 3 of the UGC Act, 1956, the Ministry of Human Resource Development of the Government of India, declared the institution a Deemed to be University, in the name and style of Christ University. One of the first institutions in India to be accredited in 1998 by the NAAC, and subsequently in 2004 and 2016, CHRIST (Deemed to be University) has the top grade ‘A’ in the 4-point scale.<br/><br/>

                            The multi-disciplinary University which focuses on teaching research and service offers Bachelor, Master and Doctoral programmes in humanities, social sciences, science, commerce, management, engineering, education, and law to over 27000 students. The University offers its programmes at three campuses in Bangalore in Karnataka; Pune Lavasa in Maharashtra and Delhi NCR. The campus is a living example of harmonious multiculturalism with students from all the states and union territories and around 60 different countries. CHRIST (Deemed to be University) publishes six peer-reviewed research journals and has published more than 300 books in Kannada and English. A promoter of sports, music and literary activities, it is a nurturing ground for creative excellence.

                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}
