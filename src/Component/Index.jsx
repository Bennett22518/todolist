import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios';
import './Index.css'

const Index = () => {
    const [inputval,setInputval] = useState('')

    const navigate = useNavigate()
    let value = sessionStorage.getItem('email')
    let token = sessionStorage.getItem('token')
    
      const post = async ()=>{
        try {
        const response = await axios.post('http://localhost:3100/posthere',{task:inputval,email:value},{headers:{'authorization':`Bearer ${token}`,'Content-Type':'application/json'}})
          if (response.data.statuscode == 200) {
            navigate('/table')
          }
        } catch (error) {
          console.log("err");
        }
      }

  return (
    <div className='body'>
      <h1>Enter TODO</h1>
      <div class="col-sm-9">
      <input type="text"  class="form-control" onChange={(e)=>setInputval(e.target.value)} />
      </div><br />
      <button type='button' class="btn btn-primary" onClick={post} >Click</button>
    </div>
  )
}

export default Index