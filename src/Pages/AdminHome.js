import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const AdminHome = () => {
    return (
        <>
            <UserDashboardSidebar/>
            <main>
                <div className="site-section">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-11">
                                <div className="row">
                                    <div className="col-md-11">
                                        <div className="d-flex justify-content-between mb-5">
                                            <h2>Welcome Admin</h2>
                                            <div className="d-flex align-items-center" id="profile-top">
                                                <h3 className="mx-2">John</h3>
                                                <img className="img img-fluid" style={{height: "50px"}} src="gateways_logo_white 1.png"/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center mr-5">
                                            <h2 className="mx-2">Add Event</h2>
                                            <button className="btn-lg btn-success rounded-circle">+</button>
                                        </div>
                                        <p className="mt-5">
                                            <h3>Current Events</h3>
                                        </p>
                                        <div className="card-group col-md-10">
                                            <div className="card c-custom mx-2">
                                                <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
                                                     className="card-img-top img-fluid" alt="..."/>

                                                <div className="card-body">
                                                    <h5 className="card-title">Event Name</h5>
                                                    <p className="card-text c-custom">Time</p>
                                                    <button type="button" class="card-text btn btn-dark"><small
                                                        className="text-light">See Details</small></button>
                                                </div>
                                            </div>
                                            <div className="card c-custom mx-2">
                                                <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
                                                     className="card-img-top img-fluid" alt="..."/>

                                                <div className="card-body">
                                                    <h5 className="card-title">Event Name</h5>
                                                    <p className="card-text c-custom">Time</p>
                                                    <button type="button" className="card-text btn btn-dark"><small
                                                        className="text-light">See Details</small></button>
                                                </div>
                                            </div>
                                            <div className="card c-custom mx-2">
                                                <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
                                                     className="card-img-top img-fluid" alt="..."/>

                                                <div className="card-body">
                                                    <h5 className="card-title">Event Name</h5>
                                                    <p className="card-text c-custom">Time</p>
                                                    <button type="button" className="card-text btn btn-dark"><small
                                                        className="text-light">See Details</small></button>
                                                </div>
                                            </div>
                                            <div className="card c-custom mx-2">
                                                <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg"
                                                     className="card-img-top img-fluid" alt="..."/>

                                                <div className="card-body">
                                                    <h5 className="card-title">Event Name</h5>
                                                    <p className="card-text c-custom">Time</p>
                                                    <button type="button" className="card-text btn btn-dark"><small
                                                        className="text-light">See Details</small></button>
                                                </div>
                                            </div>
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