import axios from "axios";
import React, { useEffect, useState } from "react";
import {UserDashboardSidebar} from '../Components/UserDashboardSidebar'
import { url } from '../utils/constants'
import { useForm } from 'react-hook-form'
import { useJwt } from 'react-jwt'

const TeamEventForm = ({
    // events
}) => {

    const [events,setEvents] = useState([{
        id:0,
        name:"Mariothon (Hackathon)",
        participants:4
    },{
        id:1,
        name:"Vlogumentary (Vlogging)",
        participants:3
    },{
        id:2,
        name:"Lost in Age (Treasure Hunt)",
        participants:5
    },{
        id:3,
        name:"CodeShashtra (Coding-Debugging)",
        participants:3
    },{
        id:4,
        name:"BattleStars (Gaming)",
        participants:5
    }])
    const [selectedEvent,setSelectedEvent] = useState(0)

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
                        key={index} value={el.id}>{el.name}</option>)}
                    </select>
                    <label class="visually-hidden" for="autoSizingInput">Team Name</label>
                    <input type="text" class="form-control" id="autoSizingInput"
                        placeholder="Team Name"/>
                    {events.map((el,index) => {
                        if(el.id == selectedEvent){
                            return(
                                [...Array(el.participants)].map((elem,ind) => (
                                    <>
                                        <div class="col-auto">
                                            <label class="visually-hidden" for="autoSizingInput">Particiapant name #{ind+1}</label>
                                            <input type="text" class="form-control" id="autoSizingInput"
                                                />
                                        </div>
                                        <div class="col-auto">
                                            <label class="visually-hidden" for="autoSizingInput">Particiapant id #{ind+1}</label>
                                            <input type="text" class="form-control" id="autoSizingInput"
                                                />
                                        </div>
                                    </>
                                    
                                ))
                            )
                        }
                    })}
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

const IndividualEventForm = ({
    events,
    // token
}) => {

    const {handleSubmit, register} = useForm()
    // const { decodedToken } = useJwt(token)

    const onSubmitHandler = (data) => {
        // console.log(decodedToken)
        if(Object.values(data).indexOf(true) === -1){
            alert("Select atleast 1 event.");
            return
        }
        const accessToken = JSON.parse(localStorage.getItem("accessToken"))
        // axios.post(`${url}/eventRegister`,{
        //     event_id:0,
        //     part_id:0
        // },{
        //     headers:{
        //         authorization: accessToken
        //     }
        // })
        // console.log(data)
    }
    
    return(
        <>
            <div class="form-check">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    {events?.map((el,index) => (
                        <label class="checkbox-inline" key={el.event_id} style={{display:"block"}}>
                            <input className="checkboxcustom" type="checkbox" 
                            {...register(`${el.event_id}`)}/>
                            {el.event_name}
                        </label>
                    ))}
                    <button type="submit" class="btn btn-info">Register Now</button>
                </form>
                

            </div>
        </>
    )
}

const EventRegisterForm = () => {

    const [selectedForm,setSelectedForm] = useState("individual")
    const [events,setEvents] = useState([])

    const getEvents = () => {
        axios.get(`${url}/events`)
        .then(resp => {
            if(resp.status === 200){
                // console.log(resp)
                setEvents(resp.data.events)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleEventType = (val) =>{
        const newArr = []
        events.forEach(el => {
            if(el.event_type === val){
                newArr.push(el)
            }
        })

        return newArr
    }

    useEffect(() => {
        getEvents();
    },[])


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
                                                <IndividualEventForm events={handleEventType(0)}/>
                                                :selectedForm === "team" ?
                                                <TeamEventForm events={handleEventType(1)}/> : null
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