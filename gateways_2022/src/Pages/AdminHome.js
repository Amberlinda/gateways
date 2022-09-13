import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const AdminHome = () => {
    return(
        <>
            <div className="adGtcontainer">
                <UserDashboardSidebar/>
                <admain>
                    {/*Hello Username*/}
                    <div className="AdProfile">
                        <h1 className={"text-gtprimary"}>Welcome Admin</h1>
                    </div>
                    <div className="gtAddEvent">
                        <h1 className="text-gtprimary">Add Event</h1>
                        <button className="gtAddEventBtn">+</button>
                    </div>
                    <div className="gtCurrentEvents">
                        <h1 className="text-gtprimary">Current Events</h1>
                    </div>
                    {/*Event Cards Begin*/}
                    <div className="eventCards">
                        <div className="eventCard">
                            <div className="cardText">
                                <h1>Hackathon</h1>
                                <h3>11:00 a.m.</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">
                                <h1>Hackathon</h1>
                                <h3>11:00 a.m.</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">
                                <h1>Hackathon</h1>
                                <h3>11:00 a.m.</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                    </div>
                    {/*Event Cards End*/}
                </admain>
                {/*  Right Side   */}
                <div className="gtright">
                    <div className="top">
                        <div className="gt-profile">
                            <div className="gt-profile-name">
                                <h5><b>*username*</b></h5>
                            </div>
                            <div className="gt-profile-image">
                                <img src="gateways_logo_white 1.png" alt="user-profile-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Right Side End  */}
            </div>
        </>
    )
}