import React, { useState } from "react";
import {UserDashboardSidebar} from '../Components/UserDashboardSidebar'

const TeamEventForm = () => {

    const [events,setEvents] = useState([{
        name:"Mariothon (Hackathon)",
        participants:4
    },{
        name:"Vlogumentary (Vlogging)",
        participants:3
    },{
        name:"Lost in Age (Treasure Hunt)",
        participants:5
    },{
        name:"CodeShashtra (Coding-Debugging)",
        participants:3
    },{
        name:"BattleStars (Gaming)",
        participants:5
    }])
    const [selectedEvent,setSelectedEvent] = useState("hackathon")

    return(
        <>
            {/* <p class="mt-5">
                <h3>Team Events</h3>
            </p> */}
            <div class="col-md-7">
                <form class="row gy-3 gx-3 align-items-center mt-3">

                    <label for="inputState" class="form-label">Select an Event</label>
                    <select id="inputState" class="form-select" onChange={(e) => setSelectedEvent(e.target.value)}>
                        {events.map((el,index) => <option 
                        style={{textTransform:"capitalize"}}
                        key={index} value={el}>{el}</option>)}
                    </select>
                    <label class="visually-hidden" for="autoSizingInput">Team Name</label>
                    <input type="text" class="form-control" id="autoSizingInput"
                        placeholder="Team Name"/>
                    {}
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" class="form-control" id="autoSizingInput"
                            placeholder="Particiapant 1"/>
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" class="form-control" id="autoSizingInput"
                            placeholder="Particiapant ID"/>
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" class="form-control" id="autoSizingInput"
                            placeholder="Particiapant 1"/>
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" class="form-control" id="autoSizingInput"
                            placeholder="Particiapant ID"/>
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" class="form-control" id="autoSizingInput"
                            placeholder="Particiapant 1"/>
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                        <input type="text" class="form-control" id="autoSizingInput"
                            placeholder="Particiapant ID"/>
                    </div>
                </form>
            </div>
            <p style={{marginTop:"15px"}}>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Register Now</button>
                </div>
            </p>
        </>
    )
}

const IndividualEventForm = () => {
    return(
        <>
            <div class="form-check">
                <form>
                    {["Geek 'O' Fiesta(IT Manager)",
                    "UIPicasso (UI/UX)",
                    "Lens a Moment(Photography)"
                    ].map((el,index) => (
                        <label class="checkbox-inline" key={index} style={{display:"block"}}>
                            <input className="checkboxcustom" type="checkbox" value="0"/>
                            {el}
                        </label>
                    ))}
                    
                </form>
                <button type="button" class="btn btn-info">Register Now</button>

            </div>
        </>
    )
}

const EventRegisterForm = () => {

    const [selectedForm,setSelectedForm] = useState("individual")

    return(
        <>
            <UserDashboardSidebar/>
            <main>
                <div class="site-section">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-md-11">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2>Hello John</h2>

                                        <div class="col-md-9">
                                            <p class="mt-5">
                                                <h3 style={{display:"flex"}}>
                                                    <div class="dropdown">
                                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                        style={{textTransform:"capitalize"}}>
                                                            {selectedForm}
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                            {["individual","team"].map((el,index) => (
                                                                <button class="dropdown-item" type="button" 
                                                                onClick={() => setSelectedForm(el)}>{el}</button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                     <span style={{marginLeft:"5px"}}>events</span>
                                                </h3>
                                            </p>
                                            {selectedForm === "individual" ?
                                                <IndividualEventForm/>
                                                :selectedForm === "team" ?
                                                <TeamEventForm/> : null
                                            }
                                            
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default EventRegisterForm