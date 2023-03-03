import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/mousewheel";

import { Mousewheel } from "swiper";

import "./carousel.scss";

export function Carousel() {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={12}
      mousewheel={true}
      modules={[Mousewheel]}
      className="w-full h-min"
    >
      {new Array(10).fill(0).map((_, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={`images/pic${(idx % 4) + 1}.jpg`}
            alt="picture"
            className="w-42 h-38 rounded-xl object-cover carousel-cell-box-shadow"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
