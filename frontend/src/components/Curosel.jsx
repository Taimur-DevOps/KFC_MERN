import React from "react";
import "./Curosel.css";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Curosel = () => {
  return (
    <div className="">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={c1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c4} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Curosel;
