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
  IconButton
} from '@mui/material'

import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const Login = () => {

  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmitHandler = (data) => {
    const {email,password} = data
    // console.log(data)
    axios.post(`${url}/userLogin`,{
        Email:email,
        password:password
      }
    )
    .then(resp => {
      console.log(resp)
      if(resp.status === 200){
        alert("Login successful");
        localStorage.setItem('accessToken',JSON.stringify(resp.data.accessToken))
      }
    })
    .catch(error => {
      console.log(error)
      alert("Invalid credentials");
    })
  }

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
              LOGIN
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmitHandler)} sx={{ mt: 1 }}>
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
                  label="password"
                  autoComplete="password"
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
                Login
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Register"}
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
