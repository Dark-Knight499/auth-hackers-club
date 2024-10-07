import React from 'react'
import Navbar from '../componenets/Navbar';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      
    </div>
  )
}

export default MainLayout