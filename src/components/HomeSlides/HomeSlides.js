import "./style.css";
import React, { Component } from "react";
import axios from "axios";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation]);

class HomeSlides extends Component {
  state = {
    slides: [],
  };

  componentDidMount() {
    axios
      .get("api/slides.json")
      .then((res) => {
        const slides = res.data;
        this.setState({ slides });
      })
      .catch((error) => {
        console.log("Wrong 404");
      });
  }

  render() {
    const { slides } = this.state;
    const slidesItems = slides.map((slide) => {
      return (
        <SwiperSlide key={slide.id}>
          <div
            className="item-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="caption pt-5 container over-h text-center">
              <strong
                className="font-weight-bold d-block"
                data-animation-in="fadeInUp animate-300ms"
              >
                {slide.title}
              </strong>
              <p
                className="h4 d-block"
                data-animation-in="fadeInDown animate-500ms"
              >
                {slide.desc}
              </p>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <Swiper
        className="swiperHome"
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        loop={true}
        scrollbar={{ draggable: true }}
        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        {slidesItems}
      </Swiper>
    );
  }
}

export default HomeSlides;
