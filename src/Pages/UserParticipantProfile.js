import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const UserParticipantProfile = () => {
    return(
        <>
            <div className="gtcontainer">
                <UserDashboardSidebar/>
                <main>
                    {/*Hello Username*/}
                    <h1 className={"text-gtprimary gt-hello"}>Hello *username*</h1>
                    <div className="gtDetailContainer">
                        <div className="ptName"><h3>Name</h3><h2>SampleName</h2></div>
                        <div className="ptCollege"><h3>College</h3><h2>Christ College</h2></div>
                        <div className="regEvents"><h3>Registered Events</h3><h2>HACKATHON, UI/UX, FASHION SHOW</h2></div>
                        <div className="course"><h3>Course</h3><h2>MCA</h2></div>
                    </div>
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