import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../Navbar";
import i1 from "../assets/christ_flag.png"
import '../index.css';
import { useForm } from "react-hook-form";
import { url } from '../utils/constants';
import axios from 'axios';


export const Register  = () => {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmitHandler = (data) => {
    // console.log(data)
    const {name,email,password,college_id,phno} = data
    axios.post(`${url}/register`,{
      // body:{
        Name:name,
        Email:email,
        password:password,
        college_id:college_id,
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
    <>  
      <div className="row">
        <Navbar />
      </div>
      <div class="container-flex " style={{
          position: "fixed",
          top: "0",
          width: "100%",
        }}>
      <div style={{fontFamily:"KrossNeueGrotesk-Light"}} >
        <div className="row m-0 p-0 mt-5 bg-black">
           
          <div className="col-md-6 m-0 p-0 mt-0  bg-white christ" >
            <div className="col">
              <img   src={i1} alt="..." />
            </div>
          </div>
          

          <div className="col-md-6  m-0 mt-0 p-2 bg-white" style={{ color: "black" }}>
            <div className="row m-0 p-0  ">
            <div className="row m-0 p-0 justify-content-center">
              <div className='col-md-9 col-12  m-0 p-0 mt-4' >
                <h2> <center>Welcome To Gateways 2022 </center></h2>
                <h3 style={{fontFamily:"KrossNeueGrotesk-Light"}} >
                 <center> Registration </center>
                </h3>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="row m-0 p-0  " >
                <div className="col-lg-12 m-2">
                  <label htmlFor="">Name{reqSign}</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    style={errors.name ? {border:"2px solid red"} : {}}
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="col-lg-12 m-2">
                  <label htmlFor="">Email{reqSign}</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder='Email'
                    style={errors.email ? {border:"2px solid red"} : {}}
                    {...register("email", { required: true, pattern:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" })}
                  />
                </div>
              
                <div className="col-lg-12 m-2">
                  <label htmlFor="">University/College{reqSign}</label>
                  {/* <input style={{display:"none"}} 
                    value={college}
                    
                  /> */}
                  <select class="form-control"
                    placeholder="College" 
                    {...register("college_id", { required: true })}
                    style={errors.college ? {border:"2px solid red"} : {}}>
                      <option value={null} selected="selected"  disabled >Select Your College</option>
                      {["Christ (Deemed to be University)",
                      "St.Joseph's",
                      "Jain University",
                      "RV University"].map((el,index) => <option key={index} value={index}>{el}</option>)}                    
                  </select>
                </div>
                <div className="col-lg-12 m-2">
                  <label htmlFor="">Phone Number{reqSign}</label>
                  <input
                    type="tel"
                    class="form-control"
                    placeholder='Mobile number'
                    style={errors.phno ? {border:"2px solid red"} : {}}
                    {...register("phno", { required: true, minLength:10, maxLength: 10 })}
                  />
                </div>
                <div className="col-lg-12 m-2">
                  <label htmlFor="">Password{reqSign}</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder='Password'
                    style={errors.password ? {border:"2px solid red"} : {}}
                    {...register("password", { required: true })}
                  />
                  {/* <label>Enter atleast 1 lowercase, 1 uppercase, 1 special character and a digit.{reqSign}</label> */}
                </div>
                <div className="d-flex justify-content-end pt-2">
                  <input type="submit" className="btn" style={{backgroundColor:"#CBE5FF"}} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> 
      </div>    
      </div>   
     
      {/* <div >
        <div className="row m-0 p-0 mt-0 " style={{
          position: "fixed",
          top: "0",
          width: "100%",
        }}>
          <div className="col-lg-6 d-flex m-0 p-0 mt-0   ">
            <div>
              <img className="m-0 w-100" src={i1} alt="..."  />
            </div>
          </div>

          <div className="col-lg-6  m-0 mt-5 p-4 bg-white" style={{ color: "black" }}>
            <div className="row m-0 p-2 ">
              <cenetr><div className='col-lg-8 col-12  m-0 p-0'>
                <h1>Welcome To Gateways 2022</h1>
                <h2>
                  Registration
                </h2>
              </div></cenetr>
            </div>
            <form>
            <div className="row m-0 p-4 ">
              <div className="col-lg-12 m-2">
                <label htmlFor="">Name</label>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            
              <div className="col-lg-12 m-2">
                <label htmlFor="">University/College</label>
                <select class="form-control"
                  id="inputName"
                  placeholder="College" 
                  name="college" >
                  <option value="0" selected="selected"  disabled >Select Your College</option>
                  <option value="1">Christ (Deemed to be University)</option>
                  <option value="2">Jain University</option>
                  <option value="3">RV University</option>
                  <option value="4">University</option>
                </select>
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Phone Number</label>
                <input
                  name="phno"
                  type="text"
                  class="form-control"
                  id="phno"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="d-flex justify-content-end pt-3">
                <input type="submit" className="btn bg-blue ms-2" name="Submit form"/>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div> */}


    </>

  )
}
