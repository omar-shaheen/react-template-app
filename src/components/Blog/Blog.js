import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Navigation
} from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay,Navigation]);

class Blog extends Component {
  state = {
    blog: [],
  };

  componentDidMount() {
    axios
      .get("api/blogs.json")
      .then((res) => {
        this.setState({
          blog: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { blog } = this.state;
    const blogItems = blog.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <div className="item-news">
            <div className="img__news">
              <Link to="/">
                <img src={item.image} className="img-fluid" alt="Blog" />
                <i className="fas fa-external-link-alt fa-lg"></i>
              </Link>
            </div>
            <div className="inf__news">
              <strong className="date">{item.date}</strong>
              <Link to="/" className="d-block title__news mb-2 mt-2 lines-1">
                Our interior design prediction 2020
              </Link>
              <p className="desc__news lines-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                non.
              </p>
              <Link to="/" className="link__more">
                Read More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    return (
      <section id="blog" className="sec-blog overflow-hidden pb-5">
        <div className="container">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            // navigation={true}
            className="mySwiper"
          >
            {blogItems}
          </Swiper>
        </div>
      </section>
    );
  }
}

export default Blog;
