import React, { useState, useEffect } from "react";
import Button from "./Button";
import Count from "./Count";

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  const isCountBelowZero = count <= 0 ? true : false;

  const addNum = (num) => {
    setCount(count + num);
  };
  const subtractNum = (num) => {
    if ((num === 2 && count === 1) || count <= 0) {
      setCount(0);
    } else {
      setCount(count - num);
    }
  };

  return (
    <div className="counter">
      <Count count={count} />
      <p className="feedback">{feedback}</p>
      <Button handleCount={() => addNum(1)} btnText={"Add 1!"} />
      <Button
        handleCount={() => subtractNum(1)}
        btnText={"Subtract 1!"}
        isCountBelowZero={isCountBelowZero}
      />
      <Button handleCount={() => addNum(2)} btnText={"Add 2!"} />
      <Button
        handleCount={() => subtractNum(2)}
        btnText={"Subtract 2!"}
        isCountBelowZero={isCountBelowZero}
      />
    </div>
  );
}

export default Counter;
