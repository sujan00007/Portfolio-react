import React, { useEffect } from 'react'
import AppRouter from './routes/AppRouter'

import Footer from './component/Footer'
import { useTheme } from './hooks/useTheme'
import Navbar from './component/navbar'

const App = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar/>
      <AppRouter/>
      <Footer/>
    
  
    </div>
  )
}

export default App