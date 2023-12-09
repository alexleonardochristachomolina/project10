import React from 'react';
import Slider from 'react-slick';
import imgCarrusel1 from '../../assets/slider-img/imgSlider1.jpg';
import imgCarrusel2 from '../../assets/slider-img/imgSlider2.jpg';

function SliderHome() {
  const banners = [
    {
      id: 1,
      imgUrl: imgCarrusel1,
    },
    {
      id: 2,
      imgUrl: imgCarrusel2,
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section>
      <div id="qsCarrusel" className="max-w-[1440px] mx-auto my-0">
        <Slider {...settings}>
          {banners.map((item) => {
            return (
              <img
                className="sm:max-h-[380px] lg:max-h-[450px] min-[1380px]:max-h-[500px] object-cover cursor-pointer"
                src={item.imgUrl}
                key={item.id}
                width="100%"
                height="100%"
                alt=""
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
export default SliderHome;
