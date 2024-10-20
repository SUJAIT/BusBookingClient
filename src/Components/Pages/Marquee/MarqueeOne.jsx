import React from 'react'
import Marquee from "react-fast-marquee";
import '../../../Components/Pages/Marquee/MarqueeOne.css'

const MarqueeOne = () => {
  return (
    <div>
      <Marquee className='background-color marquee'>
  <p className='text-xl text-white'>I can be a React component, multiple React components, or just some text.</p>
</Marquee>
    </div>
  )
}

export default MarqueeOne
