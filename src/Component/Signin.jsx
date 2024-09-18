import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import './Signin.css'

const Signin = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    let value=sessionStorage.setItem('email',email)

    let subsin = async ()=>{
        const sin = await axios.post('http://localhost:3100/signin',{email:email,password:password})
        if (sin.data.statuscode == 200) {
          sessionStorage.setItem('email',sin.data.tokens)
            navigate('/input')
            console.log("success");
        }
        else{
            console.log("Error");
        }
    }
    
    let forget = ()=>{
      navigate('/forgetpass')
    }


  return <>
      <div className='body'>
        <h1>Signin</h1>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control" onChange={(e)=>setEmail(e.target.value)}  id="staticEmail" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" onChange={(e)=>setPassword(e.target.value)} id="inputPassword" />
        </div>
      </div>
      <div className='for'>
      <p><a href="">Forget password <input type="checkbox" /></a> or <a href="/signup">Register</a></p>
      </div>
      <button type="button" onClick={subsin} class="btn btn-primary">Submit</button>
      </div>
    </>
}

export default Signin
