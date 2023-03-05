import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/mousewheel";

import { Mousewheel } from "swiper";

import "./carousel.scss";
import { useGalleryPictures } from "../../store/gallery/hooks";

export function Carousel() {
  const { pictures } = useGalleryPictures();

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={12}
      mousewheel={true}
      modules={[Mousewheel]}
      className="w-full h-min"
    >
      {Object.values(pictures).map(pic => (
        <SwiperSlide key={pic.id}>
          <img
            src={pic.uri}
            alt="picture"
            className="w-42 h-38 rounded-xl object-cover carousel-cell-box-shadow"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
