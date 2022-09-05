import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";

export const AdminScores = () => {
    return(
        <>
            <div className="gtcontainer">
                <UserDashboardSidebar/>
                <main>
                    {/*Hello Username*/}
                    <h1 className={"text-gtprimary gt-hello"}>Welcome Admin</h1>
                    <div className="gtListHeader">
                        <h2 className={"text-gtprimary"}>Participant List</h2>
                        <h2 className="text-gtprimary">Export to CSV</h2>
                    </div>
                    <div className="gtParticipantTable">
                        <table>
                            <tr>
                                <th>Event</th>
                                <th>College</th>
                                <th>Winner</th>
                                <th>Runner Up</th>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                                <td>Hackathon</td>
                                <td>Hackathon</td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                                <td>Hackathon</td>
                                <td>Hackathon</td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                                <td>Hackathon</td>
                                <td>Hackathon</td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                                <td>Hackathon</td>
                                <td>Hackathon</td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                                <td>Hackathon</td>
                                <td>Hackathon</td>
                            </tr>
                        </table>
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
                </div>
                {/*  Right Side End  */}
            </div>
        </>
    )
}