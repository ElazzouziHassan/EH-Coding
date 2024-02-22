import React from 'react'
import './home.scss'

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="left-side">
          <div className="me">
            <span>Hello, World ! I'm</span>
            <h2>El azzouzi Hassan</h2>
            <p>WEB FULL-STACK DEVELOPER</p>
          </div>
          <div className="short-description">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia enim pariatur excepturi ipsam officiis reprehenderit veniam eum hic, quasi rerum minima atque illum accusamus. Tempora quaerat quos dolore optio?
            </p>
            <button>Contact me</button>
            <button>Resume</button>
          </div>
        </div>
        <div className="right-side">
          <div className="top">
            <img src="https://hackernoon.com/images/f2px36fy.gif" alt="El azzouzi Hassan, Wizardy" />
          </div>
          <div className="bottom">
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">instagram</a></li>
              <li><a href="#twitter">twitter</a></li>
              <li><a href="#Linkedin">Linkedin</a></li>
              <li><a href="#github">Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
