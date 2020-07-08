import React from 'react';
import './App.css';
import SideNavComponent from './components/SideNavComponent';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="row" style={{height:930}}>

      <SideNavComponent />
      <MainComponent />

    </div>
  );
}

export default App;
