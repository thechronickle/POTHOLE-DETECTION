import React, { useState } from 'react';
import mapImage from '../assets/map.jpg';
import backgroundImage from '../assets/mapbg.png';
import { FaSearch } from 'react-icons/fa';

const Map = () => {
  const [startClicked, setStartClicked] = useState(false);
  const [stopClicked, setStopClicked] = useState(false);

  const handleStartClick = () => {
    setStartClicked(!startClicked);
    setStopClicked(false);
  };

  const handleStopClick = () => {
    setStartClicked(false);
    setStopClicked(!stopClicked);
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div
      
      className='flex justify-between' style={backgroundStyle}>

      {/* Left Column (Buttons and Search) */}
      <div className='flex flex-col p-4 gap-4 w-1/3 mt-9'>
        <div className='relative flex items-center'>
          <input
            required
            type='text'
            placeholder='Search the city'
            className='border border-richblack-700 p-2 pr-8 rounded w-full'
          />
          <div className='absolute right-2 top-1/2 transform -translate-y-1/2 text-richblack-700'>
            <FaSearch />
          </div>
        </div>

        <div className='flex gap-x-9'>
          <button
            style={{ backgroundColor: startClicked ? '#2c7a4e' : '#4CAF50' }}
            className='text-black py-2 px-5 rounded-full transition-all duration-300'
            onClick={handleStartClick}
          >
            Start
          </button>

          <button
            style={{ backgroundColor: stopClicked ? '#872020' : '#f44336' }}
            className='text-black py-2 px-5 rounded-full transition-all duration-300'
            onClick={handleStopClick}
          >
            Stop
          </button>
        </div>
      </div>

      {/* Right Column (Map Image) */}
      <div className='w-1/2 mr-1 mt-8'>
        <img src={mapImage} alt='Map' className='w-[608px] h-[504px] object-cover' />
      </div>
    </div>
  );
}

export default Map;
