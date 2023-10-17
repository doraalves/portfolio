import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages';

// TODO: Animação de ondinha

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        {/* TODO: Main */}
        {/* TODO: Footer */}
      </Routes>
    </Router>
  ); 
}

export default App;
