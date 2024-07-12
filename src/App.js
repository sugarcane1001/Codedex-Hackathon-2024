// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Events from './pages/Events';
import Footer from './components/Footer';
import './App.css';
import ContactUs from './pages/ContuctUs';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
