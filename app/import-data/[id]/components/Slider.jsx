'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CustomSlider({ items }) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <div className="p-3 md:me-5 rounded-xl bg-white shadow-xl border border-gray-200">
            <div className="p-3 rounded-lg bg-gray-50 min-h-[170px]">
              <div className="flex items-center gap-3">
                <img src={item.icons} className="size-14 mb-3" alt="" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">
                {item.name}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}