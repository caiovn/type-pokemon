import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles';

import Navbar from '../components/Navbar/index';
import MobileNavbar from '../components/MobileNavbar/index';

import Routes from '../utils/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes />
        <MobileNavbar />
      </Router>
    </div>
  );
}

export default App;
