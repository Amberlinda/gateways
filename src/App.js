import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./Pages/Home";
import {UserDBHomeReg} from "./Pages/UserDBHomeReg";
import {UserDBHomeWRG} from "./Pages/UserDBHomeWRG";
import {UserEventDetails} from "./Pages/UserEventDetails";
import {UserUpdates} from "./Pages/UserUpdates";
import {UserUpdateDetails} from "./Pages/UserUpdateDetails";
import {Schedule} from "./Pages/Schedule";
import {UserResults} from "./Pages/UserResults";
import {AdminHome} from "./Pages/AdminHome";
import {AdminAddNewEvent} from "./Pages/AdminAddNewEvent";
import {AdminParticipantList} from "./Pages/AdminParticipantList";
import {UserParticipantProfile} from "./Pages/UserParticipantProfile";
import {AdminScores} from "./Pages/AdminScores";
import {AdminEventScores} from "./Pages/AdminEventScores";
import {ParticipantsOrganizer} from "./Pages/ParticipantsOrganizer";
import {Register} from "./Pages/Register";
import {Login} from "./Pages/Login";
import EventRegisterForm from "./Pages/eventRegisterForm";

function App() {
    console.log("hello")
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/user-dashboard'} element={<UserDBHomeReg/>}/>
                <Route path={'/user-register-form'} element={<EventRegisterForm/>}/>
                <Route path={'/user-dashboard-no-rg'} element={<UserDBHomeWRG/>}/>
                <Route path={'/user-dashboard-event-details'} element={<UserEventDetails/>}/>
                <Route path={'/user-dashboard-updates'} element={<UserUpdates/>}/>
                <Route path={'/user-dashboard-update-details'} element={<UserUpdateDetails/>}/>
                <Route path={'/schedule'} element={<Schedule/>}/>
                <Route path={'/user-results'} element={<UserResults/>}/>
                <Route path={'/admin-home'} element={<AdminHome/>}/>
                <Route path={'/admin-add-event'} element={<AdminAddNewEvent/>}/>
                <Route path={'/admin-participant-list'} element={<AdminParticipantList/>}/>
                <Route path={'/participant-profile'} element={<UserParticipantProfile/>}/>
                <Route path={'/admin-scores'} element={<AdminScores/>}/>
                <Route path={'/admin-event-scores'} element={<AdminEventScores/>}/>
                <Route path={'/participants-organizer'} element={<ParticipantsOrganizer/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
