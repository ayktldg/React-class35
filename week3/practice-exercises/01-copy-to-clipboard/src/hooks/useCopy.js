import React from "react";

export const useCopy = () => {
  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
  };
  return [handleCopy];
};
