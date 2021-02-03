import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <div className="container">
        <Route exact path="/" component={Home} />
      </div>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
