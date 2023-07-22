import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

import kitchen from "../../Assets/kitchen.jpg";
import studio from "../../Assets/studio.jpeg";
import yard from "../../Assets/yard.jpg";
import bath from "../../Assets/bath.jpg";
import bedroom from "../../Assets/bedroom.jpg";
import apartment from "../../Assets/apartment.jpg";

import { Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";



function Cards() {
  return (
    <div className="cards">
      <h1>Featured Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <Swiper

            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}

            breakpoints={{
              800: {
                slidesPerView: 1,
              
              },
              1024: {
                slidesPerView: 3,

              },
              1200: {
                slidesPerView: 3,
              },
            }}

            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardItem
                src={kitchen}
                text="Kitchen renovation"
                alt="kitchen"
                path="/projects"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem
                src={studio}
                text="Studio renovation"
                alt="studio"
                path="/projects"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem
                src={yard}
                text="Backyard renovation"
                alt="yard"
                path="/projects"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem
                src={bath}
                text="Bathroom renovation"
                alt="bath"
                path="/projects"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem
                src={bedroom}
                text="Bedroom renovation"
                alt="bedroom"
                path="/projects"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem
                src={apartment}
                text="Apartment renovation"
                alt="apartment"
                path="/projects"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Cards;
