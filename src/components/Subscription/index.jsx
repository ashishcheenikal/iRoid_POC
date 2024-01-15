import React from "react";
import SubscriptionBG from "../../assets/SubscriptionBG";
import "./style.scss";

function Subscription() {
  return (
    <div className="subscriptionWrapper">
      <SubscriptionBG />
      <div className="subTitleWrapper">
        <div className="subSectionTitle1">
          Subscribe to Solution Newsletters
        </div>
        <div className="subSectionTitle2">
          Subscribe to Solution Newsletters
        </div>
        <div className="subscriptionBtn">
          <span> SUSCRIBE</span>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
