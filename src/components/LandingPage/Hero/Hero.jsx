import React from 'react'
import LeftText from './LeftText'
import RightIcon from './RightIcon'

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-24 gap-12">
        <div className="flex-1">
          <LeftText />
        </div>
        <div className="me-6 flex-1 flex justify-center md:justify-center">
          <RightIcon />
        </div>
      </div>
    </div>
  )
}

export default Hero
