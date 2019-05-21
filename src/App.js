import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>;
      </Router>
    </div>
  );
}

export default App;
