import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import EventCalendar from './components/EventCalendar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
      <EventCalendar />
      <Footer />
    </div>
  );
}



export default App;
