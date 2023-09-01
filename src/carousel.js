import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img from '../src/images/image.jpg'
import '../src/Styles/carousel.css'
import Footer from './Footer';
import ToggleSwitch from './toggle';
import Header from './Header';


function ImageCarousel() {
  return (
    <>
    <Header/>
      <div className='text'>
        Welcome,
      </div>
      <div className='text1'>
        Our thooni Fashion App
      </div>
      <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false}>
        <div className='carousel-item active'>

          <img src={img} />
        </div>
        <div className='carousel-item'>
          <img src={img} />
        </div>
        <div className='carousel-item'>
          <img src={img} />
        </div>
        </Carousel>
        <ToggleSwitch/>

        <Footer />
      </>

      );
}

      export default ImageCarousel;
