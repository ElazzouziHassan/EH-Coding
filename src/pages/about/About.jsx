import React from 'react'
import './about.scss'

function About() {
  return (
    <div className="about">
      <div className="wrapper">
        <h1>coming soon<span className="dot">.</span></h1>
        <p>Put some text here.</p>
        <div className="icons">
          <a href=""><i className="fa fa-twitter"></i></a>
          <a href=""><i className="fa fa-youtube-play"></i></a>
          <a href=""><i className="fa fa-paper-plane"></i></a>
        </div>
      </div>
    </div>
  )
}

export default About