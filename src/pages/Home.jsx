import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/Footer'

import { Link } from 'react-router-dom'
import User from '../component/user'
import WeatherApp from '../component/Weather'

const Home = () => {
  return (
    <div>
        
        <Link to="/users" className="text-blue-600 underline">View Users</Link>
        <WeatherApp/>
        
        
        
        
    </div>
  )
}

export default Home