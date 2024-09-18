import React from 'react'
import { useNavigate } from 'react-router'
import './Home.css'

const Home = () => {

    const navigate = useNavigate()

    let signinpage = ()=>{
        navigate('/signin')
    }
    let signuppage = ()=>{
        navigate('/signup')
    }

  return (
    <div>
      <button onClick={signinpage}>SignIn</button><br /><br />
      <button onClick={signuppage}>SignUp</button>
    </div>
  )
}

export default Home
