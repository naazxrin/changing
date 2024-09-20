import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div className='container m-5 border rounder text-center p-5 bg-light rounded-5 '>
      <h1 className=' font-weight: 700'>Choose a Background Color!!!</h1>
        <button className='rounded-5 bg-danger' onClick={() => changeColor('red')} style={buttonStyle}>Red</button>
        <button className='rounded-5 bg-primary' onClick={() => changeColor('blue')} style={buttonStyle}>Blue</button>
        <button className='rounded-5 bg-success' onClick={() => changeColor('green')} style={buttonStyle}>Green</button>
        <button className='rounded-5 bg-warning' onClick={() => changeColor('yellow')} style={buttonStyle}>Yellow</button>
        <button className='rounded-5 bg-secondary' onClick={() => changeColor('grey')} style={buttonStyle}>grey</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '5px',
  cursor: 'pointer',
};

export default App;
