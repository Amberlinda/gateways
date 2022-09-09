import axios from "axios";
import React, { useEffect, useState } from "react";
import {UserDashboardSidebar} from '../Components/UserDashboardSidebar'
import { url } from '../utils/constants'
import { Controller, useForm } from 'react-hook-form'
import { decodeToken, useJwt } from 'react-jwt'
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    Box,
    TextField,
    MenuItem,
    createTheme,
    ThemeProvider,
    CssBaseline,
    Grid,
    Select,
    InputLabel,
    Typography,
    Link,
    Fab
} from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { getName } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import BasicModal from "../Components/basicModal";

const theme = createTheme({
    palette:{
        mode:"dark"
    },
    typography:{
        fontFamily:"KrossNeueGrotesk-Light"
    }
})

const ParticipantName = ({
    ind,
    control,
    iDs,
    setIds
}) => {

    const [participantId,setParticipantId] = useState()
    const [participantName,setParticipantName] = useState("Participant name")


    const handleIdChange = (event) => {
        const val = event.target.value
        setIds({
            ...iDs,
            [ind]:val
        })
        setParticipantId(val)
        if(val.toString().length > 3){
            axios.post(`${url}/getName`,{
                part_id:val
            })
            .then(resp => {
                // setParticipantName()
                if(resp.status === 200 && resp.statusText === "OK"){
                    console.log(resp.data?.name)
                    setParticipantName(resp.data?.name)
                }
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    return(
        <>
            <Grid item xs={12} sm={6}>
                <TextField 
                    // error={errors.team_name} 
                    margin="normal"
                    fullWidth
                    value={participantName}
                    onChange={e => setParticipantName(e.target.value)}
                    id={`partipant_name_${ind+2}`}
                    label={`Partipant name #${ind+2}`}
                    autoFocus
                    disabled
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    // error={errors.team_name} 
                    margin="normal"
                    fullWidth
                    id={`partipant_id_${ind+2}`}
                    label={`Partipant id #${ind+2}`}
                    value={participantId}
                    onChange={handleIdChange}
                    autoFocus
                />
            </Grid>
        </>
    )
}

const TeamEventForm = ({
    events,
    token
}) => {

    
    const [selectedEvent,setSelectedEvent] = useState(5)
    const [selectedEventErr,setSelectedEventErr] = useState(false)
    const [defaultParticipantId,setDefaultParticipantId] = useState("Participant id")
    const [defaultParticipantName,setDefaultParticipantName] = useState("Participant name")
    const {decodedToken} = useJwt(token)
    const [participants,setParticipants] = useState([])
    const [iDs,setIds] = useState({})
    const [teamName,setTeamName] = useState(null) 
    const [showModal,setShowModal] = useState(true)

    const {control, handleSubmit,formState:{errors}} = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        const decToken = decodedToken?.id
        getName(decToken,(val => {
            setDefaultParticipantName(val)
        }))
        setDefaultParticipantId(decToken)
        
    },[decodedToken,token])

    const hasDuplicates = (array) => {
        return (new Set(array)).size !== array.length;
    }

    
    const onSubmitHandler = (data) => {

        if(!selectedEvent || !teamName){/*setSelectedEventErr(true);*/ return}
        
        // console.log(iDs)
        const idArr = [
            defaultParticipantId,
            ...Object.values(iDs)
        ]
        if(hasDuplicates(idArr)){
            alert("Duplicate Ids.")
            return
        }
        // console.log(idArr)
        
        setSelectedEventErr(false)
        axios.post(`${url}/registerTeam`,{
            event_id: selectedEvent,
            id:idArr,
            team_name: teamName
        },{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        .then(resp => {
            console.log(resp)
            console.log(resp.data)
            if(resp.status === 200){
                if(resp.data.response){
                    alert(resp.data.response)
                    if(resp.data?.status != "failed"){
                        navigate("/user-dashboard")
                    }
                }else{
                    alert(resp.data)
                }
            }
            
        })
        .catch(err => {
            console.log(err)
        })
        // console.log(data)
    }

    return(
        <>
            {/* <p class="mt-5">
                <h3>Team Events</h3>
            </p> */}
            <ThemeProvider theme={theme}>
                <BasicModal
                        open={showModal}
                        onClose={() => setShowModal(false)}
                        heading="General Instructions"
                    subHeading="Refer the video to know more about the registration workflow"
                    instructions = {[
                        "Participants are requested to be present at the venue of their events 15 minutes before the event starts.",
                        "If eliminated, participants are welcome to participate in other events, keeping the time constraints in mind",
                        "People participating in vlogging can also participate in photography events",
                        "People participating in vlogging and photography events can participate in other events simultaneously, given that they manage their time accordingly. ",
                        "People participating in the vlogging event can come to campus by 7:00 AM to capture clips",
                        "Participants eliminated in the first round of the hackathon can register for other events on the website from their account.",
                        "Details about Event X will be provided on-spot."
                    ]}
                />
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmitHandler)}>
                    <Grid container spacing={2} xs={7} mt={2}>
                        <Grid item xs={12}>
                            <Select
                                id="event"
                                value={selectedEvent}
                                defaultValue={1}
                                label="Select an event"
                                fullWidth
                                error={selectedEventErr}
                                onChange={(e) => {setSelectedEvent(e.target.value); setIds({})}}
                            >
                                {events.map((option,index) => (
                                    <MenuItem key={option.event_id} value={option.event_id}>
                                        {option.event_name}
                                    </MenuItem>
                                ))}
                            </Select>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                error={!teamName}
                                margin="normal"
                                fullWidth
                                id="team_name"
                                label="Team name"
                                autoComplete="Team name"
                                autoFocus
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                        </Grid>
                        {events.map((el,index) => {
                            if(el.event_id == selectedEvent){
                                return(
                                    <>
                                        <Grid item xs={12} sm={6}>
                                            <TextField 
                                                // error={errors.team_name} 
                                                margin="normal"
                                                fullWidth
                                                id={`partipant_name_1`}
                                                label={`Partipant name #1`}
                                                // autoComplete={`Partipant name #1`}
                                                value={defaultParticipantName}
                                                onChange={(e) => setDefaultParticipantName(e.target.value)}
                                                disabled
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField 
                                                // error={errors.team_name} 
                                                margin="normal"
                                                fullWidth
                                                id={`partipant_id_1`}
                                                label={`Partipant id #1`}
                                                autoComplete={`Partipant id #1`}
                                                autoFocus
                                                value={defaultParticipantId}
                                                onChange={(e) => setDefaultParticipantId(e.target.value)}
                                                disabled
                                            />
                                        </Grid>
                                        {
                                            [...Array(el.number-1)].map((elem,ind) => (
                                                <ParticipantName 
                                                ind={ind}
                                                control={control}
                                                iDs={iDs}
                                                setIds={setIds}
                                                />
                                                
                                            ))
                                        }
                                    </>
                                    
                                )
                            }
                        })}
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register Now
                    </Button>
                </Box>
            </ThemeProvider>
        </>
    )
}

const IndividualEventForm = ({
    events,
    token
}) => {

    const {handleSubmit, control} = useForm()
    const [selectedEvent,setSelectedEvent] = useState()
    const {decodedToken} = useJwt(token)
    const [showModal,setShowModal] = useState(true)

    const navigate = useNavigate()

    const handleEventRegistration = (id) => {
        axios.post(`${url}/eventRegister`,{
            event_id:id
        },{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        .then(resp => {
            console.log(resp)
            if(resp.status === 200 && resp.statusText == "OK"){
                alert(resp.data.response)
                navigate("/user-dashboard")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }


    const onSubmitHandler = (data) => {
        console.log(data)
        if (Object.values(data).indexOf(true) === -1){alert("Select atleaat 1 event");return}

        Object.keys(data).forEach((key,index) => {
            if(data[key]){
                handleEventRegistration(key)
            }
        })
        
    }
    
    return(
        <>
            <div class="form-check">
                <BasicModal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    heading="General Instructions"
                    subHeading="Refer the video to know more about the registration workflow"
                    instructions = {[
                        "Participants are requested to be present at the venue of their events 15 minutes before the event starts.",
                        "If eliminated, participants are welcome to participate in other events, keeping the time constraints in mind",
                        "People participating in vlogging can also participate in photography events",
                        "People participating in vlogging and photography events can participate in other events simultaneously, given that they manage their time accordingly. ",
                        "People participating in the vlogging event can come to campus by 7:00 AM to capture clips",
                        "Details about Event X will be provided on-spot."
                    ]}
                />
                <Box component="form" onSubmit={handleSubmit(onSubmitHandler)}>
                    
                    {events?.map((el,index) => (
                        <p>
                            <Controller
                                name={`${el.event_id}`}
                                control={control}
                                render={({field}) => (
                                    <FormControlLabel 
                                        value={el.event_id} 
                                        control={<Checkbox sx={{color:"#fff"}}/>} 
                                        label={el.event_name}
                                        {...field} 
                                    />

                                )}
                            />
                        </p>
                    ))}
                    <Button type="submit" variant="contained" >Register Now</Button>

                </Box>
            </div>
        </>
    )
}

const EventRegisterForm = () => {

    const [selectedForm,setSelectedForm] = useState("individual")
    const [events,setEvents] = useState([])
    const [accessToken,setAccessToken] = useState(JSON.parse(localStorage.getItem("accessToken")))
    const [participantName,setParticipantName] = useState()

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
        const accTok = localStorage.getItem("accessToken")
        if(accTok != null){
            const decode = decodeToken(accTok)
            getName(decode?.id,(name) => {
                setParticipantName(name)
            })
        }
    },[])


    return(
        <>
            <ThemeProvider theme={theme}>
                {/* <UserDashboardSidebar/> */}
                <Link href="/user-dashboard" sx={{color:"#fff",lineHeight:"unset"}}>
                    <Fab color="primary" aria-label="back" style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    }}>
                        <ArrowBack />
                    </Fab>
                </Link>
                <main>
                    <div class="site-section">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                <div class="col-md-11">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>Hello {participantName}</h2>

                                            <div class="col-md-9">
                                                <p class="mt-5">
                                                    <h3 style={{display:"flex"}}>
                                                        <TextField
                                                            select
                                                            label="Select"
                                                            value={selectedForm}
                                                            onChange={(e) => setSelectedForm(e.target.value)}
                                                            helperText="Please select event type"
                                                            sx={{color:"#fff"}}
                                                            >
                                                            {["individual","team"].map((option) => (
                                                                <MenuItem key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                        {/* <div class="dropdown">
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
                                                        </div> */}
                                                        <Typography variant="h3" component="span" sx={{ml:2}}>events <span style={{fontSize:"15px"}}>(For individual events select any one event as time is overlaping)</span></Typography>
                                                    </h3>
                                                </p>
                                                {selectedForm === "individual" ?
                                                    <IndividualEventForm events={handleEventType(0)} token={accessToken}/>
                                                    :selectedForm === "team" ?
                                                    <TeamEventForm events={handleEventType(1)} token={accessToken}/> : null
                                                }
                                                
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </ThemeProvider>
        </>
    );
}

export default EventRegisterForm