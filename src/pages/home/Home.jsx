import React from 'react'
import Hero from '../../components/home-components/hero/Hero'
import Subhero from '../../components/home-components/sub-hero/Subhero'

function Home() {
  return (
    <div className="home">
      <Hero />
      <Subhero/>
    </div>
  )
}

export default Home