import React from "react";

const DogPhoto = ({ photo }) => {
  return (
    <div>
      <img
        style={{
          width: "280px",
          height: "300px",
        }}
        src={photo}
        alt={photo}
      />
    </div>
  );
};

export default DogPhoto;
