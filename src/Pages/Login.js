import React from 'react'
import Navbar from "../Navbar";
import i1 from "../assets/christ_flag.png"
import '../index.css';
import { useForm } from "react-hook-form";
import axios from 'axios'
import {url} from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom'
import { useJwt } from 'react-jwt'

export const Login = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmitHandler = (data) => {
    const {email,password} = data

    axios.post(`${url}/login`,{
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
    <>
      <div className="row">
        <Navbar />
      </div>
      <div class="container-flex " style={{
        position: "fixed",
        top: "0",
        width: "100%",
      }}>
        <div style={{ fontFamily: "KrossNeueGrotesk-Light" }} >
          <div className="row m-0 p-0 mt-5 bg-black">

            <div className="col-md-6 m-0 p-0 mt-0  bg-white christ" >
              <div className="col m-0 p-0">
                <img src={i1} alt="..." height="100%" />
              </div>
            </div>


            <div className="col-md-6  m-0 mt-0 p-2 bg-white" style={{ color: "black" }}>
              <div className="row m-0 p-0  ">
                <div className="row m-0 p-0 mt-3 justify-content-center">
                  <div className='col-md-9 col-12  m-0 p-3 mt-4' >
                    <h1 style={{fontFamily:"KrossNeueGrotesk-Light"}}> <center>Welcome To Gateways 2022 </center></h1>
                    <h2 style={{ fontFamily: "KrossNeueGrotesk-Light" }} >
                    <br/> <center> Login </center>
                    </h2>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="row m-4 p-0  " >                    
                    <div className="col-md-12 m-2">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        style={errors.email ? {border:"2px solid red"} : {}}
                        {...register("email", { required: true })}
                      />
                    </div>

                  
                    <div className="col-md-12 m-2">
                      <label htmlFor="">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        style={errors.password ? {border:"2px solid red"} : {}}
                        {...register("password", { required: true })}
                      />
                    </div>
                    <div className="row p-5  pt-2 ml-1">
                    <div className="col-md-4 m-0 p-0 ">
                    <center>   <a href='/register'  style={{color:"black",textDecoration:"none", fontSize: "0.8rem"}}>Not Registered ? Register Now</a> </center>
                      </div>
                      <div className="col-md-4 m-0 p-0 pt-3"></div>
                      <div className="col-md-3 m-0 p-0">
                      <center>   <input type="submit" className="btn" style={{ backgroundColor: "#CBE5FF" }} name="Submit form" /> </center>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>

  )
}
