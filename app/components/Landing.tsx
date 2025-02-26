import React from 'react'
import Topbar from './Topbar'
import FrontPage from './FrontPage'
import FeaturedLogo from './FeaturedLogo'

const Landing = () => {
  return (
    <div className='w-screen h-fit gradient md:px-20 pb-12'>
        <Topbar />
        <FrontPage />
        <FeaturedLogo />
    </div>
  )
}

export default Landing