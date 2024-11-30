import React from 'react';

const About = () => {
  return (
    <div className='bg-gray-900 text-white py-12'>
      <div className='max-w-4xl mx-auto px-6'>
        <h1 className='text-4xl font-bold mb-8'>About Our Pothole Detection Initiative</h1>
        <div>
          <p className='text-lg mb-6'>
            At PotholePro, we're on a mission to revolutionize road maintenance through innovative technology and community engagement. Our pothole detection initiative is a collaborative effort between engineers, data scientists, and civic-minded individuals who share a common goal: to make our roads safer and smoother.
          </p>
          <p className='text-lg mb-6'>
            With the rise of smart cities and interconnected infrastructure, we believe that leveraging the power of data and machine learning is key to addressing the challenges of urban mobility. By detecting and repairing potholes proactively, we aim to improve road safety, reduce vehicle damage, and enhance the overall quality of life for everyone on the road.
          </p>
          <p className='text-lg mb-6'>
            Our team is passionate about creating tangible solutions that have a real impact on communities. Through our work, we envision a future where potholes are a thing of the past, and roads are smooth and reliable for all travelers.
          </p>
        </div>
        <div className='mt-12'>
          <h2 className='text-2xl font-bold mb-4'>Our Technology</h2>
          <p className='text-lg mb-6'>
            Our pothole detection system combines cutting-edge machine learning algorithms with high-resolution imagery to identify and analyze road surface defects with unparalleled accuracy. By continuously monitoring road conditions, we're able to detect potholes in real-time and prioritize repairs based on severity and location.
          </p>
          <p className='text-lg mb-6'>
            Additionally, we've developed user-friendly mobile applications that empower citizens to report potholes directly from their smartphones. This crowdsourced approach not only helps us gather data more efficiently but also fosters community engagement and accountability in road maintenance.
          </p>
        </div>
        <div className='mt-12'>
          <h2 className='text-2xl font-bold mb-4'>Join Our Movement</h2>
          <p className='text-lg mb-6'>
            We're always looking for passionate individuals and organizations to join us in our mission to transform road infrastructure. Whether you're a developer, a policymaker, or simply someone who cares about road safety, there are many ways to get involved.
          </p>
          <p className='text-lg mb-6'>
            Join our community, contribute to our open-source projects, or collaborate with us on research initiatives. Together, we can pave the way for a brighter, smoother future for everyone.
          </p>
          <button className='bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300'>Get Involved</button>
        </div>
      </div>
    </div>
  );
};

export default About;
