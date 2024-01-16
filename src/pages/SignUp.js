import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template.js'


const SignUp = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="smart India" 
      desc1="Towards safer transportation"
      desc2="your safety is our duty"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default SignUp
