import React from 'react'
import Signupimg from '../assets/signup.png'
import Template from '../components/Template'


const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
      title="welcome back"
      des1="build skills fotr today, tommorow and beyond"
      des2="education to future-proff your career"
      image={Signupimg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}    /></div>
 
  )
}

export default Signup