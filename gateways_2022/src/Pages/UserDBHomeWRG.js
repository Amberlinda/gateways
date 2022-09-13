import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const UserDBHomeWRG = () => {
    return (
        <>
            <div className="gtcontainer">
                <UserDashboardSidebar/>
                <main>
                    {/*Hello Username*/}
                    <h1 className={"text-gtprimary gt-hello"}>Hello *Username*</h1>
                    {/*  Join Other Events  */}
                    <div className="gtjoin-other-nrg">
                        <h1 className={"text-gtprimary"}>Join another event, to double the fun!</h1>
                        <button className={"gtRegNowBtn"}>Register Now</button>
                    </div>
                        <div className="gtcountDiv">
                            <h2 className={"text-gtprimary countdown-info"}>Event Starts In</h2>
                            <h1 className={"countdown"}></h1>
                        </div>
                    {/*  Join Other Events End  */}
                </main>
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
                    <div className="gtBrochure">
                        <h2 className="brochureInfo">See the brochure</h2>
                        <button className="brochureButton">click here</button>
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