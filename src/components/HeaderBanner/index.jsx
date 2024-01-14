import React from "react";
import "./style.scss";
import LongArrow from "../../assets/LongArrow";
import BannerCarousel from "./Carousel/Carousel";
import HeaderBannerSVG from "../../assets/HeaderBannerSVG";

function HeaderBanner() {
  return (
    <>
      <div className="headerBannerSection">
        <HeaderBannerSVG width={10} height={10} top={48} right={211}/>
        <HeaderBannerSVG width={20} height={20} bottom={719} right={96}/>
        <HeaderBannerSVG width={8} height={8} top={430} right={250}/>
        <HeaderBannerSVG width={20} height={20} top={90} left={60}/>
        <HeaderBannerSVG width={8} height={8} top={360} left={250}/>
        <HeaderBannerSVG width={10} height={10} top={550} left={51}/>
        <div className="BannerTitle">
          <span className="heading1">
            Check out our portfolio to discover how we can make your product
            listings pop.
          </span>
          <span className="heading2">
            Like the content you see from our portfolio? Click the link below
            and fill out the contact form to receive a free, personalized demo.
          </span>
          <div className="contactUsBtn">
            CONTACT US
            <LongArrow />
          </div>
        </div>
        <div className="bannerCarousel">
          <BannerCarousel/>
        </div>
      </div>
    </>
  );
}

export default HeaderBanner;
