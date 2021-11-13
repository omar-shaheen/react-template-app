import React from "react";
import "./style.css";

function AboutUs() {
  return (
    <section id="about" className="sec-about overflow-hidden">
      <div className="row">
        <div className="col-md-6">
          <div className="img-about wow fadeIn">
            <img src="imgs/about/1-about.jpg" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-txt wow fadeInRight">
            <h1 className="mb-3">Who Are We?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere autem odit error, ullam impedit inventore unde! Reiciendis voluptas necessitatibus quibusdam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quod dignissimos consectetur, quaerat et nam minima rerum quisquam corporis quis tenetur eveniet officiis? Facilis nemo error illum non sequi laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio harum magnam distinctio id, tempore quis maiores nihil fuga doloremque unde ipsam accusantium quibusdam! Explicabo possimus modi ipsam iure consequatur placeat exercitationem, facere doloribus quos amet ex corrupti ab eum itaque nobis eaque! Tempore voluptatum a soluta aut, amet saepe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
