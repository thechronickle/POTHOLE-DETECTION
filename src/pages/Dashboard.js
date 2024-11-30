import React from "react";
import uploadLogo from "../assets/upload.svg"; 
// import detectLogo from "../assets/search.svg";  

const Dashboard = () => {
  const colabUrl = "https://colab.research.google.com/your_colab_notebook_link"; // replace with your actual Colab link

  const handleUploadPicture = () => {
    window.location.href = colabUrl;

  };

  const handleUploadVideo = () => {
    // alert("Upload Video functionality coming soon!");
  };

  const handleDetectPotholes = () => {
    // alert("Detect Potholes functionality coming soon!");
  };

  return (
    <div className="flex flex-col items-center text-white h-full bg-richblack-100">
      <h1 className=" text-black text-3xl mb-10 mt-8">Welcome to Pothole Detection</h1>

      <div className="flex flex-col items-center mt-20">
        <div className="flex space-x-10 mb-10">
          <button
            className="bg-richblack-800 py-[15px] px-[30px] text-2xl rounded-[8px] border border-richblack-700 flex items-center space-x-4
            hover:bg-richblack-700 transition-colors duration-300"
            onClick={handleUploadPicture}
          >
            <span>Upload Picture</span>
            <img
              src={uploadLogo}
              alt="Upload Logo"
              className="w-8 h-8"  
            />
          </button>

          <button
            className="bg-richblack-800 py-[15px] px-[30px] text-2xl rounded-[8px] border border-richblack-700 flex items-center space-x-4
            hover:bg-richblack-700 transition-colors duration-300"
            onClick={handleUploadVideo}
          >
            <span>Upload Video</span>
            <img
              src={uploadLogo}
              alt="Upload Logo"
              className="w-8 h-8"  
            />
          </button>
        </div>

        <button
          className="bg-richblack-800 py-[20px] px-[40px] text-3xl rounded-[8px] border border-richblack-700 mt-10 flex items-center space-x-4
          hover:bg-richblack-700 transition-colors duration-300"
          onClick={handleDetectPotholes}
        >
          <span>Detect Potholes</span>
          {/* <img
            src={detectLogo}  
            alt="Detect Logo"
            className="w-8 h-8"  
          /> */}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
