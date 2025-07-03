import React from 'react'
import AgendaDetail from '../components/AgendaDetail.jsx'
import Footer from '../components/Footer.jsx'

function Agenda() {
  return (
    <div style={{ overflowX: "hidden" }}>
    <AgendaDetail/>
      <Footer/>
    </div>
  )
}

export default Agenda
