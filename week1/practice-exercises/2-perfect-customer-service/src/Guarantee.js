import React from "react";

const Guarantee = ({ img, title, description }) => {
  return (
    <div className="guarantee__card">
      <img src={img} alt={title} />
      <h3 className="guarantee__title">{title}</h3>
      <p className="guarantee__description">{description}</p>
    </div>
  );
};

export default Guarantee;
