import React from "react";
import "./style.scss";
import { footerData } from "../../utils/FooterData";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerNavigation">
        <div className="Category_ul">
          {footerData.length !== 0 &&
            footerData?.map((listData, index) => {
              return (
                <div className="Category_li" key={index}>
                  {
                    <ul>
                      {footerData.length !== 0 &&
                        Object.entries(listData).map((subDiv, index1) => {
                          return <li key={index1}>{subDiv}</li>;
                        })}
                    </ul>
                  }
                </div>
              );
            })}
        </div>
      </div>
      <hr />
      <div className="footerCopyRight_SocialMediaLink"></div>
    </div>
  );
}

export default Footer;
