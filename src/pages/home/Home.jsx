import React from 'react'
import './home.scss'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <div className="right-side">Right Side</div>
      </div>
    </div>
  )
}

export default Home
