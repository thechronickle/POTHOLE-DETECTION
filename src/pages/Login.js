import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/Login.jpg"

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Safer transportation, Smart Transportation"
      desc2="Your life is precious"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
