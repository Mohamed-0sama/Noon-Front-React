import React from 'react'
import Products from './Products'
import Categoryslider from './Categoryslider'
import Ads from './Ads'
import AdsCarousel from './AdsCarousel'
import RoundedCategories from './RoundedCategories'
function Home() {
  return (
    <div className="container-fluid bg-light">
      <Ads AdLink="https://k.nooncdn.com/cms/pages/20211107/a58fba95ad31a79fdd281a67d483dcb0/en_dk-toggle-01.png" />
      <AdsCarousel />
      <RoundedCategories/>
      <Categoryslider catName="electronics" />
      <Ads AdLink="https://k.nooncdn.com/cms/pages/20210815/d80fe7a9508be4ae391318d5b9883a97/en_banner-01.png"/>
      <Categoryslider catName="women's clothing" />
      <Ads AdLink="https://k.nooncdn.com/cms/pages/20211014/307ffbd9af477d80173ca1e9b98bd9e2/en_strip-01.gif"/>
        <Categoryslider catName="men's clothing"/>
      <Products />
    </div>
  )
}

export default Home
