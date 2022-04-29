import React from "react";
import UserInputContext from "../context/UserInputContext";
import { useContext } from "react";
import { useCopy } from "../hooks/useCopy";

const Button = () => {
  const { userInput } = useContext(UserInputContext);
  const [handleCopy] = useCopy();

  return (
    <div>
      <button onClick={() => handleCopy(userInput)}>Copy</button>
    </div>
  );
};

export default Button;
