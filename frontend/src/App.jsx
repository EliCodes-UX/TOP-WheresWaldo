import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainCard from './components/MainCard';
import GamePlay from './components/GamePlay';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = 'https://top-whereswaldo-api.onrender.com';
  return (
    <Router>
      <div className='App'>
        <Header /> {/* Render the header outside of the router */}
        <Routes>
          <Route path='/' element={<MainCard />} />
          <Route path='/GamePlay' element={<GamePlay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
