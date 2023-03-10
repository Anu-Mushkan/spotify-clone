import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import "./Player.css"
import Footer from './Footer'

function Player({ spotify }) {
  return (
    <div className='Player'>
      <div className="player__body">
        <Sidebar/>
        <Body spotify={spotify} />
      </div>
      <Footer/>
    </div>
  )
}

export default Player