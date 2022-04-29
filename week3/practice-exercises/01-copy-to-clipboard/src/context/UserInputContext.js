import { createContext, useState } from "react";

const UserInputContext = createContext();

export const UserInputProvider = ({ children }) => {
  const [userInput, setUserInput] = useState("");

  const onChangeUserInput = (value) => {
    setUserInput(value);
  };

  return (
    <UserInputContext.Provider value={{ userInput, onChangeUserInput }}>
      {children}
    </UserInputContext.Provider>
  );
};

export default UserInputContext;
