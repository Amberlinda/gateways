import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const UserDBHomeReg = () => {
    return (
        <>
            <UserDashboardSidebar/>
            <main>
                <div className="site-section">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-11">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2>Hello John</h2>
                                        <p className="mt-5">
                                        <h3>Your Events</h3>
                                        </p>
                                        <div className="card-group">
                                            <div className="card c-custom">
                                                <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
                                                    className="card-img-top img-fluid" alt="..."/>

                                                <div className="card-body">
                                                    <h5 className="card-title">Event Name</h5>
                                                    <p className="card-text c-custom">Time</p>
                                                    <button type="button" class="card-text btn btn-dark"><small
                                                            className="text-muted">See Details</small></button>
                                                </div>
                                            </div>

                                            <div className="card c-custom">
                                                <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
                                                    className="card-img-top img-fluid" alt="..."/>

                                                <div className="card-body">
                                                    <h5 className="card-title">Event Name</h5>
                                                    <p className="card-text c-custom">Time</p>
                                                    <button type="button" className="card-text btn btn-dark"><small
                                                            className="text-muted">See Details</small></button>
                                                </div>
                                            </div>
                                            <div className="card c-custom">
                                                <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
                                                    className="card-img-top img-fluid" alt="..."/>

                                                <div className="card-body">
                                                    <h5 className="card-title">Event Name</h5>
                                                    <p className="card-text c-custom">Time</p>
                                                    <button type="button" className="card-text btn btn-dark"><small
                                                            className="text-muted">See Details</small></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <h4 className="mt-5">
                                                    Join another
                                                    event, to double
                                                    the fun!
                                                </h4>
                                                <button type="button" className="btn btn-info">Register Now</button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className="col-md-6 ">
                                        <h3 className="d-flex flex-row-reverse bd-highlight">Participant Id</h3>
                                        <p>
                                        <h1 className="d-flex flex-row-reverse bd-highlight">
                                            <p>Random ID</p>
                                        </h1>
                                        </p>
                                        <div className="col-md-12 d-flex flex-row-reverse bd-highlight">
                                            <p>
                                                Contact Us
                                                <i className="fa-brands fa-whatsapp"></i>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}