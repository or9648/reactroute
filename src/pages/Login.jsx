import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <div><Template
      title="welcome back"
      des1="build skills fotr today, tommorow and beyond"
      des2="education to future-proff your career"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn} 
      classname="bg-black"   /></div>
  )
}

export default Login