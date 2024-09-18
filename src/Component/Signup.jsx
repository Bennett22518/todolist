import React, { useState } from 'react'
import axios from 'axios'
import './Signup.css'
import { useNavigate } from 'react-router'

const Signup = () => {

    const [emailup,setEmailup] = useState('')
    const [passup,setPassup] =useState('')
    const navigate = useNavigate()

    let subup = async (e)=>{
      e.preventDefault()
      debugger
      try {
        const sup = await axios.post('http://localhost:3100/signup',{email:emailup,password:passup})
        if(sup.data.statuscode==200){
          sessionStorage.setItem('token',sup.data.tokens)
          sessionStorage.setItem('email',emailup)
          navigate('/input')
        }

console.log(sup);
      } catch (error) {
        console.log(error);
      }
    }

  return <>
      <div className='body'>
        <h1>Signup</h1><br />
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control" onChange={(e)=>setEmailup(e.target.value)} id="staticEmail" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" onChange={(e)=>setPassup(e.target.value)} id="inputPassword" />
        </div>
      </div> <br />
      <button type='button' onClick={subup} class="btn btn-primary" >Submit</button>
      </div>
      </>
}

export default Signup
