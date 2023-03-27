import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import NewCard from './Component/NewCard';
import { CardThunk } from './store/cardSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CardThunk());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/newcard" element={<NewCard />} />
      </Routes>
    </Router>
  );
}

export default App;
