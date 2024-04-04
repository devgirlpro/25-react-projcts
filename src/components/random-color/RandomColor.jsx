import React from 'react';
import { useState } from 'react';

const RandomColor = () => {
  const [bgColor, setBgColor] = useState();

  const randomNum = () => {
    return Math.floor(Math.random() * 256);
  };

  const generatrRandomColor = () => {
    const red = randomNum();
    const green = randomNum();
    const blue = randomNum();
    console.log(red, green, blue);
    return `rgb(${red}, ${green}, ${blue})`
  };

  const randomColorHandler = () => {
    setBgColor(generatrRandomColor())
  }

  return (
    <div
      className="container"
      style={{ width: "100vw", height: 400, margin: "auto",  backgroundColor: 'red', backgroundColor: bgColor}}
    >
      <button onClick={() => randomColorHandler()}>
        Generate Random Color
      </button>
    </div>
  );
};

export default RandomColor;
