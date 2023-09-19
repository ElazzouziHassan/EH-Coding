import React from 'react'
import './services.scss'

function Services() {
  return (
    <div className="services">
      <h2>Services</h2>
      <p>
        As a Full Stack Developer and UI/UX Designer I ready to provide my clients with clean and high-quality services.
      </p>
      <span>
      What am I offering?
      </span>
      <div className="services-container">
        <div className="service ui-ux">
          <img src="#" alt="UI/UI Design" />
          <h2>UI/UI Design</h2>
        </div>
        <div className="service frontend">
          <img src="#" alt="front-end development" />
          <h2>front-end development</h2>
        </div>
        <div className="service backend">
          <img src="#" alt="Back-end development" />
          <h2>Back-end development</h2>
        </div>
        <div className="service web-app">
          <img src="#" alt="Custom Web Applications" />
          <h2>Custom Web Applications</h2>
        </div>
        <div className="service wordpress">
          <img src="#" alt="WordPress and eCommerce websites" />
          <h2>WordPress and eCommerce websites</h2>
        </div>
        <div className="service database">
          <img src="#" alt="databases" />
          <h2>databases</h2>
        </div>
        <div className="service api">
          <img src="#" alt="REST API Developement" />
          <h2>REST API Developement</h2>
        </div>
      </div>
    </div>
  )
}

export default Services