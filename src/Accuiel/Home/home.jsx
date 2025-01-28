import React from 'react'
import Home1 from './home1'
import Home2 from './home2'
import './css/Home.css'




export default function Home() {
  return (
    <div className='HomePages'>
       <div  className='Container'>
        <Home1 />
        <Home2 />
       
       </div>
      
        
    </div>
  )
}
