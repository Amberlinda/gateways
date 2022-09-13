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
    Fab,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
    useMediaQuery
} from '@mui/material'
import { ArrowBack, ContentCopy } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton';
import { getName } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import BasicModal from "../Components/basicModal";
import { Modal } from "antd";
import schedule from '../assets/schedule.jpg'
import ImageModal from "../Components/imageModal";
import { styled } from '@mui/material/styles';

const mainTheme = createTheme({
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


    const handleIdChange = (val) => {

        if(!val){return}

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
            <Grid item xs={12} md={5}>
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
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <TextField 
                    // error={errors.team_name} 
                    margin="normal"
                    fullWidth
                    id={`partipant_id_${ind+2}`}
                    label={`Partipant id #${ind+2}`}
                    value={participantId}
                    onChange={(e) => handleIdChange(e.target.value)}
                    autoFocus
                    InputProps={{
                        endAdornment: (<InputAdornment position="end">
                            <IconButton
                            // aria-label="toggle password visibility"
                            onClick={(event) => {
                                navigator.clipboard.readText()
                                    .then(cliptext => (
                                        handleIdChange(cliptext)
                                    ),
                                    err => console.log(err)
                                );
                            }}
                            edge="end"
                            >
                                <ContentCopy/>
                            </IconButton>
                        </InputAdornment>)

                    }}
                    InputLabelProps={{
                        shrink:true
                    }}
                />
            </Grid>
        </>
    )
}

const TeamEventForm = ({
    events,
    token
}) => {

    const matchSm = useMediaQuery(mainTheme.breakpoints.down('sm'));
    
    const [selectedEvent,setSelectedEvent] = useState(5)
    const [selectedEventErr,setSelectedEventErr] = useState(false)
    const [defaultParticipantId,setDefaultParticipantId] = useState("Participant id")
    const [defaultParticipantName,setDefaultParticipantName] = useState("Participant name")
    const {decodedToken} = useJwt(token)
    const [participants,setParticipants] = useState([])
    const [iDs,setIds] = useState({})
    const [teamName,setTeamName] = useState(null) 
    const [showModal,setShowModal] = useState(true)
    const [showHackModal,setShowHackModal] = useState(false)
    const [loading,setLoading] = useState(false)

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
        setLoading(true)
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
                setLoading(false)
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
        .catch(error => {
            setLoading(false)
            if(error.response.data){
                alert(error.response?.data?.response);
              }
        })
        // console.log(data)
    }

    return(
        <>
            {/* <p class="mt-5">
                <h3>Team Events</h3>
            </p> */}
            <ThemeProvider theme={mainTheme}>
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
                        "Details about Event X will be provided on-spot.",
                        "Participants are requested to refer the schedule to avoid overlspping of event timings.",
                        "All team members should create an account and the team leader should copy their participant ID to register"
                    ]}
                />
                <BasicModal
                    open={showHackModal}
                    onClose={() => setShowHackModal(false)}
                    heading="General Instructions"
                    instructions = {[
                        "Participants should mail there topic to gateways.hackathon@gmail.com before 13 September",
                        "Participants should send ideas to 'gateways.hackathon@gmail.com'"
                    ]}
                    showBtn={true}
                />
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmitHandler)}>
                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={12}>
                            <Select
                                id="event"
                                value={selectedEvent}
                                label="Select an event"
                                fullWidth
                                error={selectedEventErr}
                                onChange={(e) => {
                                    const id = e.target.value;
                                    setSelectedEvent(id); 
                                    setIds({})
                                    if(id === 1){setShowHackModal(true)}
                                }}
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
                                        <Grid item xs={12} >
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
                                        <Grid item xs={12}>
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
                    <LoadingButton
                        type="submit"
                        // endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, width: matchSm? "200px" : "auto" }}
                    >
                        Register Now
                    </LoadingButton>
                </Box>
            </ThemeProvider>
        </>
    )
}


const IndividualEventForm = ({
    events,
    token
}) => {

    const matchSm = useMediaQuery(mainTheme.breakpoints.down('sm'));

    const {handleSubmit, control} = useForm()
    const [selectedEvent,setSelectedEvent] = useState()
    const {decodedToken} = useJwt(token)
    const [showModal,setShowModal] = useState(true)
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    const handleEventRegistration = (id,callback) => {
        setLoading(true)
        axios.post(`${url}/eventRegister`,{
            event_id:id
        },{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
        .then(resp => {
            setLoading(false)
            console.log(resp)
            callback(resp)
            if(resp.status === 200 && resp.statusText == "OK"){
                alert(resp.data.response)
            }
        })
        .catch((error) => {
            setLoading(false)
            if(error.response.data){
                alert(error.response?.data?.response);
                
              }
        })
    }


    const onSubmitHandler = (data) => {
        console.log(data)
        if (Object.values(data).indexOf(true) === -1){alert("Select atleaat 1 event");return}

        Object.keys(data).forEach((key,index) => {
            if(data[key]){
                handleEventRegistration(key,() => {
                    console.log(key)
                    if(key == 3){
                        console.log("coding debugging")
                        window.location = "https://bit.ly/CodeShashtra";
                        return false;
                    }else{
                        navigate("/user-dashboard")
                    }
                })
            }
        })
        
    }

    useEffect(() => {console.log(events)},[])
    
    return(
        <>
            <div>
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
                        "Details about Event X will be provided on-spot.",
                        "Participants are requested to refer the schedule to avoid overlspping of event timings.",
                        "Participants registering for coding\debugging should mandatorily register on 'Geeks for Geeks'.You will be redirected to 'Geeks for Geeks' for the same."
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
                    <LoadingButton
                        type="submit"
                        // endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, width: matchSm ? "200px" : "auto" }}
                    >
                        Register Now
                    </LoadingButton>

                </Box>
            </div>
        </>
    )
}

const EventRegisterForm = () => {

    const matchSm = useMediaQuery(mainTheme.breakpoints.down('sm'));

    const [selectedForm,setSelectedForm] = useState("individual")
    const [events,setEvents] = useState([])
    const [accessToken,setAccessToken] = useState(JSON.parse(localStorage.getItem("accessToken")))
    const [participantName,setParticipantName] = useState()
    const [showSchedule,setShowSchedule] = useState(false)
    const [showVideo,setShowVideo] = useState(false)

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

    const rightSideBtnStyle = {
        display:"block",
        marginLeft:"auto",
        mr:5,
        width:200,
        textAlign:"center"
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return(
        <>
            <ThemeProvider theme={mainTheme}>
                {/* <UserDashboardSidebar/> */}
                <Link href="/user-dashboard" sx={{color:"#fff",lineHeight:"unset"}}>
                    <Fab color="primary" aria-label="back" style={{
                    position: 'fixed',
                    top: 16,
                    left: 16,
    
                    }}>
                        <ArrowBack />
                    </Fab>
                </Link>
                <Grid container sx={{mt:15,pl:matchSm ? "19%" : "10%",pr:matchSm ? "19%" : 0}}>
                    <Grid item xs={12} md={7}>

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
                            <Typography variant="h3" component="span" sx={{ml:2}}>events </Typography>
                            {selectedForm === "individual" ?
                                <IndividualEventForm events={handleEventType(0)} token={accessToken}/>
                                :selectedForm === "team" ?
                                <TeamEventForm events={handleEventType(1)} token={accessToken}/> : null
                            }

                    </Grid>
                    <Grid item xs={12} md={5} sx={{justifyItems:"right"}}>
                        <Button variant="contained" sx={rightSideBtnStyle} 
                        onClick={() => setShowSchedule(true)}>
                            See Schedule
                        </Button>
                        <Button variant="contained" 
                            sx={{mt:2,...rightSideBtnStyle}} 
                            href={selectedForm === "individual" ? "https://www.youtube.com/watch?v=vZvep84O3RM" : "https://www.youtube.com/watch?v=ujFIZbOLNEE"}
                            target="_blank">
                            Watch reference
                        </Button>
                        <Button variant="contained" sx={{mt:2,...rightSideBtnStyle}} href="https://heyzine.com/flip-book/0fee58bdde.html" target="_blank">
                            Brochure
                        </Button>
                        {/* <Button variant="contained" sx={{mt:2,...rightSideBtnStyle}}
                        onClick={() => setShowVideo(true)}
                        >
                            Refer form registration video
                        </Button> */}

                    </Grid>
                </Grid>
                <Modal
                    open={showVideo}
                    onClose={() => setShowVideo(false)}
                >
                    <Box component="div" sx={modalStyle}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/EehbTWT4rOw" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                    </Box>

                </Modal>
                <ImageModal
                    open={showSchedule}
                    onClose={() => setShowSchedule(false)}
                    heading="Schedule"
                    />
            </ThemeProvider>
            
        </>
    );
}

export default EventRegisterForm