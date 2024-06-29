import React from 'react';
import Carosalitem from './Carosalitem';
import { topMeals } from './TopMeals';
import Slider from 'react-slick';

const MultipleitemCarosal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    authplayspeed:2000,
    arrows:false
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeals.map((item) => (
          <Carosalitem key={item.title} image={item.Image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultipleitemCarosal;
