import React, { useState } from "react";

const useErrorMessage = (message = "") => {
  const [errorMessage, setErrorMessage] = useState(message);
  setErrorMessage(message);
  return errorMessage;
};

export default useErrorMessage;
