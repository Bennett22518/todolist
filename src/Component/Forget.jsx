import React, { useState } from 'react'
import './Forget.css'

const Forget = () => {

    const [femail,setFmail] = useState('')
    const [newpass,setNewpass] = useState('')
    const [conpass,setConpass] = useState('')

    let forgetsub = ()=>{

    }


  return (
    <div>
        <h2>Forget password</h2>
      <label htmlFor="">Email  </label>
      <input type="email" placeholder='email' onChange={(e)=>setFmail(e.target.value)}/><br/><br/>
      <label htmlFor="">New password  </label>
      <input type="passwprd" placeholder='new password' onChange={(e)=>setNewpass(e.target.value)}/><br/><br/>
      <label htmlFor="">Confirm password   </label>
      <input type="password" placeholder='confirm password' onChange={(e)=>setConpass(e.target.value)}/><br/><br/>
      <a href="/signin">Go Back</a><br /><br />
      <button onClick={forgetsub}>Submit</button>
    </div>
  )
}

export default Forget
