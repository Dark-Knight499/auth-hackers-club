import React from 'react'
import { NavLink } from 'react-router-dom'

// Ensure you have imported the font in your index.html or a CSS file
// <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600;700&display=swap" rel="stylesheet">

const HomePage = () => {
  return (
    <div 
      className="relative h-[712px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('../../public/Homepage2.jpg')" }} 
    >
      

      <div className="relative z-10 bg-slate-800 bg-opacity-90 shadow-2xl rounded-lg p-10 w-[540px] text-center transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold font-mono text-white mb-6 tracking-wide">
          Welcome to Hacker's Club
        </h1>
        <p className="text-lg font-mono text-gray-300 mb-4 leading-relaxed">
          We are thrilled to announce that we've created a group to help each other grow and learn.
        </p>
        <p className="text-lg font-mono text-gray-300 mb-8 leading-relaxed">
          But first, we'd like to validate your GitHub profile.
        </p>

        <NavLink
          to="/validate"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Validate GitHub
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage
