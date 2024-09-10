import React, { useEffect, useState } from 'react';

const RandomColor = () => {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');

  const style = {
    width: '100vw',
    height: '100vh',
    background: color
  };

  const randomColorUtil = (length) => {
    return Math.floor(Math.random()*length);
  }

  const createRandomColor = () => {
    if(colorType.toLowerCase() === 'hex'){
      const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B', 'C', 'D', 'E', 'F'];
      let hexColor = '#';
      for (let i=0; i<6; i++){
        hexColor += hexValues[randomColorUtil(hexValues.length)]
      }
      // console.log(hexColor);
      setColor(hexColor);
    } else {
      const r = randomColorUtil(256);
      const g = randomColorUtil(256);
      const b = randomColorUtil(256);

      setColor(`rgb(${r},${g},${b})`);
    }
  }

  useEffect(() => {
    createRandomColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorType])

  return (
    <div style={style}>
      <button onClick={() => setColorType('hex')}>Create HEX color</button>
      <button onClick={() => setColorType('rgb')}>Create RGB color</button>
      <button onClick={createRandomColor}>Generate random color</button>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '60px',
        marginTop: '50px'
      }}>
        <h3>{colorType}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor;