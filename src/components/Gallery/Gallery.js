import axios from "axios";
import React, { Component } from "react";

class Gallery extends Component {
  state = {
    gallery: [],
  };

  componentDidMount() {
    axios
      .get("api/gallery.json")
      .then((res) => {
        this.setState({
          gallery: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { gallery } = this.state;
    // console.log(gallery);
    const galleryItems = gallery.map((photo) => {
      return (
        <div className="col-md-4" key={photo.id}>
          <div className="item-gallery">
            <img src={photo.img} className="img-fluid" alt="" />
          </div>
        </div>
      );
    });
    return (
      <section id="gallery" className="sec-gallery pb-5">
        <div className="row g-0">{galleryItems}</div>
      </section>
    );
  }
}

export default Gallery;
