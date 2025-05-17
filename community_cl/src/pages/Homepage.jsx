import React from 'react'
import Hero from '../components/Hero/Hero'
import MapPreview from "../components/MapPreview";
import Highlights from '../components/Highlights';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer'
import RecentReports from '../components/RecentReports';

const Homepage = () => {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <Highlights/>
        <RecentReports/>
        <MapPreview/>
        <Footer/>
      
    </div>
  )
}

export default Homepage
