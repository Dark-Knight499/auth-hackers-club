import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-green-500 shadow-md">
      <div className="container text-center items-center p-4">
        <div>
          <Link
            to="https://hacktoberfest.com/"
            className="text-white font-mono text-2xl font-bold tracking-wide"
          >
          Hacktober Fest 2024
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
