import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UserDashboardSidebar = () => {

    const navigate = useNavigate()

    const handleSignOut = () => {
        localStorage.removeItem("accessToken")
        navigate("/login",{replace:true})
        document.location.reload()
    }

    return (
        <>
            <aside className="sidebar">
                <div className="toggle">
                    <a href="#" className="burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>
                </div>
                <div className="side-inner">

                     {/* <div class="profile">
                <img src="images/person_profile.jpg" alt="Image" class="img-fluid">
                <h3 class="name">Debby Williams</h3>
                <span class="country">New York, USA</span>
                </div>  */}



                    <div className="nav-menu">
                        <ul>
                            <li className="active"><a href="#"><span className="icon-home mr-3"></span>Home</a></li>
                            <li><a href="#"><span className="icon-notifications mr-3"></span>Updates</a></li>
                            <li><a href="#"><span className="icon-location-arrow mr-3"></span>Schedule</a></li>
                            <li><a href="#"><span className="icon-pie-chart mr-3"></span>Brochure</a></li>
                            <li onClick={handleSignOut}><a href="#"><span className="icon-sign-out mr-3" ></span>Sign out</a></li>
                        </ul>
                    </div>
                </div>

            </aside>
        </>
        // <>

        //         <sidebar>
        //             <div className="top">
        //                 <div className="gatewaysLogo">
        //                     <img src="gateways_logo_white 1.png" alt="user-logo"/>
        //                     <h2 className={"text-gtprimary"}>GATEWAYS</h2>
        //                 </div>
        //             </div>
        //             <div className="sidebar">
        //                     <Link to={'/'}>
        //                         <span className="fa-solid fa-home"></span>
        //                         <h3>Home</h3>
        //                     </Link>
        //                 <Link to={'/'}>
        //                     <span className="fa-solid fa-message"></span>
        //                     <h3>Updates</h3>
        //                 </Link>
        //                 <Link to={'/'}>
        //                     <span className="fa-solid fa-calendar-days"></span>
        //                     <h3>Schedule</h3>
        //                 </Link>
        //                 <Link to={'/'}>
        //                     <span className="fa-solid fa-square-poll-vertical"></span>
        //                     <h3>Results</h3>
        //                 </Link>
        //                 <Link to={'/'}>
        //                     <span className="fa-solid fa-arrow-right-from-bracket"></span>
        //                     <h3>Logout</h3>
        //                 </Link>
        //             </div>
        //         </sidebar>

        // </>
    )
}