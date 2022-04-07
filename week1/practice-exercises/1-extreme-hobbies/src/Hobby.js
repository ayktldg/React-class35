import React from "react";

const Hobby = ({ hobby, index }) => {
  return <p key={index}>{hobby}</p>;
};

export default Hobby;
