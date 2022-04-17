import React from "react";
import { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const result = await data.json();
    setDogPhotos([...dogPhotos, result.message]);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {dogPhotos.length > 0 ? (
          dogPhotos.map((photo) => <DogPhoto key={photo} photo={photo} />)
        ) : (
          <h2>Get your first dog by clicking the button!</h2>
        )}
      </div>
      <Button getDogPhoto={getDogPhoto} />
    </div>
  );
};

export default DogGallery;
