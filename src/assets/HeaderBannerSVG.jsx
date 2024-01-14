import React from "react";

function HeaderBannerSVG({ width, height , right, bottom , top, left}) {
    const svgStyle = {
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
      };
    
  return (
    <svg
    style={svgStyle}
      width={ width }
      height={ height }
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.7273" cy="12.7274" r="1.81818" fill="white" />
      <circle cx="7.27277" cy="1.81818" r="1.81818" fill="white" />
      <circle cx="12.7273" cy="1.81818" r="1.81818" fill="white" />
      <circle cx="18.1818" cy="7.27302" r="1.81818" fill="white" />
      <circle cx="18.1818" cy="12.7274" r="1.81818" fill="white" />
      <circle cx="12.7273" cy="7.27302" r="1.81818" fill="white" />
      <circle cx="12.7273" cy="18.1815" r="1.81818" fill="white" />
      <circle cx="7.27277" cy="7.27302" r="1.81818" fill="white" />
      <circle cx="7.27277" cy="12.7274" r="1.81818" fill="white" />
      <circle cx="7.27277" cy="18.1815" r="1.81818" fill="white" />
      <circle cx="1.81818" cy="7.27302" r="1.81818" fill="white" />
      <circle cx="1.81818" cy="12.7274" r="1.81818" fill="white" />
    </svg>
  );
}

export default HeaderBannerSVG;
