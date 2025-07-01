import React from 'react'
import HeaderVenue from '../components/Header_venue.jsx'
import Rooms from '../components/Rooms.jsx'
import Footer from '../components/Footer.jsx'

function Venue() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeaderVenue />
      <Rooms />
      <Footer/>
    </div>
  )
}

export default Venue
