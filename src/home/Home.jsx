import React from 'react';
import Banner from './Banner';
import HomeCatagory from './HomeCatagory';
import ProductShow from './ProductShow';
import Register from './Register';
import Location from './Location';
import AboutUs from './AboutUs';
import AppSection from './AppSection';
import Sponsor from './Sponsor';

const Home = () => {
  return (
    <div>
       <Banner />
       <HomeCatagory />
       <ProductShow />
       <Register />
       <Location />
       <AboutUs />
       <AppSection />
       <Sponsor />
    </div>
  )
}

export default Home