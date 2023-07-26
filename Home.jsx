import React from 'react'
import "../styles/home.css"
import {AiFillGoogleCircle,AiFillInstagram,AiFillAmazonCircle} from 'react-icons/ai'
import {SiFlipkart} from 'react-icons/si'


const Home = () => {
  return (
    <>
      <div className='home1' id='home'>
        <div className='home1-inner'>
          <h1>CodingOn</h1>
          {/* //<FaBeer/> */}
          <p> Solution For All </p>
        </div>
      </div>
      <main className='main' id='about'>
        <div className='home2' >
          <h1>ABOUT</h1>
          <p>Nature provides us with clean air to breathe, clean water to drink, give the sol to make our food, and gives us land to stay. Nature provides us with fruits and vegetables to feed our hunger. It is our responsibility to balance the privilege that we are getting without disturbing it.
            Nature is very precious to us.Both living and non-living things include nature, and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components</p>
          <button className='btnone'>Read More..</button>
        </div>
      </main>
      <div className='home3' id='brands'>
        <div className="home3-inner">
          <h1>Brands</h1>
          <div className="Brands">
            <div className="innerbrands" style={{animationDelay:"0.25s"}}>
              <AiFillGoogleCircle className='icon'/>
              <p>Google</p>
            </div>
            <div className="innerbrands" style={{animationDelay:"0.5s"}}>
              <AiFillInstagram className='icon'/>
              <p>Instagram</p>
            </div>
            <div className="innerbrands" style={{animationDelay:"0.75s"}}>
              <AiFillAmazonCircle className='icon'/>
              <p>Amazon</p>
            </div>
            <div className="innerbrands" style={{animationDelay:"1s"}}>
              <SiFlipkart className='icon'/>
              <p>Flipkart</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home