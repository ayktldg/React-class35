import React from "react";
import Hobby from "./Hobby";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div>
      {hobbies.map((hobby, index) => (
        <Hobby hobby={hobby} index={index} />
      ))}
    </div>
  );
};

export default HobbyList;
