import './App.css';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import NewCard from './Component/NewCard';
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CardThunk } from './store/cardSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
          dispatch(CardThunk());
  }, []);
  return (
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path="/cards" element={<Card/>} />
        <Route path="/newcard" element={<NewCard/>} />
      </Routes>
     </Router>
  );
}

export default App;
