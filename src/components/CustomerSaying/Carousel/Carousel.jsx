import React from "react";
import "./carousel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonialData } from "../../../utils/Testimonials";

function CustomerCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
      >
        {testimonialData.length !== 0 &&
          testimonialData.map((item, index) => (
            <div className="testimonialWrapper" key={item.id}>
              <div className="testmonialCard">
                <div className="cardImg">
                  <img
                    // src="TestimonialCarousel/ArunThomas.png"
                    src={item.imgSrc}
                    alt="TestimonialCarousel"
                  />
                </div>
                <div className="cardData">
                  <div className="cardName">{item.name}</div>
                  <div className="cardContent">
                  {item.testimonial}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
      ;
    </>
  );
}

export default CustomerCarousel;
