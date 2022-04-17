import React, { useState, useEffect } from "react";
import Joke from "./Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const result = await data.json();
    setJoke(result);
  };

  return (
    <div>
      <Joke joke={joke} />
    </div>
  );
};

export default RandomJoke;
