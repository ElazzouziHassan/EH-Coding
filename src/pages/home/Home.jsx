import React from 'react'
import './home.scss'
import Footer from '../../components/Home/footer/Footer';
import Hero from '../../components/Home/hero/Hero';
import Creative from '../../components/Home/creative/Creative';
import Insights from '../../components/Home/Insights/Insights';
import Discover from '../../components/Home/discover/Discover';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <h1>coming soon<span className="dot">.</span></h1>
        <p>Try to connect with me on social media</p>
        <div className="icons">
          <a href='https://github.com/ElazzouziHassan' target='_blank'>
            <GitHubIcon className='s-icon github' />
          </a>
          <a href='https://www.linkedin.com/in/elazzouzihassan/' target='_blank'>
            <LinkedInIcon className='s-icon linkedIn' />
          </a>
          <a href='https://www.facebook.com/itsmewizardy' target='_blank'>
            <FacebookIcon className='s-icon facebook' />
          </a>
          <a href='https://twitter.com/itsmewizardy' target='_blank'>
            <TwitterIcon className='s-icon twitter' />
          </a>
        </div>
      </div>

      {/* <Hero/>
      <Creative/>
      <Discover/>
      <Insights/>
      <Footer/> */}
    </div>
  )
}

export default Home
