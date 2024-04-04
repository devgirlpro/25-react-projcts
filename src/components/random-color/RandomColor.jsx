import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomNum = (length) => {
    return Math.floor(Math.random() * length);
  };

  const createRandomHexColorHandle = () => {
    const hexChars = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hexChars[randomNum(hexChars.length)];
    }
    console.log('hexColor', hexColor);
    setColor(hexColor);
  };

  const createRandomRgbColorHandle = () => {
    const red = randomNum(256);
    const green = randomNum(256);
    const blue = randomNum(256);

    console.log('rgbColor', `rgb(${red}, ${green}, ${blue})`);
    setColor(`rgb(${red}, ${green}, ${blue})`);
  };

  useEffect(() => {
    typeOfColor === 'rgb'
      ? createRandomRgbColorHandle()
      : createRandomHexColorHandle();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{ width: '100vw', height: '100vh', backgroundColor: color }}
    >
      <button onClick={() => setTypeOfColor('rgb')}> Create RGB color</button>

      <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>

      <button
        onClick={
          typeOfColor === 'hex'
            ? createRandomHexColorHandle
            : createRandomRgbColorHandle
        }
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
