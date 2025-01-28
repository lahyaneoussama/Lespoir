import React from 'react'
import Home from './Home/home'
import Login from './page/Login'
import Contact from './page/Contact'
import Footer from './page/Footer'
import Blog from './page/Blog'
import "./Home/css/Accueil.css"
export default function Accueil() {
  return (
    <div className='Container_bg'>
        <Home/>
        <Blog/>
        <Login/>
        <Contact/>
        <Footer/>  
    </div>
  )
}
