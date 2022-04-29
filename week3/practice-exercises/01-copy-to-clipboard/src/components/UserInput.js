import React, { useContext } from "react";
import UserInputContext from "../context/UserInputContext";

const UserInput = () => {
  const { userInput, onChangeUserInput } = useContext(UserInputContext);
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => onChangeUserInput(e.target.value)}
      />
    </div>
  );
};

export default UserInput;
