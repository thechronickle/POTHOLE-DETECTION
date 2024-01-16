import React from 'react';
import backgroundImage from '../assets/bg3.png'; 

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div className='flex justify-center  text-black h-full ' style={backgroundStyle}>
      <p className='text-5xl font-bold mt-5'> Welcome to Pothole detection</p>
    </div>
  );
}

export default Home;
