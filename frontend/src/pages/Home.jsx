import React from 'react'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
        <div className='flex'>
          <Sidebar />
          <HeroSection  />
          
        </div>
    </>
  )
}

export default Home