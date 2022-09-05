import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const UserUpdates = () => {
    return(
        <>
            <div className="gtcontainer">
                <UserDashboardSidebar/>
                <upmain>
                    {/*Hello Username*/}
                    <h1 className={"text-gtprimary gt-hello"}>Hello *Username*</h1>
                    <h1 className={"text-gtprimary gt-yourUpdates"}>Updates</h1>
                    {/*Update Cards Begin*/}
                    <div className="eventCards">
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>
                        <div className="eventCard">
                            <div className="cardText">

                                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                            </div>
                            <div className="cardButton">
                                <button className="eventButton">See Details</button>
                            </div>
                        </div>

                    </div>
                    {/*Update Cards End*/}
                </upmain>
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
                    <div className="gtContactBottom">
                        <div className="contactText">
                            <Link to={'#'}>
                                <span className="fa-solid fa-comment"></span>
                                <h2>Contact Us</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*  Right Side End  */}
            </div>
        </>
    )
}