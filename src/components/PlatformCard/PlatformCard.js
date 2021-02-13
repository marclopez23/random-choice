import React from "react";

const PlatformCard = ({ info: { logo, platform } }) => {
  return (
    <article>
      <div>
        <img src={logo} alt="" />
      </div>
      <h3>{platform}</h3>
    </article>
  );
};

export default PlatformCard;
