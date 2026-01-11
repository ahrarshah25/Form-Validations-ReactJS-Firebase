import React from 'react'
import Logo from '../Navbar/logo'
import Social from './Social'
import Tabs from './Tabs'
import CopyWrite from './CopyWrite'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="mx-auto max-w-7xl px-8 py-12 md:px-16">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
          
          <div className="flex-1">
            <Logo />
          </div>

          <div className="flex-1">
            <Tabs />
          </div>

          <div className="flex-1 flex justify-start md:justify-end">
            <Social />
          </div>

        </div>

        <CopyWrite />

      </div>
    </footer>
  )
}

export default Footer
