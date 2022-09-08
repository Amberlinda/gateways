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
    
} from '@mui/material'
import axios from "axios";
import { url } from "../utils/constants";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

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
        .catch((err) => {
            console.log(err)
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
                {events.map((obj,index) => (
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
                    
                ))}
            </Box>
        </>
    )
}

export const UserDBHomeReg = () => {

    const navigate = useNavigate()
    const [userName,setUserName] = useState()
    const [participantId,setParticipantId] = useState()
    const token = JSON.parse(localStorage.getItem("accessToken"))

    const {decodedToken} = useJwt(token)

    useEffect(() => {
        // console.log(token)
        if(token == null){
            alert('Please login first.');
            navigate("/login", { replace: true });
        }else if(decodedToken){
            setParticipantId(decodedToken.id)
            getName(decodedToken.id,(val) => {
                setUserName(val)
            })
        }
    },[])

    return (
        <>
            <UserDashboardSidebar/>
            <main>
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
                                                <button type="button" className="btn btn-info">
                                                    <Link to="/user-register-form" 
                                                    style={{
                                                        color:"#000",
                                                        background:"ccff28"
                                                    }}
                                                    >Register Now</Link>
                                                </button>
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
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}