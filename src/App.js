import React from 'react';
import Main from './components/MainComponent';
import { CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Main />

    </Router>
  );
}

export default App;
