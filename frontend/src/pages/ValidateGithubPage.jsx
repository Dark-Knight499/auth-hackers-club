import React, { useState } from 'react';
import axios from 'axios';

const ValidateGithubPage = () => {
  const [githubId, setGithubId] = useState('');
  const [otp, setOtp] = useState('');
  const [otpGenerated, setOtpGenerated] = useState(false);

  // Base URL for the backend API
  const apiBaseUrl = 'http://localhost:5000/api'; // Backend running on port 5000

  // Function to handle OTP generation using Axios
  const generateOtp = async () => {
    if (!githubId) {
      alert('Please enter your GitHub ID');
      return;
    }

    try {
      const response = await axios.post(`${apiBaseUrl}/generate_otp`, {
        githubId: githubId, // Send GitHub ID in the POST request body
      });

      if (response.status === 200) {
        alert(`OTP Generated: ${response.data.otp}`);
        setOtpGenerated(true); // Show the OTP input after generating OTP
      } else {
        alert(response.data.message || 'Error generating OTP');
      }
    } catch (error) {
      console.error('Error generating OTP:', error);
      alert(error.response?.data?.message || 'Failed to generate OTP');
    }
  };

  // Function to handle OTP verification using Axios
  const verifyOtp = async () => {
    if (!otp) {
      alert('Please enter the OTP');
      return;
    }

    try {
      const response = await axios.post(`${apiBaseUrl}/verify`, {
        githubId: githubId, // Include GitHub ID in verification request
        otp: otp,           // Include the OTP entered by the user
      });

      if (response.status === 200) {
        alert('Verification successful!');
      } else {
        alert(response.data.message || 'Verification failed');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert(error.response?.data?.message || 'Failed to verify OTP');
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-300 via-teal-500 to-green-600 flex flex-col gap-10 justify-center items-center '>
      {/* Step 1 */}
      <div className="mt-10 bg-green-700 bg-opacity-90 shadow-lg rounded-lg p-10 max-w-lg text-center m-0 text-white transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold font-serif mb-6 tracking-wide">Step 1</h1>
        <p className="text-lg font-serif mb-4 leading-relaxed">
          Create a repository with your official GitHub account.
        </p>
        <p className="text-lg font-serif mb-8 leading-relaxed">
          Name the repository <strong>hackers-club-validation</strong>
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-green-700 bg-opacity-90 shadow-lg rounded-lg p-10 max-w-lg text-center m-0 text-white transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold font-serif mb-6 tracking-wide">Step 2</h1>
        <p className="text-lg font-serif mb-4 leading-relaxed">Add the following code to the ReadMe file:</p>
        <p className="text-lg font-serif mb-8 leading-relaxed">//code</p>
      </div>

      {/* Step 3 */}
      <div className="mb-10 bg-green-700 bg-opacity-90 shadow-lg rounded-lg p-10 max-w-lg text-center m-0 text-white transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold font-serif mb-6 tracking-wide">Step 3</h1>
        <p className="text-lg font-serif mb-4 leading-relaxed">Provide your GitHub ID here:</p>
        
        <input
          type="text"
          value={githubId}
          onChange={(e) => setGithubId(e.target.value)}
          placeholder="Enter your GitHub ID"
          className="text-black w-full p-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform duration-300 hover:bg-blue-600 hover:shadow-lg hover:scale-105"
          onClick={generateOtp}
        >
          Generate OTP
        </button>

        {otpGenerated && (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="text-black w-full p-2 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform duration-300 hover:bg-green-600 mt-4"
              onClick={verifyOtp}
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ValidateGithubPage;
