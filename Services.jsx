import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'

const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={4000} transitionTime={1000}>
        <div>
          <img src="/images/img1.jpg" alt="img1" />
          <p className='legend'>IT Support</p>
        </div>
        <div>
          <img src="/images/img2.jpg" alt="img2" />
          <p className='legend'>Telecomunication</p>
        </div>
        <div>
          <img src="/images/img3.jpg" alt="img3" />
          <p className='legend'>Social Media</p>
        </div>
        <div>
          <img src="/images/img4.jpg" alt="img4" />
          <p className='legend'>Social Media2</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services