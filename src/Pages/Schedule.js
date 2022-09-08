import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link} from "react-router-dom";

import HomeNavbar from "../Components/HomeNavbar";
export const Schedule = () => {
    return(
        <div>
           <HomeNavbar/> 
           <div class="container-fluid" style={{backgroundColor: "#18181F", height: "100vh" ,width: "100vw"}}>
        <div class="container">
        <div class="col-12">
              <p>
                <div class="content-event-new" style={{ color: "#fff" }}>
                  Schedule
                </div>
              </p>
            </div>
            <div class="timeline">
                <div class="timeline-row">
                    <div class="timeline-time">
                        7:00 am - 8:00 am<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-attachment"></i>
                        <h4>Vlogumentary (Vlogging) </h4>
                        <p>Vlog your heart out, with a twist from the mind.
                        </p>
                    </div>
                </div>

                <div class="timeline-row">
                    <div class="timeline-time">
                        9:00 am - 10:00 am<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-code"></i>
                        <h4>Mariothon (Hackathon)</h4>
                        <p>
                            Mariothon is where your crazy idea becomes a reality. Brilliant ideas start with curious
                            minds, and when those brilliant ideas compete with each other, the world wins. Participate
                            in our IoT-based hackathon to win exclusive prizes!
                        </p>

                    </div>
                </div>

                <div class="timeline-row">
                    <div class="timeline-time">
                        10:30 am - 11:00 am<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-turned_in_not"></i>
                        <h4>Lens a Moment</h4>
                        <p>Photography is not just an art. It is the culmination of patience, hand, eye coordination,
                            and one’s perspective. Can you freeze the perfect moment through your lens? If yes, here is
                            an excellent opportunity for you. Click, caption, and win it!

                        </p>

                    </div>
                </div>

                <div class="timeline-row">
                    <div class="timeline-time">
                        10:30 am - 11:00 am<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-directions"></i>
                        <h4>Battle Stars (Gaming)
                        </h4>
                        <p>Skills win games, but teamwork and strategies win championships. Get a team and become
                            champions through our gaming event!
                        </p>

                    </div>
                </div>

                <div class="timeline-row">
                    <div class="timeline-time">
                        11:00 am -12:00 pm<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-change_history"></i>
                        <h4>Geek ‘O’ Fiesta</h4>
                        <p class="no-margin">Are you someone who can handle stress effortlessly? Can you multitask
                            without succumbing to pressure? Are you the one who brings up the team's motivation when
                            everyone's low? Do you have what it takes to be the best manager? Then Geek ' o ' Fiesta is
                            the event for you!
                        </p>

                    </div>
                </div>

                <div class="timeline-row">
                    <div class="timeline-time">
                        11:00 am -12:00 pm<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-code"></i>
                        <h4>Code Shashtra</h4>
                        <p>
                            Coding allows you to think about thinking, and while debugging, you learn. Join us at
                            CodeShashtra, sponsored by GeeksForGeeks, and make it work, make it right, and make it fast.
                        </p>

                    </div>
                </div>

                <div class="timeline-row">
                    <div class="timeline-time">
                        12:00 pm - 01:00 pm<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-attachment"></i>
                        <h4>UI Picasso</h4>
                        <p>There will be 2 rounds in total. Contestants with high scores after round 1 will be promoted
                            to round 2. Winners will be determined based on the points of both rounds.
                        </p>

                    </div>
                </div>

                <div class="timeline-row">
                    <div class="timeline-time">
                        01:30 pm - 02:00 pm<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-code"></i>
                        <h4>Lost in Ages</h4>
                        <p>
                            A treasure lost in ages, searched by many. If you have to ask, you’ll never know. If you
                            know, you need only ask. Hunt and make her yours.

                        </p>

                    </div>
                </div>

                <div class="timeline-row">
                    <div class="timeline-time">
                        02:00 pm - 02:30 pm<small>Sep 23</small>
                    </div>
                    <div class="timeline-content">
                        <i class="icon-attachment"></i>
                        <h4>Event X</h4>
                        <p>Do you wonder what the future holds? Do you wonder what this event is? Do you wonder a lot in
                            general? Then be prepared, because this is the event for you. Gear up for the unpredictable,
                            the unimaginable, and the unknowable.

                        </p>

                    </div>

                </div>
            </div>
        </div>
    </div>
        </div>
    )
}