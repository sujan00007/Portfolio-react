import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Users from '../pages/Users'
import Login from '../pages/Login'
import UserList from '../pages/UserList'
import UserDetail from '../pages/UserDetail'


const AppRouter = () => {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
<Route path="/aboutme" elememt={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/Projects" element={<Projects/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/users" element={<Users/>}/>

<Route path="/users" element={<Users/>}>
  <Route index element={<UserList/>}/>
  <Route path=":id" element={<UserDetail/>}/>
</Route>

    </Routes>
  )
}

export default AppRouter