import axios from "axios";
import React, { useEffect, useState } from "react";
import {UserDashboardSidebar} from '../Components/UserDashboardSidebar'
import { url } from '../utils/constants'
import { Controller, useForm } from 'react-hook-form'
import { useJwt } from 'react-jwt'
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    FormControl,
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
    Typography
} from '@mui/material'
import { getName } from "../utils/helpers";

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
    // events,
    token
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
    const [selectedEvent,setSelectedEvent] = useState(1)
    const [selectedEventErr,setSelectedEventErr] = useState(false)
    const [defaultParticipantId,setDefaultParticipantId] = useState("Participant id")
    const [defaultParticipantName,setDefaultParticipantName] = useState("Participant name")
    const {decodedToken} = useJwt(token)
    const [participants,setParticipants] = useState([])
    const [iDs,setIds] = useState({})
    const [teamName,setTeamName] = useState() 

    const {control, handleSubmit,formState:{errors}} = useForm()

    useEffect(() => {
        const decToken = decodedToken?.id
        getName(decToken,(val => {
            setDefaultParticipantName(val)
        }))
        setDefaultParticipantId(decToken)
        
    },[decodedToken,token])

    
    const onSubmitHandler = (data) => {

        if(!selectedEvent){setSelectedEventErr(true); return}
        console.log(iDs)
        const idArr = [
            defaultParticipantId,
            ...Object.values(iDs)
        ]
        console.log(idArr)
        
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
        console.log(data)
    }

    return(
        <>
            {/* <p class="mt-5">
                <h3>Team Events</h3>
            </p> */}
            <ThemeProvider theme={theme}>
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
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.name}
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
                            if(el.id == selectedEvent){
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
                                            [...Array(el.participants-1)].map((elem,ind) => (
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
            <ThemeProvider theme={theme}>
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