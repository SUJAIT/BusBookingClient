import React from 'react'
import NavBar from '../../Shareds/NavBar/NavBar'
import Footer from '../../Shareds/Footer/Footer'
import BannerOne from '../Banner/BannerOne'
import Search from '../Search/Search'
import MarqueeOne from '../Marquee/MarqueeOne'
import MarqueeTwo from '../Marquee/MarqueeTwo'
import BannerTwo from '../Banner/BannerTwo'
import BannerThree from '../Banner/BannerThree'
import BannerFour from '../Banner/BannerFour'
import DayPiker from '../Search/DayPiker'

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
     <div id='br'></div>
     <MarqueeOne></MarqueeOne>
     <BannerOne></BannerOne>
     <Search></Search>
     <BannerTwo></BannerTwo>
     <BannerThree></BannerThree>
     <BannerFour></BannerFour>
     <MarqueeTwo></MarqueeTwo>
      <Footer></Footer>
    </div>
  )
}

export default Home
