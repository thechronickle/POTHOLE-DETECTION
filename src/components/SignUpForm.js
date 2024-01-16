import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const SignUpForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
        
    })

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value

            }
        ))
        
    }
    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }
        console.log("Printing account data");
        console.log(finalData);
        navigate("/dashboard");

       
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const[accountType, setAccountType]=useState("user")

   
  return (
    <div>
          <div 
              className='  flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max' >
              <button
                  className={`${accountType === "user"
                      ?
                      "bg-richblack-900 text-richblack-5"
                      : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                  onClick={()=>setAccountType("user")}>
                    User
              </button>
              <button
                  className={`${accountType === "admin" ?
                      "bg-richblack-900 text-richblack-5"
                      : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                     onClick={() => setAccountType("admin")}>
                    Admin
              </button>
          </div>
          <form
             
              onSubmit={submitHandler}>
              <div className='flex justify-between'>
              <label >
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'> First Name<sup className='text-red-600'>*</sup></p>
                  <input
                      required
                      type='text'
                      placeholder='Enter first name'
                      name='firstName'
                      onChange={changeHandler}
                          value={formData.firstName}
                          className='bg-richblack-800 rounded-[0.35rem] text-richblack-5 w-full p-[12px]'
                          
                      />
                  </label>
              <label >
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'> Last Name<sup className='text-red-600'>*</sup></p>
                  <input
                      required
                      type='text'
                      placeholder='Enter last name'
                      name='lastName'
                      onChange={changeHandler}
                          value={formData.lastName}
                          className='bg-richblack-800 rounded-[0.35rem] text-richblack-5 w-full p-[12px]'
                          
                      />
              </label>
              </div>

              <label className='w-f'>
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'> Email Address<sup className='text-red-600'>*</sup></p>
                  <input
                      required
                      type='email'
                      placeholder='Enter email address'
                      name='email'
                      onChange={changeHandler}
                      value={formData.email}
                      className='bg-richblack-800 rounded-[0.35rem] text-richblack-5 w-full p-[12px]'
                          
                      />
              </label>

              <div className='flex  justify-between '>
              <label className='relative'>
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'> Create Password<sup className='text-red-600'>*</sup></p>
                  <input
                      required
                      type={showPassword? ("text"):("password")}
                      placeholder='Enter password'
                      name='password'
                      onChange={changeHandler}
                          value={formData.password}
                          className='bg-richblack-800 rounded-[0.35rem] text-richblack-5 w-full p-[12px]'
                          
                      />
                      <span
                          className='absolute right-3 top-[38px] cursor-pointer text-richblack-5'
                          onClick={() => setShowPassword((prev) => !prev)}>
                          {showPassword ?
                              
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                            
                            (<AiOutlineEye fontSize={24}  fill='#AFB2BF'/>)}
                </span>
                  </label>
                  
                  <label className='relative'>
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]'> Confirm Password<sup className='text-red-600'>*</sup></p>
                  <input
                      required
                      type={showPassword? ("text"):("password")}
                      placeholder='Confirm password'
                      name='confirmPassword'
                      onChange={changeHandler}
                          value={formData.confirmPassword}
                          className='bg-richblack-800 rounded-[0.35rem] text-richblack-5 w-full p-[12px]'
                          
                      />
                      <span
                      className='absolute right-2 top-[38px] cursor-pointer text-richblack-5'
                      onClick={() => setShowConfirmPassword((prev) => !prev)}>
                      {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>
              </label>
              </div>
              <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                  Create Account
              </button>
          </form>
    </div>
  )
}

export default SignUpForm
