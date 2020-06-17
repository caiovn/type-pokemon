import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles';
import Navbar from '../components/Navbar/index';
import Paths from '../utils/paths';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar paths={Paths} />
      </Router>
    </div>
  );
}

export default App;
