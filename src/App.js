import React from 'react';
import './App.css';
import profilePicture from './images/pkd.jpg';

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <h2>Pasan Dewasurendra</h2>
      <img src={profilePicture} alt="avatar" />
    </div>
  );
}

export default App;
