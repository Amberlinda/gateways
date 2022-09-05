import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";

export const AdminEventScores = () => {
    return(
        <>
            <div className="gtcontainer">
                <UserDashboardSidebar/>
                <main>
                    {/*Hello Username*/}
                    <h1 className={"text-gtprimary gt-hello"}>Welcome Admin</h1>
                    <div className="gtListHeader">
                        <h2 className={"text-gtprimary"}>Scores/Hackathon</h2>
                        <h2 className="text-gtprimary">Export to CSV</h2>
                    </div>
                    <div className="gtEventScores">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Score</th>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Stanford</td>
                            </tr>
                        </table>
                    </div>
                    <div className="gtTopScores">
                        <h3 className="text-gtprimary">Top Scores</h3>
                    </div>
                    <div className="gtEventScores">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Score</th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Score</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Score</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Score</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Score</td>
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