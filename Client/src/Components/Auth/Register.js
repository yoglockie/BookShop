import React, { useState } from 'react'
import "./Register.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const Register = () => {
   
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    async function submit(e) {
        
        e.preventDefault();
        try {
            const res =await axios.post("http://localhost:8080/products/signup",{name,email,password});
           
              if(res.data=="alreadyexist")
              {
                alert("Email already exist");
              }
              else if(res.data=="added")
              {          
                     alert("Account created please login !!"); 
                    navigate("/");
              }
           
        } catch (error) {
            console.log(error);
        }
    
    }

    return (
    <div className='body'>
      <div class="wrapper">
    <h2>Registration</h2>
    <form action="#">
      <div class="input-box">
        <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}} required/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Create password" onChange={(e)=>{setPassword(e.target.value)}} required/>
      </div>
      
      
      <div class="input-box button">
        <input type="Submit" value="Register Now" onClick={submit}/>
      </div>
      <div class="text">
        <h3>Already have an account? <a href="#">Login now</a></h3>
      </div>
    </form>
  </div>
    </div>
  )
}

export default Register
