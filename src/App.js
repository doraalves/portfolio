import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
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
      </Routes>
      <Footer />
    </Router>
  ); 
}

export default App;
