import React from 'react'
import './subhero.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Subhero() {
  return (
    <div className="sub-hero">
      <div className="hr">
        <hr />
      </div>
      <div className="social-media">
      <a href='https://github.com/ElazzouziHassan' target='_blank'>
            <GitHubIcon className='s-icon github' />
            <span>GitHub</span>
          </a>
          <a href='https://www.linkedin.com/in/elazzouzihassan/' target='_blank'>
            <LinkedInIcon className='s-icon linkedIn' />
            <span>LinkedIn</span>
          </a>
          <a href='https://www.facebook.com/itsmewizardy' target='_blank'>
            <FacebookIcon className='s-icon facebook' />
            <span>Facebook</span>
          </a>
          <a href='https://twitter.com/itsmewizardy' target='_blank'>
            <TwitterIcon className='s-icon twitter' />
            <span>Twitter</span>
          </a>
          <a href='https://www.instagram.com/_wizardy__' target='_blank'>
            <InstagramIcon className='s-icon instagram' />
            <span>Instagram</span>
          </a>
      </div>
    </div>
  )
}

export default Subhero