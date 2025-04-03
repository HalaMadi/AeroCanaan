import React from 'react'
import Banner from './Banner'
import WhyAeroCanaan from './WhyAeroCanaan'
import PopularDestinations from './PopularDestinations'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Landing = () => {
  return (
    <div>
        <Banner/>
        <WhyAeroCanaan/>
        <PopularDestinations/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Landing