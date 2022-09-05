import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

export const AdminAddNewEvent = () => {
    return(
        <>
            <div className="gtcontainer">
                <UserDashboardSidebar/>
                <main>
                    {/*Hello Username*/}
                    <h1 className={"text-gtprimary gt-hello"}>Welcome Admin</h1>
                    <h1 className={"text-gtprimary gt-addNewEvent"}>Add a new event</h1>
                    {/*Add Event Form*/}
                    <div className="addEventForm">
                        <p className="gtFormRows">
                            <label htmlFor="">Event Name</label>
                            <input type="text"/>
                        </p>
                        <p className="gtFormRows">
                            <label htmlFor="">Venue</label>
                            <input type="text"/>
                        </p>
                        <p className="gtFormRows">
                            <label htmlFor="">Time</label>
                            <input type="text"/>
                        </p>
                        <p className="full-width">
                            <label htmlFor="">Description</label>
                            <textarea cols="105" rows="20"/>
                        </p>
                    </div>
                    <div className="addEventButton">
                        <button>Add</button>
                    </div>
                    {/*Add Event End*/}
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