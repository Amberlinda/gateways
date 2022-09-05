import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const UserResults = () => {
    return(
        <>
            <div className="gtcontainer">
                <UserDashboardSidebar/>
                <main>
                    {/*Hello Username*/}
                    <h1 className={"text-gtprimary gt-hello"}>Hello *Username*</h1>
                    <h1 className={"text-gtprimary gt-yourEvents"}>Results</h1>
                    <h2 className={"text-gtprimary gt-rsEvents"}>Your Events</h2>
                    <div className="rsTableDiv">
                        <table className="resultTable">
                            <tr>
                                <th>Event</th>
                                <th>Result</th>
                            </tr>
                            <tr>
                                <td>HACKATHON</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>HACKATHON</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>HACKATHON</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>HACKATHON</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>HACKATHON</td>
                                <td>9</td>
                            </tr>
                        </table>
                    </div>
                    {/*  Total College Score  */}
                    <div className="gtTotalScore">
                        <h1 className={"text-gtprimary"}>Your College Score</h1>
                        <h1 className={"totalScore text-gtprimary"}>45/50</h1>
                    </div>
                    {/*  Total College Score End  */}
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