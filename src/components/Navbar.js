import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className=' flex justify-between items-center w-11/12 max-w-[1160px] py-1 mx-auto'>
      
          <Link to="/" className='flex items-center'>
        <img src={logo} alt="Logo" width={55} height={22} loading="lazy"  />
        <span className=' ml-2 text-2xl font-bold text-white '>Pothole Detection</span>

      </Link>

      
      <nav >
        <ul className=' flex gap-x-5 font-semibold text-white ' >
            <li className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/" >Home</Link>
            </li>
            <li className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/about">About</Link>
            </li>
            <li className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/map">Map</Link>
            </li>
            <li className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>

      <div className='flex items-center gap-x-5 font-bold text-white'>
        
        {!isLoggedIn &&
          <Link to="/Login">
            <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>
              Login
            </button>
          </Link>
        }
        {!isLoggedIn &&
          <Link to="/SignUp">
            <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>
              Sign Up
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/">
            <button onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>
              Log Out
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/Dashboard">
            <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>
            Dashboard
            </button>
          </Link>
        }
        
      </div>
      
    </div>
  )
}

export default Navbar
