import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {Link, useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast';
const LoginFrom = ({setIsLoggedIn}) => {
   const navigate= useNavigate();



 const [FormData,serFormData]= useState({
  email:"", password:""
 })

 const [showPassword, setShowPassword]= useState(false);
  function changeHandler (event){
    serFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.value
    }))
  }
  function submitHandler(event){
    event.preventDefault();    
    setIsLoggedIn(true);
    toast.success("logged in")
    navigate("/dashboard")
  }

  return (<div className="bg-slate-950">
  <from onSubmit={submitHandler}     className="flex flex-col w-full gap-y-4 mt-10 ">
    <label className='w-full ' >
      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email address<sup className='text-pink-200'>*</sup></p>
      <input
        required
        type='text'
        value={FormData.email}
        onChange={changeHandler}
        placeholder='enter email id'
        name='email'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

      />

    </label>
    <label className='w-full relative'>
      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
        password<sup className='text-pink-200'>*</sup>
      </p>
      <input
        required
        type={showPassword?("text"):("password")}
        value={FormData.password}
        onChange={changeHandler}
        placeholder='Enter password'
        name='password'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

      />
      <span
        className='absolute right-3 top-[38px] cursor-pointer'
       onClick={()=> setShowPassword((prev )=> !prev )}>
        {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}

      </span>
<Link to="#">
<p  className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>forgot password</p>
</Link>
    </label>
    <button  className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 ' onClick={submitHandler}>
      sign In
    </button>
   </from>
  </div>
 
  )
}

export default LoginFrom;