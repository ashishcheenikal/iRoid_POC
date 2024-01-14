import React from "react";
import "./style.scss";
import { footerData } from "../../utils/FooterData";
import LinkedInSVG from "../../assets/LinkedInSVG";
import FB_SVG from "../../assets/FB_SVG";
import X_SVG from "../../assets/X_SVG";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerNavigation">
        <div className="Category_ul">
          {footerData.map((category, index) => (
            <div key={index} className="Category_li">
              {Object.entries(category).map(([title, items]) => (
                <div key={title} className="footer-section-list">
                  <h3>{title}</h3>
                  <ul>
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr/>
      <div className="footerCopyRight_SocialMediaLink">
        <div className="footerCopyRight">
        Copyright © 2021 Tulfa Inc. All rights reserved.
        </div>
        <div className="footerSocialMediaLinkWrapper">
          <div className="footerIcons">
            <LinkedInSVG/>
            <FB_SVG/>
            <X_SVG/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
