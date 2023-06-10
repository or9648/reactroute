import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast';

const SignupForm = ({setIsLoggedIn}) => {


    const navigate= useNavigate();


    const [accountType, setAccountType] = useState("student");
  const [FormData,serFormData]= useState({
    Firstname:"", Lastname:"",email:"", password:"", confirmPassword:""
   })
  
   const [showPassword, setShowPassword]= useState(false);
   function changeHandler (event){
    serFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.value
    }))
  }
  function  submitHandler(event){
    event.preventDefault();
     if(FormData.password !==FormData.confirmPassword){
  
    toast.error("password is not correct")
    return ;}
    setIsLoggedIn(true);
    toast.success("account created");
navigate("/dashboard");
  }

  return (
    <div>
      {/* student-Instructor tab */}
<div  className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
<button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>
            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>

</div>
<form onSubmit={submitHandler}>
        {/* first name and lastName */}
<div  className='flex gap-x-4 mt-[20px]'>
<label  className='w-full'>
    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
      First name<sup className='text-pink-200'>*</sup>
    </p><input
        required
        type='text'
        name='Firstname'
        value={FormData.Firstname}
        onChange={changeHandler}
        placeholder='Enter the first name'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />

  </label>

  <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
      Last name<sup className='text-pink-200'>*</sup>
    </p><input
        required
        type='text'
        name='Lastname'
        value={FormData.Lastname}
        onChange={changeHandler}
        placeholder='Enter the Last name'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />

  </label>
</div>
      {/* email Add */}
      <div  className='mt-[20px]'>
      <label  className='w-full mt-[20px]'>
      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
      <input
        required
        type='email'
        name='email'
        value={FormData.email}
        onChange={changeHandler}
        placeholder='Enter your email'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />

  </label>
      </div>

            {/* createPassword and Confirm Password */}
  <div  className='w-full flex gap-x-4 mt-[20px]'>
  <label className='w-full relative'>
      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
        password<sup  className='text-pink-200'>*</sup>
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
      <span                      className='absolute right-3 top-[38px] cursor-pointer'  onClick={()=> setShowPassword((prev )=> !prev )}>
        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}

      </span>

    </label>
    <label  className='w-full relative'>
      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
      Confirm  password<sup>*</sup>
      </p>
      <input
        required
        type={showPassword?("text"):("password")}
        value={FormData.confirmPassword}
        onChange={changeHandler}
        placeholder='confirm password'
        name='confirmPassword'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

      />
      <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=> setShowPassword((prev )=> !prev )}>
        {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}

      </span>

    </label>
  </div>
  <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
    create Account
  </button>
 

</form>



    </div>
  )
}

export default SignupForm;