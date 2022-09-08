import React, { useState } from 'react'
import Navbar from "../Navbar";
import i1 from "../assets/christ_flag.png"
import '../index.css';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'
import {url} from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useJwt } from 'react-jwt'
import {
  Paper,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Box,
  Grid,
  Typography,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  MenuItem
} from '@mui/material'

import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography:{
    fontFamily:"KrossNeueGrotesk-Light"
  }
});

export const Register  = () => {
  
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      college: 1
    }
  });
  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false)
  const [collegeId,setCollegeId] = useState(1)
  const [colleges,setColleges] = useState([
    "CHRIST",
    "St Joseph's",
    "Jain"
  ])

  const onSubmitHandler = (data) => {
    console.log(data)
    const {name,email,password,college,phno} = data
    axios.post(`${url}/register`,{
      // body:{
        Name:name,
        Email:email,
        password:password,
        college_id:college,
        ph_no:phno
      }
    )
    .then(resp => {
      if(resp.status === 200){
        if(!resp.data.response){
          alert(resp.data)
        }else{
          alert(resp.data.response)
          if(resp.data.response == "success"){
            navigate("/login", { replace: true });
          }
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  const reqSign= (<span style={{color:"red",fontSize:"18px"}}>*</span>);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('${i1}')`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              REGISTER
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmitHandler)} sx={{ mt: 1 }}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required:true
                }}
                render={({ field }) => 
                <TextField 
                  error={errors.name} 
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Name"
                  autoComplete="name"
                  autoFocus
                {...field} />}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required:true
                }}
                render={({ field }) => 
                <TextField 
                  error={errors.email} 
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                {...field} />}
              />
              <Controller
                name="college"
                control={control}
                rules={{
                  required:true
                }}
                render={({field}) => (
                  <TextField
                    id="college"
                    fullWidth
                    margin='normal'
                    select
                    label="College"
                    autoFocus
                    error={errors.college}
                    value={collegeId}
                    onChange={(e) => setCollegeId(e.target.value)} 
                    {...field}
                  >
                    {colleges.map((option,index) => (
                      <MenuItem key={index} value={index}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
              )}/>
              <Controller
                name="phno"
                control={control}
                rules={{
                  required:true,
                  minLength:10,
                  maxLength:10
                }}
                render={({ field }) => 
                <TextField 
                  error={errors.phno} 
                  margin="normal"
                  fullWidth
                  id="phno"
                  label="Phone number"
                  autoComplete="phno"
                  autoFocus
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  {...field} />}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required:true
                }}
                render={({ field }) => 
                <>
                <TextField 
                  error={errors.email} 
                  margin="normal"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  id="password"
                  label="Password"
                  autoComplete="password"
                  helperText="Enter password of atleast length 8 including 1 lowercase, uppercase, special character and a number."
                  autoFocus
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>,
                  }}
                  
                {...field} />
                </>}
              />
              
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already signed up? Login"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

  )
}
