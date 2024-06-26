import React from 'react'
import './home.scss'
import Footer from '../../components/Home/footer/Footer';
import Hero from '../../components/Home/hero/Hero';
import Creative from '../../components/Home/creative/Creative';
import Insights from '../../components/Home/Insights/Insights';
import Discover from '../../components/Home/discover/Discover';

function Home() {
  return (
    <div className="home">
      <Hero/>
      <Creative/>
      <Discover/>
      <Insights/>
      <Footer/>
    </div>
  )
}

export default Home
