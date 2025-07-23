import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/Footer'

import { Link } from 'react-router-dom'
import User from '../component/user'
import WeatherApp from '../component/Weather'
import Portfolio4 from '../../../Downloads/Hero (1)'
import NewsList from '../component/News (1)'
import TypingTest from '../component/Typingtext'

const Home = () => {
  return (
    <div>
        <Portfolio4/>
        <NewsList/>
        <TypingTest/>
        <Link to="/users" className="text-blue-600 underline">View Users</Link>
        <WeatherApp/>
        
        
        
        
    </div>
  )
}

export default Home