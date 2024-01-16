import React from 'react'
import backgroundImage from '../assets/contact.jpg'; 
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';


const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div className=' 'style={backgroundStyle}>
      <div className=' justify-center item-center text-2xl mt-9  text-white '>
      <h2 className='font-bold'>Contact Information</h2>
       <br/>
      <p>Email: potholegov@.com</p>
       <br />
      <p>Phone: 75640-56489, 78654-98987</p>
        <br />
      <p>Address: Tathawade, Pune, India</p>
       <br />
       <br />
      </div>
      
                 

      <div className=" justify-center item-center text-2xl text-white social-icons">
        <h1 className='justify-center item-center font-bold'> Visit Us</h1>
        <br />
        <div className='flex gap-x-5 '>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          Facebook<FaFacebookSquare size={30} />
        </a>

        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          Instagram<FaInstagramSquare size={30} />
        </a>
        </div>
        
        
      </div>


    </div>
  )
}

export default Contact
