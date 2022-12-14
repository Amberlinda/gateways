import {UserDashboardSidebar} from "../Components/UserDashboardSidebar";
import {Link, useNavigate} from "react-router-dom";
import { useJwt, decodeToken } from 'react-jwt'
import { useEffect, useState } from "react";
import { getName } from "../utils/helpers";
import {
    Typography,
    Button,
    CardActions,
    Card,
    CardContent,
    Grid,
    Box,
    createTheme,
    useMediaQuery
} from '@mui/material'
import axios from "axios";
import { url } from "../utils/constants";
import { styled, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import {
    WhatsApp as WhatsAppIcon,
    Logout
} from '@mui/icons-material';

const mainTheme = createTheme({
    palette:{
        mode:"dark"
    },
    typography:{
        fontFamily:"KrossNeueGrotesk-Light"
    }
})


function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#000",
    '&:hover': {
      backgroundColor: "#2f2f2f",
    },
  }));

const EventSection = ({
    token
}) => {

    const [events,setEvents] = useState([])

    const getEvents = (endPoint,success) => {
        axios.get(`${url}${endPoint}`,{
            headers:{
                authorization:`Bearer ${token}`
            }
        })
        .then((resp) => {
            success(resp.data.data)
        })
        .catch((error) => {
            if(error.response.data){
                alert(error.response?.data?.response);
              }
        })
    }

    useEffect(() => {

        let newEvents = []

        getEvents("/usersoloEvent",(arr) => {
            arr.forEach(obj => {
                newEvents.push({
                    event_name:obj.event_name    
                })
            })
            // setEvents(newEvents)
        })
        getEvents("/userTeamEvent",(arr) => {
            // newEvents = [...events]
            console.log(newEvents)
            arr.forEach(obj => {
                newEvents.push({
                    event_name:obj.event_name    
                })
            })
            setEvents(newEvents)
        })
    },[token])

    

    return(
        <>
        
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap:"wrap",
                p: 1,
                m: 1,
                borderRadius: 1,
                }}
            >
                {/* d78627 */}
                {events?.length !== 0 ? events.map((obj,index) => (
                    <Item key={index} sx={{background:"#d78627"}}>
                        <Card sx={{ width:200,background:"#d78627" }}  >
                            <CardContent>
                                <Typography variant="h6" style={{overflowX:"hidden"}}>
                                    {obj.event_name}
                                </Typography>
                                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    time
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                <ColorButton
                                size="small" 
                                variant="contained">
                                    <Link to="/" style={{color:"#fff"}}>More Details</Link>
                                </ColorButton>
                                
                            </CardActions>
                        </Card>
                    </Item>
                    
                ))
            :<Typography variant="h5" component="div">No registered event</Typography>}
            </Box>
        </>
    )
}

export const UserDBHomeReg = () => {

    const matchSm = useMediaQuery(mainTheme.breakpoints.down('sm'));

    const navigate = useNavigate()
    const [userName,setUserName] = useState()
    const [participantId,setParticipantId] = useState()
    const token = JSON.parse(localStorage.getItem("accessToken"))

    // const {decodedToken} = useJwt(token)


    useEffect(() => {
        // console.log(token)
        const token = JSON.parse(localStorage.getItem("accessToken"))
        if(token == null){
            alert('Please login first.');
            navigate("/login", { replace: true });
        }else{
            const decodedToken = decodeToken(token)
            setParticipantId(decodedToken.id)
            getName(decodedToken.id,(val) => {
                setUserName(val)
            })
        }
    },[])

    const handleSignOut = () => {
        localStorage.removeItem("accessToken")
        navigate("/login",{replace:true})
        document.location.reload()
    }

    return (
        <>
            {/* <UserDashboardSidebar/> */}
            <ThemeProvider theme={mainTheme}>
                <Grid container sx={{mt:5,p:matchSm ? 3 : 8}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box component="div" sx={{
                            display:"flex",
                            flexWrap:"wrap",
                            justifyContent:"space-between"
                        }}>
                            <Typography variant="h5">Hello {userName}</Typography>
                            <Box component="div">
                                <Typography variant="h5">Participant Id</Typography>
                                <Typography variant="p">{participantId}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7.2} sx={{mt:3}}>
                        <Typography variant="h5">Your events</Typography>
                        <EventSection token={token}/>
                    </Grid>
                    <Grid item xs={12} md={4.8} sx={{mt:3}}>
                        <Box variant="div" sx={{
                            display:"flex",
                            justifyContent:"right",
                            flexDirection:"column",
                            alignItems:matchSm ? "start" :"end"
                        }}>
                            <Button 
                            variant="contained" 
                            endIcon={<WhatsAppIcon/>} 
                            sx={{mb:2,width:"150px"}}
                            href="http://wa.link/r6p84t" 
                            target="_blank"
                            >Contact us</Button>
                            <Button 
                            variant="contained" 
                            endIcon={<Logout/>} 
                            sx={{width:"150px"}}
                            onClick={handleSignOut}>Sign out</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7.2} sx={{mt:3}}>
                        <Typography variant="h5">Join another event, to double the fun!</Typography>
                        <Link to="/user-register-form" 
                            style={{
                                color:"#000",
                                background:"ccff28"
                            }}>
                                <Button variant="contained" sx={{mt:2}}>Register now</Button>

                        </Link>
                    </Grid>
                    
                </Grid>
            </ThemeProvider>
            {/* <main>
                <div className="site-section">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-11">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2>Hello {userName}</h2>
                                        <p className="mt-5">
                                        <h3>Your Events</h3>
                                        </p>
                                        <EventSection token={token}/>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <h4 className="mt-5">
                                                    Join another
                                                    event, to double
                                                    the fun!
                                                </h4>
                                                <Link to="/user-register-form" 
                                                    style={{
                                                        color:"#000",
                                                        background:"ccff28"
                                                    }}>
                                                    <button type="button" className="btn btn-info">
                                                        Register Now
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className="col-md-6 ">
                                        <h3 className="d-flex flex-row-reverse bd-highlight">Participant Id</h3>
                                        <p>
                                        <h1 className="d-flex flex-row-reverse bd-highlight">
                                            <p style={{fontSize:"20px"}}>{participantId}</p>
                                        </h1>
                                        </p>
                                        <div className="col-md-12 d-flex flex-row-reverse bd-highlight">
                                            <p>
                                                <a href="http://wa.link/r6p84t" target="_blank"
                                                style={{
                                                    marginRight:"5px"
                                                }}>Contact Us</a>
                                                <i className="fa-brands fa-whatsapp"></i>

                                            </p>
                                        </div>
                                        <Box component="div" sx={{
                                            display:"flex",
                                            justifyContent:"right"
                                        }}>
                                            <Button variant="contained" sx={{mt:1}} onClick={handleSignOut}>
                                                Sign Out
                                            </Button>
                                        </Box>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main> */}
        </>
    )
}