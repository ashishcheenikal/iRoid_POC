import React from "react";
import "./carousel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselData } from "../../../utils/HeaderBannerData";

function BannerCarousel() {
 
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
       
          {carouselData.length !== 0 &&
            carouselData.map((c_data, index) => {
              return (
                <div className="carouselCard" key={c_data.id}>
                  <div className="cardBG">
                    <img src={c_data.img} alt="Header Banner Carousel" />
                  </div>
                  <div className="cardTitileWrapper">
                    <div className="cardTitle">{c_data.title}</div>
                    <div className="cardBtn">Play Now</div>
                  </div>
                </div>
              );
            })}
      </Carousel>
    </>
  );
}

export default BannerCarousel;
