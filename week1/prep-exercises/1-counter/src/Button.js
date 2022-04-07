import React from "react";

function Button({ handleCount, btnText, isCountBelowZero }) {
  return (
    <button
      className={`btn ${isCountBelowZero ? "btn-disabled" : ""}`}
      onClick={handleCount}
      disabled={isCountBelowZero}
    >
      {btnText}
    </button>
  );
}

export default Button;
