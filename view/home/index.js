import React, { useEffect, useMemo, useState } from "react";
const Home = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const squaredNum = () => {
    return squareNum(number);
  };
  const squareNum = (number) => {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  };
  return (
    <>
      <h4>useMemo Example</h4>
      {squaredNum()}
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter
      </button>
      <br />
      {counter}
    </>
  );
};
export default Home;
